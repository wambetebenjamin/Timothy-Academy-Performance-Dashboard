/**
 * Timothy Academy Performance Dashboard - Dummy Data
 * Sample data for Timothy Academy, Nairobi
 */

// Kenyan counties for the globe visualization
export const kenyaCounties = [
  { name: 'Nairobi', lat: -1.2921, lng: 36.8219, subscribers: 45 },
  { name: 'Mombasa', lat: -4.0435, lng: 39.6682, subscribers: 28 },
  { name: 'Kisumu', lat: -0.1022, lng: 35.0073, subscribers: 22 },
  { name: 'Eldoret', lat: 0.5142, lng: 35.2697, subscribers: 18 },
  { name: 'Meru', lat: 0.0493, lng: 37.6462, subscribers: 15 },
  { name: 'Nakuru', lat: -0.3042, lng: 36.0867, subscribers: 20 },
  { name: 'Kericho', lat: -0.3643, lng: 35.3416, subscribers: 12 },
  { name: 'Kitale', lat: 1.0146, lng: 34.8582, subscribers: 10 },
  { name: 'Kisii', lat: -0.6783, lng: 34.7617, subscribers: 14 },
  { name: 'Embu', lat: -1.3018, lng: 37.3435, subscribers: 8 },
  { name: 'Nyeri', lat: -0.4138, lng: 36.9601, subscribers: 9 },
  { name: 'Machakos', lat: -1.5141, lng: 37.2432, subscribers: 11 },
  { name: 'Kakamega', lat: 0.2827, lng: 34.7314, subscribers: 7 },
  { name: 'Malindi', lat: -2.9906, lng: 40.1142, subscribers: 6 },
  { name: 'Thika', lat: -1.3372, lng: 36.8725, subscribers: 13 },
];

// School info
export const schoolInfo = {
  name: 'Timothy Academy',
  county: 'Nairobi',
  type: 'Secondary School',
  knecRegistration: 'BK/NAIROBI/2019/045',
  established: 2015,
  address: 'P.O. Box 4567 - 00100, Nairobi, Kenya',
  phone: '+254 700 123 456',
  email: 'info@timothyacademy.co.ke',
  principal: {
    name: 'Principal Grace Wanjiku',
    email: 'gwangiku@timothyacademy.co.ke',
  },
  totalStudents: 847,
  totalStaff: 48,
};

// Academic terms
export const academicTerms = [
  { id: 1, name: 'Term 1', year: 2025, startDate: '2025-01-06', endDate: '2025-04-04' },
  { id: 2, name: 'Term 2', year: 2025, startDate: '2025-05-12', endDate: '2025-07-25' },
  { id: 3, name: 'Term 3', year: 2025, startDate: '2025-09-01', endDate: '2025-11-07' },
  { id: 4, name: 'Term 1', year: 2026, startDate: '2026-01-05', endDate: '2026-03-27' },
];

// Current term
export const currentTerm = academicTerms[3];

// Subject list
export const subjects = [
  'English',
  'Mathematics',
  'Kiswahili',
  'Biology',
  'Chemistry',
  'Physics',
  'History',
  'Geography',
  'CRE',
  'Computer Studies',
];

// East African names for students
const firstNames = [
  'Grace', 'Wanjiru', 'Kamau', 'Aisha', 'Mohammed', 'Mary', 'Peter', 'Faith',
  'Samuel', 'Esther', 'John', 'Mercy', 'Daniel', 'Naomi', 'David', 'Ruth',
  'Simon', 'Sarah', 'Joseph', 'Rebecca', 'Timothy', 'Hannah', 'Caleb', 'Phoebe',
  'Isaac', 'Lucy', 'Jeremiah', 'Tabitha', 'Marcus', 'Abigail', 'Barnabas', 'Martha',
  'Stephen', 'Elizabeth', 'Paul', 'Joy', 'Andrew', 'Katherine', 'Philip', 'Priscilla',
  'Nicholas', 'Jemimah', 'Alexander', 'Salome', 'Matthew', 'Leah', 'Mark', 'Tracy',
  'Anthony', 'Ursula', 'Christopher', 'Bilha', 'Robert', 'Winfred', 'Brian', 'Stella'
];

