export const profile = {
  name: 'Jothi B',
  title: 'Computer Science & Engineering Student | Python & Java Developer',
  summary:
    'Computer Science and Engineering student passionate about software development, problem solving, and building practical technology solutions.',
  location: 'Hosur, Tamil Nadu, India',
  phone: '+91 63825 36602',
  phoneHref: 'tel:+916382536602',
  email: 'jothipasuvaraj12@gmail.com',
  github: 'https://github.com/jothi-pixel',
  githubHandle: 'jothi-pixel',
  linkedin: 'https://www.linkedin.com/in/jothi-b-173558377',
  linkedinHandle: 'jothi-b-173558377',
}

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
] as const

export const about =
  "I am a Computer Science and Engineering student with a CGPA of 8.37, currently pursuing my Bachelor's degree and graduating in 2027. I have hands-on experience with Python fundamentals through my internship and academic work, along with knowledge of Java, HTML, Git/GitHub, Linux, and networking fundamentals. I enjoy learning new technologies, solving programming problems, and building practical projects."

export const skillGroups = [
  { key: 'languages', title: 'Programming Languages', items: ['Java', 'Python'] },
  { key: 'web', title: 'Web Technologies', items: ['HTML'] },
  { key: 'vcs', title: 'Version Control', items: ['Git', 'GitHub'] },
  { key: 'os', title: 'Operating Systems', items: ['Linux', 'Ubuntu'] },
  { key: 'network', title: 'Networking', items: ['TCP/IP', 'DNS', 'HTTP'] },
] as const

export const softSkills = [
  'Analytical Thinking',
  'Adaptable',
  'Time Management',
  'Diligent',
  'Dedicated',
  'Responsible',
]

export const project = {
  name: 'AgriVerse AI',
  tagline: 'AI-Powered Agriculture Platform',
  tech: ['Python', 'Machine Learning', 'HTML'],
  description:
    'An AI-powered agriculture platform designed to support farming decisions through intelligent recommendations and smart agricultural solutions.',
  highlights: [
    "Built the platform's core logic in Python to generate crop and resource recommendations from farmer input data.",
    'Designed a responsive web interface for desktop and mobile users.',
    'Implemented AI-driven analysis of soil moisture and nutrients to generate suitable fertilizer recommendations.',
    'Focused on using technology to support farming productivity and decision-making.',
  ],
  live: 'https://agriverseai.vercel.app',
  repo: 'https://github.com/jothi-pixel/AgriVerseAI',
}

export const experiences = [
  {
    role: 'Python Intern',
    company: 'JRM Infotech',
    location: 'Remote',
    duration: 'June 2025 – July 2025',
    points: [
      'Wrote and debugged Python scripts covering data structures, functions, and file handling under mentor review.',
      'Practiced clean coding standards including naming, comments, and modular functions.',
      'Worked with mentors to troubleshoot logic errors and improve problem-solving skills.',
    ],
  },
  {
    role: 'Web Development Intern',
    company: 'Falcon Fin Solution',
    location: null,
    duration: 'One Month Internship',
    points: [
      'Completed a one-month internship focused on web development.',
      'Gained practical exposure to developing and designing web-based applications.',
      'Worked with web development concepts and improved understanding of frontend development.',
      'Developed practical experience in applying web technologies in a professional environment.',
    ],
  },
]

export const education = [
  {
    degree: 'Bachelor of Engineering — Computer Science and Engineering',
    short: 'B.E. CSE',
    school: 'Er. Perumal Manimekalai College of Engineering, Hosur',
    period: 'Graduation: 2027',
    score: 'CGPA: 8.37',
  },
  {
    degree: 'HSC — Higher Secondary Certificate',
    short: 'HSC',
    school: 'Government Girls Higher Secondary School, Shoolagiri',
    period: '2023',
    score: 'Aggregate: 88%',
  },
  {
    degree: 'SSLC — Secondary School Leaving Certificate',
    short: 'SSLC',
    school: 'Government Girls Higher Secondary School, Shoolagiri',
    period: '2021',
    score: 'Aggregate: 100%',
  },
]

export const certifications = [
  { key: 'hackathon', title: 'TNWISE Women Hackathon 2025', issuer: 'Participant' },
  { key: 'web', title: 'Web Development Workshop', issuer: 'PMC Tech' },
  { key: 'uiux', title: 'UI/UX Fundamentals', issuer: 'Skillcraft Technology' },
] as const

export const achievement = {
  title: '1st Place — Kho Kho',
  description: 'Secured 1st place in an inter-college Kho Kho competition.',
}
