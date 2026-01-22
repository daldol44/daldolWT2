import { ClassSession } from './types';

// Extracted from Pages 1-121 of the PDF materials provided.
// + CLINIC DATA extracted from New PDF Pages 1-2.
// Format: Student Name + \n + (Clinic Time) - "클:" prefix removed as per user request.
export const RAW_DATA: ClassSession[] = [
  // ================= INCHANG BRANCH (인창관) =================

  // [P1] Mon 16:00 - Mid3 8A
  { id: 'i-1', day: 'mon', startTime: '16:00', endTime: '17:30', branch: 'inchang', subject: '중3', description: '8주A', subjectType: 'mid', book: 'A', teacher: '달돌', students: ['임하윤\n(수3-6)'] },
  // [P2] Mon 17:30 - Mid3 8B
  { id: 'i-2', day: 'mon', startTime: '17:30', endTime: '19:00', branch: 'inchang', subject: '중3', description: '8주B', subjectType: 'mid', book: 'B', teacher: '달돌', students: ['임하윤\n(수3-6)'] },
  
  // [P3] Tue 11:30 - Mid3 8A
  { id: 'i-3', day: 'tue', startTime: '11:30', endTime: '13:00', branch: 'inchang', subject: '중3', description: '8주A', subjectType: 'mid', book: 'A', teacher: '달돌', students: ['방지율', '윤성민\n(금11-1)', '이서혜'] },
  // [P4] Tue 13:00 - Mid3 8B
  { id: 'i-4', day: 'tue', startTime: '13:00', endTime: '14:30', branch: 'inchang', subject: '중3', description: '8주B', subjectType: 'mid', book: 'B', teacher: '달돌', students: ['방지율', '윤성민\n(금11-1)', '이서혜'] },
  
  // [P5] Tue 19:00 - Mid1 8A
  { id: 'i-5', day: 'tue', startTime: '19:00', endTime: '20:30', branch: 'inchang', subject: '중1', description: '8주A', subjectType: 'mid', book: 'A', teacher: '준영', students: ['이지혁'] },
  // [P6] Tue 20:30 - Mid1 8B
  { id: 'i-6', day: 'tue', startTime: '20:30', endTime: '22:00', branch: 'inchang', subject: '중1', description: '8주B', subjectType: 'mid', book: 'B', teacher: '지수', students: ['이지혁'] },

  // [P7] Fri 18:30 - Mid3 8A
  { id: 'i-7', day: 'fri', startTime: '18:30', endTime: '20:00', branch: 'inchang', subject: '중3', description: '8주A', subjectType: 'mid', book: 'A', teacher: '달돌', students: ['구하린\n(수5-7)'] },
  // [P8] Fri 20:00 - Mid3 8B
  { id: 'i-8', day: 'fri', startTime: '20:00', endTime: '21:30', branch: 'inchang', subject: '중3', description: '8주B', subjectType: 'mid', book: 'B', teacher: '달돌', students: ['구하린\n(수5-7)'] },

  // [P9] Fri 20:00 - Mid2 8A
  { id: 'i-9', day: 'fri', startTime: '20:00', endTime: '21:30', branch: 'inchang', subject: '중2', description: '8주A', subjectType: 'mid', book: 'A', teacher: '달돌', students: ['박준서'] },
  // [P10] Fri 21:30 - Mid2 8B
  { id: 'i-10', day: 'fri', startTime: '21:30', endTime: '23:00', branch: 'inchang', subject: '중2', description: '8주B', subjectType: 'mid', book: 'B', teacher: '규현', students: ['박준서'] },

  // [P11] Sat 17:30 - Mid3 8A
  { id: 'i-11', day: 'sat', startTime: '17:30', endTime: '19:00', branch: 'inchang', subject: '중3', description: '8주A', subjectType: 'mid', book: 'A', teacher: '지수', students: ['강승현'] },
  // [P12] Sat 19:00 - Mid3 8B
  { id: 'i-12', day: 'sat', startTime: '19:00', endTime: '20:30', branch: 'inchang', subject: '중3', description: '8주B', subjectType: 'mid', book: 'B', teacher: '달돌', students: ['강승현'] },

  // [P13] Sun 14:00 - Mid3 8A
  { id: 'i-13', day: 'sun', startTime: '14:00', endTime: '15:30', branch: 'inchang', subject: '중3', description: '8주A', subjectType: 'mid', book: 'A', teacher: '규현', students: ['강두의', '김지수'] },
  // [P14] Sun 15:30 - Mid3 8B
  { id: 'i-14', day: 'sun', startTime: '15:30', endTime: '17:00', branch: 'inchang', subject: '중3', description: '8주B', subjectType: 'mid', book: 'B', teacher: '규현', students: ['강두의', '김지수'] },

  // [P15] Mon 10:30 - Life1 8A
  { id: 'i-15', day: 'mon', startTime: '10:30', endTime: '12:00', branch: 'inchang', subject: '생명1', description: '8주A', subjectType: 'life', book: 'A', teacher: '달돌', students: ['김찬율\n(일4-8)', '임지윤\n(금2-4)'] },
  // [P16] Mon 12:00 - Life1 8B
  { id: 'i-16', day: 'mon', startTime: '12:00', endTime: '13:30', branch: 'inchang', subject: '생명1', description: '8주B', subjectType: 'life', book: 'B', teacher: '지수', students: ['김찬율\n(일4-8)', '임지윤\n(금2-4)'] },

  // [P17] Tue 14:00 - Integ 8A
  { id: 'i-17', day: 'tue', startTime: '14:00', endTime: '15:30', branch: 'inchang', subject: '통합', description: '8주A', subjectType: 'integ', book: 'A', teacher: '지수', students: ['김효린\n(토11-1)'] },
  // [P18] Tue 15:30 - Integ 8B
  { id: 'i-18', day: 'tue', startTime: '15:30', endTime: '17:00', branch: 'inchang', subject: '통합', description: '8주B', subjectType: 'integ', book: 'B', teacher: '지수', students: ['김효린\n(토11-1)'] },

  // [P19] Tue 16:00 - Chem1 8B
  { id: 'i-19', day: 'tue', startTime: '16:00', endTime: '17:30', branch: 'inchang', subject: '화학1', description: '8주B', subjectType: 'chem', book: 'B', teacher: '지수', students: ['김찬율\n(일4-8)', '이재영\n(화2-4/일11-12:30/3:30-4)', '정율하\n(화7-9/일3:30-5:30)'] },
  // [P20] Tue 17:30 - Chem1 8A
  { id: 'i-20', day: 'tue', startTime: '17:30', endTime: '19:00', branch: 'inchang', subject: '화학1', description: '8주A', subjectType: 'chem', book: 'A', teacher: '달돌', students: ['김찬율\n(일4-8)', '이재영\n(화2-4/일11-12:30/3:30-4)', '정율하\n(화7-9/일3:30-5:30)'] },

  // [P21] Sat 12:30 - Chem1 8A
  { id: 'i-21', day: 'sat', startTime: '12:30', endTime: '14:00', branch: 'inchang', subject: '화학1', description: '8주A', subjectType: 'chem', book: 'A', teacher: '달돌', students: ['김규리', '김태우\n(수3-7)', '이지훈\n(금8:30-10:30)', '한재이\n(토3:30-5:30/일3:30-5:30)'] },
  // [P22] Sat 14:00 - Chem1 8B
  { id: 'i-22', day: 'sat', startTime: '14:00', endTime: '15:30', branch: 'inchang', subject: '화학1', description: '8주B', subjectType: 'chem', book: 'B', teacher: '지수', students: ['김규리', '김태우\n(수3-7)', '이지훈\n(금8:30-10:30)', '한재이\n(토3:30-5:30/일3:30-5:30)'] },

  // [P23] Sat 15:30 - Integ 8A
  { id: 'i-23', day: 'sat', startTime: '15:30', endTime: '17:00', branch: 'inchang', subject: '통합', description: '8주A', subjectType: 'integ', book: 'A', teacher: '달돌', students: ['조혜인\n(일10:30-1:30)', '표은서\n(일1-3)'] },
  // [P24] Sat 17:00 - Integ 8B
  { id: 'i-24', day: 'sat', startTime: '17:00', endTime: '18:30', branch: 'inchang', subject: '통합', description: '8주B', subjectType: 'integ', book: 'B', teacher: '달돌', students: ['조혜인\n(일10:30-1:30)', '표은서\n(일1-3)'] },

  // [P25] Sun 12:30 - Phy1 8A
  { id: 'i-25', day: 'sun', startTime: '12:30', endTime: '14:00', branch: 'inchang', subject: '물리1', description: '8주A', subjectType: 'phy', book: 'A', teacher: '달돌', students: ['김목현', '김태우\n(수3-7)', '김하율', '신민승', '정율하\n(화7-9/일3:30-5:30)', '한재이\n(토3:30-5:30/일3:30-5:30)'] },
  // [P26] Sun 14:00 - Phy1 8B
  { id: 'i-26', day: 'sun', startTime: '14:00', endTime: '15:30', branch: 'inchang', subject: '물리1', description: '8주B', subjectType: 'phy', book: 'B', teacher: '달돌', students: ['김목현', '김태우\n(수3-7)', '신민승', '정율하\n(화7-9/일3:30-5:30)', '한재이\n(토3:30-5:30/일3:30-5:30)'] },

  // [P27] Sun 15:30 - Integ 8A
  { id: 'i-27', day: 'sun', startTime: '15:30', endTime: '17:00', branch: 'inchang', subject: '통합', description: '8주A', subjectType: 'integ', book: 'A', teacher: '달돌', students: ['강다현\n(월3-6)', '김령하', '김하율'] },
  // [P28] Sun 17:00 - Integ 8B
  { id: 'i-28', day: 'sun', startTime: '17:00', endTime: '18:30', branch: 'inchang', subject: '통합', description: '8주B', subjectType: 'integ', book: 'B', teacher: '규현', students: ['강다현\n(월3-6)', '김령하'] },

  // [P29] Sun 20:00 - Chem Career 8A (화 진로)
  { id: 'i-29', day: 'sun', startTime: '20:00', endTime: '21:30', branch: 'inchang', subject: '화학진로', description: '8주A', subjectType: 'chem', book: 'A', teacher: '달돌', students: ['강승윤', '김반석\n(수4-9:30)'] },
  // [P30] Sun 21:30 - Chem Career 8B (화 진로)
  { id: 'i-30', day: 'sun', startTime: '21:30', endTime: '23:00', branch: 'inchang', subject: '화학진로', description: '8주B', subjectType: 'chem', book: 'B', teacher: '달돌', students: ['강승윤', '김반석\n(수4-9:30)'] },

  // [P31] Tue 17:30 - Integ Problem Solving (문풀)
  { id: 'i-31', day: 'tue', startTime: '17:30', endTime: '19:00', branch: 'inchang', subject: '통합', description: '문풀', subjectType: 'integ', book: 'None', teacher: '지수', students: ['강유하\n(화1-3/금6:30-8)'] },

  // [P32] Sat 15:30 - Integ Problem Solving (문풀)
  { id: 'i-32', day: 'sat', startTime: '15:30', endTime: '17:00', branch: 'inchang', subject: '통합', description: '문풀', subjectType: 'integ', book: 'None', teacher: '달돌', students: [] },

  // [P33] Sat 16:00 - Chem1 Problem Solving
  { id: 'i-33', day: 'sat', startTime: '16:00', endTime: '17:30', branch: 'inchang', subject: '화학1', description: '문풀', subjectType: 'chem', book: 'None', teacher: '지수', students: ['김반석\n(수4-9:30)'] },

  // [P34] Sat 18:30 - Phy1 Problem Solving
  { id: 'i-34', day: 'sat', startTime: '18:30', endTime: '20:00', branch: 'inchang', subject: '물리1', description: '문풀', subjectType: 'phy', book: 'None', teacher: '산하', students: ['강승윤', '윤성재\n(화1-4:30)', '전성주'] },

  // [P35] Sat 19:30 - Integ Problem Solving
  { id: 'i-35', day: 'sat', startTime: '19:30', endTime: '21:00', branch: 'inchang', subject: '통합', description: '문풀', subjectType: 'integ', book: 'None', teacher: '달돌', students: ['신서인\n(화10:30-2)'] },

  // [P36] Sat 20:00 - Chem1 Problem Solving
  { id: 'i-36', day: 'sat', startTime: '20:00', endTime: '21:30', branch: 'inchang', subject: '화학1', description: '문풀', subjectType: 'chem', book: 'None', teacher: '산하', students: ['윤성재\n(화1-4:30)', '이정현\n(금12-3:30/일3:30-5:30)', '전성주'] },

  // [P37] Tue 14:30 - Phy1 8A
  { id: 'i-37', day: 'tue', startTime: '14:30', endTime: '16:00', branch: 'inchang', subject: '물리1', description: '8주A', subjectType: 'phy', book: 'A', teacher: '달돌', students: ['장윤우\n(수2-5)'] },
  // [P38] Tue 16:00 - Phy1 8B
  { id: 'i-38', day: 'tue', startTime: '16:00', endTime: '17:30', branch: 'inchang', subject: '물리1', description: '8주B', subjectType: 'phy', book: 'B', teacher: '달돌', students: ['장윤우\n(수2-5)'] },

  // [P39] Tue 19:00 - Life1 8A
  { id: 'i-39', day: 'tue', startTime: '19:00', endTime: '20:30', branch: 'inchang', subject: '생명1', description: '8주A', subjectType: 'life', book: 'A', teacher: '지수', students: ['이예원\n(일1-4)'] },
  // [P40] Tue 20:30 - Life1 8B
  { id: 'i-40', day: 'tue', startTime: '20:30', endTime: '22:00', branch: 'inchang', subject: '생명1', description: '8주B', subjectType: 'life', book: 'B', teacher: '지수', students: ['이예원\n(일1-4)'] },

  // [P41] Sun 17:00 - Life1 8A
  { id: 'i-41', day: 'sun', startTime: '17:00', endTime: '18:30', branch: 'inchang', subject: '생명1', description: '8주A', subjectType: 'life', book: 'A', teacher: '달돌', students: ['이채린'] },
  // [P42] Sun 18:30 - Life1 8B
  { id: 'i-42', day: 'sun', startTime: '18:30', endTime: '20:00', branch: 'inchang', subject: '생명1', description: '8주B', subjectType: 'life', book: 'B', teacher: '달돌', students: ['이채린'] },


  // ================= DASAN BRANCH (다산관) =================

  // [P43] Fri 17:30 - Seosam Entrance (서삼입시)
  { id: 'd-1', day: 'fri', startTime: '17:30', endTime: '19:00', branch: 'dasan', subject: '서삼입시', description: '입시', subjectType: 'mid', book: 'None', teacher: '달돌', students: ['정윤하'] },
  // [P44] Sat 17:30 - Seosam Entrance (서삼입시)
  { id: 'd-2', day: 'sat', startTime: '17:30', endTime: '19:00', branch: 'dasan', subject: '서삼입시', description: '입시', subjectType: 'mid', book: 'None', teacher: '달돌', students: ['김은재'] },

  // [P45] Tue 13:00 - Mid1 8A
  { id: 'd-3', day: 'tue', startTime: '13:00', endTime: '14:30', branch: 'dasan', subject: '중1', description: '8주A', subjectType: 'mid', book: 'A', teacher: '예림', students: ['이주해\n(금11-1)'] },
  // [P46] Tue 14:30 - Mid1 8B
  { id: 'd-4', day: 'tue', startTime: '14:30', endTime: '16:00', branch: 'dasan', subject: '중1', description: '8주B', subjectType: 'mid', book: 'B', teacher: '기현', students: ['이주해\n(금11-1)'] },

  // [P47] Wed 10:30 - Mid2 8A
  { id: 'd-5', day: 'wed', startTime: '10:30', endTime: '12:00', branch: 'dasan', subject: '중2', description: '8주A', subjectType: 'mid', book: 'A', teacher: '달돌', students: ['박시윤\n(토11-12)', '오연우', '윤보민', '이도명'] },
  // [P48] Wed 12:00 - Mid2 8B
  { id: 'd-6', day: 'wed', startTime: '12:00', endTime: '13:30', branch: 'dasan', subject: '중2', description: '8주B', subjectType: 'mid', book: 'B', teacher: '달돌', students: ['오연우', '윤보민', '이도명'] },
  // [P49] Wed 14:30 - Mid2 8A - Empty
  { id: 'd-7', day: 'wed', startTime: '14:30', endTime: '16:00', branch: 'dasan', subject: '중2', description: '8주A', subjectType: 'mid', book: 'A', teacher: '산하', students: [] },

  // [P50] Thu 10:30 - Mid2 8A
  { id: 'd-8', day: 'thu', startTime: '10:30', endTime: '12:00', branch: 'dasan', subject: '중2', description: '8주A', subjectType: 'mid', book: 'A', teacher: '달돌', students: ['조하빈\n(화11-1)', '함지영\n(수11-1)'] },
  // [P51] Thu 12:00 - Mid2 8B
  { id: 'd-9', day: 'thu', startTime: '12:00', endTime: '13:30', branch: 'dasan', subject: '중2', description: '8주B', subjectType: 'mid', book: 'B', teacher: '달돌', students: ['조하빈\n(화11-1)', '함지영\n(수11-1)'] },

  // [P52] Fri 10:00 - Mid1 8A - Empty
  { id: 'd-10', day: 'fri', startTime: '10:00', endTime: '11:30', branch: 'dasan', subject: '중1', description: '8주A', subjectType: 'mid', book: 'A', teacher: '산하', students: [] },
  // [P53] Fri 11:30 - Mid1 8B - Empty
  { id: 'd-11', day: 'fri', startTime: '11:30', endTime: '13:00', branch: 'dasan', subject: '중1', description: '8주B', subjectType: 'mid', book: 'B', teacher: '산하', students: [] },
  // [P54] Sat 14:00 - Mid3 8A - Empty
  { id: 'd-12', day: 'sat', startTime: '14:00', endTime: '15:30', branch: 'dasan', subject: '중3', description: '8주A', subjectType: 'mid', book: 'A', teacher: '산하', students: [] },
  // [P55] Fri 10:30 - Mid2 8B - Empty
  { id: 'd-13', day: 'fri', startTime: '10:30', endTime: '12:00', branch: 'dasan', subject: '중2', description: '8주B', subjectType: 'mid', book: 'B', teacher: '산하', students: [] },
  // [P56] Sat 15:30 - Mid3 8B - Empty
  { id: 'd-14', day: 'sat', startTime: '15:30', endTime: '17:00', branch: 'dasan', subject: '중3', description: '8주B', subjectType: 'mid', book: 'B', teacher: '예림', students: [] },

  // [P57] Fri 09:00 - Mid2 8A - Empty
  { id: 'd-15', day: 'fri', startTime: '09:00', endTime: '10:30', branch: 'dasan', subject: '중2', description: '8주A', subjectType: 'mid', book: 'A', teacher: '산하', students: [] },

  // [P58] Sat 12:00 - Mid2 8B
  { id: 'd-16', day: 'sat', startTime: '12:00', endTime: '13:30', branch: 'dasan', subject: '중2', description: '8주B', subjectType: 'mid', book: 'B', teacher: '예림', students: ['박시윤\n(토11-12)'] },

  // [P59] Sat 14:00 - Mid1 8A
  { id: 'd-17', day: 'sat', startTime: '14:00', endTime: '15:30', branch: 'dasan', subject: '중1', description: '8주A', subjectType: 'mid', book: 'A', teacher: '예림', students: ['천지아'] },
  // [P60] Sat 15:30 - Mid1 8B
  { id: 'd-18', day: 'sat', startTime: '15:30', endTime: '17:00', branch: 'dasan', subject: '중1', description: '8주B', subjectType: 'mid', book: 'B', teacher: '주영', students: ['천지아'] },

  // [P61] Sat 14:00 - Mid3 8A
  { id: 'd-19', day: 'sat', startTime: '14:00', endTime: '15:30', branch: 'dasan', subject: '중3', description: '8주A', subjectType: 'mid', book: 'A', teacher: '산하', students: ['윤규림\n(수10-12)'] },
  // [P62] Sat 15:30 - Mid3 8B
  { id: 'd-20', day: 'sat', startTime: '15:30', endTime: '17:00', branch: 'dasan', subject: '중3', description: '8주B', subjectType: 'mid', book: 'B', teacher: '예림', students: ['윤규림\n(수10-12)'] },

  // [P63] Sun 12:30 - Mid2 8B
  { id: 'd-21', day: 'sun', startTime: '12:30', endTime: '14:00', branch: 'dasan', subject: '중2', description: '8주B', subjectType: 'mid', book: 'B', teacher: '지수', students: ['이시온', '이지율\n(수3-5)'] },
  // [P64] Sun 14:00 - Mid2 8A
  { id: 'd-22', day: 'sun', startTime: '14:00', endTime: '15:30', branch: 'dasan', subject: '중2', description: '8주A', subjectType: 'mid', book: 'A', teacher: '예림', students: ['이시온', '이지율\n(수3-5)'] },

  // [P65] Sun 15:30 - Mid3 8A
  { id: 'd-23', day: 'sun', startTime: '15:30', endTime: '17:00', branch: 'dasan', subject: '중3', description: '8주A', subjectType: 'mid', book: 'A', teacher: '지수', students: ['강다정\n(토5-7)', '한샘이\n(일3-3:30/6:30-8)'] },
  // [P66] Sun 17:00 - Mid3 8B
  { id: 'd-24', day: 'sun', startTime: '17:00', endTime: '18:30', branch: 'dasan', subject: '중3', description: '8주B', subjectType: 'mid', book: 'B', teacher: '산하', students: ['강다정\n(토5-7)', '한샘이\n(일3-3:30/6:30-8)'] },

  // [P67] Mon 13:30 - Chem1 8A
  { id: 'd-25', day: 'mon', startTime: '13:30', endTime: '15:00', branch: 'dasan', subject: '화학1', description: '8주A', subjectType: 'chem', book: 'A', teacher: '달돌', students: ['박정선\n(금6-8/토11-1)', '신재웅\n(금1-3/토1-3)', '유은성\n(수2-6)', '이선재\n(일10-4)'] },
  // [P68] Mon 15:00 - Chem1 8B
  { id: 'd-26', day: 'mon', startTime: '15:00', endTime: '16:30', branch: 'dasan', subject: '화학1', description: '8주B', subjectType: 'chem', book: 'B', teacher: '지수', students: ['박정선\n(금6-8/토11-1)', '신재웅\n(금1-3/토1-3)', '유은성\n(수2-6)', '이선재\n(일10-4)'] },

  // [P69] Mon 16:00 - Integ 8A
  { id: 'd-27', day: 'mon', startTime: '16:00', endTime: '17:30', branch: 'dasan', subject: '통합', description: '8주A', subjectType: 'integ', book: 'A', teacher: '산하', students: ['노현성\n(월3:30-7)'] },

  // [P70] Mon 19:00 - Phy Career 8A (물 진로)
  { id: 'd-28', day: 'mon', startTime: '19:00', endTime: '20:30', branch: 'dasan', subject: '물리진로', description: '8주A', subjectType: 'phy', book: 'A', teacher: '산하', students: ['장연지\n(화5:30-8:30/토7-10)'] },
  // [P71] Mon 20:30 - Phy Career 8B
  { id: 'd-29', day: 'mon', startTime: '20:30', endTime: '22:00', branch: 'dasan', subject: '물리진로', description: '8주B', subjectType: 'phy', book: 'B', teacher: '산하', students: ['장연지\n(화5:30-8:30/토7-10)'] },

  // [P72] Mon 19:00 - Life1 8A
  { id: 'd-30', day: 'mon', startTime: '19:00', endTime: '20:30', branch: 'dasan', subject: '생명1', description: '8주A', subjectType: 'life', book: 'A', teacher: '지수', students: ['강보빈\n(금4-8)', '김가은', '박정후\n(일2-6)'] },
  // [P73] Mon 20:30 - Life1 8B
  { id: 'd-31', day: 'mon', startTime: '20:30', endTime: '22:00', branch: 'dasan', subject: '생명1', description: '8주B', subjectType: 'life', book: 'B', teacher: '지수', students: ['강보빈\n(금4-8)', '김가은', '박정후\n(일2-6)'] },

  // [P74] Tue 10:30 - Integ 8A
  { id: 'd-32', day: 'tue', startTime: '10:30', endTime: '12:00', branch: 'dasan', subject: '통합', description: '8주A', subjectType: 'integ', book: 'A', teacher: '지수', students: ['이소율\n(월11-1)', '임라희\n(토1-3)', '정예림\n(토2-4)'] },
  // [P75] Tue 12:00 - Integ 8B
  { id: 'd-33', day: 'tue', startTime: '12:00', endTime: '13:30', branch: 'dasan', subject: '통합', description: '8주B', subjectType: 'integ', book: 'B', teacher: '지수', students: ['이소율\n(월11-1)', '임라희\n(토1-3)', '정예림\n(토2-4)'] },

  // [P76] Tue 19:00 - Phy1 8A
  { id: 'd-34', day: 'tue', startTime: '19:00', endTime: '20:30', branch: 'dasan', subject: '물리1', description: '8주A', subjectType: 'phy', book: 'A', teacher: '달돌', students: ['김지연\n(화7:30-8:30/일11:30-12:30)', '박정선\n(금6-8/토11-1)', '최유주\n(화5-7)'] },
  // [P77] Tue 20:30 - Phy1 8B
  { id: 'd-35', day: 'tue', startTime: '20:30', endTime: '22:00', branch: 'dasan', subject: '물리1', description: '8주B', subjectType: 'phy', book: 'B', teacher: '달돌', students: ['박정선\n(금6-8/토11-1)', '최유주\n(화5-7)'] },

  // [P78] Wed 16:00 - Phy1 8B
  { id: 'd-36', day: 'wed', startTime: '16:00', endTime: '17:30', branch: 'dasan', subject: '물리1', description: '8주B', subjectType: 'phy', book: 'B', teacher: '달돌', students: ['문경서\n(월4:30-6:30/수2-4)', '이수빈\n(금10:30-12:30/일3:30-5:30)', '황지민\n(월11-1/화4-6)'] },
  // [P79] Wed 17:30 - Phy1 8A
  { id: 'd-37', day: 'wed', startTime: '17:30', endTime: '19:00', branch: 'dasan', subject: '물리1', description: '8주A', subjectType: 'phy', book: 'A', teacher: '산하', students: ['문경서\n(월4:30-6:30/수2-4)', '이수빈\n(금10:30-12:30/일3:30-5:30)', '황지민\n(월11-1/화4-6)'] },

  // [P80] Wed 19:00 - Phy Career 8A
  { id: 'd-38', day: 'wed', startTime: '19:00', endTime: '20:30', branch: 'dasan', subject: '물리진로', description: '8주A', subjectType: 'phy', book: 'A', teacher: '산하', students: ['오성균\n(수3-6/금12-3/토12-2)'] },
  // [P81] Wed 20:30 - Phy Career 8B
  { id: 'd-39', day: 'wed', startTime: '20:30', endTime: '22:00', branch: 'dasan', subject: '물리진로', description: '8주B', subjectType: 'phy', book: 'B', teacher: '달돌', students: ['오성균\n(수3-6/금12-3/토12-2)'] },

  // [P82] Wed 19:00 - Chem Career 8A
  { id: 'd-40', day: 'wed', startTime: '19:00', endTime: '20:30', branch: 'dasan', subject: '화학진로', description: '8주A', subjectType: 'chem', book: 'A', teacher: '달돌', students: ['박정후\n(일2-6)', '방지호\n(토12-2/일10-1)'] },
  // [P83] Wed 20:30 - Chem Career 8B
  { id: 'd-41', day: 'wed', startTime: '20:30', endTime: '22:00', branch: 'dasan', subject: '화학진로', description: '8주B', subjectType: 'chem', book: 'B', teacher: '산하', students: ['박정후\n(일2-6)', '방지호\n(토12-2/일10-1)'] },

  // [P84] Fri 16:30 - Phy1 8B
  { id: 'd-42', day: 'fri', startTime: '16:30', endTime: '18:00', branch: 'dasan', subject: '물리1', description: '8주B', subjectType: 'phy', book: 'B', teacher: '달돌', students: ['김단우\n(수2-6)', '유은성\n(수2-6)', '이선재\n(일10-4)', '정해인'] },
  // [P85] Fri 18:00 - Phy1 8A
  { id: 'd-43', day: 'fri', startTime: '18:00', endTime: '19:30', branch: 'dasan', subject: '물리1', description: '8주A', subjectType: 'phy', book: 'A', teacher: '산하', students: ['김단우\n(수2-6)', '유은성\n(수2-6)', '이선재\n(일10-4)', '정해인'] },

  // [P86] Fri 17:00 - Phy Career 8A
  { id: 'd-44', day: 'fri', startTime: '17:00', endTime: '18:30', branch: 'dasan', subject: '물리진로', description: '8주A', subjectType: 'phy', book: 'A', teacher: '산하', students: ['전성주'] },
  // [P87] Fri 18:30 - Phy Career 8B
  { id: 'd-45', day: 'fri', startTime: '18:30', endTime: '20:00', branch: 'dasan', subject: '물리진로', description: '8주B', subjectType: 'phy', book: 'B', teacher: '기현', students: ['전성주'] },

  // [P88] Sat 09:00 - Life1 8A
  { id: 'd-46', day: 'sat', startTime: '09:00', endTime: '10:30', branch: 'dasan', subject: '생명1', description: '8주A', subjectType: 'life', book: 'A', teacher: '달돌', students: ['김우영\n(일10:30-12:30)'] },

  // [P89] Sat 09:00 - Chem1 8A
  { id: 'd-47', day: 'sat', startTime: '09:00', endTime: '10:30', branch: 'dasan', subject: '화학1', description: '8주A', subjectType: 'chem', book: 'A', teacher: '산하', students: ['강보빈\n(금4-8)', '박소은\n(금1:30-5:30)', '박이레\n(수5-7)', '신민승', '이수빈\n(금10:30-12:30/일3:30-5:30)', '함지민\n(수11-1)', '황지민\n(월11-1/화4-6)'] },
  // [P90] Sat 10:30 - Chem1 8B
  { id: 'd-48', day: 'sat', startTime: '10:30', endTime: '12:00', branch: 'dasan', subject: '화학1', description: '8주B', subjectType: 'chem', book: 'B', teacher: '달돌', students: ['강보빈\n(금4-8)', '박소은\n(금1:30-5:30)', '박이레\n(수5-7)', '신민승', '이수빈\n(금10:30-12:30/일3:30-5:30)', '함지민\n(수11-1)', '황지민\n(월11-1/화4-6)'] },

  // [P91] Sat 18:00 - Chem1 8A
  { id: 'd-49', day: 'sat', startTime: '18:00', endTime: '19:30', branch: 'dasan', subject: '화학1', description: '8주A', subjectType: 'chem', book: 'A', teacher: '지수', students: ['정윤주\n(토5-8)'] },
  // [P92] Sat 19:30 - Chem1 8B
  { id: 'd-50', day: 'sat', startTime: '19:30', endTime: '21:00', branch: 'dasan', subject: '화학1', description: '8주B', subjectType: 'chem', book: 'B', teacher: '지수', students: ['정윤주\n(토5-8)'] },

  // [P93] Sun 09:00 - Life1 8B
  { id: 'd-51', day: 'sun', startTime: '09:00', endTime: '10:30', branch: 'dasan', subject: '생명1', description: '8주B', subjectType: 'life', book: 'B', teacher: '지수', students: ['김우영\n(일10:30-12:30)'] },

  // [P94] Sun 12:30 - Integ 8A
  { id: 'd-52', day: 'sun', startTime: '12:30', endTime: '14:00', branch: 'dasan', subject: '통합', description: '8주A', subjectType: 'integ', book: 'A', teacher: '지수', students: ['김민기', '김시연\n(금1-3)', '이주원\n(일10:30-12:30)'] },
  // [P95] Sun 14:00 - Integ 8B
  { id: 'd-53', day: 'sun', startTime: '14:00', endTime: '15:30', branch: 'dasan', subject: '통합', description: '8주B', subjectType: 'integ', book: 'B', teacher: '예림', students: ['김민기', '김시연\n(금1-3)', '이주원\n(일10:30-12:30)'] },

  // [P96] Sun 12:30 - Phy1 8B
  { id: 'd-54', day: 'sun', startTime: '12:30', endTime: '14:00', branch: 'dasan', subject: '물리1', description: '8주B', subjectType: 'phy', book: 'B', teacher: '산하', students: ['김단희', '김지연\n(화7:30-8:30/일11:30-12:30)', '문연수\n(일10:30-12:30)', '박소은\n(금1:30-5:30)', '신재웅\n(금1-3/토1-3)', '이재영\n(화2-4/일11-12:30/3:30-4)', '이정현\n(금12-3:30/일3:30-5:30)'] },
  // [P97] Sun 14:00 - Phy1 8A
  { id: 'd-55', day: 'sun', startTime: '14:00', endTime: '15:30', branch: 'dasan', subject: '물리1', description: '8주A', subjectType: 'phy', book: 'A', teacher: '산하', students: ['김단희', '문연수\n(일10:30-12:30)', '박소은\n(금1:30-5:30)', '신재웅\n(금1-3/토1-3)', '이재영\n(화2-4/일11-12:30/3:30-4)', '이정현\n(금12-3:30/일3:30-5:30)'] },

  // [P98] Sun 15:30 - Chem1 8A
  { id: 'd-56', day: 'sun', startTime: '15:30', endTime: '17:00', branch: 'dasan', subject: '화학1', description: '8주A', subjectType: 'chem', book: 'A', teacher: '산하', students: ['강유빈\n(화6-8)', '김단우\n(수2-6)'] },
  // [P99] Sun 17:00 - Chem1 8B
  { id: 'd-57', day: 'sun', startTime: '17:00', endTime: '18:30', branch: 'dasan', subject: '화학1', description: '8주B', subjectType: 'chem', book: 'B', teacher: '지수', students: ['강유빈\n(화6-8)', '김단우\n(수2-6)'] },

  // [P100] Sun 19:00 - Chem Career 8A
  { id: 'd-58', day: 'sun', startTime: '19:00', endTime: '20:30', branch: 'dasan', subject: '화학진로', description: '8주A', subjectType: 'chem', book: 'A', teacher: '지수', students: ['강민서\n(수3-7)', '심예지\n(화1-3)', '장연지\n(화5:30-8:30/토7-10)'] },
  // [P101] Sun 20:30 - Chem Career 8B
  { id: 'd-59', day: 'sun', startTime: '20:30', endTime: '22:00', branch: 'dasan', subject: '화학진로', description: '8주B', subjectType: 'chem', book: 'B', teacher: '산하', students: ['강민서\n(수3-7)', '심예지\n(화1-3)', '장연지\n(화5:30-8:30/토7-10)'] },

  // [P102] Sun 19:00 - Life1 8B
  { id: 'd-60', day: 'sun', startTime: '19:00', endTime: '20:30', branch: 'dasan', subject: '생명1', description: '8주B', subjectType: 'life', book: 'B', teacher: '산하', students: ['남재우\n(토9-11)'] },
  // [P103] Sun 20:30 - Life1 8A
  { id: 'd-61', day: 'sun', startTime: '20:30', endTime: '22:00', branch: 'dasan', subject: '생명1', description: '8주A', subjectType: 'life', book: 'A', teacher: '지수', students: ['남재우\n(토9-11)'] },

  // [P104] Mon 13:30 - Phy1 Problem Solving
  { id: 'd-62', day: 'mon', startTime: '13:30', endTime: '15:00', branch: 'dasan', subject: '물리1', description: '문풀', subjectType: 'phy', book: 'None', teacher: '산하', students: ['오성균\n(수3-6/금12-3/토12-2)'] },

  // [P105] Mon 17:30 - Phy1 Problem Solving
  { id: 'd-63', day: 'mon', startTime: '17:30', endTime: '19:00', branch: 'dasan', subject: '물리1', description: '문풀', subjectType: 'phy', book: 'None', teacher: '산하', students: ['강민서\n(수3-7)'] },

  // [P106] Tue 16:00 - Integ Problem Solving
  { id: 'd-64', day: 'tue', startTime: '16:00', endTime: '17:30', branch: 'dasan', subject: '통합', description: '문풀', subjectType: 'integ', book: 'None', teacher: '기현', students: ['진수민\n(일12:30-2:30)'] },

  // [P107] Wed 11:30 - Phy1 Problem Solving
  { id: 'd-65', day: 'wed', startTime: '11:30', endTime: '13:00', branch: 'dasan', subject: '물리1', description: '문풀', subjectType: 'phy', book: 'None', teacher: '산하', students: ['정승우\n(일2-5)'] },

  // [P108] Fri 10:30 - Chem1 Problem Solving
  { id: 'd-66', day: 'fri', startTime: '10:30', endTime: '12:00', branch: 'dasan', subject: '화학1', description: '문풀', subjectType: 'chem', book: 'None', teacher: '산하', students: ['문경서\n(월4:30-6:30/수2-4)', '조은빈\n(화10-1/금10-10:30/일10:30-12)'] },

  // [P109] Fri 12:00 - Chem1 Problem Solving
  { id: 'd-67', day: 'fri', startTime: '12:00', endTime: '13:30', branch: 'dasan', subject: '화학1', description: '문풀', subjectType: 'chem', book: 'None', teacher: '산하', students: ['전현준\n(일9-11)'] },

  // [P110] Sat 10:30 - Chem1 Problem Solving
  { id: 'd-68', day: 'sat', startTime: '10:30', endTime: '12:00', branch: 'dasan', subject: '화학1', description: '문풀', subjectType: 'chem', book: 'None', teacher: '산하', students: ['김우영\n(일10:30-12:30)', '방지호\n(토12-2/일10-1)', '오성균\n(수3-6/금12-3/토12-2)'] },

  // [P111] Sat 15:30 - Integ Problem Solving
  { id: 'd-69', day: 'sat', startTime: '15:30', endTime: '17:00', branch: 'dasan', subject: '통합', description: '문풀', subjectType: 'integ', book: 'None', teacher: '산하', students: ['양우빈\n(수4:30-7/토5-6)', '이채운\n(일11:30-3)', '정민우\n(일2-5:30)'] },

  // [P112] Sun 10:30 - Phy1 Problem Solving
  { id: 'd-70', day: 'sun', startTime: '10:30', endTime: '12:00', branch: 'dasan', subject: '물리1', description: '문풀', subjectType: 'phy', book: 'None', teacher: '산하', students: ['조은빈\n(화10-1/금10-10:30/일10:30-12)'] },

  // [P113] Wed 13:00 - Phy1 8A
  { id: 'd-71', day: 'wed', startTime: '13:00', endTime: '14:30', branch: 'dasan', subject: '물리1', description: '8주A', subjectType: 'phy', book: 'A', teacher: '달돌', students: ['박지산\n(토9-1)'] },
  // [P114] Wed 14:30 - Phy1 8B
  { id: 'd-72', day: 'wed', startTime: '14:30', endTime: '16:00', branch: 'dasan', subject: '물리1', description: '8주B', subjectType: 'phy', book: 'B', teacher: '달돌', students: ['박지산\n(토9-1)'] },

  // [P115] Fri 09:00 - Earth1 8A
  { id: 'd-73', day: 'fri', startTime: '09:00', endTime: '10:30', branch: 'dasan', subject: '지구1', description: '8주A', subjectType: 'earth', book: 'A', teacher: '달돌', students: ['박지산\n(토9-1)'] },
  // [P116] Fri 10:30 - Earth1 8B
  { id: 'd-74', day: 'fri', startTime: '10:30', endTime: '12:00', branch: 'dasan', subject: '지구1', description: '8주B', subjectType: 'earth', book: 'B', teacher: '달돌', students: ['박지산\n(토9-1)'] },

  // [P117] Sun 10:30 - Life2 8A
  { id: 'd-75', day: 'sun', startTime: '10:30', endTime: '12:00', branch: 'dasan', subject: '생명2', description: '8주A', subjectType: 'life', book: 'A', teacher: '지수', students: ['이해성\n(금6-8/일1:30-3:30)'] },
  // [P118] Sun 12:00 - Life2 8B
  { id: 'd-76', day: 'sun', startTime: '12:00', endTime: '13:30', branch: 'dasan', subject: '생명2', description: '8주B', subjectType: 'life', book: 'B', teacher: '기현', students: ['이해성\n(금6-8/일1:30-3:30)'] },

  // [P119] Mon 15:00 - Chem1 Problem Solving
  { id: 'd-77', day: 'mon', startTime: '15:00', endTime: '16:30', branch: 'dasan', subject: '화학1', description: '문풀', subjectType: 'chem', book: 'None', teacher: '달돌', students: ['강승구'] },

  // [P120] Mon 16:30 - Earth1 Problem Solving
  { id: 'd-78', day: 'mon', startTime: '16:30', endTime: '18:00', branch: 'dasan', subject: '지구1', description: '문풀', subjectType: 'earth', book: 'None', teacher: '달돌', students: ['강승구'] },

  // [P121] Fri 20:00 - Earth1 Problem Solving
  { id: 'd-79', day: 'fri', startTime: '20:00', endTime: '21:30', branch: 'dasan', subject: '지구1', description: '문풀', subjectType: 'earth', book: 'None', teacher: '산하', students: ['박승재\n(일6:30-8:30)', '이해성\n(금6-8/일1:30-3:30)', '임서희\n(금6-8)', '최수인'] },
];