const lastNames = [
  'Wanjiku', 'Ochieng', 'Kamau', 'Ali', 'Mwangi', 'Kibet', 'Cheruiyot', 'Njoroge',
  'Abonyo', 'Karanja', 'Mutua', 'Atieno', 'Makau', 'Chebet', 'Kipchoge', 'Wambui',
  'Onyango', 'Wasike', 'Muthoni', 'Korir', 'Salami', 'Bett', 'Langat', 'Rono',
  'Koech', 'Wamalwa', 'Musyoka', 'Dinda', 'Nabwire', 'Otieno', 'Waweru', 'Mwende',
  'Singh', 'Okello', 'Akello', 'E피를', 'Barasa', 'Mulei', 'Tennant', 'Kemboi'
];

// Generate students
export const generateStudents = (count) => {
  const students = [];
  const usedNames = new Set();

  for (let i = 0; i < count; i++) {
    let firstName, lastName, fullName;
    do {
      firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
      lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
      fullName = `${firstName} ${lastName}`;
    } while (usedNames.has(fullName));
    usedNames.add(fullName);

    const admissionNumber = `TA2025/${String(i + 1).padStart(4, '0')}`;
    const classId = Math.floor(Math.random() * 6) + 1; // Classes 1-6
    const baseGrade = 45 + Math.random() * 40; // Base grade between 45-85

    // Generate grades per subject per term
    const grades = {};
    academicTerms.forEach(term => {
      grades[term.id] = {};
      subjects.forEach(subject => {
        const variation = (Math.random() - 0.5) * 15;
        grades[term.id][subject] = Math.max(0, Math.min(100, baseGrade + variation));
      });
    });

    // Calculate averages
    const currentGrades = grades[currentTerm.id];
    const currentAverage = Object.values(currentGrades).reduce((a, b) => a + b, 0) / subjects.length;

    // Previous term average
    const prevTermId = currentTerm.id - 1;
    const prevGrades = grades[prevTermId];
    const prevAverage = prevGrades ? Object.values(prevGrades).reduce((a, b) => a + b, 0) / subjects.length : currentAverage;

    // Attendance percentage (70-100%)
    const attendance = Math.min(100, 70 + Math.random() * 30);

    // Calculate trend
    const trend = currentAverage - prevAverage;
    let trendIcon = 'stable';
    if (trend > 3) trendIcon = 'up';
    if (trend < -3) trendIcon = 'down';

    // Predict final grade
    const predictedGrade = Math.min(100, currentAverage + (trend * 2));

    students.push({
      id: i + 1,
      admissionNumber,
      firstName,
      lastName: lastName,
      fullName,
      gender: Math.random() > 0.5 ? 'Male' : 'Female',
      dateOfBirth: `200${Math.floor(Math.random() * 6)}-${String(Math.floor(Math.random() * 12) + 1).padStart(2, '0')}-${String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')}`,
      class: classId,
      classBg: classId === 1 ? 'Form 1' : `Form ${classId}`,
      admissionDate: `2025-${String(Math.floor(Math.random() * 3) + 1).padStart(2, '0')}-${String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')}`,
      guardianName: `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${lastNames[Math.floor(Math.random() * lastNames.length)]}`,
      guardianPhone: `+254 7${Math.floor(Math.random() * 9000000 + 1000000)}`,
      guardianEmail: `${lastName.toLowerCase()}@gmail.com`,
      grades,
      currentAverage: Math.round(currentAverage * 10) / 10,
      previousAverage: Math.round(prevAverage * 10) / 10,
      attendance: Math.round(attendance),
      trend: trendIcon,
      trendValue: Math.round(trend * 10) / 10,
      predictedGrade: Math.round(predictedGrade * 10) / 10,
      predictedGradeLabel: getGradeLabel(predictedGrade),
      atRisk: attendance < 75 || currentAverage < 40,
      interventionRequired: attendance < 75 || currentAverage < 40,
    });
  }

  return students;
};

