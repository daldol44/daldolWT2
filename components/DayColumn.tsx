import React, { useMemo } from 'react';
import { ClassSession, DayOfWeek, Branch } from '../types';
import ClassCard from './ClassCard';
import { calculateLayout, HOURS, PIXELS_PER_HOUR } from '../utils';

interface DayColumnProps {
  day: DayOfWeek;
  data: ClassSession[];
  filterBranch: 'all' | Branch;
  filterTeacher: string;
  searchTerm: string;
}

const DayColumn: React.FC<DayColumnProps> = ({ day, data, filterBranch, filterTeacher, searchTerm }) => {
  // 1. Filter Data
  const filteredData = useMemo(() => {
    return data.filter(d => 
      d.day === day &&
      (filterBranch === 'all' || d.branch === filterBranch) &&
      (filterTeacher === 'all' || d.teacher === filterTeacher) &&
      (searchTerm === '' || 
       d.subject.includes(searchTerm) || 
       d.description.includes(searchTerm) ||
       d.students.some(s => s.includes(searchTerm)))
    );
  }, [day, data, filterBranch, filterTeacher, searchTerm]);

  // 2. Calculate Layout (Positions)
  const layoutEvents = useMemo(() => calculateLayout(filteredData), [filteredData]);

  // 3. Grid Background Lines
  const totalHeight = (HOURS.length) * PIXELS_PER_HOUR; // Covers range

  return (
    <div className="relative w-full h-full min-w-[160px] bg-white border-r-2 border-slate-800">
      
      {/* Background Grid Lines */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {HOURS.map((hour, index) => (
          <React.Fragment key={hour}>
            {/* Hour Line (Solid) */}
            <div 
              className="absolute w-full border-t-2 border-slate-300"
              style={{ top: `${index * PIXELS_PER_HOUR}px` }}
            ></div>
            {/* 30-min Line (Dotted) */}
            <div 
              className="absolute w-full border-t border-dotted border-slate-300"
              style={{ top: `${index * PIXELS_PER_HOUR + (PIXELS_PER_HOUR/2)}px` }}
            ></div>
          </React.Fragment>
        ))}
      </div>

      {/* Events Layer */}
      <div className="absolute inset-0 z-10 w-full h-full">
        {layoutEvents.map((event) => (
          <div
            key={event.id}
            className="absolute px-0.5 py-0.5 transition-all hover:z-50 hover:scale-[1.02]"
            style={{
              top: `${event.top}px`,
              height: `${event.height}px`,
              left: `${event.left}%`,
              width: `${event.width}%`,
            }}
          >
            <ClassCard session={event} />
          </div>
        ))}
      </div>

      {/* Maintain height */}
      <div style={{ height: `${totalHeight}px` }}></div>
    </div>
  );
};

export default DayColumn;
