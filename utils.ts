import { ClassSession } from './types';

export const START_HOUR = 9;
export const END_HOUR = 23;
export const HOURS = Array.from({ length: END_HOUR - START_HOUR + 1 }, (_, i) => START_HOUR + i);

// Significantly increased height for readability (was 160)
export const PIXELS_PER_HOUR = 240; 
export const PIXELS_PER_MINUTE = PIXELS_PER_HOUR / 60;

// Convert "HH:MM" string to minutes from START_HOUR (9:00)
export const getMinutesFromStart = (time: string): number => {
  const [h, m] = time.split(':').map(Number);
  return (h - START_HOUR) * 60 + m;
};

export const getHour = (time: string): number => {
  const [h] = time.split(':').map(Number);
  return h;
};

// Calculate duration in minutes
export const getDurationMinutes = (start: string, end: string): number => {
  const startM = getMinutesFromStart(start);
  const endM = getMinutesFromStart(end);
  return endM - startM;
};

export const getTeacherShortName = (name: string): string => {
  if (!name) return '';
  return name.charAt(0);
};

// Layout Algorithm for overlapping events
export interface LayoutEvent extends ClassSession {
  top: number;
  height: number;
  left: number;
  width: number;
  colIndex: number;
}

export const calculateLayout = (events: ClassSession[]): LayoutEvent[] => {
  // 1. Sort by start time, then duration (desc)
  const sorted = [...events].sort((a, b) => {
    const startA = getMinutesFromStart(a.startTime);
    const startB = getMinutesFromStart(b.startTime);
    if (startA !== startB) return startA - startB;
    return getDurationMinutes(b.startTime, b.endTime) - getDurationMinutes(a.startTime, a.endTime);
  });

  // 2. Assign horizontal slots
  // Simple column packing: if overlap, increment column index
  const columns: LayoutEvent[][] = [];
  const result: LayoutEvent[] = [];

  sorted.forEach(ev => {
    const top = getMinutesFromStart(ev.startTime) * PIXELS_PER_MINUTE;
    const height = getDurationMinutes(ev.startTime, ev.endTime) * PIXELS_PER_MINUTE;
    
    // Find first column where this event doesn't overlap with existing last event
    let colIndex = 0;
    while (true) {
      if (!columns[colIndex]) {
        columns[colIndex] = [];
        break;
      }
      // Check overlap with the last few events in this column
      // Optimization: Only check events that could possibly overlap (end time > current start time)
      const hasOverlap = columns[colIndex].some(placed => {
        const placedEnd = placed.top + placed.height;
        return placedEnd > top; // If existing event ends after this one starts
      });

      if (!hasOverlap) break;
      colIndex++;
    }

    const layoutEvent = { ...ev, top, height, left: 0, width: 0, colIndex };
    columns[colIndex].push(layoutEvent);
    result.push(layoutEvent);
  });

  // 3. Group concurrent events to determine widths
  // If an event is in col 0, but there's a concurrent event in col 1, col 0 needs to shrink.
  // This is a complex packing problem. We'll use a simplified approach:
  // For each event, look at concurrent events across all columns. 
  // Max overlap count determines width.
  
  result.forEach(ev => {
    // Find all events that overlap with this one
    const overlapping = result.filter(other => 
      other.id !== ev.id && 
      !(other.top >= ev.top + ev.height || other.top + other.height <= ev.top)
    );
    
    // Determine the max column index involved in this overlap group
    let maxCol = ev.colIndex;
    overlapping.forEach(o => maxCol = Math.max(maxCol, o.colIndex));
    
    // Total columns for this specific time slice
    const totalCols = maxCol + 1;
    
    ev.width = 100 / totalCols;
    ev.left = ev.colIndex * ev.width;
  });

  return result;
};