// Grade labels
const getGradeLabel = (grade) => {
  if (grade >= 80) return 'A (Excellent)';
  if (grade >= 70) return 'B+ (Very Good)';
  if (grade >= 60) return 'B (Good)';
  if (grade >= 50) return 'C+ (Fair)';
  if (grade >= 40) return 'C (Average)';
  if (grade >= 30) return 'D+ (Below Average)';
  if (grade >= 20) return 'D (Poor)';
  return 'E (Very Poor)';
};

// Generate students
export const students = generateStudents(847);

// Classes
export const classes = [
  { id: 1, name: 'Form 1', stream: 'A', students: students.filter(s => s.class === 1).length },
  { id: 2, name: 'Form 2', stream: 'A', students: students.filter(s => s.class === 2).length },
  { id: 3, name: 'Form 3', stream: 'A', students: students.filter(s => s.class === 3).length },
  { id: 4, name: 'Form 4', stream: 'A', students: students.filter(s => s.class === 4).length },
  { id: 5, name: 'Form 5', stream: 'A', students: students.filter(s => s.class === 5).length },
  { id: 6, name: 'Form 6', stream: 'A', students: students.filter(s => s.class === 6).length },
];

// Class averages
export const classAverages = classes.map(c => ({
  ...c,
  average: Math.round(students.filter(s => s.class === c.id).reduce((sum, s) => sum + s.currentAverage, 0) / c.students),
  attendance: Math.round(students.filter(s => s.class === c.id).reduce((sum, s) => sum + s.attendance, 0) / c.students),
}));

// School average
export const schoolAverage = Math.round(students.reduce((sum, s) => sum + s.currentAverage, 0) / students.length);
export const schoolAttendance = Math.round(students.reduce((sum, s) => sum + s.attendance, 0) / students.length);

// Subject averages for selected class
export const getSubjectAverages = (classId) => {
  const classStudents = students.filter(s => s.class === classId);
  return subjects.map(subject => ({
    subject,
    average: Math.round(classStudents.reduce((sum, s) => sum + (s.grades[currentTerm.id][subject] || 0), 0) / classStudents.length),
  }));
};

// Top 5 students
export const topStudents = [...students]
  .sort((a, b) => b.currentAverage - a.currentAverage)
  .slice(0, 5);

// Bottom 5 students
export const bottomStudents = [...students]
  .sort((a, b) => a.currentAverage - b.currentAverage)
  .slice(0, 5);

// Students at risk
export const atRiskStudents = students.filter(s => s.atRisk);

// Attendance data for heatmap (last 12 weeks)
export const generateAttendanceHeatmap = () => {
  const weeks = [];
  for (let w = 0; w < 12; w++) {
    const week = [];
    for (let d = 0; d < 7; d++) {
      const attendanceRate = 70 + Math.random() * 30;
      week.push({
        date: new Date(Date.now() - (11 - w) * 7 * 24 * 60 * 60 * 1000 + d * 24 * 60 * 60 * 1000),
        rate: Math.round(attendanceRate),
        status: attendanceRate >= 85 ? 'present' : attendanceRate >= 60 ? 'partial' : 'absent',
      });
    }
    weeks.push(week);
  }
  return weeks;
};

export const attendanceHeatmap = generateAttendanceHeatmap();

