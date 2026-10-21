export const socialLinks = {
  linkedin: 'https://www.linkedin.com/in/jakemondragon',
  github: 'https://github.com/jbmondragon',
  facebook: 'https://web.facebook.com/jeiku.katsuki',
};

export const contactInfo = {
  phone: '+639263675034',
  phoneDisplay: '+63 926 367 5034',
  email: 'mondragonjake53@gmail.com',
  location: 'Barugo, Leyte, Philippines',
};

// Drop the exported resume PDF at public/Jake-Mondragon-CV.pdf
export const cvPath = '/Jake-Mondragon-CV.pdf';

export const summary =
  'Computer Science student at UP Tacloban with 200 hours of data analytics internship experience. I clean and migrate messy records, automate recurring reports, and build dashboards that non-technical teams can act on.';

export const experience = [
  {
    role: 'Data Analytics Intern',
    org: 'Advanced Thinkers',
    period: 'Mid-year 2026 · 200 hours',
    points: [
      'Automated recurring weekly HR, marketing and monthly/quarterly financial reports in Excel and PDF.',
      'Migrated HR, marketing and financial records from Google Sheets into a centralized reporting database.',
      'Built a Django web app that automates HR and marketing metric processing.',
      'Designed dashboards that turn validated data into visual reports for non-technical stakeholders.',
    ],
  },
  {
    role: 'Logistics Head Officer',
    org: 'Alpha Phi Omega, Theta Zeta Chapter',
    period: 'Present',
    points: [
      'Maintain chapter inventory in Excel, reconciled against physical counts.',
      'Canvass prices and write procurement reports aligned with budget and timelines.',
    ],
  },
];

export const education = [
  { school: 'University of the Philippines Tacloban', degree: 'BS Computer Science', period: '2023 – 2027' },
  { school: 'Granja Kalinawan National High School', degree: 'Senior High School, STEM', period: '2021 – 2023' },
];

export const skills = [
  { group: 'Data', items: ['SQL', 'Python', 'R', 'Excel', 'Data cleaning'] },
  { group: 'Visualization', items: ['Power BI', 'Tableau', 'Dashboards'] },
  { group: 'Databases', items: ['MySQL', 'PostgreSQL', 'Data modeling'] },
  { group: 'Web', items: ['Laravel', 'Django', 'JavaScript', 'Tailwind CSS'] },
  { group: 'Tools', items: ['Git', 'GitHub', 'Kaggle', 'Trello'] },
];

export const certifications = [
  'Civil Service Exam Passer (2026)',
  'Google Data Analytics courses (7), incl. Data Analysis with R Programming',
  'Data Analyst Internship Certificate, 200 hours (2026)',
  'Contributor, Region VIII AI Roadmapping (2026)',
  'Data Labeling Job Simulation',
];
