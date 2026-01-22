import React from 'react';
import { ClassSession, SubjectType, BookType } from '../types';
import { getTeacherShortName } from '../utils';

interface ClassCardProps {
  session: ClassSession;
}

// Subject Styles
const getSubjectStyles = (type: SubjectType) => {
  switch (type) {
    case 'phy': return { 
      bg: 'bg-[#E1F5FE]', border: 'border-[#0288D1]', text: 'text-[#01579B]', 
      timeBg: 'bg-[#01579B]',
      pattern: { backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 5px, rgba(2,136,209,0.1) 5px, rgba(2,136,209,0.1) 10px)' } 
    };
    case 'chem': return { 
      bg: 'bg-[#FCE4EC]', border: 'border-[#C2185B]', text: 'text-[#880E4F]', 
      timeBg: 'bg-[#C2185B]',
      pattern: { backgroundImage: 'radial-gradient(#C2185B 1px, transparent 1px)', backgroundSize: '8px 8px', opacity: 0.3 } 
    };
    case 'life': return { 
      bg: 'bg-[#E8F5E9]', border: 'border-[#2E7D32]', text: 'text-[#1B5E20]', 
      timeBg: 'bg-[#2E7D32]',
      pattern: { backgroundImage: 'linear-gradient(rgba(46,125,50,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(46,125,50,0.15) 1px, transparent 1px)', backgroundSize: '12px 12px' }
    };
    case 'earth': return { 
      bg: 'bg-[#FFF3E0]', border: 'border-[#E65100]', text: 'text-[#BF360C]', 
      timeBg: 'bg-[#E65100]',
      pattern: { backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 5px, rgba(230,81,0,0.1) 5px, rgba(230,81,0,0.1) 10px)' }
    };
    case 'integ': return { 
      bg: 'bg-[#F3E5F5]', border: 'border-[#7B1FA2]', text: 'text-[#4A148C]', 
      timeBg: 'bg-[#7B1FA2]',
      pattern: { backgroundImage: 'radial-gradient(circle, rgba(123,31,162,0.2) 2px, transparent 2.5px)', backgroundSize: '10px 10px' } 
    };
    case 'mid': return { 
      bg: 'bg-[#FFF9C4]', border: 'border-black', text: 'text-black', 
      timeBg: 'bg-black',
      pattern: { backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(0,0,0,0.08) 10px, rgba(0,0,0,0.08) 12px)' } 
    };
    case 'career': return { 
      bg: 'bg-[#E8EAF6]', border: 'border-[#1A237E]', text: 'text-[#1A237E]', 
      timeBg: 'bg-[#1A237E]',
      pattern: { backgroundImage: 'linear-gradient(135deg, rgba(26,35,126,0.1) 25%, transparent 25%), linear-gradient(225deg, rgba(26,35,126,0.1) 25%, transparent 25%)', backgroundSize: '10px 10px' } 
    };
    default: return { bg: 'bg-white', border: 'border-gray-800', text: 'text-gray-900', timeBg: 'bg-gray-800', pattern: {} };
  }
};

// Book Styles
const getBookVisuals = (book: BookType, desc: string) => {
  if (book === 'A') {
    return (
      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#D50000] border-[3px] border-white shadow-md text-white font-black text-lg z-10 shrink-0">
        A
      </div>
    );
  } else if (book === 'B') {
    return (
      <div className="flex items-center justify-center w-8 h-8 bg-[#2962FF] border-[3px] border-white shadow-md text-white font-black text-lg z-10 shrink-0 transform rotate-6">
        B
      </div>
    );
  } else if (desc.includes('문풀')) {
    return (
      <div className="flex items-center justify-center px-2 py-1 bg-slate-900 text-white font-black text-sm rounded shadow-md shrink-0 border-2 border-white min-w-max">
        문풀
      </div>
    );
  } else if (desc.includes('입시')) {
    return (
       <div className="flex items-center justify-center px-2 py-1 bg-violet-800 text-white font-black text-sm rounded shadow-md shrink-0 border-2 border-white min-w-max">
        입시
      </div>
    );
  }
  return null;
};