// Staff members
export const staff = [
  { id: 1, name: 'Grace Wanjiku', role: 'principal', subject: 'Administration', email: 'gwangiku@timothyacademy.co.ke', phone: '+254 700 123 456' },
  { id: 2, name: 'James Mwangi', role: 'hod', subject: 'Mathematics', email: 'jmwangi@timothacademy.co.ke', phone: '+254 710 234 567' },
  { id: 3, name: 'Sarah Kimani', role: 'teacher', subject: 'English', email: 'skimani@timothacademy.co.ke', phone: '+254 720 345 678' },
  { id: 4, name: 'Peter Otieno', role: 'teacher', subject: 'Biology', email: 'potieno@timothacademy.co.ke', phone: '+254 730 456 789' },
  { id: 5, name: 'Mary Njoroge', role: 'teacher', subject: 'Chemistry', email: 'mnjoroge@timothacademy.co.ke', phone: '+254 740 567 890' },
  { id: 6, name: 'David Cheruiyot', role: 'teacher', subject: 'Physics', email: 'dcheruiyot@timothacademy.co.ke', phone: '+254 750 678 901' },
  { id: 7, name: 'Aisha Hassan', role: 'teacher', subject: 'History', email: 'ahassan@timothacademy.co.ke', phone: '+254 760 789 012' },
  { id: 8, name: 'Samuel Kipchoge', role: 'teacher', subject: 'Geography', email: 'skipchoge@timothacademy.co.ke', phone: '+254 770 890 123' },
  { id: 9, name: 'Esther Mutua', role: 'teacher', subject: 'CRE', email: 'emutua@timothacademy.co.ke', phone: '+254 780 901 234' },
  { id: 10, name: 'John Makau', role: 'teacher', subject: 'Computer Studies', email: 'jmakau@timothacademy.co.ke', phone: '+254 790 012 345' },
];

// Currently online staff (simulated for presence strip)
export const onlineStaff = [
  { id: 1, name: 'Grace Wanjiku', role: 'principal' },
  { id: 2, name: 'James Mwangi', role: 'hod' },
  { id: 3, name: 'Sarah Kimani', role: 'teacher' },
];

// Activity feed
export const activityFeed = [
  { id: 1, type: 'login', user: 'Grace Wanjiku', action: 'logged in', time: '2 minutes ago' },
  { id: 2, type: 'grade', user: 'Peter Otieno', action: 'updated Biology grades for Form 4A', time: '15 minutes ago' },
  { id: 3, type: 'attendance', user: 'Sarah Kimani', action: 'submitted attendance for Form 3A', time: '1 hour ago' },
  { id: 4, type: 'report', user: 'James Mwangi', action: 'generated term report for Form 2', time: '2 hours ago' },
  { id: 5, type: 'comment', user: 'Mary Njoroge', action: 'added comment on Wanjiku Ochieng\'s performance', time: '3 hours ago' },
  { id: 6, type: 'login', user: 'Aisha Hassan', action: 'logged in', time: '4 hours ago' },
  { id: 7, type: 'prediction', user: 'David Cheruiyot', action: 'viewed student predictions for Form 4', time: '5 hours ago' },
  { id: 8, type: 'attendance', user: 'Esther Mutua', action: 'marked attendance for 42 students', time: '6 hours ago' },
  { id: 9, type: 'grade', user: 'John Makau', action: 'imported exam results from KCSE mock', time: 'yesterday' },
  { id: 10, type: 'report', user: 'Grace Wanjiku', action: 'scheduled weekly report to parents', time: 'yesterday' },
];

// KPI data with sparkline data
export const kpiData = {
  totalStudents: {
    value: schoolInfo.totalStudents.toLocaleString(),
    change: 3.2,
    changeLabel: 'vs last term',
    sparkline: [820, 825, 830, 835, 840, 845, 847],
  },
  avgGrade: {
    value: `${schoolAverage}%`,
    change: 2.1,
    changeLabel: 'vs last term',
    sparkline: [72, 73, 74, 75, 75, 76, 77],
  },
  attendanceRate: {
    value: `${schoolAttendance}%`,
    change: -0.8,
    changeLabel: 'vs last week',
    sparkline: [92, 93, 92, 91, 92, 91, 90],
  },
  atRiskCount: {
    value: atRiskStudents.length.toString(),
    change: -5,
    changeLabel: 'vs last term',
    sparkline: [45, 44, 43, 42, 40, 38, 35],
  },
};

