import React, { useState, useMemo } from 'react';
import { Branch } from './types';
import { RAW_DATA } from './data';
import DayColumn from './components/DayColumn';
import { HOURS, PIXELS_PER_HOUR } from './utils';

const App: React.FC = () => {
  const [filterBranch, setFilterBranch] = useState<'all' | Branch>('all');
  const [filterTeacher, setFilterTeacher] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const teachers = useMemo(() => {
    const t = new Set(RAW_DATA.map(d => d.teacher));
    return Array.from(t).sort();
  }, []);

  const dayHeaders = [
    { key: 'mon', label: '1/5', sub: '월요일' },
    { key: 'tue', label: '1/6', sub: '화요일' },
    { key: 'wed', label: '1/7', sub: '수요일' },
    { key: 'thu', label: '1/8', sub: '목요일' },
    { key: 'fri', label: '1/9', sub: '금요일' },
    { key: 'sat', label: '1/10', sub: '토요일' },
    { key: 'sun', label: '1/11', sub: '일요일' },
  ] as const;

  // Render Time Axis (Left) - matching DayColumn grid exactly
  const TimeAxis = () => (
    <div className="flex flex-col text-center bg-white border-r-4 border-slate-900 z-30 w-[150px] shrink-0 sticky left-0 shadow-lg">
      <div className="h-[70px] bg-slate-900 border-b-2 border-slate-800 sticky top-0 z-50"></div> {/* Header spacer */}
      <div className="relative" style={{ height: `${HOURS.length * PIXELS_PER_HOUR}px` }}>
        {HOURS.map((h, i) => (
          <div 
            key={h} 
            className="absolute w-full flex flex-col items-center justify-start"
            style={{ 
              top: `${i * PIXELS_PER_HOUR}px`, 
              height: `${PIXELS_PER_HOUR}px` 
            }}
          >
            {/* Hour Label - Larger */}
            <div className="bg-slate-800 text-white font-black px-4 py-2 rounded-r-xl text-3xl -mt-7 z-10 shadow-md">
              {h}시
            </div>
            {/* 30m Label */}
            <div className="text-lg font-bold text-slate-500 absolute top-1/2 -mt-3.5 bg-slate-100 px-3 rounded-md border-2 border-slate-300">
              30분
            </div>
            
            {/* Tick Marks aligned with grid */}
            <div className="absolute top-0 right-0 w-8 h-2 bg-slate-900"></div>
            <div className="absolute top-1/2 right-0 w-4 h-1 bg-slate-400"></div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-200 font-sans text-slate-900 print:bg-white">
      
      {/* CONTROLS HEADER */}
      <div className="bg-white border-b-4 border-slate-900 p-6 print:hidden">
        <div className="max-w-[7000px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
           {/* Logo & Title */}
           <div className="flex items-center gap-6">
             <div className="w-24 h-24 bg-blue-600 flex items-center justify-center text-white font-black text-6xl rounded-2xl shadow-lg border-4 border-black transform -rotate-2">
                <i className="fa-solid fa-calendar-days"></i>
             </div>
             <div>
                <h1 className="text-6xl font-black text-slate-900 tracking-tighter">
                  2026 겨울방학 특강 통합 시간표
                </h1>
                <p className="text-2xl font-bold text-slate-500 tracking-widest mt-2">달돌 과학 학원 (인창/다산)</p>
             </div>
           </div>

           {/* Filters */}
           <div className="flex flex-wrap items-center gap-4">
              <div className="flex bg-slate-100 p-2 rounded-xl border-2 border-slate-300">
                <button onClick={() => setFilterBranch('all')} className={`px-6 py-3 text-lg font-black rounded-lg uppercase transition-colors ${filterBranch === 'all' ? 'bg-slate-800 text-white shadow-md' : 'text-slate-500 hover:bg-slate-200'}`}>전체</button>
                <button onClick={() => setFilterBranch('inchang')} className={`px-6 py-3 text-lg font-black rounded-lg uppercase transition-colors ${filterBranch === 'inchang' ? 'bg-[#16a34a] text-white shadow-md' : 'text-slate-500 hover:bg-slate-200'}`}>인창관</button>
                <button onClick={() => setFilterBranch('dasan')} className={`px-6 py-3 text-lg font-black rounded-lg uppercase transition-colors ${filterBranch === 'dasan' ? 'bg-[#f59e0b] text-white shadow-md' : 'text-slate-500 hover:bg-slate-200'}`}>다산관</button>
              </div>

              <select 
                 className="bg-white border-2 border-slate-300 text-lg font-bold rounded-xl px-5 py-3.5 focus:ring-4 focus:ring-black/20 focus:border-black shadow-sm outline-none"
                 value={filterTeacher}
                 onChange={(e) => setFilterTeacher(e.target.value)}
              >
                <option value="all">강사 선택 (전체)</option>
                {teachers.map(t => <option key={t} value={t}>{t} 선생님</option>)}
              </select>

              <div className="relative">
                <input 
                  type="text" 
                  placeholder="수업/학생 검색..." 
                  className="pl-5 pr-5 py-3.5 border-2 border-slate-300 rounded-xl text-lg font-bold w-80 focus:ring-4 focus:ring-black/20 focus:border-black focus:outline-none uppercase shadow-inner"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
           </div>
        </div>
      </div>

      {/* MAIN TIMETABLE GRID */}
      <div className="w-full overflow-auto bg-slate-100 pb-20">
        <div className="flex min-w-[7000px] relative shadow-[0_0_50px_rgba(0,0,0,0.1)] border-b-4 border-slate-900 mx-auto bg-white">
          
          {/* Left Axis */}
          <TimeAxis />

          {/* Day Columns */}
          <div className="flex-1 flex divide-x-2 divide-slate-800 border-r-4 border-slate-800 bg-white">
             {dayHeaders.map(day => (
               <div key={day.key} className="flex-1 min-w-[1000px] flex flex-col">
                  {/* Column Header */}
                  <div className={`
                    sticky top-0 z-[60] h-[70px] 
                    flex flex-col items-center justify-center
                    bg-slate-900 border-b-4 border-slate-800
                    text-white shadow-md
                    print:static print:border-b
                  `}>
                    <div className="flex items-baseline gap-3">
                      <span className="text-4xl font-black leading-none">{day.sub}</span>
                      <span className="text-xl font-bold opacity-70 tracking-widest">{day.label}</span>
                    </div>
                  </div>

                  {/* Column Content */}
                  <DayColumn 
                     day={day.key} 
                     data={RAW_DATA} 
                     filterBranch={filterBranch} 
                     filterTeacher={filterTeacher} 
                     searchTerm={searchTerm} 
                  />
               </div>
             ))}
          </div>
        </div>
      </div>
      
      {/* FOOTER LEGEND */}
      <div className="bg-white border-t-4 border-slate-900 p-10 print:hidden">
         <div className="max-w-[7000px] mx-auto flex flex-wrap gap-12 justify-center">
            
            <div className="flex gap-6 items-center p-6 bg-slate-50 rounded-2xl border-2 border-slate-200 shadow-md hover:shadow-lg transition-shadow">
               <span className="font-black text-2xl bg-slate-900 text-white px-5 py-2 transform -skew-x-12 shadow-sm rounded-sm">과목 구분</span>
               <div className="flex gap-8">
                 <div className="flex items-center gap-3 text-lg font-bold text-slate-700"><span className="w-10 h-10 bg-[#E1F5FE] border-2 border-[#0288D1] rounded-lg shadow-sm"></span>물리</div>
                 <div className="flex items-center gap-3 text-lg font-bold text-slate-700"><span className="w-10 h-10 bg-[#FCE4EC] border-2 border-[#C2185B] rounded-lg shadow-sm"></span>화학</div>
                 <div className="flex items-center gap-3 text-lg font-bold text-slate-700"><span className="w-10 h-10 bg-[#E8F5E9] border-2 border-[#2E7D32] rounded-lg shadow-sm"></span>생명</div>
                 <div className="flex items-center gap-3 text-lg font-bold text-slate-700"><span className="w-10 h-10 bg-[#FFF3E0] border-2 border-[#E65100] rounded-lg shadow-sm"></span>지학</div>
                 <div className="flex items-center gap-3 text-lg font-bold text-slate-700"><span className="w-10 h-10 bg-[#F3E5F5] border-2 border-[#7B1FA2] rounded-lg shadow-sm"></span>통합</div>
               </div>
            </div>

            <div className="flex gap-6 items-center p-6 bg-slate-50 rounded-2xl border-2 border-slate-200 shadow-md hover:shadow-lg transition-shadow">
               <span className="font-black text-2xl bg-slate-900 text-white px-5 py-2 transform -skew-x-12 shadow-sm rounded-sm">강의실(관)</span>
               <div className="flex gap-8">
                  <div className="flex items-center gap-3 text-lg font-bold text-slate-700"><i className="fa-solid fa-clover text-[#16a34a] text-3xl drop-shadow-sm"></i> 인창관</div>
                  <div className="flex items-center gap-3 text-lg font-bold text-slate-700"><i className="fa-solid fa-star text-[#f59e0b] text-3xl drop-shadow-sm"></i> 다산관</div>
               </div>
            </div>

         </div>
      </div>

    </div>
  );
};

export default App;