// Teacher Styles
const getTeacherStyle = (name: string) => {
  const short = getTeacherShortName(name);
  const common = "border-2 border-white shadow-md shrink-0"; // Added shrink-0
  if (name.includes('달돌')) return { short, container: `bg-[#304FFE] rounded-full ${common}`, text: 'text-white' };
  if (name.includes('산하')) return { short, container: `bg-[#00C853] rounded-lg transform rotate-3 ${common}`, text: 'text-white' }; 
  if (name.includes('지수')) return { short, container: `bg-[#D500F9] rounded-xl ${common}`, text: 'text-white' };
  if (name.includes('예림')) return { short, container: `bg-[#FF6D00] rounded-[35%] ${common}`, text: 'text-white' };
  if (name.includes('기현') || name.includes('규현')) return { short, container: `bg-[#0091EA] rounded-tl-xl rounded-br-xl ${common}`, text: 'text-white' };
  if (name.includes('준영') || name.includes('주영')) return { short, container: `bg-[#6200EA] rounded-t-xl ${common}`, text: 'text-white' };
  return { short, container: `bg-slate-700 rounded ${common}`, text: 'text-white' };
};

const ClassCard: React.FC<ClassCardProps> = ({ session }) => {
  const styles = getSubjectStyles(session.subjectType);
  const teacherStyle = getTeacherStyle(session.teacher);
  const isInchang = session.branch === 'inchang';
  const bookVisual = getBookVisuals(session.book, session.description);

  return (
    <div 
      className={`
        w-full h-full
        flex flex-col
        ${styles.bg} border-[4px] ${styles.border}
        rounded-xl
        shadow-md transition-all
        overflow-hidden relative
      `}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-100 pointer-events-none" style={styles.pattern}></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full p-2.5 gap-2">
        
        {/* ROW 1: Time Capsule & Branch */}
        <div className="flex justify-between items-center gap-1">
           {/* Time Capsule */}
           <div className={`
             flex items-center justify-center px-4 py-1.5 rounded-full shadow-md border-2 border-white shrink-0
             ${styles.timeBg}
           `}>
              <span className="text-white text-[16px] font-black leading-none tracking-tight whitespace-nowrap">
                {session.startTime} ~ {session.endTime}
              </span>
           </div>

           {/* Branch Icon - shrink-0 critical to prevent clipping */}
           <div className="bg-white/95 p-1.5 rounded-full border-2 border-black/10 shadow-md shrink-0">
              {isInchang 
                ? <i className="fa-solid fa-clover text-[#00E676] text-2xl drop-shadow-sm stroke-black"></i>
                : <i className="fa-solid fa-star text-[#FFD600] text-2xl drop-shadow-sm stroke-black"></i>
              }
           </div>
        </div>

        {/* ROW 2: Subject & Book Type - CHANGED LAYOUT to allow wrapping/stacking */}
        {/* Using flex-col to stack Badge and Title vertically if needed, but with wide width they might just sit naturally. 
            User request: "A [newline] Subject" if space is tight.
            To guarantee NO truncation, I will use flex-col items-start.
        */}
        <div className="flex flex-col items-start gap-1 mt-0 bg-white/80 p-2 rounded-xl backdrop-blur-sm border border-black/5 shadow-sm min-h-min">
          <div className="shrink-0">{bookVisual}</div>
          <div className="flex flex-col leading-none w-full">
             {/* break-keep ensures Korean words don't split in middle. whitespace-normal allows wrapping. */}
             <span className={`text-[24px] font-black tracking-tighter whitespace-normal break-keep leading-tight ${styles.text}`}>
               {session.subject}
             </span>
             {session.description && session.book === 'None' && (
                <span className="text-[14px] font-bold text-slate-600 mt-1 whitespace-normal break-keep">
                  {session.description}
                </span>
             )}
          </div>
        </div>

        {/* ROW 3: Student List (Expanded Area) */}
        <div className="flex-1 bg-white/60 rounded-xl border border-black/5 p-2 overflow-hidden mt-0">
           <div className="flex flex-wrap gap-x-1 gap-y-1.5 content-start">
             {session.students.length > 0 ? (
               session.students.map((studentStr, idx) => {
                 const [name, clinic] = studentStr.split('\n');
                 return (
                   <div key={idx} className="flex flex-col items-center justify-center bg-black/5 rounded-md px-1.5 py-0.5 border border-black/5">
                     <span className="text-[16px] font-bold text-black leading-tight whitespace-nowrap">
                       {name}
                     </span>
                     {clinic && (
                       <span className="text-[12px] font-bold text-red-600 leading-none whitespace-nowrap mt-0.5">
                         {clinic}
                       </span>
                     )}
                   </div>
                 );
               })
             ) : (
               <span className="text-[13px] text-slate-400 font-medium pl-1">-</span>
             )}
           </div>
        </div>

        {/* ROW 4: Teacher Badge (Large Shape) */}
        <div className="flex-shrink-0 flex justify-end mt-auto pt-1">
          <div className={`
            w-12 h-12 flex items-center justify-center shrink-0
            ${teacherStyle.container}
          `}>
             <span className={`text-[24px] font-black ${teacherStyle.text}`}>
               {teacherStyle.short}
             </span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ClassCard;
