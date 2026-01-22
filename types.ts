export type Branch = 'inchang' | 'dasan';
export type DayOfWeek = 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun';
export type SubjectType = 'phy' | 'chem' | 'life' | 'earth' | 'integ' | 'mid' | 'career';
export type BookType = 'A' | 'B' | 'None';

export interface ClassSession {
  id: string;
  day: DayOfWeek;
  startTime: string; // "HH:MM"
  endTime: string;   // "HH:MM"
  branch: Branch;
  subject: string;
  description: string;
  subjectType: SubjectType;
  book: BookType;
  teacher: string;
  students: string[];
}
