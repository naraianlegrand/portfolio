// Site content. Mirrors CONTENT.md, which is the source of truth.
// Accuracy rules live in CLAUDE.md. Missing optional assets are `null` and get hidden.
// French (`fr`) is deferred: add a full object with the same shape to enable the language toggle.

const A = '/assets/'
const I = '/images/' // photos: WebP, resized, all metadata stripped

const en = {
  ui: {
    skip: 'Skip to content',
    menu: 'Menu',
    close: 'Close',
    language: 'Language',
    privateRepo: 'Private repo',
    repo: 'Repository',
    live: 'Live site',
    status: 'Status',
    role: 'Role',
    tech: 'Tech',
    tools: 'Tools & methods',
    myContributions: 'My contributions',
    relatedPapers: 'Related research',
    viewCredential: 'View certificate',
    credentialId: 'Credential ID',
    backToTop: 'Back to top',
    readStory: 'Read the story',
    emailMe: 'Email me',
  },

  nav: [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'publications', label: 'Publications' },
    { id: 'beyond', label: 'Beyond Code' },
    { id: 'contact', label: 'Contact' },
  ],

  hero: {
    firstName: 'Karthikeyan',
    lastName: 'Umesh',
    preferredName: 'Karthik',
    headline: 'Cloud & Software Developer',
    subheadline: 'AWS Certified · M.Eng. Software Engineering, Concordia',
    location: 'Montréal / Toronto · open to relocation across Canada',
    status: 'Open to work',
    photo: {
      src: I + 'hero-1000.webp',
      srcSet: `${I}hero-480.webp 480w, ${I}hero-720.webp 720w, ${I}hero-1000.webp 1000w`,
      width: 1000,
      height: 1333,
      alt: 'Karthikeyan Umesh in a dark suit at Place des Arts, Montréal, on a sunny day',
    },
    ctas: [
      { label: 'See my work', href: '#projects' },
      { label: 'Get in touch', href: '#contact' },
    ],
  },

  about: {
    title: 'About',
    paragraphs: [
      "I'm a Software Engineering graduate (M.Eng., Concordia University) who designs secure, scalable cloud solutions on AWS. I hold the AWS Certified Cloud Practitioner credential and I'm preparing for AWS Solutions Architect – Associate.",
      "My background spans data science and software development, with strong Python and Java skills. I'm especially interested in helping organizations build cost-effective, resilient cloud architectures. Right now I'm building hands-on AWS projects with EC2, S3, RDS, IAM and serverless.",
      'I enjoy turning complex problems into practical solutions, combining analytical thinking with creativity and a collaborative mindset. From developing software projects to exploring AI-driven automation, I value clear communication, continuous learning, and building technology that solves real-world problems. Outside of engineering, my passion for filmmaking has taught me to think from different perspectives, tell compelling stories, and bring ideas to life.',
    ],
    languagesTitle: 'Languages',
    languages: [
      { name: 'English', level: 'Native or bilingual' },
      { name: 'French', level: 'Full professional' },
      { name: 'Hindi', level: 'Full professional' },
      { name: 'Kannada', level: 'Native or bilingual' },
      { name: 'Tamil', level: 'Native or bilingual' },
      { name: 'Spanish', level: 'Elementary' },
    ],
  },

  projectsTitle: 'Projects',
  projectsIntro: 'Featured work first, then academic, learning and in-progress projects. Every card says where the project actually stands.',

  // Chronicle first, then the Resume Tailor API.
  featured: [
    {
      id: 'chronicle',
      variant: 'chronicle',
      name: 'Chronicle',
      status: 'In Development',
      group: 'Work in progress',
      tagline: 'Cross-platform fantasy identity and social discovery app',
      description:
        "Users enter fantasy-inspired dating and personality traits to create a fantasy version of themselves. Chronicle turns that information into visually rich personal dashboards, inspired by business analytics dashboards but focused on a person's fantasy identity. Users can become friends and explore each other's dashboards.",
      distinction:
        'Not another Facebook or Tinder: a playful, immersive world where people discover each other through beautifully presented fantasy identities.',
      plannedTitle: 'Planned experience',
      planned: ['Character creation', 'Personalized fantasy dashboards', 'Friends and social discovery'],
      progress: 'Concept stage. Repository set up; build not started yet.',
      role: 'Solo',
      tech: ['Flutter (planned: web, iOS, Android)'],
      repo: { url: 'https://github.com/naraianlegrand/chronicle-app', private: true },
      live: null,
      images: [],
    },
    {
      id: 'resume-tailor',
      variant: 'default',
      name: 'Serverless AI Resume Tailor API',
      status: 'Tested locally · Lambda deployment planned',
      group: 'Completed work',
      tagline:
        'An AI-powered API that analyzes resumes against job descriptions and generates structured, ATS-focused tailoring recommendations.',
      description:
        "Built a modular Python microservice using FastAPI to parse PDF resumes and evaluate them against target job descriptions using Google's Gemini API. The pipeline returns structured JSON containing a match score, missing keywords, and tailored resume bullet-point suggestions. Implemented asynchronous HTTP communication with HTTPX and strict response validation with Pydantic, while designing a containerized deployment path for AWS Lambda using Mangum.",
      note: 'Calls the Gemini 2.5 Flash REST API directly through HTTPX instead of the Google GenAI SDK. The screenshot shows one example response from a local run.',
      role: 'Solo',
      tech: ['Python 3.12', 'FastAPI', 'Uvicorn', 'Pydantic', 'HTTPX', 'asyncio', 'Gemini 2.5 Flash API', 'PyPDF', 'Docker', 'Mangum'],
      repo: { url: 'https://github.com/naraianlegrand/ai-resume-tailor-saas', private: false },
      live: null,
      images: [
        {
          src: A + 'resume-tailor-demo.webp',
          alt: 'Swagger UI showing a 200 response from the local /api/v1/tailor endpoint: match score 48, missing keywords and tailored bullet points',
          width: 1400,
          height: 574,
        },
      ],
    },
  ],

  projects: [
    {
      id: 'tubelytics',
      name: 'TubeLytics',
      subtitle: 'High-Volume Data Integration Platform',
      status: 'Completed · SOEN 6441, Fall 2024',
      group: 'Academic team project',
      tagline: 'A real-time Java web application that integrates live YouTube data through REST APIs and WebSockets.',
      description:
        'Developed a real-time data integration platform using Java and the Play Framework to consume RESTful APIs and process live YouTube data. Worked with Akka actors and WebSockets to support real-time data handling, applying object-oriented design principles and software testing practices. Contributed to integration, testing, and documentation workflows, using Sonar to help validate code quality and system data exchanges.',
      role: 'Team of 4',
      contributions: [
        'Built the YouTube API service: managed API key usage, rate-limited outgoing requests, and automated switching to a new key when the quota limit was reached',
        'Built the controllers: routing for the views and live feed refresh',
        'Built the Akka actor for channel profiles',
        'Built the channel model and channel profile view, and worked on the build config',
        'Wrote Javadoc documentation and tests',
      ],
      tech: ['Java', 'Play Framework', 'Akka Actors', 'WebSockets', 'REST APIs', 'SQL', 'Sonar', 'Linux', 'Agile'],
      repo: { url: 'https://github.com/Riyaguptacse/soen6441f24', private: true },
      live: null,
      images: [
        { src: A + 'tubelytics-repo.webp', alt: 'The soen6441f24 TubeLytics repository on GitHub', width: 1400, height: 654 },
        { src: A + 'tubelytics-commit.webp', alt: "Karthik's Dec 1, 2024 commit adding ChannelProfileActor.java", width: 1400, height: 644 },
      ],
    },
    {
      id: 'academic-advisor',
      name: 'AI-Based Academic Advisor',
      status: 'Completed · SOEN 6841, Fall 2024',
      group: 'Academic proposal',
      tagline: 'An AI-powered academic planning concept designed to personalize course recommendations and reduce student decision fatigue.',
      description:
        'Served as Project Lead for a team project in Software Project Management (SOEN 6841), focused on an AI-based academic advisor to help university students navigate course selection and academic planning. Contributed to target-audience identification and authored the Problem Identification Report. Developed the solution highlights, defining key features and functionalities, and created visual representations to communicate the proposed solution. Collaborated with teammates on market justification and the overall project proposal.',
      achievement: 'Best Software Project Pitch Award, Concordia University. Apple Keynote-style presentation that received a standing ovation.',
      role: 'Project Lead',
      tools: ['Project planning', 'Gantt charts', 'Milestone planning', 'Requirements analysis', 'Risk management', 'Feasibility & viability analysis', 'Budget planning', 'Solution visualization'],
      repo: { url: 'https://github.com/Riyaguptacse/soen6841f24', private: false },
      live: null,
      // README screenshot shows teammates' names and student IDs; Karthik OK'd it for now (may replace later).
      images: [
        { src: I + 'advisor-readme.webp', alt: 'The AI-Based Academic Advisor repository README: project overview and team members', width: 1200, height: 536 },
        { src: I + 'advisor-features.webp', alt: 'Proposal table of planned features: personalized course suggestions, academic tracking and alerts, career path guidance, LMS/SIS integration, gamified engagement', width: 1200, height: 548 },
        { src: I + 'advisor-process.webp', alt: 'Process flow diagram: student logs in, enters course preferences, the advisor retrieves academic data and presents top-ranked courses', width: 1000, height: 1425 },
        { src: I + 'advisor-gantt.webp', alt: 'Gantt chart of the five proposed project phases from November 2024 to March 2025', width: 1400, height: 776 },
        { src: I + 'advisor-risk.webp', alt: 'Risk impact analysis chart rating impact, likelihood and priority for each project risk', width: 1200, height: 566 },
      ],
    },
    {
      id: 'cloud-tech',
      name: 'Cloud Tech',
      subtitle: 'AWS Learning Website',
      status: 'Completed',
      group: 'Learning project',
      tagline: 'A responsive cloud-learning website documenting an AWS learning journey and related project work.',
      description:
        'Built a responsive cloud-learning website using HTML, CSS, and JavaScript, featuring interactive navigation, light and dark themes, scroll-triggered animations, and a project timeline. The website is hosted through Amazon S3 static website hosting and provides a foundation for documenting cloud projects and learning progress.',
      role: 'Team of 2 · Tech Architect',
      tech: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Amazon S3 static hosting', 'GitHub'],
      repo: { url: 'https://github.com/naraianlegrand/mk-cloud-journey', private: false },
      live: null, // S3 site returned 404 on 2026-10-12
      images: [],
    },
    {
      id: 'pennywise',
      name: 'PennyWise',
      subtitle: 'iPhone Price Prediction / Shopping Assistant',
      status: 'Research-backed · repository being recovered',
      group: 'Research project',
      tagline: 'A price-prediction and shopping-assistant concept exploring regression models to help consumers make more informed purchasing decisions.',
      description:
        'PennyWise is a price-prediction project associated with research into regression-based product pricing and shopping assistance. The related research explored historical Amazon iPhone 11 price data and machine-learning regression algorithms to predict prices, with the aim of helping consumers make more informed purchase decisions.',
      related: ['iphone-11', 'price-rate'],
      repo: null,
      live: null,
      images: [
        { src: A + 'springer-paper.webp', alt: 'Springer Link page for "A Regression Analysis of iPhone 11 Pricing Factors"', width: 1400, height: 758 },
      ],
    },
    {
      id: 'aws-3-tier',
      name: 'AWS 3-Tier Architecture',
      subtitle: 'with Terraform',
      status: 'In Progress',
      group: 'Work in progress',
      tagline: 'A three-tier web application architecture on AWS, defined with Terraform.',
      description: 'Designing a three-tier web application architecture on AWS as infrastructure-as-code. More detail coming as the project develops.',
      tech: ['Terraform', 'AWS'],
      repo: null,
      live: null,
      images: [],
    },
  ],

  experienceTitle: 'Experience',
  experience: [
    {
      role: 'AI Automation & Data Analyst',
      org: 'Boston Soft Design',
      dates: 'Aug 2026 – Present',
      meta: 'Part-time, unpaid',
      summary:
        'Contribute to business operations and procurement while supporting client acquisition for CRM software and AI integration services. Conduct outreach to prospective clients, help identify business opportunities, and contribute to data analysis and AI-driven automation initiatives.',
      highlights: ['Contacted hundreds of prospective clients through outreach'],
    },
    {
      role: 'Exam Invigilator',
      org: 'Concordia University',
      dates: 'Apr 2026 – Present',
      meta: 'Contract, part-time · Montréal, on-site',
      summary:
        'Monitored examination environments to support academic integrity, assisted students with exam procedures, and coordinated with administrative staff to keep exam operations smooth and professional.',
    },
    {
      role: 'Client Relations & Operations Specialist (Tele Fundraising)',
      org: 'Fundraising Direct',
      url: 'https://fundraisingdirect.ca/clients-success/',
      dates: 'Feb 2026 – Present',
      meta: 'Part-time · Montréal, remote',
      summary:
        'Bilingual (EN/FR) outbound outreach to donors across Canada for organizations including the Canadian Red Cross and the Heart & Stroke Foundation.',
      highlights: [
        'Managed high-volume, bilingual (English/French) client communications',
        'Analyzed operational data and daily performance metrics to manage weekly scheduling',
      ],
    },
    {
      role: 'Quality Assurance & Hardware Tester (Freelance)',
      org: 'NetEase Games Montréal',
      dates: '2025',
      meta: 'Montréal',
      highlights: [
        'Executed manual testing and QA protocols to identify defects and verify software performance',
        'Worked with cross-functional development teams to troubleshoot technical issues and improve system reliability',
      ],
    },
    {
      role: 'Junior Engineer',
      org: 'Inventeron Technologies',
      dates: 'Jun 2023 – Mar 2024',
      meta: 'Bengaluru, India · Hybrid',
      highlights: [
        'Developed and integrated backend applications and scalable APIs using Java and Python within a Linux/Unix environment.',
        'Collaborated directly with cross-functional analysts and engineering teams to implement software enhancements and resolve cybersecurity vulnerabilities.',
        'Participated in rigorous design and code reviews, ensuring adherence to continuous improvement practices and high-quality output.',
        'Contributed to CI/CD workflows utilizing Git, documenting program development and actively participating in Agile team discussions.',
      ],
    },
    {
      role: 'Machine Learning and Automation Intern',
      org: 'Inventeron Technologies',
      dates: 'Mar 2023 – May 2023',
      meta: 'Bengaluru, India · Hybrid',
      highlights: [
        'Collaborated on a predictive maintenance model that cut equipment downtime by 20%',
        'Automated S3-based data processing workflows to reduce manual effort and streamline operational processes.',
        'Built a Python-based JARVIS personal assistant running on a Raspberry Pi',
      ],
    },
    {
      role: 'Website & Graphic Designer (Intern)',
      org: 'Knowbility Media',
      dates: 'Jun 2020 – Oct 2020',
      meta: 'New Delhi, India · Remote',
      summary:
        'Website and graphic design for clients, including a lead-generating website, marketing assets and social media creatives, working directly with clients on requirements.',
    },
  ],

  skillsTitle: 'Skills',
  skills: [
    { group: 'Languages', items: ['Python', 'Java', 'SQL', 'JavaScript', 'HTML/CSS'] },
    { group: 'Backend & APIs', items: ['FastAPI', 'Pydantic', 'HTTPX', 'asyncio', 'Flask', 'Play Framework', 'Akka', 'WebSockets', 'REST APIs', 'PostgreSQL'] },
    { group: 'Cloud & DevOps', items: ['AWS (EC2, S3, Lambda)', 'S3 static hosting', 'Docker', 'Git', 'CI/CD', 'Linux/Unix'] },
    { group: 'AI & Data', items: ['Gemini API', 'Regression models', 'Data analysis'] },
    { group: 'Frontend', items: ['React', 'HTML5', 'CSS3'] },
    { group: 'Quality', items: ['Manual & automated testing', 'Code reviews', 'Sonar', 'Javadoc'] },
    { group: 'Practices', items: ['Object-oriented design', 'Agile', 'Project management', 'Requirements analysis', 'Risk management'] },
    { group: 'Currently learning', items: ['Terraform', 'AWS Solutions Architect – Associate'] },
  ],

  educationTitle: 'Education',
  education: [
    {
      degree: 'M.Eng. Software Engineering',
      school: 'Concordia University',
      detail: 'Gina Cody School of Engineering and Computer Science',
      dates: 'May 2024 – May 2026',
      location: 'Montréal, Canada',
    },
    {
      degree: 'B.E. Computer Science Engineering',
      school: 'New Horizon College of Engineering',
      dates: 'Aug 2019 – Jun 2023',
      location: 'Bengaluru, India',
      grade: '8.44 CGPA',
      activities: [
        'Published three research papers, including a Best Paper Award',
        'Vice President, ACE CS Club: led a 20-member team running coding contests, tech events and app/web projects',
        'Secretary, Drama Club: guided a 25+ member team to national-level wins',
        'Student Coordinator, CIE Department (innovation and entrepreneurship)',
      ],
    },
  ],
  courseworkTitle: 'Concordia coursework',
  coursework: [
    { term: 'Summer 2024', courses: [['INSE 6260', 'Software Quality Assurance'], ['INSE 6250', 'Quality Methodologies for Software']] },
    { term: 'Fall 2024', courses: [['SOEN 6431', 'Software Competence & Maintenance'], ['SOEN 6441', 'Advanced Programming Practices'], ['SOEN 6841', 'Software Project Management']] },
    { term: 'Winter 2025', courses: [['COMP 6481', 'Program & Problem Solving'], ['COMP 6961', 'Graduate Seminar – Computer Science'], ['SOEN 6111', 'Big Data Analytics']] },
    { term: 'Fall 2025', courses: [['COMP 6461', 'Computer Networks + Protocol'], ['SOEN 6491', 'Software Refactoring'], ['SOEN 6611', 'Software Measurement']] },
    { term: 'Winter 2026', courses: [['SOEN 6461', 'Software Design Methodologies']] },
  ],

  certificationsTitle: 'Certifications',
  certifications: [
    { name: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services', date: 'Dec 2024 · valid to Dec 2027', badge: { src: A + 'aws-ccp-badge.png', alt: 'AWS Certified Cloud Practitioner badge' } },
    { name: 'AWS Certified Solutions Architect – Associate', issuer: 'Amazon Web Services', date: 'In progress' },
    { name: 'AWS re/Start', issuer: 'AWS, delivered by Vinsys IT Services', date: 'Sep – Dec 2023', detail: '12-week program: EC2, S3, RDS, IAM, VPC, Lambda, CloudWatch, Linux, Jenkins' },
    { name: 'Data Science 101 (DS0101EN)', issuer: 'IBM', date: 'Nov 2022', credentialId: 'b2b41ac632984836b23d29a1cf2f69a3' },
    { name: 'Data Science Tools (DS0105EN)', issuer: 'IBM', date: 'Nov 2022', credentialId: '9ef2d4e376064782a44bb08211df5fd4', file: A + 'ibm-ds0105-certificate.pdf' },
    { name: 'Data Science Methodology (DS0103EN)', issuer: 'IBM', date: 'Nov 2022', credentialId: '4721648463274034a49fe8c5393d9f3f', file: A + 'ibm-ds0103-certificate.pdf' },
  ],

  publicationsTitle: 'Publications & Awards',
  publications: [
    {
      id: 'iphone-11',
      title: 'A Regression Analysis of iPhone 11 Pricing Factors',
      url: 'https://link.springer.com/chapter/10.1007/978-3-031-51167-7_45',
      authors: 'Karthikeyan Umesh, G. Nikhileswara Reddy, K. V. Charan Reddy, S. V. Bhaskar, K. R. Tejas',
      venue: 'Accelerating Discoveries in Data Science and Artificial Intelligence I (ICDSAI 2023), Springer Proceedings in Mathematics & Statistics, pp. 467–477',
      date: 'May 2024',
      tags: ['Springer', 'Scopus-indexed'],
      summary: 'Uses historical Amazon iPhone 11 price data to train and test machine-learning regression models, and proposes a consumer tool to support purchasing decisions.',
    },
    {
      id: 'price-rate',
      title: 'Product Price Rate Detection Using Regression Models and Shopping Assistant',
      url: null,
      authors: null,
      venue: '43rd World Conference on Applied Science, Engineering & Technology (WCASET 2022), Goa, in association with IFERP',
      date: 'Dec 2022',
      tags: ['Best Paper Award'],
      summary: null,
    },
    {
      id: 'big-data-google',
      title: 'Analysis of Use of Big Data in Google',
      url: 'https://ijsrset.com/IJSRSET12291116',
      authors: 'Karthikeyan Umesh, K V Charan Reddy, J Karthik Surya',
      venue: 'International Journal of Scientific Research in Science, Engineering and Technology (IJSRSET), Vol. 9, Issue 11, pp. 90–94',
      date: 'May 2022',
      tags: ['Journal'],
      summary: null,
    },
  ],
  awards: [
    {
      title: 'Best Paper Award',
      org: 'WCASET 2022 · Padre Conceição College of Engineering with IFERP',
      date: 'Dec 2022',
      detail: 'For "Product Price Rate Detection Using Regression Models and Shopping Assistant", Goa, India.',
      image: { src: A + 'best-paper-certificate.jpg', alt: 'Best Paper certificate from the 43rd World Conference on Applied Science, Engineering & Technology, awarded to Karthikeyan Umesh' },
    },
    {
      title: 'Best Software Project Pitch Award',
      org: 'Concordia University · SOEN 6841',
      date: '2024',
      detail: 'For the AI-Based Academic Advisor. Apple Keynote-style presentation that received a standing ovation.',
    },
    {
      title: '2nd place, national-level short-film competition',
      org: 'IIM',
      date: '2020',
      detail: 'Short film Delusions of Grandeur (Fully Filmy). The work was viewed by Anupama Chopra.',
    },
  ],

  beyond: {
    title: 'Beyond Code',
    intro: null,
    stories: [
      {
        title: 'Filmmaking',
        body: "I love making and directing short films. I've worked as Assistant Director on two short films, one of which is listed on IMDb, and my short film Delusions of Grandeur (Fully Filmy) placed 2nd in a national-level IIM competition in 2020. From Sep 2025 to May 2026 I was Event Coordinator for the Concordia Filmmaking Club. Filmmaking has shaped how I approach storytelling, creative problem-solving, teamwork and coordination.",
        link: null, // IMDb link pending
      },
      {
        title: 'Learning French',
        body: 'I studied French through MIFI at EMULCQ (near Vendôme station) for about a year and a half, alongside demanding coursework at Concordia. I completed the program through niveau 7 and was the only student in my class to continue through every level without dropping out. Today I converse in French in everyday and professional settings.',
        link: null,
      },
      {
        title: 'Welcome to Canada',
        body: 'PeaceGeeks featured my move from Bengaluru to Montréal in a newcomer story about their Welcome to Canada platform.',
        link: {
          label: 'Read the story',
          url: 'https://www.peacegeeks.org/blogs/from-bangalore-to-montreal-how-peacegeeks-tool-helped-karthik-find-confidence-and-build-a-new-life-in-canada',
        },
      },
    ],
    leadershipTitle: 'Leadership & community',
    leadership: [
      {
        role: 'Board Member, Graduate Student Representative',
        org: 'Concordia Council on Student Life (CCSL)',
        dates: 'Sep 2025 – Apr 2026',
        detail: 'Represented graduate student interests in university-level student-life decisions and voted on student-focused initiatives and funding for student-led programs.',
      },
      { role: 'Event Coordinator', org: 'Concordia Filmmaking Club', dates: 'Sep 2025 – May 2026' },
      {
        role: 'Participant',
        org: 'Concordia Homeroom',
        url: 'https://www.concordia.ca/students/homeroom.html',
        dates: 'Summer 2024',
        detail: 'Weekend student meetups when I first joined Concordia, building community through discussions and activities.',
      },
      {
        role: 'Menstrual Health Educator Volunteer',
        org: 'Marshel',
        dates: 'Jul 2022',
        detail: 'Ran household awareness sessions on menstrual health and hygiene.',
      },
    ],
    personal: 'Diligent note-taker, hard worker and avid French learner. I enjoy travel, and organizing the schedules, transit and logistics that come with it.',
    travelTitle: 'Travel',
    // Cards without a photo are hidden; the whole gallery hides when none have photos.
    travel: [
      { place: 'Montréal', when: 'Oct 2026', caption: 'Heading out from Montréal Metropolitan Airport', photo: { src: I + 'travel-met-airport.webp', alt: 'Karthik outside Montréal Metropolitan Airport (MET), next to the terminal sign', width: 640, height: 853 } },
      { place: 'Edmonton', when: 'Oct 2026', caption: 'West Edmonton Mall', photo: { src: I + 'travel-edmonton-mall.webp', alt: 'Karthik under the glass roof of West Edmonton Mall, with pink swan boats behind him', width: 640, height: 1138 } },
      { place: 'Edmonton', when: 'Oct 2026', caption: 'Royal Alberta Museum', photo: { src: I + 'travel-edmonton-museum.webp', alt: 'Karthik in front of a dinosaur skeleton exhibit at the Royal Alberta Museum', width: 640, height: 1138 } },
      { place: 'Edmonton', when: 'Oct 2026', caption: 'The river valley at night, Legislature dome in the distance', photo: { src: I + 'travel-edmonton-night.webp', alt: 'Karthik on a bridge at night with the Edmonton skyline and the lit Alberta Legislature dome behind him', width: 640, height: 1138 } },
      { place: 'Toronto', when: 'Dec 2024', caption: 'AWS Cloud Practitioner exam', photo: null },
      { place: 'India', when: 'Summer 2025', caption: '21-day trip', photo: null },
      { place: 'Toronto', when: 'Jun 2026', caption: null, photo: null },
    ],
  },

  contact: {
    title: 'Contact',
    lead: "Open to new-grad, contract and part-time roles in software, cloud, AI automation and data. The fastest way to reach me is email.",
    email: 'karthikeyanumesh@gmail.com',
    links: [
      { label: 'LinkedIn', url: 'https://linkedin.com/in/karthikeyanumesh' },
      { label: 'GitHub', url: 'https://github.com/naraianlegrand' },
    ],
    formspreeId: null, // Form renders only once this is set.
  },

  footer: {
    note: 'Built with React, Tailwind CSS and GSAP.',
  },
}

export const profile = { en, fr: null }
export const languages = Object.keys(profile).filter((k) => profile[k])
