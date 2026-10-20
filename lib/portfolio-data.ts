// Single source of truth for portfolio content.
// Any value set to `null` or wrapped in [brackets] is a placeholder awaiting verified information.

export const profile = {
  name: 'Krovvidi Raghuram',
  headline: 'Software Engineer | Java Backend Developer | Aspiring Data Engineer',
  intro:
    'Software Engineer with 2+ years at Tata Consultancy Services in enterprise Java development, REST API integration, Oracle SQL, and backend automation. Building Data Engineering skills through Python, SQL, and a hands-on ETL project.',
  roles: ['Software Engineer', 'Java Backend Developer', 'Aspiring Data Engineer'],
  photo: '/images/raghuram.jpg',
  location: 'Hyderabad, India' as string | null,
  email: 'raghuram40267@gmail.com' as string | null,
  phone: '+91 9966345090' as string | null,
  linkedin: 'https://www.linkedin.com/in/krovvidi-raghuram-a2b112201/' as string | null,
  github: 'https://github.com/DeveloperRaghuram' as string | null,
  resumeUrl: '/Krovvidi_Raghuram_Resume_2026.docx' as string | null,
}

export const about = [
  'I am a Software Engineer at Tata Consultancy Services, where I have worked since May 2024 on Java-based user lifecycle automation with LDAP and Keycloak, Jersey REST API integrations, and Oracle SQL for backend data processing and synchronization.',
  'Alongside deployments on Oracle WebLogic and production support, I am building Data Engineering skills through the Bosscoder Academy program and a personal ETL pipeline project in Python, pandas, SQL, and SQLite.',
]

export const education = {
  degree: 'B.Tech, Electronics and Communication Engineering',
  school: 'KL University',
  year: '2023',
  grade: 'CGPA 8.22/10',
}

export type Skill = { name: string; note?: string }

export const experiencedSkills: Skill[] = [
  { name: 'Java · SQL · JavaScript', note: 'Programming' },
  { name: 'Jersey REST APIs · Struts · RESTful services', note: 'Backend' },
  { name: 'Object-oriented programming', note: 'Backend' },
  { name: 'Oracle Database · MariaDB', note: 'Databases' },
  { name: 'LDAP · Keycloak', note: 'Integration' },
  { name: 'Oracle WebLogic · Maven · Git', note: 'Build & deploy' },
  { name: 'Oracle SQL Developer · MySQL Workbench', note: 'Tools' },
  { name: 'Eclipse · IntelliJ IDEA · Postman', note: 'Tools' },
  { name: 'AWS Cloud Practitioner', note: 'Certified' },
]

export const learningSkills: Skill[] = [
  { name: 'Python', note: 'Project work · learning' },
  { name: 'pandas · SQLite', note: 'Personal project' },
  { name: 'SQL analytics', note: 'Personal project' },
  { name: 'ETL fundamentals', note: 'Learning' },
  { name: 'Data validation · cleansing · deduplication', note: 'Personal project' },
]

export const experience = [
  {
    company: 'Tata Consultancy Services (TCS)',
    role: 'Assistant System Engineer | Java Developer',
    period: 'May 2024 – Present · Hyderabad, India',
    focus: ['Java', 'Jersey REST APIs', 'Oracle SQL', 'LDAP', 'Keycloak', 'WebLogic'],
    details: [
      'Developed and supported Java-based user lifecycle automation using LDAP and Keycloak.',
      'Built and supported Jersey REST API integrations for enterprise applications.',
      'Worked with Oracle SQL for backend data processing, record validation, and synchronization.',
      'Supported application deployments and maintenance on Oracle WebLogic.',
      'Handled production troubleshooting, application-log analysis, and SQL query analysis, and supported bug fixes and releases.',
    ],
  },
]

export type Project = {
  slug: string
  kind: 'personal' | 'professional'
  title: string
  tagline: string
  description: string
  features: string[]
  tags: string[]
  github: string | null
  detailHref: string | null
}

export const projects: Project[] = [
  {
    slug: 'retail-sales-pipeline',
    kind: 'personal',
    title: 'Retail Sales Data Engineering Pipeline',
    tagline: 'Batch ETL pipeline · Personal project',
    description:
      'An end-to-end batch pipeline that ingests synthetic retail sales data from CSV, cleans and validates it, loads it into SQLite, and produces SQL analytics.',
    features: [
      'Built a batch ETL pipeline to ingest synthetic retail sales data from CSV',
      'Implemented data validation, date parsing, invalid-record rejection, and duplicate removal',
      'Loaded cleaned data into a SQLite database',
      'Generated SQL analytics for monthly revenue, category performance, and top products',
      'Exported curated CSV reports and a JSON pipeline summary',
    ],
    tags: ['Python', 'pandas', 'SQL', 'SQLite', 'Git'],
    github: 'https://github.com/DeveloperRaghuram/retail-sales-data-engineering-pipeline',
    detailHref: '/projects/retail-sales-pipeline',
  },
  {
    slug: 'user-automation-daemon',
    kind: 'professional',
    title: 'User Automation Daemon',
    tagline: 'Enterprise user lifecycle automation · TCS',
    description:
      'Java-based automation for user management and synchronization across enterprise systems, built on Jersey REST APIs.',
    features: [
      'User lifecycle automation across LDAP and Keycloak',
      'Integration workflows built on Jersey REST APIs',
      'Oracle SQL for record validation and synchronization',
      'Focus on maintainable components and secure user provisioning',
    ],
    tags: ['Java', 'Jersey REST APIs', 'Oracle SQL', 'LDAP', 'Keycloak'],
    github: null,
    detailHref: null,
  },
  {
    slug: 'imanage-self-care',
    kind: 'professional',
    title: 'iManage Self-Care Application',
    tagline: 'Telecom domain · TCS',
    description:
      'Supported a live, customer-facing telecom self-care application built with Java and Struts.',
    features: [
      'Production troubleshooting for a live application',
      'Application-log analysis to investigate issues',
      'SQL query analysis',
      'Support for bug fixes, patches, and releases',
    ],
    tags: ['Java', 'Struts', 'SQL', 'Production Support'],
    github: null,
    detailHref: null,
  },
]

export const pipelineDetail = {
  architecture: [
    'Synthetic raw CSV',
    'Python ingestion + validation',
    'Cleaning + deduplication',
    'SQLite warehouse (sales table)',
    'SQL transformations / analytics',
    'CSV reports in output/',
  ],
  qualityRules: [
    'Required fields: transaction_id, order_date, product, category, quantity, unit_price, region.',
    'Rows missing required values are rejected.',
    'Dates must parse successfully.',
    'Quantity must be greater than zero.',
    'Unit price must be zero or greater.',
    'Duplicate transaction IDs keep the first valid occurrence.',
    'Revenue is calculated as quantity × unit_price.',
  ],
  outputs: [
    { file: 'output/clean_sales.csv', text: 'Validated, deduplicated transactions' },
    { file: 'output/monthly_revenue.csv', text: 'Revenue aggregated by month' },
    { file: 'output/revenue_by_category.csv', text: 'Category performance' },
    { file: 'output/top_products.csv', text: 'Top products by revenue' },
    { file: 'output/pipeline_summary.json', text: 'Run summary of the pipeline' },
  ],
  note: 'The data is synthetic and created for this project. It contains no company or customer data.',
}

export const learning = [
  {
    title: 'Data Engineering Program',
    provider: 'Bosscoder Academy',
    status: 'In progress',
    topics: ['Python', 'SQL', 'Data Engineering'],
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
