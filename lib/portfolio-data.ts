// Single source of truth for portfolio content.
// Any value set to `null` or wrapped in [brackets] is a placeholder awaiting verified information.

export const profile = {
  name: 'Krovvidi Raghuram',
  headline: 'Software Developer · Java Backend · Aspiring Data Engineer',
  intro:
    'Assistant System Engineer at Tata Consultancy Services working with Java, SQL, and REST APIs. Currently building my Data Engineering skill set through structured coursework in Python and SQL.',
  roles: ['Java Backend Developer', 'Software Engineer', 'Data Engineer'],
  location: null as string | null,
  email: null as string | null,
  linkedin: null as string | null,
  github: null as string | null,
  resumeUrl: null as string | null,
}

export const about = [
  'I am a software developer at Tata Consultancy Services, where I joined as an Assistant System Engineer in May 2024. My work centers on backend development, API integration, and SQL.',
  'I am now expanding into Data Engineering — studying Python, SQL, and data engineering fundamentals through the Bosscoder Academy program — with the goal of building reliable data systems on top of a solid backend foundation.',
]

export type Skill = { name: string; note?: string }

export const experiencedSkills: Skill[] = [
  { name: 'Java' },
  { name: 'SQL' },
  { name: 'REST APIs' },
  { name: 'Git' },
  { name: 'Node.js', note: 'Project work' },
  { name: 'Express', note: 'Project work' },
  { name: 'MongoDB Atlas', note: 'Project work' },
  { name: 'AWS Cloud Fundamentals', note: 'Certified' },
]

export const learningSkills: Skill[] = [
  { name: 'Python' },
  { name: 'Advanced SQL for Analytics' },
  { name: 'Data Engineering Fundamentals' },
  { name: '[Add specific data tools, e.g. Spark / Airflow]' },
]

export const experience = [
  {
    company: 'Tata Consultancy Services',
    role: 'Assistant System Engineer',
    period: 'May 2024 — Present',
    focus: ['Backend Development', 'API Integration', 'SQL'],
    details: [
      '[Placeholder: describe a specific backend responsibility or module you work on]',
      '[Placeholder: describe an API integration you contributed to]',
      '[Placeholder: describe SQL / database work you handle]',
    ],
  },
]

export type Project = {
  title: string
  tagline: string
  description: string
  features: string[]
  tags: string[]
  github: string | null
  demo: string | null
}

export const projects: Project[] = [
  {
    title: 'SkillRadar',
    tagline: 'AI-powered career intelligence platform',
    description:
      'Helps users understand where they stand and what to learn next by analysing resumes against market demand.',
    features: [
      'Resume analysis',
      'Skill-gap analysis',
      'Trending skills insights',
      'Certification recommendations',
    ],
    tags: ['AI', '[Add tech stack]'],
    github: null,
    demo: null,
  },
  {
    title: 'Blood Bank Management System',
    tagline: 'Full-stack management application',
    description:
      'A web application for managing blood bank records, built on a Node.js and Express backend with a cloud-hosted MongoDB database.',
    features: ['[Placeholder: add key features, e.g. donor records, inventory tracking]'],
    tags: ['Node.js', 'Express', 'MongoDB Atlas'],
    github: null,
    demo: null,
  },
]

export const learning = [
  {
    title: 'Data Engineering Program',
    provider: 'Bosscoder Academy',
    status: 'In progress',
    topics: ['Python', 'SQL', 'Data Engineering'],
  },
  {
    title: 'Ongoing Technical Development',
    provider: 'Self-directed',
    status: 'Continuous',
    topics: ['Python', 'SQL', 'Backend fundamentals'],
  },
]

export const certifications = [
  {
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    issued: null as string | null,
    credentialUrl: null as string | null,
  },
]

export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Learning', href: '#learning' },
  { label: 'Contact', href: '#contact' },
]
