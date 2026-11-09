// Site content. Mirrors CONTENT.md, which is the source of truth.
// Accuracy rules live in CLAUDE.md. Missing optional assets are `null` and get hidden.
// French copy lives in profile.fr.js and is overlaid onto `en` (see localize() at the bottom).

import { frOverrides } from './profile.fr.js'

const A = '/assets/'
const I = '/images/' // photos: WebP, resized, all metadata stripped
const RESUME = '/resume/Karthikeyan-Umesh-Resume.pdf' // from portfolio-assets/General_resume_without mobile_number.pdf
const IBM_BADGE ={ src: A + 'ibm-logo.webp', alt: 'IBM logo' }
const FILM_POSTER_ALT =
  'Poster for the short film Delusions of Grandeur, directed by Karthikeyan Umesh, with laurels for Official Selection at CARV Karnataka 2020, 2nd Best Short Film at IIM Shortcuts 2019 and 3rd Best Short Film at Estrade St. Claret 2020'

const en = {
  ui: {
    skip: 'Skip to content',
    menu: 'Menu',
    close: 'Close',
    language: 'Language',
    privateRepo: 'Private repo',
    repo: 'Repository',
    live: 'Live site',
    visitLive: 'Visit the live site',
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
    showAllProjects: 'Show all projects',
    showAllExperience: 'Show all experience',
    showLess: 'Show less',
    newTab: '(opens in a new tab)',
    openFull: 'open full image in a new tab',
    featured: 'Featured',
    awards: 'Awards',
    heroLabel: 'Introduction',
    navLabel: 'Primary',
    form: {
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send message',
      sending: 'Sending…',
      sent: 'Thanks, your message was sent.',
      error: 'Something went wrong. Please email me directly instead.',
    },
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
    // Resume button renders only when this is set. Must be a phone-free PDF (checked 2026-10-14: text, metadata and links).
    resume: RESUME,
    resumeLabel: 'Resume (PDF)',
  },

  about: {
    title: 'About',
    paragraphs: [
      "I'm a Software Engineering graduate (M.Eng., Concordia University) who designs secure, scalable cloud solutions on AWS. I hold the AWS Certified Cloud Practitioner credential and I'm preparing for AWS Solutions Architect – Associate.",
      "My background spans data science and software development, with strong Python and Java skills. I'm especially interested in helping organizations build cost-effective, resilient cloud architectures. Right now I'm building hands-on AWS projects with EC2, S3, RDS, IAM and serverless.",
      'I enjoy turning complex problems into practical solutions, combining analytical thinking with creativity and a collaborative mindset. From developing software projects to exploring AI-driven automation, I value clear communication, continuous learning, and building technology that solves real-world problems. Outside of engineering, my passion for filmmaking has taught me to think from different perspectives, tell compelling stories, and bring ideas to life.',
    ],
    photo: {
      src: I + 'grad-800.webp',
      srcSet: `${I}grad-480.webp 480w, ${I}grad-800.webp 800w`,
      width: 800,
      height: 1000,
      alt: 'Karthikeyan Umesh in graduation robes at Concordia convocation, holding his diploma folder',
      caption: 'Concordia convocation, 2026',
    },
    languagesTitle: 'Languages',
    languages: [
      // Credential logos render as a small tile beside the language.
      { name: 'English', level: 'Native or bilingual', credential: { name: 'IELTS', score: 'Band 8', logo: { src: A + 'ielts-logo.webp', width: 96, height: 96, alt: 'IELTS logo' } } },
      { name: 'French', level: 'Full professional', credential: { name: 'MIFI', score: 'Niveau 7', logo: { src: A + 'mifi-logo.webp', width: 241, height: 96, alt: 'Immigration, Francisation et Intégration Québec logo' } } },
      { name: 'Hindi', level: 'Full professional' },
      { name: 'Kannada', level: 'Native or bilingual' },
      { name: 'Tamil', level: 'Native or bilingual' },
      { name: 'Spanish', level: 'Elementary' },
    ],
  },

  projectsTitle: 'Projects',
  projectsIntro: 'Featured work first, then academic, learning and in-progress projects. Every card says where the project actually stands.',

  // Sloucher first, then AWS 3-Tier. Everything else is in `projects`, collapsed behind "Show all".
  // Sloucher facts and numbers come from portfolio-assets/portfolio_Sloucher_Project/SLOUCHER_PORTFOLIO_BRIEF.md (measured).
  // AWS 3-Tier facts come from the aws-3tier-engops-portal repo README and ADRs (deployed, tested, destroyed).
  featured: [
    {
      id: 'sloucher',
      variant: 'default',
      name: 'Sloucher',
      status: 'Released · v0.2.0, November 2026',
      group: 'Completed work',
      tagline:
        "An always-on posture coach that runs its AI on the laptop's NPU, not the CPU: about 1% CPU, and the video never leaves the laptop.",
      // Elevator pitch; the measured detail lives in `highlights`.
      description:
        'It watches your posture through the webcam: slouch for most of 30 seconds and the screen edges glow; once an hour it sends you for a walk. I took it from an idea to a released, open-source Windows app on my own: model quantization, NPU debugging, the app, the installer and a bilingual website.',
      note: 'Runs on Windows 11 laptops with an AMD Ryzen 7040 or 8040 today; Intel, Snapdragon and Mac ports are planned. Free and open source (AGPL-3.0). Privacy by design: each camera frame becomes 17 body points on the NPU and is discarded; only posture numbers are kept, on the laptop, and nothing is uploaded.',
      highlights: [
        { lead: '96.5% on the NPU, about 1% CPU', text: "INT8 YOLOv8n-pose at 12-17 ms per frame; fixing ONNX Runtime's busy-waiting thread pool cut whole-app CPU from 44%." },
        { lead: 'No false alarms', text: 'On 9 recorded desk clips, all 3 bad-posture clips alert at 30 s and none of the other 6 do.' },
        { lead: 'Stats for an AI coach', text: 'v0.2 adds per-minute posture stats, a week view and a one-click summary to paste into Gemini, ChatGPT or Claude, all kept on the laptop.' },
        { lead: 'Shipped like a product', text: 'Two releases in 8 days: 39.6 MB installer, no admin rights, self-test, checksummed GitHub Releases, protected main branch, tests on every pull request.' },
        { lead: 'Private by design', text: "No account, no cloud, no telemetry; built with Québec's Law 25 in mind." },
      ],
      role: 'Solo',
      tech: ['Python 3.12', 'ONNX Runtime', 'AMD Ryzen AI 1.6.1 (Vitis AI EP)', 'YOLOv8n-pose (INT8)', 'AMD Quark quantization', 'NumPy', 'OpenCV', 'Tkinter', 'Pillow', 'pystray', 'Windows APIs (DWM, WTS)', 'PyInstaller', 'Inno Setup', 'pytest', 'GitHub Actions', 'HTML/CSS/JS', 'Cloudflare Pages'],
      repo: { url: 'https://github.com/naraianlegrand/sloucher_ai', private: false },
      live: 'https://sloucher.karthikeyanumesh.com',
      story: 'https://sloucher.karthikeyanumesh.com/story/',
      images: [
        { src: A + 'sloucher-hero.webp', alt: 'Sloucher website: "Your laptop has an AI chip that sits idle. Let it fix your posture."', width: 1400, height: 800 },
        { src: A + 'sloucher-cpu.webp', alt: 'Chart of whole-app CPU use: ONNX Runtime defaults 44%, thread spinning off 3%, Sloucher at 2 fps 0.8%', width: 1200, height: 520 },
        { src: A + 'sloucher-stats.webp', alt: 'The Sloucher Stats window: today 72% upright, alerts, time to sit up, and the last 7 days as bars (sample week)', width: 769, height: 913 },
      ],
    },
    {
      id: 'aws-3-tier',
      variant: 'default',
      name: 'AWS 3-Tier Architecture with Terraform',
      status: 'Completed · deployed and tested, destroyed between demos to save cost',
      group: 'Completed work',
      tagline:
        'A request tracker for engineering teams, running on a three-tier AWS stack that one terraform apply builds from zero and one terraform destroy removes.',
      description:
        'I built the infrastructure and the app: a VPC across two Availability Zones with public, private app and private database subnets; an Application Load Balancer in front of an EC2 Auto Scaling Group running a FastAPI container; RDS PostgreSQL and S3 for data. It is all Terraform modules with remote state, and infrastructure changes go through pull requests with automated checks.',
      note: 'Destroyed between demos to keep cost near zero; rebuilding takes one command. HTTP only for now (no domain or certificate), and the app has no login yet, so the load balancer only accepts my IP address.',
      highlights: [
        { lead: 'Least-privilege IAM', text: 'The EC2 role can reach two S3 prefixes, one ECR repository, one log group and one secret, and reads the database password from Secrets Manager. GitHub Actions signs in with OIDC: no AWS keys stored anywhere.' },
        { lead: 'Chained security groups', text: 'Load balancer → app on port 8000 → PostgreSQL on 5432, each tier accepting only the one before it. No SSH and no public IPs on EC2; admin access through SSM.' },
        { lead: 'Self-healing, tested', text: 'I stopped the app container: the health check failed, the Auto Scaling Group replaced the instance, and a CloudWatch alarm emailed me.' },
        { lead: 'Reproducible', text: 'Built from zero, destroyed and rebuilt with no manual steps. Every infrastructure pull request runs fmt, validate, tflint, a Checkov security scan and a read-only plan.' },
      ],
      role: 'Solo',
      tech: ['Terraform', 'AWS VPC', 'EC2 Auto Scaling', 'Application Load Balancer', 'RDS PostgreSQL', 'S3', 'IAM', 'Secrets Manager', 'CloudWatch', 'SNS', 'ECR', 'SSM Session Manager', 'Docker', 'Python 3.12', 'FastAPI', 'SQLAlchemy', 'Alembic', 'pytest', 'GitHub Actions (OIDC)', 'tflint', 'Checkov'],
      repo: { url: 'https://github.com/naraianlegrand/aws-3tier-engops-portal', private: true },
      live: null, // destroyed between demos: never link the ALB URL
      images: [], // Step 9 screenshots go here once processed into public/assets/
    },
  ],

  // `more: true` items (here and in `experience`) start collapsed behind a "Show all" button.
  // All projects are collapsed: only the two featured cards show by default.
  projects: [
    {
      id: 'resume-tailor',
      more: true,
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
    {
      id: 'tubelytics',
      more: true,
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
      more: true,
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
      more: true,
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
      images: [
        { src: A + 'cloudtech-repo.webp', alt: 'script.js in the mk-cloud-journey repository on GitHub: sticky navbar and hamburger menu code', width: 1400, height: 802 },
      ],
    },
    {
      id: 'pennywise',
      more: true,
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
  ],

  experienceTitle: 'Experience',
  experience: [
    {
      role: 'AI Automation & Data Analyst',
      org: 'Boston Soft Design',
      dates: 'Aug 2026 – Oct 2026',
      meta: 'Part-time, unpaid',
      summary:
        'Contributed to business operations and procurement while supporting client acquisition for CRM software and AI integration services. Conducted outreach to prospective clients, helped identify business opportunities, and contributed to data analysis and AI-driven automation initiatives.',
      highlights: ['Contacted hundreds of prospective clients through outreach'],
    },
    {
      role: 'Exam Invigilator',
      org: 'Concordia University',
      dates: 'Apr 2026 – Sep 2026',
      meta: 'Contract, part-time · Montréal, on-site',
      more: true,
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
      meta: 'Montréal · One-day engagement, under NDA',
      more: true,
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
      more: true,
      summary:
        'Website and graphic design for clients, including a lead-generating website, marketing assets and social media creatives, working directly with clients on requirements.',
    },
  ],

  skillsTitle: 'Skills',
  skills: [
    { group: 'Languages', items: ['Python', 'Java', 'SQL', 'JavaScript', 'HTML/CSS'] },
    { group: 'Backend & APIs', items: ['FastAPI', 'Pydantic', 'HTTPX', 'asyncio', 'Flask', 'Play Framework', 'Akka', 'WebSockets', 'REST APIs', 'PostgreSQL'] },
    { group: 'Cloud & DevOps', items: ['AWS (EC2, S3, RDS, VPC, IAM, ALB, Auto Scaling, CloudWatch, Lambda)', 'Terraform', 'S3 static hosting', 'Cloudflare Pages', 'Docker', 'Git', 'GitHub Actions (OIDC)', 'CI/CD', 'Checkov', 'Linux/Unix'] },
    { group: 'AI & Data', items: ['ONNX Runtime', 'AMD Ryzen AI (NPU)', 'INT8 quantization (AMD Quark)', 'YOLOv8n-pose', 'OpenCV', 'NumPy', 'Gemini API', 'Regression models', 'Data analysis'] },
    { group: 'Frontend & desktop', items: ['React', 'HTML5', 'CSS3', 'Tkinter', 'pystray', 'PyInstaller', 'Inno Setup'] },
    { group: 'Quality', items: ['Manual & automated testing', 'pytest', 'Code reviews', 'Sonar', 'Javadoc'] },
    { group: 'Practices', items: ['Object-oriented design', 'Agile', 'Project management', 'Requirements analysis', 'Risk management'] },
    { group: 'Currently learning', items: ['AWS Solutions Architect – Associate'] },
  ],

  educationTitle: 'Education',
  education: [
    {
      degree: 'M.Eng. Software Engineering',
      school: 'Concordia University',
      detail: 'Gina Cody School of Engineering and Computer Science',
      dates: 'May 2024 – May 2026',
      location: 'Montréal, Canada',
      grade: 'GPA 3.29',
      activities: [
        'Moved from M.Eng. Quality Systems Engineering into Software Engineering (Sep 2024) to align my degree with my software and cloud goals, carrying my quality-assurance coursework into the new program',
        'Board Member, Graduate Student Representative, Concordia Council on Student Life (CCSL): voted on funding for student-led initiatives',
        'Event Coordinator, Concordia Filmmaking Club: organized events for the student film community',
        "Volunteered at Concordia's used book fair in November",
      ],
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
    { name: 'Data Science 101 (DS0101EN)', issuer: 'IBM', date: 'Nov 2022', credentialId: 'b2b41ac632984836b23d29a1cf2f69a3', badge: IBM_BADGE },
    { name: 'Data Science Tools (DS0105EN)', issuer: 'IBM', date: 'Nov 2022', credentialId: '9ef2d4e376064782a44bb08211df5fd4', file: A + 'ibm-ds0105-certificate.pdf', badge: IBM_BADGE },
    { name: 'Data Science Methodology (DS0103EN)', issuer: 'IBM', date: 'Nov 2022', credentialId: '4721648463274034a49fe8c5393d9f3f', file: A + 'ibm-ds0103-certificate.pdf', badge: IBM_BADGE },
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
      // Shown as a small thumbnail + link so award cards stay the same shape.
      image: { src: A + 'best-paper-certificate.jpg', alt: 'Best Paper certificate from the 43rd World Conference on Applied Science, Engineering & Technology, awarded to Karthikeyan Umesh', label: 'View certificate' },
    },
    {
      title: 'Best Software Project Pitch Award',
      org: 'Concordia University · SOEN 6841',
      date: '2024',
      detail: 'For the AI-Based Academic Advisor. Apple Keynote-style presentation that received a standing ovation.',
      image: null, // pitch photo / screengrab pending
    },
    {
      title: '2nd Best Short Film, IIM Shortcuts Film Festival',
      org: 'Delusions of Grandeur · awarded by Film Companion',
      date: '2019',
      detail: 'National-level festival; the work was viewed by Anupama Chopra. The film also won 3rd Best Short Film at the Estrade St. Claret Film Festival 2020 and was an Official Selection at the CARV Karnataka Film Festival 2020.',
      image: { src: I + 'film-poster-480.webp', alt: FILM_POSTER_ALT, label: 'View poster', position: 'center 28%' },
      link: { label: 'IMDb', url: 'https://www.imdb.com/name/nm18409484/' },
    },
  ],

  beyond: {
    title: 'Beyond Code',
    intro: null,
    stories: [
      {
        title: 'Filmmaking',
        body: "I love making and directing short films. I directed Delusions of Grandeur, which won 2nd Best Short Film at the IIM Shortcuts Film Festival 2019 (Film Companion) and 3rd Best Short Film at the Estrade St. Claret Film Festival 2020, and was an Official Selection at the CARV Karnataka Film Festival 2020. I've also worked as Assistant Director on two short films, one of which is listed on IMDb. From Sep 2025 to May 2026 I was Event Coordinator for the Concordia Filmmaking Club. Filmmaking has shaped how I approach storytelling, creative problem-solving, teamwork and coordination.",
        // Portrait image: renders beside the text instead of as a banner on top.
        image: {
          src: I + 'film-poster-727.webp',
          srcSet: `${I}film-poster-480.webp 480w, ${I}film-poster-727.webp 727w`,
          width: 727,
          height: 908,
          alt: FILM_POSTER_ALT,
          layout: 'side',
        },
        link: { label: 'IMDb profile', url: 'https://www.imdb.com/name/nm18409484/' },
      },
      {
        title: 'Learning French',
        body: 'I studied French through MIFI at EMULCQ (near Vendôme station) for about a year and a half, alongside demanding coursework at Concordia. I completed the program through niveau 7 and was the only student in my class to continue through every level without dropping out. Today I converse in French in everyday and professional settings.',
        badge: { src: A + 'mifi-logo.webp', width: 241, height: 96, alt: 'Immigration, Francisation et Intégration Québec logo', caption: 'MIFI · Niveau 7' },
        link: null,
      },
      {
        title: 'Welcome to Canada',
        body: 'PeaceGeeks featured my move from Bengaluru to Montréal in a newcomer story about their Welcome to Canada platform.',
        // Stories with an image render full width with the image on top.
        image: {
          src: I + 'peacegeeks-1600.webp',
          srcSet: `${I}peacegeeks-800.webp 800w, ${I}peacegeeks-1600.webp 1600w`,
          width: 1600,
          height: 480,
          alt: 'PeaceGeeks story banner with Karthik and his quote: "Preparation is everything. The right resources can make all the difference. I\'d absolutely recommend newcomers use Welcome to Canada."',
          credit: 'Image: PeaceGeeks',
        },
        link: {
          label: 'Read the story',
          url: 'https://www.peacegeeks.org/blogs/from-bangalore-to-montreal-how-peacegeeks-tool-helped-karthik-find-confidence-and-build-a-new-life-in-canada',
        },
      },
    ],
    leadershipTitle: 'Leadership & community',
    leadership: [
      {
        role: 'Board Member',
        org: 'Concordia Council on Student Life (CCSL)',
        dates: 'Sep 2025 – Apr 2026',
        detail: 'Represented graduate student interests in university-level student-life decisions and voted on student-focused initiatives and funding for student-led programs.',
      },
      {
        role: 'Event Coordinator',
        org: 'Concordia Filmmaking Club',
        dates: 'Sep 2025 – May 2026',
        detail: 'Organized Film Jam, coordinated a short film made under the club, and organized a meet-and-greet with filmmakers from Montréal and Concordia University.',
      },
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
    // Order here doesn't matter much: the gallery interleaves places (e.g. Edmonton, Toronto, Edmonton…).
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
    lead: "Open to full-time and part-time roles in software, cloud, AI automation and data, including new-grad and contract positions. The fastest way to reach me is email.",
    email: 'karthikeyanumesh@gmail.com',
    links: [
      { label: 'LinkedIn', url: 'https://linkedin.com/in/karthikeyanumesh' },
      { label: 'GitHub', url: 'https://github.com/naraianlegrand' },
      { label: 'Resume (PDF)', url: RESUME },
    ],
    formspreeId: null, // Form renders only once this is set.
  },

  footer: {
    note: 'Built with React, Tailwind CSS and GSAP.',
    analytics: 'This site uses privacy-friendly, cookieless analytics.',
  },
}

// Overlays translated strings onto `en`: objects merge by key, arrays by index,
// and anything a translation leaves out (URLs, images, tech names) stays as in English.
function localize(base, over) {
  if (over === undefined) return base
  if (Array.isArray(base) && Array.isArray(over)) return base.map((b, i) => localize(b, over[i]))
  if (base && typeof base === 'object' && over && typeof over === 'object' && !Array.isArray(over)) {
    const out = { ...base }
    for (const k of Object.keys(over)) out[k] = localize(base[k], over[k])
    return out
  }
  return over
}

export const profile = { en, fr: localize(en, frOverrides) }
export const languages = Object.keys(profile).filter((k) => profile[k])
