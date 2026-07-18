/**
 * ==================================================
 * CODEXA TECH ACADEMY — COURSE DATA
 * --------------------------------------------------
 * Single source of truth for course details. The
 * Courses page reads `category`/`title`/etc. for its
 * cards and carousel; course-detail.html reads the full
 * object (by ?course=<id> in the URL) to render one
 * page that works for every course.
 * ================================================== */

const CX_COURSES = [
  {
    id: 'full-stack',
    category: 'development',
    categoryLabel: 'Development',
    title: 'Full Stack Web Development',
    tagline: 'Become a job-ready Full Stack Developer',
    duration: '6 Months',
    level: 'Beginner to Advanced',
    price: '₹15,999',
    thumbClass: 'cx-course-visual-a',
    description: "Master full stack web development with a comprehensive, project-based program covering HTML, CSS, JavaScript, React and Node.js. Go from static pages to deployed, database-backed applications, with live projects and mentor code reviews the whole way.",
    highlights: [
      'HTML5, CSS3 & Modern JavaScript',
      'React.js for Frontend Development',
      'Node.js & Express for Backend APIs',
      'MongoDB Database Integration',
      'Git, Deployment & Live Projects',
      'Certificate upon completion'
    ],
    modules: [
      { title: 'Module 1: Web Fundamentals', topics: ['HTML5 & Semantic Markup', 'CSS3 & Responsive Design', 'JavaScript Basics & DOM', 'Git & Version Control'] },
      { title: 'Module 2: Frontend with React', topics: ['React Components & Props', 'State & Hooks', 'Routing & API Integration', 'Frontend Project'] },
      { title: 'Module 3: Backend with Node.js', topics: ['Node.js & Express Basics', 'REST API Design', 'Authentication & Middleware', 'MongoDB & Mongoose'] },
      { title: 'Module 4: Deployment & Capstone', topics: ['Testing & Debugging', 'Deployment (Render/Vercel)', 'Capstone Project', 'Portfolio & Resume Prep'] }
    ],
    faqs: [
      { q: 'Do I need prior coding experience?', a: 'No — the course starts from HTML/CSS fundamentals and builds up. A short assessment during admission places you in the right batch.' },
      { q: 'Is this course online or offline?', a: 'Both. Join live online classes from anywhere, or attend in person at our campus.' },
      { q: 'What projects will I build?', a: "You'll build several projects, ending with a full-stack capstone application you deploy live and add to your portfolio." },
      { q: 'Will I get placement support?', a: 'Yes — mock interviews, resume reviews, and introductions to hiring partners are part of every batch.' }
    ]
  },
  {
    id: 'mobile-app',
    category: 'development',
    categoryLabel: 'Development',
    title: 'Mobile App Development',
    tagline: 'Ship real Android & iOS apps with React Native',
    duration: '5 Months',
    level: 'Intermediate',
    price: '₹14,999',
    thumbClass: 'cx-course-visual-b',
    description: "Build and ship cross-platform mobile apps using React Native, from one shared codebase. Learn navigation, native device features, state management and how to publish to app stores.",
    highlights: [
      'React Native Fundamentals',
      'Navigation & State Management',
      'Native Device Features (Camera, GPS)',
      'API Integration & Local Storage',
      'App Store & Play Store Publishing',
      'Certificate upon completion'
    ],
    modules: [
      { title: 'Module 1: React Native Basics', topics: ['JSX & Core Components', 'Styling & Layout (Flexbox)', 'Navigation Basics', 'Debugging Tools'] },
      { title: 'Module 2: App Logic', topics: ['State Management', 'API Integration', 'Local Storage', 'Forms & Validation'] },
      { title: 'Module 3: Native Features', topics: ['Camera & Media', 'Location & Maps', 'Push Notifications', 'Permissions Handling'] },
      { title: 'Module 4: Publishing', topics: ['Testing on Real Devices', 'Performance Optimization', 'App Store Submission', 'Capstone Project'] }
    ],
    faqs: [
      { q: 'Do I need to know React first?', a: 'Basic JavaScript knowledge helps, but React fundamentals are covered before we get into React Native.' },
      { q: 'Will I build apps for both Android and iOS?', a: 'Yes — React Native lets you build for both platforms from a single codebase.' },
      { q: 'Do I need a Mac to build iOS apps?', a: "We'll guide you through the options, including cloud build services that don't require a Mac." },
      { q: 'Will I get placement support?', a: 'Yes — mock interviews, resume reviews, and introductions to hiring partners are part of every batch.' }
    ]
  },
  {
    id: 'data-science',
    category: 'data-ai',
    categoryLabel: 'Data & AI',
    title: 'Data Science & AI',
    tagline: 'Turn data into decisions with Python & ML',
    duration: '7 Months',
    level: 'Beginner to Advanced',
    price: '₹18,999',
    thumbClass: 'cx-course-visual-c',
    description: "Learn Python, statistics, and machine learning through real datasets and real business questions. Build models, visualize insights, and finish with a portfolio of data science projects.",
    highlights: [
      'Python for Data Analysis',
      'Statistics & Probability',
      'Machine Learning Fundamentals',
      'Data Visualization (Pandas, Matplotlib)',
      'Real Datasets & Case Studies',
      'Certificate upon completion'
    ],
    modules: [
      { title: 'Module 1: Python & Statistics', topics: ['Python for Data Analysis', 'NumPy & Pandas', 'Statistics & Probability', 'Data Cleaning'] },
      { title: 'Module 2: Data Visualization', topics: ['Matplotlib & Seaborn', 'Exploratory Data Analysis', 'Dashboards', 'Storytelling with Data'] },
      { title: 'Module 3: Machine Learning', topics: ['Supervised Learning', 'Model Evaluation', 'Unsupervised Learning', 'Intro to Neural Networks'] },
      { title: 'Module 4: Capstone', topics: ['End-to-End ML Project', 'Model Deployment Basics', 'Case Studies', 'Portfolio & Resume Prep'] }
    ],
    faqs: [
      { q: 'Do I need a math background?', a: "Basic math helps, but statistics and the math you need are taught from the ground up in the course itself." },
      { q: 'What tools will I learn?', a: 'Python, Pandas, NumPy, Matplotlib/Seaborn, and core machine learning libraries like scikit-learn.' },
      { q: 'Will I work with real data?', a: 'Yes — every module uses real or realistic datasets, ending in a full case-study project.' },
      { q: 'Will I get placement support?', a: 'Yes — mock interviews, resume reviews, and introductions to hiring partners are part of every batch.' }
    ]
  },
  {
    id: 'cloud-devops',
    category: 'data-ai',
    categoryLabel: 'Data & AI',
    title: 'Cloud & DevOps',
    tagline: 'Deploy and scale like real engineering teams',
    duration: '5 Months',
    level: 'Intermediate',
    price: '₹16,999',
    thumbClass: 'cx-course-visual-d',
    description: "Learn AWS, Docker, and CI/CD pipelines to deploy and scale real applications. Understand infrastructure-as-code and the workflows modern engineering teams use every day.",
    highlights: [
      'AWS Core Services',
      'Docker & Containerization',
      'CI/CD Pipelines',
      'Infrastructure as Code',
      'Monitoring & Logging',
      'Certificate upon completion'
    ],
    modules: [
      { title: 'Module 1: Cloud Fundamentals', topics: ['AWS Core Services', 'Networking Basics', 'IAM & Security', 'Cloud Cost Management'] },
      { title: 'Module 2: Containers', topics: ['Docker Fundamentals', 'Docker Compose', 'Container Registries', 'Container Best Practices'] },
      { title: 'Module 3: CI/CD', topics: ['Git Workflows', 'Build Pipelines', 'Automated Testing', 'Deployment Strategies'] },
      { title: 'Module 4: Production Readiness', topics: ['Infrastructure as Code', 'Monitoring & Logging', 'Scaling Applications', 'Capstone Project'] }
    ],
    faqs: [
      { q: 'Do I need prior cloud experience?', a: 'Some familiarity with the command line and basic networking helps, but AWS and Docker are taught from scratch.' },
      { q: 'Which cloud provider is covered?', a: "The course focuses on AWS, the most widely used platform, with concepts that transfer to other providers too." },
      { q: 'Is this course hands-on?', a: 'Yes — you deploy real applications throughout, not just watch demos.' },
      { q: 'Will I get placement support?', a: 'Yes — mock interviews, resume reviews, and introductions to hiring partners are part of every batch.' }
    ]
  },
  {
    id: 'ui-ux',
    category: 'design',
    categoryLabel: 'Design',
    title: 'UI/UX Design',
    tagline: 'Design products people actually enjoy using',
    duration: '4 Months',
    level: 'Beginner Friendly',
    price: '₹11,999',
    thumbClass: 'cx-course-visual-e',
    description: "Learn Figma, design systems, and user research to design products people can actually use, not just admire. Finish with a polished portfolio of real design case studies.",
    highlights: [
      'Figma from Scratch',
      'Design Systems & Components',
      'User Research & Wireframing',
      'Prototyping & Usability Testing',
      'Portfolio Case Studies',
      'Certificate upon completion'
    ],
    modules: [
      { title: 'Module 1: Design Foundations', topics: ['Design Principles', 'Color & Typography', 'Figma Basics', 'Layout & Grids'] },
      { title: 'Module 2: UX Research', topics: ['User Research Methods', 'Personas & Journey Maps', 'Information Architecture', 'Wireframing'] },
      { title: 'Module 3: UI & Prototyping', topics: ['Design Systems', 'High-Fidelity UI', 'Interactive Prototyping', 'Usability Testing'] },
      { title: 'Module 4: Portfolio', topics: ['Case Study Writing', 'Portfolio Website', 'Design Critique', 'Mock Interviews'] }
    ],
    faqs: [
      { q: 'Do I need drawing or art skills?', a: "No — UI/UX design is about problem-solving and structure, not illustration. No art background needed." },
      { q: 'Which tool will I learn?', a: 'Figma — the industry-standard design tool used by most product teams today.' },
      { q: 'Will I have real portfolio pieces?', a: 'Yes — you finish with 2-3 complete case studies ready to show employers.' },
      { q: 'Will I get placement support?', a: 'Yes — mock interviews, resume reviews, and introductions to hiring partners are part of every batch.' }
    ]
  },
  {
    id: 'python-django',
    category: 'backend',
    categoryLabel: 'Backend',
    title: 'Python & Django Development',
    tagline: 'Build the backend skills every team hires for',
    duration: '5 Months',
    level: 'Beginner to Advanced',
    price: '₹13,999',
    thumbClass: 'cx-course-visual-f',
    description: "Learn server-side logic, REST APIs and databases with Python and Django. Build and deploy real backend systems that power web and mobile applications.",
    highlights: [
      'Python Programming Fundamentals',
      'Django Framework & ORM',
      'REST API Development',
      'Database Design (PostgreSQL)',
      'Authentication & Deployment',
      'Certificate upon completion'
    ],
    modules: [
      { title: 'Module 1: Python Fundamentals', topics: ['Python Basics', 'OOP in Python', 'File Handling', 'Working with Libraries'] },
      { title: 'Module 2: Django Basics', topics: ['Django Project Structure', 'Models & ORM', 'Views & Templates', 'Django Admin'] },
      { title: 'Module 3: REST APIs', topics: ['Django REST Framework', 'Authentication', 'API Design Best Practices', 'Testing APIs'] },
      { title: 'Module 4: Deployment', topics: ['PostgreSQL Integration', 'Deployment & Hosting', 'Capstone Project', 'Portfolio & Resume Prep'] }
    ],
    faqs: [
      { q: 'Do I need prior programming experience?', a: 'No — Python is taught from the basics before moving into Django.' },
      { q: 'What will I be able to build after this course?', a: 'Full backend systems with REST APIs, databases, and authentication — ready to connect to any frontend.' },
      { q: 'Is Django still in demand?', a: "Yes — it's widely used by startups and enterprises alike for fast, reliable backend development." },
      { q: 'Will I get placement support?', a: 'Yes — mock interviews, resume reviews, and introductions to hiring partners are part of every batch.' }
    ]
  },
  {
    id: 'java-spring',
    category: 'backend',
    categoryLabel: 'Backend',
    title: 'Java & Spring Boot Development',
    tagline: 'From OOP fundamentals to enterprise APIs',
    duration: '6 Months',
    level: 'Beginner to Advanced',
    price: '₹15,999',
    thumbClass: 'cx-course-visual-a',
    description: "Go from object-oriented fundamentals to enterprise-grade Spring Boot APIs and microservices. Learn the Java stack used by large-scale, high-reliability systems.",
    highlights: [
      'Core Java & OOP',
      'Spring Boot Framework',
      'REST APIs & Microservices',
      'Database Integration (JPA/Hibernate)',
      'Testing & Deployment',
      'Certificate upon completion'
    ],
    modules: [
      { title: 'Module 1: Core Java', topics: ['Java Syntax & OOP', 'Collections Framework', 'Exception Handling', 'Multithreading Basics'] },
      { title: 'Module 2: Spring Fundamentals', topics: ['Spring Boot Basics', 'Dependency Injection', 'Spring MVC', 'Configuration & Profiles'] },
      { title: 'Module 3: APIs & Data', topics: ['REST API Development', 'JPA & Hibernate', 'Database Design', 'Validation & Error Handling'] },
      { title: 'Module 4: Production Systems', topics: ['Microservices Basics', 'Testing with JUnit', 'Deployment', 'Capstone Project'] }
    ],
    faqs: [
      { q: 'Do I need prior programming experience?', a: 'Basic programming logic helps, but Java is taught from fundamentals before Spring Boot.' },
      { q: 'Is Java still relevant for jobs?', a: "Yes — it remains one of the most widely used languages in enterprise and backend systems." },
      { q: 'Will I learn microservices?', a: 'Yes — the later modules introduce microservices architecture using Spring Boot.' },
      { q: 'Will I get placement support?', a: 'Yes — mock interviews, resume reviews, and introductions to hiring partners are part of every batch.' }
    ]
  },
  {
    id: 'digital-marketing',
    category: 'marketing',
    categoryLabel: 'Marketing',
    title: 'Digital Marketing',
    tagline: 'Grow an audience and prove it with numbers',
    duration: '3 Months',
    level: 'Beginner Friendly',
    price: '₹9,999',
    thumbClass: 'cx-course-visual-b',
    description: "Learn SEO, paid ads, analytics and content strategy to grow an audience and measure real results. A practical, tool-first course for marketers who want to work with data.",
    highlights: [
      'SEO Fundamentals',
      'Paid Ads (Google & Meta)',
      'Content Strategy',
      'Analytics & Reporting',
      'Social Media Marketing',
      'Certificate upon completion'
    ],
    modules: [
      { title: 'Module 1: Marketing Foundations', topics: ['Digital Marketing Overview', 'Audience Research', 'Content Strategy', 'Brand Positioning'] },
      { title: 'Module 2: SEO', topics: ['On-Page & Off-Page SEO', 'Keyword Research', 'Technical SEO Basics', 'SEO Tools'] },
      { title: 'Module 3: Paid Advertising', topics: ['Google Ads', 'Meta Ads', 'Campaign Optimization', 'Budgeting & Bidding'] },
      { title: 'Module 4: Analytics', topics: ['Google Analytics', 'Reporting & Dashboards', 'A/B Testing', 'Capstone Campaign'] }
    ],
    faqs: [
      { q: 'Do I need a marketing background?', a: "No — this course is beginner-friendly and starts from the fundamentals." },
      { q: 'Will I run real ad campaigns?', a: "Yes — you'll plan and analyze real (small-budget) campaigns as part of the course." },
      { q: 'Can I freelance after this course?', a: 'Many students do — the skills covered are directly applicable to freelance and in-house marketing roles.' },
      { q: 'Will I get placement support?', a: 'Yes — mock interviews, resume reviews, and introductions to hiring partners are part of every batch.' }
    ]
  }
];