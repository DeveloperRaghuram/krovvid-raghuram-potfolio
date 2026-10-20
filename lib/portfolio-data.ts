// Single source of truth for portfolio content.
// Any value set to `null` or wrapped in [brackets] is a placeholder awaiting verified information.

export const profile = {
  name: 'Krovvidi Raghuram',
  headline: 'Java Backend Developer · SQL · Data Engineering',
  intro:
    'Software developer with 2+ years at Tata Consultancy Services building Java backend services, REST API integrations, Oracle SQL workflows, and identity-management integrations. Currently expanding into Data Engineering with Python and advanced SQL.',
  roles: ['Java Backend Developer', 'Software Engineer', 'Data Engineer'],
  photo: '/images/raghuram.jpg',
  location: 'Hyderabad, India' as string | null,
  email: 'raghuram40267@gmail.com' as string | null,
  phone: '+91 9966345090' as string | null,
  linkedin: 'https://www.linkedin.com/in/krovvidi-raghuram-a2b112201/' as string | null,
  github: null as string | null,
  resumeUrl: '/Krovvidi_Raghuram_Resume.docx' as string | null,
}

export const about = [
  'I am a software developer at Tata Consultancy Services, where I have worked since May 2024 on Java-based backend services, Jersey REST API integrations, Oracle SQL, and identity-management workflows with LDAP and Keycloak.',
  'My day-to-day spans troubleshooting integration failures, data synchronization, and enterprise application support. I am now expanding into Data Engineering through the Bosscoder Academy program and hands-on practice in Python and advanced SQL.',
]

export const education = {
  degree: 'B.Tech, Electronics and Communication Engineering',
  school: 'KL University, Vijayawada',
  year: '2023',
  grade: 'CGPA 8.22/10',
}

export type Skill = { name: string; note?: string }

export const experiencedSkills: Skill[] = [
  { name: 'Java', note: 'Languages' },
  { name: 'SQL · Oracle SQL · PL/SQL', note: 'Databases' },
  { name: 'Jersey REST APIs · JDBC · Struts', note: 'Backend' },
  { name: 'Spring Boot', note: 'Fundamentals' },
  { name: 'MySQL · MongoDB', note: 'Databases' },
  { name: 'LDAP · Keycloak', note: 'Identity' },
  { name: 'Oracle WebLogic', note: 'Deployment' },
  { name: 'Git · Jenkins · Maven · Postman', note: 'Tooling' },
  { name: 'AWS Cloud Practitioner', note: 'Certified' },
]

export const learningSkills: Skill[] = [
  { name: 'Python' },
  { name: 'Advanced SQL', note: 'CTEs · window functions' },
  { name: 'Joins, subqueries & aggregations' },
  { name: 'ETL / ELT concepts' },
  { name: 'Data pipeline design' },
]

export const experience = [
  {
    company: 'Tata Consultancy Services (TCS)',
    role: 'Assistant System Engineer · Java Backend Developer',
    period: 'May 2024 — Present · Hyderabad',
    focus: ['Java', 'Jersey REST APIs', 'Oracle SQL', 'LDAP', 'Keycloak', 'WebLogic'],
    details: [
      'Develop and support Java backend components and Jersey-based REST API integrations for enterprise applications.',
      'Work with Oracle SQL and database procedures to retrieve, validate, and update records in integration workflows.',
      'Support identity-management integrations involving LDAP and Keycloak, including user lifecycle operations and synchronization.',
      'Troubleshoot integration failures, investigate application and database issues, and support deployments on Oracle WebLogic.',
      'Contributed to workflow automation that reduced manual effort in integration operations.',
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
    title: 'User Automation Daemon',
    tagline: 'Enterprise user lifecycle automation · TCS',
    description:
      'A Java-based automation daemon built on Jersey APIs that automates user lifecycle management across enterprise systems.',
    features: [
      'Automated user provisioning and lifecycle operations',
      'Secure synchronization across Oracle SQL, LDAP, and Keycloak',
      'Reusable, maintainable components for integration workflows',
      'Designed with performance in mind for enterprise scale',
    ],
    tags: ['Java', 'Jersey', 'Oracle SQL', 'LDAP', 'Keycloak'],
    github: null,
    demo: null,
  },
  {
    title: 'iManage Self-Care Application',
    tagline: 'Customer-facing telecom platform',
    description:
      'Supported a live telecom self-care application built with Java and Struts, keeping a customer-facing service reliable in production.',
    features: [
      'Investigated production issues through application log analysis',
      'Analyzed and optimized SQL queries',
      'Collaborated on bug fixes, patches, and releases',
      'Incident handling with SLA-driven priorities',
    ],
    tags: ['Java', 'Struts', 'SQL', 'Production Support'],
    github: null,
    demo: null,
  },
]

export const learning = [
  {
    title: 'Data Engineering Program',
    provider: 'Bosscoder Academy',
    status: 'In progress',
    topics: ['Python', 'Advanced SQL', 'Data Engineering'],
  },
  {
    title: 'Ongoing Practice',
    provider: 'Self-directed',
    status: 'Continuous',
    topics: ['Python', 'SQL problem-solving', 'Data processing'],
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