// Grade distribution for donut chart
export const gradeDistribution = [
  { grade: 'A (80+)', count: students.filter(s => s.currentAverage >= 80).length, color: '#2d8a4e' },
  { grade: 'B+ (70-79)', count: students.filter(s => s.currentAverage >= 70 && s.currentAverage < 80).length, color: '#1a5f7a' },
  { grade: 'B (60-69)', count: students.filter(s => s.currentAverage >= 60 && s.currentAverage < 70).length, color: '#2c6e8f' },
  { grade: 'C+ (50-59)', count: students.filter(s => s.currentAverage >= 50 && s.currentAverage < 60).length, color: '#d4a017' },
  { grade: 'C (40-49)', count: students.filter(s => s.currentAverage >= 40 && s.currentAverage < 50).length, color: '#c1440e' },
  { grade: 'D+ (30-39)', count: students.filter(s => s.currentAverage >= 30 && s.currentAverage < 40).length, color: '#b83232' },
];

// School performance trend (term by term)
export const schoolPerformanceTrend = [
  { term: 'Term 1 2024', average: 68 },
  { term: 'Term 2 2024', average: 70 },
  { term: 'Term 3 2024', average: 71 },
  { term: 'Term 1 2025', average: 73 },
  { term: 'Term 2 2025', average: 74 },
  { term: 'Term 3 2025', average: 75 },
  { term: 'Term 1 2026', average: 77 },
];

// Interventions list
export const interventions = [
  { id: 1, title: 'Parent Meeting', description: 'Schedule a meeting with parents to discuss concerns', category: 'Parental Engagement' },
  { id: 2, title: 'Extra Tuition', description: 'Assign additional tutoring sessions after school', category: 'Academic Support' },
  { id: 3, title: 'Counseling', description: 'Refer student to school counselor', category: 'Wellbeing' },
  { id: 4, title: 'Mentorship', description: 'Pair with a senior student mentor', category: 'Peer Support' },
  { id: 5, title: 'Learning Resources', description: 'Provide additional study materials and resources', category: 'Academic Support' },
  { id: 6, title: 'Attendance Monitoring', description: 'Daily attendance check-ins with homeroom teacher', category: 'Attendance' },
  { id: 7, title: 'Study Group', description: 'Create a peer study group for the subject', category: 'Peer Support' },
  { id: 8, title: 'Progress Reports', description: 'Weekly progress reports to principal', category: 'Monitoring' },
];

// Staff performance data
export const staffPerformance = staff.map(s => ({
  ...s,
  classesAssigned: Math.floor(Math.random() * 3) + 1,
  avgStudentPerformance: Math.round(55 + Math.random() * 30),
  workload: Math.floor(Math.random() * 15) + 10,
}));

// Testimonials
export const testimonials = [
  {
    id: 1,
    quote: 'The Timothy Academy Dashboard transformed how we track student performance. We can now identify struggling students early and intervene before it\'s too late. Our KCSE preparation has never been more data-driven.',
    name: 'Grace Wanjiku',
    title: 'Principal',
    school: 'Timothy Academy',
    county: 'Nairobi',
    avatar: null,
  },
  {
    id: 2,
    quote: 'As a HOD, I can now see exactly which teachers need support and which students are falling behind in each subject. The subject breakdown charts are incredibly useful for our weekly meetings.',
    name: 'James Mwangi',
    title: 'Head of Mathematics',
    school: 'Jerusalem High School',
    county: 'Kiambu',
    avatar: null,
  },
  {
    id: 3,
    quote: 'The parent portal has reduced the number of inquiries we receive by 60%. Parents can see their children\'s progress in real-time, and the automated report cards save us hours every term.',
    name: 'Sarah Kimani',
    title: 'Deputy Principal',
    school: 'Moi Girls\' School',
    county: 'Eldoret',
    avatar: null,
  },
  {
    id: 4,
    quote: 'Being able to see my daughter\'s attendance and grades in real-time has given me peace of mind. The WhatsApp reports are particularly helpful since I can read them on my phone.',
    name: 'Mercy Abonyo',
    title: 'Parent',
    school: 'Nairobi Academy',
    county: 'Nairobi',
    avatar: null,
  },
  {
    id: 5,
    quote: 'The predictive analytics helped us identify students at risk of failing KCSE three months before the exam. We implemented targeted interventions and our pass rate improved by 15% this year.',
    name: 'Peter Otieno',
    title: 'Head of Science',
    school: 'Kisumu Boys High',
    county: 'Kisumu',
    avatar: null,
  },
];

