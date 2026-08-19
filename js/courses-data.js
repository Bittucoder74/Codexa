/**
 * ==================================================
 * CODEXA TECH ACADEMY — COURSE DATA
 * --------------------------------------------------
 * Single source of truth for course details. The
 * Courses page reads `category`/`title`/etc. for its
 * cards and carousel; course-detail.html reads the full
 * object (by ?course=<id> in the URL) to render one
 * page that works for every course.
 *
 * These are the 7 real courses launching now. See
 * CX_COMING_SOON below for the 3 courses in progress
 * that intentionally do NOT have a detail page yet —
 * don't add them here until the trainer is actually
 * ready to teach them (see README "Honesty" note).
 * ================================================== */

const CX_COURSES = [
  {
    id: 'web-design',
    category: 'development',
    categoryLabel: 'Development',
    title: 'AI-Powered Web Design & Development',
    tagline: 'Build and ship real websites',
    duration: '5 Months',
    level: 'Beginner Friendly',
    price: '₹8,000',
    marketPrice: '₹15,000–₹30,000',
    thumbClass: 'cx-course-visual-a',
    description: "Learn to build and ship real, live websites — from HTML/CSS fundamentals through Bootstrap, Tailwind, WordPress and modern AI-assisted workflows. Every project is hosted and deployed, not just handed in.",
    highlights: [
      'HTML5, CSS3 & Modern JavaScript (ES6+)',
      'Bootstrap, Tailwind & GSAP Animation',
      'WordPress & Elementor',
      'Git, GitHub & Deployment',
      'ChatGPT, Claude AI & GitHub Copilot in your workflow',
      'Certificate upon completion'
    ],
    modules: [
      { title: 'Module 1: Foundation', topics: ['HTML5 & Semantic Markup', 'CSS3 & Responsive Design', 'Modern JavaScript (ES6+)', 'Git & Version Control'] },
      { title: 'Module 2: Frameworks & Styling', topics: ['Bootstrap & Tailwind CSS', 'GSAP Animation', 'Component-based layout', 'Responsive design systems'] },
      { title: 'Module 3: WordPress & CMS', topics: ['WordPress fundamentals', 'Elementor page building', 'Custom themes', 'Client-ready sites'] },
      { title: 'Module 4: AI Tools & Deployment', topics: ['ChatGPT & Claude for development', 'GitHub Copilot', 'Netlify / Vercel deployment', 'Portfolio & landing page projects'] }
    ],
    faqs: [
      { q: 'Do I need prior coding experience?', a: 'No — the course starts from HTML/CSS fundamentals and builds up. A short conversation during admission helps place you in the right batch.' },
      { q: 'What projects will I build?', a: "Portfolio, business, restaurant and landing page projects — all live and hosted by the end of the course." },
      { q: 'Will I get placement support?', a: 'Yes — mock interviews, resume reviews and honest guidance are part of every batch. We support your job search; we don\u2019t promise a guaranteed job.' }
    ]
  },
  {
    id: 'ms-office',
    category: 'office',
    categoryLabel: 'Office & Excel',
    title: 'MS Office with AI',
    tagline: 'The most useful, most underrated office skill',
    duration: '2.5 Months',
    level: 'Beginner Friendly',
    price: '₹2,500',
    marketPrice: '₹3,000–₹6,000',
    thumbClass: 'cx-course-visual-b',
    description: "A practical, foundation-first course in Word, Excel and PowerPoint, plus how to actually use AI tools like ChatGPT and Copilot to work faster — the single most useful skill for almost any office job.",
    highlights: [
      'Computer & Internet Fundamentals',
      'MS Word, Excel & PowerPoint',
      'Professional Documents & Presentations',
      'Google Workspace & Canva',
      'ChatGPT, Copilot, Gemini & Gamma.app',
      'Certificate upon completion'
    ],
    modules: [
      { title: 'Module 1: Fundamentals', topics: ['Computer & internet basics', 'File management', 'Typing & productivity habits', 'Introduction to AI tools'] },
      { title: 'Module 2: MS Word & Documents', topics: ['Professional formatting', 'Templates & mail merge', 'Business documents', 'AI-assisted writing'] },
      { title: 'Module 3: MS PowerPoint', topics: ['Presentation design', 'Gamma.app & Canva', 'Storytelling with slides', 'Client-ready decks'] },
      { title: 'Module 4: Workspace & AI', topics: ['Google Workspace', 'Copilot & Gemini in daily work', 'Digital workspace setup', 'Final project'] }
    ],
    faqs: [
      { q: 'Is this course useful if I already know basic computers?', a: 'Yes — the AI tools and professional-document modules go well beyond typical basic-computer courses.' },
      { q: 'Will I get placement support?', a: 'Yes — resume guidance and interview prep are part of the course. We support your job search; we don\u2019t promise a guaranteed job.' }
    ]
  },
  {
    id: 'advanced-excel',
    category: 'office',
    categoryLabel: 'Office & Excel',
    title: 'Advanced Excel with AI',
    tagline: 'Turn raw data into business decisions',
    duration: '3.5 Months',
    level: 'Beginner Friendly',
    price: '₹4,500',
    marketPrice: '₹5,000–₹10,000',
    thumbClass: 'cx-course-visual-c',
    description: "Go from core formulas to XLOOKUP, Pivot Tables, Power Query, Power Pivot and VBA/Macros — with Copilot in Excel and ChatGPT integrated into how you actually build reports and dashboards.",
    highlights: [
      'Core Formulas & Cell Referencing',
      'XLOOKUP & INDEX-MATCH',
      'Pivot Tables & Dashboards',
      'Power Query & Power Pivot',
      'VBA / Macros',
      'Copilot in Excel & ChatGPT'
    ],
    modules: [
      { title: 'Module 1: Foundations', topics: ['Core formulas & formatting', 'Cell referencing', 'Data cleaning', 'Excel shortcuts'] },
      { title: 'Module 2: Lookups & Analysis', topics: ['XLOOKUP & INDEX-MATCH', 'Conditional logic', 'Data validation', 'What-if analysis'] },
      { title: 'Module 3: Pivot Tables & Power Tools', topics: ['Pivot Tables & Dashboards', 'Power Query', 'Power Pivot', 'Data modeling'] },
      { title: 'Module 4: Automation & AI', topics: ['VBA / Macros', 'Copilot in Excel', 'Automated business dashboard', 'Live reporting workbook project'] }
    ],
    faqs: [
      { q: 'Do I need to know basic Excel first?', a: 'Basic familiarity helps, but core formulas are refreshed at the start of the course before moving into advanced topics.' },
      { q: 'Will I get placement support?', a: 'Yes — resume guidance and interview prep are part of the course. We support your job search; we don\u2019t promise a guaranteed job.' }
    ]
  },
  {
    id: 'backend-development',
    category: 'backend',
    categoryLabel: 'Backend',
    title: 'AI Backend Development',
    tagline: 'Power the systems behind every app',
    duration: '5 Months',
    level: 'Beginner to Advanced',
    price: '₹9,000',
    marketPrice: '₹20,000–₹35,000',
    thumbClass: 'cx-course-visual-d',
    description: "Learn PHP, SQL and MySQL fundamentals through to Laravel and Node.js/Express — building real REST APIs with authentication, using ChatGPT, Supabase and Cursor AI as part of the actual workflow.",
    highlights: [
      'PHP, SQL & MySQL Fundamentals',
      'Laravel Framework',
      'Node.js & Express',
      'REST API Design & Authentication',
      'Git, GitHub & Postman',
      'ChatGPT, Supabase & Cursor AI'
    ],
    modules: [
      { title: 'Module 1: Foundations', topics: ['PHP fundamentals', 'SQL & MySQL', 'Database design basics', 'Git & GitHub'] },
      { title: 'Module 2: Laravel', topics: ['Laravel project structure', 'Routing & controllers', 'Eloquent ORM', 'Authentication'] },
      { title: 'Module 3: Node.js & Express', topics: ['Node.js fundamentals', 'Express routing & middleware', 'REST API design', 'Postman testing'] },
      { title: 'Module 4: Real Systems', topics: ['Authentication & authorization', 'ChatGPT & Cursor AI in backend work', 'Supabase', 'Capstone REST API project'] }
    ],
    faqs: [
      { q: 'Do I need prior programming experience?', a: 'No — PHP and SQL fundamentals are taught from the ground up before moving into frameworks.' },
      { q: 'Will I get placement support?', a: 'Yes — resume guidance and interview prep are part of the course. We support your job search; we don\u2019t promise a guaranteed job.' }
    ]
  },
  {
    id: 'ui-ux-design',
    category: 'design',
    categoryLabel: 'Design',
    title: 'AI UI/UX Design',
    tagline: 'Design products people actually enjoy using',
    duration: '6 Months',
    level: 'Beginner Friendly',
    price: '₹10,000',
    marketPrice: '₹25,000–₹42,000',
    thumbClass: 'cx-course-visual-e',
    description: "Learn Figma, design systems and real user research to design products people can actually use — not just admire. Finish with 2–3 complete portfolio case studies, with Figma AI and Uizard woven into the process.",
    highlights: [
      'UX Research, User Flow & Personas',
      'Figma from Scratch',
      'UI Design, Typography & Color Theory',
      'Design Systems & Prototyping',
      'Photoshop, Illustrator, Miro & FigJam',
      'Figma AI, Uizard & Framer AI'
    ],
    modules: [
      { title: 'Module 1: Design Foundations', topics: ['Design principles', 'Color & typography', 'Figma basics', 'Layout & grids'] },
      { title: 'Module 2: UX Research', topics: ['User research methods', 'Personas & journey maps', 'Information architecture', 'Wireframing'] },
      { title: 'Module 3: UI & Prototyping', topics: ['Design systems', 'High-fidelity UI', 'Interactive prototyping', 'Usability testing'] },
      { title: 'Module 4: Portfolio & AI Tools', topics: ['Figma AI & Uizard/Framer AI', 'Case study writing', 'Portfolio website', 'Mock interviews'] }
    ],
    faqs: [
      { q: 'Do I need drawing or art skills?', a: "No — UI/UX design is about problem-solving and structure, not illustration." },
      { q: 'Will I get placement support?', a: 'Yes — resume guidance and interview prep are part of the course. We support your job search; we don\u2019t promise a guaranteed job.' }
    ]
  },
  {
    id: 'full-stack',
    category: 'development',
    categoryLabel: 'Development',
    title: 'AI Full Stack Web Development',
    tagline: 'Frontend, backend and database, end to end',
    duration: '7 Months (Intensive, 4 days/week)',
    level: 'Beginner to Advanced',
    price: '₹15,000',
    marketPrice: '₹50,000–₹65,000',
    thumbClass: 'cx-course-visual-a',
    description: "An intensive, end-to-end program covering HTML/CSS/JS through PHP, SQL, Laravel, WordPress and MySQL, finishing in a deployed capstone application. Runs 4 days a week.",
    highlights: [
      'HTML, CSS, JavaScript & Bootstrap',
      'PHP, SQL, Laravel & MySQL',
      'WordPress',
      'Git, GitHub & Deployment',
      'ChatGPT & Claude AI throughout',
      'Capstone full-stack application'
    ],
    modules: [
      { title: 'Module 1: Frontend Foundations', topics: ['HTML5, CSS3 & Bootstrap', 'Modern JavaScript', 'Responsive design', 'Git & GitHub'] },
      { title: 'Module 2: Backend Foundations', topics: ['PHP fundamentals', 'SQL & MySQL', 'Laravel basics', 'REST APIs'] },
      { title: 'Module 3: CMS & Integration', topics: ['WordPress', 'Connecting frontend & backend', 'Authentication', 'Deployment workflows'] },
      { title: 'Module 4: Capstone', topics: ['ChatGPT & Claude AI in the workflow', 'End-to-end capstone build', 'Testing & deployment', 'Portfolio & resume prep'] }
    ],
    faqs: [
      { q: 'Why is this course intensive?', a: 'It runs 4 days a week instead of the usual 3, to cover frontend, backend and deployment in 7 months instead of closer to 9–10.' },
      { q: 'Will I get placement support?', a: 'Yes — resume guidance and interview prep are part of the course. We support your job search; we don\u2019t promise a guaranteed job.' }
    ]
  },
  {
    id: 'digital-marketing',
    category: 'marketing',
    categoryLabel: 'Marketing',
    title: 'AI Digital Marketing & SEO',
    tagline: 'Get brands found, followed and sold',
    duration: '4 Months',
    level: 'Beginner Friendly',
    price: '₹7,000',
    marketPrice: '₹15,000–₹30,000',
    thumbClass: 'cx-course-visual-f',
    description: "SEO, paid ads, social media marketing and analytics, taught by our dedicated Digital Marketing faculty — kept as a specialist-taught course rather than stretched across a generalist trainer.",
    highlights: [
      'SEO Fundamentals & Content Marketing',
      'Google Ads & Meta Ads',
      'Social Media Marketing',
      'Analytics & Reporting',
      'ChatGPT, Canva AI, Jasper AI & Gemini',
      'Taught by our dedicated Digital Marketing faculty'
    ],
    modules: [
      { title: 'Module 1: Marketing Foundations', topics: ['Digital marketing overview', 'Audience research', 'Content strategy', 'Brand positioning'] },
      { title: 'Module 2: SEO', topics: ['On-page & off-page SEO', 'Keyword research', 'Technical SEO basics', 'SEO tools'] },
      { title: 'Module 3: Paid Advertising', topics: ['Google Ads', 'Meta Ads', 'Campaign optimization', 'Budgeting & bidding'] },
      { title: 'Module 4: Analytics & AI Tools', topics: ['Analytics & reporting', 'ChatGPT, Canva AI & Jasper AI', 'A/B testing', 'Live ad campaign & SEO audit project'] }
    ],
    faqs: [
      { q: 'Who teaches this course?', a: 'A dedicated Digital Marketing faculty member — kept separate from our generalist trainer so it\u2019s taught by a specialist.' },
      { q: 'Will I get placement support?', a: 'Yes — resume guidance and interview prep are part of the course. We support your job search; we don\u2019t promise a guaranteed job.' }
    ]
  }
];

/**
 * ==================================================
 * COMING SOON — NOT YET OPEN FOR ADMISSION
 * --------------------------------------------------
 * These courses are intentionally excluded from
 * CX_COURSES (no detail page yet) because our trainer
 * is still building full confidence in them. Listing
 * them here as "Coming Soon" only — see the Courses
 * page for how these render (no "Explore Course" link,
 * no fee, no fixed launch date).
 * ================================================== */
const CX_COMING_SOON = [
  {
    id: 'react-development',
    categoryLabel: 'Development',
    title: 'AI React Development',
    desc: 'Modern frontend framework — React, Next.js, Redux Toolkit.'
  },
  {
    id: 'data-analytics',
    categoryLabel: 'Data & Analytics',
    title: 'AI Data Analytics',
    desc: 'SQL, Python basics, Power BI, dashboards & reporting.'
  },
  {
    id: 'python-automation',
    categoryLabel: 'Backend',
    title: 'AI Python Programming & Automation',
    desc: 'Python, APIs, automation scripts, FastAPI.'
  }
];