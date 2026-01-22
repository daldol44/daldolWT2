import React from 'react';
import { ClassSession } from '../types';
import ClassCard from './ClassCard';

interface TimeSlotProps {
  hour: number;
  data: ClassSession[];
}

const TimeSlot: React.FC<TimeSlotProps> = ({ hour, data }) => {
  // We assume a base height logic for visual alignment. 
  // 30 minutes roughly corresponds to half the slot visually if content allows.
  
  return (
    <div className={`
      relative w-full min-h-[140px]
      border-b-2 border-slate-800 
      flex flex-col
      bg-white
    `}>
      {/* 30-minute Guide Line (Dotted, distinct) */}
      <div className="absolute top-1/2 left-0 w-full h-px border-t border-dotted border-slate-300 z-0"></div>

      {/* Content Area */}
      <div className="flex-1 flex flex-row items-stretch gap-1.5 p-1 z-10">
        {data.length > 0 ? (
          data.map((session) => {
            const isHalfHour = session.startTime.endsWith(':30');
            return (
              <div 
                key={session.id} 
                className={`flex-1 flex flex-col ${isHalfHour ? 'pt-[70px]' : ''}`}
              >
                <ClassCard session={session} />
              </div>
            );
          })
        ) : (
          <div className="w-full h-full"></div>
        )}
      </div>
    </div>
  );
};

export default TimeSlot;