// Features list
export const features = [
  {
    id: 1,
    title: 'Class Performance Tracking',
    description: 'Monitor real-time performance across all classes with interactive charts. Compare class averages against school benchmarks.',
    icon: 'chart',
  },
  {
    id: 2,
    title: 'Student Progress Over Time',
    description: 'Track individual student progress across terms with visual trend lines. Identify patterns and intervene early.',
    icon: 'trending',
  },
  {
    id: 3,
    title: 'Predicted Grade Calculator',
    description: 'AI-powered predictions based on current performance and historical trends. Help students stay on track for their target grades.',
    icon: 'target',
  },
  {
    id: 4,
    title: 'Attendance Heatmap',
    description: 'Visual calendar view of attendance patterns across your school. Quickly identify chronic absenteeism and take action.',
    icon: 'calendar',
  },
  {
    id: 5,
    title: 'Teacher Workload Dashboard',
    description: 'Balance teacher assignments and monitor workload distribution. Ensure fair allocation across subjects and classes.',
    icon: 'users',
  },
  {
    id: 6,
    title: 'Parent Report Card Generator',
    description: 'Generate professional report cards instantly. Share via WhatsApp or email with one click. Parents love the transparency.',
    icon: 'file-text',
  },
  {
    id: 7,
    title: 'County Benchmarking',
    description: 'Compare your school\'s performance against county and national averages. Stay competitive and identify areas for improvement.',
    icon: 'map',
  },
  {
    id: 8,
    title: 'KCSE & CBC Progress Tracker',
    description: 'Specialized tracking for both KCSE and CBC curriculum. Align your data with national examination requirements.',
    icon: 'school',
  },
];

// Pricing tiers
export const pricing = [
  {
    id: 1,
    name: 'Primary School',
    description: 'For primary schools with up to 300 students',
    price: 15000,
    priceAnnual: 45000,
    students: 300,
    features: [
      'Up to 300 students',
      'Class performance tracking',
      'Student progress tracking',
      'Attendance tracking',
      'Parent portal (up to 300 parents)',
      'Automated report cards',
      'Email support',
      'Weekly data sync',
    ],
    support: 'Email Support',
    popular: false,
  },
  {
    id: 2,
    name: 'Secondary School',
    description: 'For secondary schools with up to 1,000 students',
    price: 35000,
    priceAnnual: 105000,
    students: 1000,
    features: [
      'Up to 1,000 students',
      'Everything in Primary',
      'KCSE/CBC progress tracking',
      'Grade prediction engine',
      'Teacher workload dashboard',
      'County benchmarking',
      'Priority email & phone support',
      'Daily data sync',
      'Custom report builder',
    ],
    support: 'Priority Support',
    popular: true,
  },
  {
    id: 3,
    name: 'County Package',
    description: 'For schools managing multiple institutions',
    price: 95000,
    priceAnnual: 285000,
    students: 5000,
    features: [
      'Up to 5,000 students across schools',
      'Everything in Secondary',
      'Multi-school dashboard',
      'Cross-school analytics',
      'Custom analytics projects',
      'Dedicated account manager',
      '24/7 phone & WhatsApp support',
      'Real-time data sync',
      'API access',
      'Custom integrations',
    ],
    support: 'Premium Support',
    popular: false,
  },
];

export default {
  kenyaCounties,
  schoolInfo,
  academicTerms,
  currentTerm,
  subjects,
  students,
  classes,
  classAverages,
  schoolAverage,
  schoolAttendance,
  getSubjectAverages,
  topStudents,
  bottomStudents,
  atRiskStudents,
  attendanceHeatmap,
  staff,
  onlineStaff,
  activityFeed,
  kpiData,
  gradeDistribution,
  schoolPerformanceTrend,
  interventions,
  staffPerformance,
  testimonials,
  features,
  pricing,
};
