# Portfolio Content

Single source of truth for all site copy. Fill in every `[PLACEHOLDER]`.
Assets live in `../portfolio-assets/`.

<!--
ACCURACY RULES (from the consolidated handoff, 2026-10-12)
- Never include Sky UK / Firstsource customer-service employment anywhere.
- Never invent metrics, results, technologies, awards, links, certifications or duties.
- Sloucher facts and numbers are measured: use them exactly as in the brief (portfolio-assets/portfolio_Sloucher_Project/SLOUCHER_PORTFOLIO_BRIEF.md). AMD Ryzen 7040/8040 on Windows 11 only today; NPU-only (no CPU fallback); not affiliated with or endorsed by AMD.
- Resume Tailor API is tested locally; AWS Lambda is a planned deployment path, not live.
- Cloud Tech's "future enhancements" (Lambda, API Gateway, SES, CodePipeline, CodeBuild, DynamoDB) are NOT implemented.
- Cloud Tech website and AWS 3-Tier Architecture are separate projects.
- Pitch award (software) and film award are separate achievements.
- PennyWise links to the Springer and IFERP price papers, never the Big Data in Google paper.
- Missing optional assets: hide gracefully. No broken links, empty image boxes or fake screenshots.
- Contact form must not show a fake "Message sent" state.
- French site copy lives in src/data/profile.fr.js (added 2026-10-31; Karthik to proofread). Translate faithfully; add nothing.
-->

---

## Site structure

- **Navigation:** Home · About · Projects · Experience · Skills · Publications · Beyond Code · Contact
- **Homepage spotlight:** Sloucher first (Released · v0.2.0), then Serverless AI Resume Tailor API
- **Project grouping:** clearly distinguish completed work, academic proposals, learning projects and work in progress
- **Collapsed by default ("Show all" button):** projects Cloud Tech, PennyWise, AWS 3-Tier; experience Exam Invigilator, NetEase, Knowbility Media. Set `more: true` in profile.js to change.
- **Travel gallery:** optional, inside Beyond Code; must not dominate the homepage

---

## Identity

- **Full name:** Karthikeyan Umesh
- **Preferred name:** KARTHIK
- **Pronouns:** HE/HIM
- **Location:** Montréal / Toronto (open to relocation across Canada)
- **Current role / status:** M.Eng. Software Engineering graduate, Concordia (May 2026). Open to work.
- **Professional identity:** Software Engineering graduate with interests and experience spanning software development, cloud computing, AI-driven automation, data science and technical project leadership.
- **Open to:** Software engineering, cloud, AI automation and data-related engineering roles. Full-time and part-time roles, including new-grad and contract positions.
- **Photo (hero):** public/images/hero-480.webp · public/images/hero-720.webp · public/images/hero-1000.webp <!-- from portfolio-assets/Hero Image.jpeg (Place des Arts, Montréal); WebP, metadata stripped -->
- **Photo (About):** public/images/grad-480.webp · public/images/grad-800.webp — caption "Concordia convocation, 2026" <!-- from portfolio-assets/Karthik_Grad.jpg, cropped, metadata stripped -->
- **Resume PDF (EN):** public/resume/Karthikeyan-Umesh-Resume.pdf <!-- copied from portfolio-assets/General_resume_without mobile_number.pdf (phone-free, checked 2026-10-14). Linked from the hero and the Contact links. Resume_Karthik_General.pdf contains the phone number: never link it -->
- **Resume PDF (FR):** none yet; the FR site links the English PDF, labelled "CV (PDF, en anglais)"

<!-- Phone number stays off the public site. Email + contact form only. -->

### Languages

| Language | Proficiency |
|----------|-------------|
| English | Native or bilingual · IELTS Band 8 (logo: public/assets/ielts-logo.webp) |
| French | Full professional · MIFI Niveau 7 (logo: public/assets/mifi-logo.webp) |
| Hindi | Full professional |
| Kannada | Native or bilingual |
| Tamil | Native or bilingual |
| Spanish | Elementary |

---

## Headline

**EN:** Cloud & Software Developer

**Sub-headline EN:** AWS Certified · M.Eng. Software Engineering, Concordia

**FR:** Développeur infonuagique et logiciel (see src/data/profile.fr.js)

---

## About

<!-- Approved. Keep exactly as written unless Karthik asks for a revision. -->

I'm a Software Engineering graduate (M.Eng., Concordia University) who designs secure, scalable cloud solutions on AWS. I hold the AWS Certified Cloud Practitioner credential and I'm preparing for AWS Solutions Architect – Associate.

My background spans data science and software development, with strong Python and Java skills. I'm especially interested in helping organizations build cost-effective, resilient cloud architectures. Right now I'm building hands-on AWS projects with EC2, S3, RDS, IAM and serverless.

I enjoy turning complex problems into practical solutions, combining analytical thinking with creativity and a collaborative mindset. From developing software projects to exploring AI-driven automation, I value clear communication, continuous learning, and building technology that solves real-world problems. Outside of engineering, my passion for filmmaking has taught me to think from different perspectives, tell compelling stories, and bring ideas to life.

**FR:** translated in src/data/profile.fr.js (faithful translation of the approved English)

---

## Projects

<!-- First project = Featured Project on the site. -->

### Sloucher ⭐ Featured

<!-- Replaced Chronicle on 2026-10-31; Chronicle removed from the site at Karthik's request.
     Source: portfolio-assets/portfolio_Sloucher_Project/SLOUCHER_PORTFOLIO_BRIEF.md. Numbers are measured: use them exactly. -->

- **Status:** Released · v0.2.0, November 2026 (v0.1.0 Oct 29, 2026; v0.2.0 Nov 6, 2026; built in Montréal, solo) <!-- brief section 8 -->
- **Group:** Completed work
- **Tagline:** An always-on posture coach that runs its AI on the laptop's NPU, not the CPU: about 1% CPU, and the video never leaves the laptop.
- **Description:** It watches your posture through the webcam: slouch for most of 30 seconds and the screen edges glow; once an hour it sends you for a walk. I took it from an idea to a released, open-source Windows app on my own: model quantization, NPU debugging, the app, the installer and a bilingual website. <!-- Elevator pitch (Karthik asked to shorten it, 2026-10-31); the measured detail lives in Highlights -->
- **Long description (brief, not shown):** Built and shipped a Windows desktop app that watches posture through the webcam and runs its pose model on the AMD Ryzen AI NPU. Quantized YOLOv8n-pose to INT8 on recorded desk clips (96.5% of operators on the NPU, 12-17 ms per frame); posture logic compares face and shoulder ratios with the user's calibrated posture; tracing cut whole-app CPU from 44% to about 1% (0.8-1.05% measured); 39.6 MB installer with hardware detection and a self-test. v0.2 adds per-minute posture stats, a coach summary, a walk card and Settings.
- **Note:** Runs on Windows 11 laptops with an AMD Ryzen 7040 or 8040 today; Intel, Snapdragon and Mac ports are planned. Free and open source (AGPL-3.0). Privacy by design: each camera frame becomes 17 body points on the NPU and is discarded; only posture numbers are kept, on the laptop, and nothing is uploaded.
- **Highlights (shortened 2026-10-31 to match the card's left column; v0.2 update 2026-11-06):**
  - 96.5% on the NPU, about 1% CPU: INT8 YOLOv8n-pose at 12-17 ms per frame; fixing ONNX Runtime's busy-waiting thread pool cut whole-app CPU from 44%
  - No false alarms: on 9 recorded desk clips, all 3 bad-posture clips alert at 30 s and none of the other 6 do
  - Stats for an AI coach: v0.2 adds per-minute posture stats, a week view and a one-click summary to paste into Gemini, ChatGPT or Claude, all kept on the laptop
  - Shipped like a product: two releases in 8 days: 39.6 MB installer, no admin rights, self-test, checksummed GitHub Releases, protected main branch, tests on every pull request
  - Private by design: no account, no cloud, no telemetry; built with Québec's Law 25 in mind
- **Lead image:** links to the live site, with a slow ember glow
- **Role:** Solo
- **Tech:** Python 3.12, ONNX Runtime, AMD Ryzen AI 1.6.1 (Vitis AI EP), YOLOv8n-pose (INT8), AMD Quark quantization, NumPy, OpenCV, Tkinter, Pillow, pystray, Windows APIs (DWM, WTS), PyInstaller, Inno Setup, pytest, GitHub Actions, HTML/CSS/JS, Cloudflare Pages
- **Live URL:** https://sloucher.karthikeyanumesh.com
- **Story URL:** https://sloucher.karthikeyanumesh.com/story/
- **Repo URL:** https://github.com/naraianlegrand/sloucher_ai (public)
- **Screenshot(s):** public/assets/sloucher-hero.webp · public/assets/sloucher-cpu.webp · public/assets/sloucher-walk.webp · public/assets/sloucher-stats.webp (Stats window, sample week)

### Serverless AI Resume Tailor API

- **Status:** Implemented and tested locally. AWS Lambda deployment is planned, not live.
- **Group:** Completed work
- **Tagline:** An AI-powered API that analyzes resumes against job descriptions and generates structured, ATS-focused tailoring recommendations.
- **Description:** Built a modular Python microservice using FastAPI to parse PDF resumes and evaluate them against target job descriptions using Google's Gemini API. The pipeline returns structured JSON containing a match score, missing keywords, and tailored resume bullet-point suggestions. Implemented asynchronous HTTP communication with HTTPX and strict response validation with Pydantic, while designing a containerized deployment path for AWS Lambda using Mangum.
- **Engineering note:** Calls the Gemini 2.5 Flash REST API directly through HTTPX instead of the Google GenAI SDK. (Do not claim the SDK is used.)
- **Example output:** A sample run against an automation/telecom internship returned a match score of 48 and flagged missing keywords such as PLC, RTU, SCADA, AutoCAD, Telecommunications and ISO. <!-- Example only: not evidence of accuracy or hiring outcomes -->
- **Role:** Solo
- **Tech:** Python 3.12, FastAPI, Uvicorn, Pydantic, HTTPX, asyncio, Gemini 2.5 Flash API, PyPDF, Docker, Mangum (AWS Lambda adapter, planned)
- **Live URL:** n/a
- **Repo URL:** https://github.com/naraianlegrand/ai-resume-tailor-saas
- **Screenshot(s):** portfolio-assets/demo_SAAS_ai.png <!-- same image as the repo's demo.png -->

### TubeLytics — High-Volume Data Integration Platform

- **Status:** Completed (academic team project, SOEN 6441, Fall 2024)
- **Group:** Completed work
- **Tagline:** A real-time Java web application that integrates live YouTube data through REST APIs and WebSockets.
- **Description:** Developed a real-time data integration platform using Java and the Play Framework to consume RESTful APIs and process live YouTube data. Worked with Akka actors and WebSockets to support real-time data handling, applying object-oriented design principles and software testing practices. Contributed to integration, testing, and documentation workflows, using Sonar to help validate code quality and system data exchanges.
- **Role:** Team of 4. My contributions:
  - Built the YouTube API service (`YoutubeAPIService.java`): managed API key usage, rate-limited outgoing requests, and automated switching to a new key when the quota limit was reached
  - Built the controllers (`TubeLyticsController.java`, `ChannelController.java`): routing for the views and live feed refresh
  - Built the Akka actor for channel profiles (`ChannelProfileActor.java`)
  - Built the channel model (`Channel.java`) and channel profile view (`channel_profile.scala.html`), and worked on the build config (`build.sbt`)
  - Wrote Javadoc documentation and tests
- **Tech:** Java, Play Framework, Akka Actors, WebSockets, REST APIs, SQL, Sonar, Linux, Agile
- **Live URL:** n/a
- **Repo URL:** https://github.com/Riyaguptacse/soen6441f24 <!-- PRIVATE: visitors get a 404 -->
- **Screenshot(s):** portfolio-assets/TubeLytics Screenshot_1.png · portfolio-assets/TubeLytics Screenshot_1A.png · portfolio-assets/TubeLytics Screenshot_2.png <!-- GitHub pages, not app UI -->

### AI-Based Academic Advisor

- **Status:** Completed (academic proposal, SOEN 6841, Fall 2024)
- **Group:** Academic proposal
- **Tagline:** An AI-powered academic planning concept designed to personalize course recommendations and reduce student decision fatigue.
- **Description:** Served as Project Lead for a team project in Software Project Management (SOEN 6841), focused on an AI-based academic advisor to help university students navigate course selection and academic planning. Contributed to target-audience identification and authored the Problem Identification Report. Developed the solution highlights, defining key features and functionalities, and created visual representations to communicate the proposed solution. Collaborated with teammates on market justification and the overall project proposal.
- **Role:** Project Lead
- **Achievement:** Won the Best Software Project Pitch Award at Concordia University for the AI-Based Academic Advisor project (SOEN 6841). Delivered an Apple Keynote-style presentation that received a standing ovation.
- **Tools and methods:** Software project management, project planning, Gantt charts, milestone and timeline planning, requirements analysis, risk management, feasibility and viability analysis, budget planning, solution visualization <!-- No software stack: do not invent one -->
- **Live URL:** n/a
- **Repo URL:** https://github.com/Riyaguptacse/soen6841f24
- **Screenshot(s):** public/images/advisor-readme.webp · public/images/advisor-features.webp · public/images/advisor-process.webp · public/images/advisor-gantt.webp · public/images/advisor-risk.webp <!-- advisor-readme shows teammates' names and student IDs: OK'd by Karthik for now, may replace later -->

### Cloud Tech — AWS Learning Website

- **Status:** Completed (learning project)
- **Group:** Learning project
- **Tagline:** A responsive cloud-learning website documenting an AWS learning journey and related project work.
- **Description:** Built a responsive cloud-learning website using HTML, CSS, and JavaScript, featuring interactive navigation, light and dark themes, scroll-triggered animations, and a project timeline. The website is hosted through Amazon S3 static website hosting and provides a foundation for documenting cloud projects and learning progress.
- **Implemented features (per README):** Responsive layout; sticky navigation with smooth scrolling; light/dark mode saved in localStorage; scroll-triggered animations with IntersectionObserver; interactive project cards; frontend-only contact form with validation
- **Role:** Team of 2 (Tech Architect)
- **Tech:** HTML5, CSS3, JavaScript (ES6+), Amazon S3 static website hosting, GitHub
- **Live URL:** omitted <!-- S3 site returned 404 on 2026-10-12; re-add only once it works -->
- **Repo URL:** https://github.com/naraianlegrand/mk-cloud-journey
- **Screenshot(s):** public/assets/cloudtech-repo.webp <!-- from portfolio-assets/Cloud_Tech_Repo_SS.png (script.js on GitHub), cropped -->

### PennyWise — iPhone Price Prediction / Shopping Assistant

<!-- Repo and implementation details not yet recovered. Do not claim a specific model, dataset, accuracy, deployment or feature. -->

- **Status:** Research-backed; repository pending recovery
- **Group:** Academic / research project
- **Tagline:** A price-prediction and shopping-assistant concept exploring regression models to help consumers make more informed purchasing decisions.
- **Description:** PennyWise is a price-prediction project associated with research into regression-based product pricing and shopping assistance. The related research explored historical Amazon iPhone 11 price data and machine-learning regression algorithms to predict prices, with the aim of helping consumers make more informed purchase decisions.
- **Related publications:** "A Regression Analysis of iPhone 11 Pricing Factors" (Springer, ICDSAI 2023) · "Product Price Rate Detection Using Regression Models and Shopping Assistant" (WCASET 2022, Best Paper)
- **Tech:** [verify when repo is recovered; earlier notes said Django]
- **Live URL:** n/a
- **Repo URL:** [pending recovery]
- **Screenshot(s):** portfolio-assets/Springer_Scopus Paper.png

### AWS 3-Tier Architecture with Terraform

<!-- LOW PRIORITY. Details and diagram not recovered. Keep minimal; do not invent resources, modules, networking or outcomes. -->

- **Status:** In Progress
- **Group:** Work in progress
- **Tagline:** A three-tier web application architecture on AWS, defined with Terraform.
- **Description:** Designing a three-tier web application architecture on AWS as infrastructure-as-code. Details will be added as the project documentation is recovered.
- **Tech (planned):** Terraform, AWS <!-- earlier notes listed EC2, ALB, RDS, S3, VPC, IAM: unverified, do not publish as implemented -->
- **Repo URL:** [pending recovery]
- **Architecture diagram:** [pending recovery]

### Raspberry Pi JARVIS

<!-- Details need verification from older resumes. Do not invent hardware, speech recognition or integrations. -->

- **Status:** Needs verification
- **Tagline:** [One line]
- **Description:** [Per LinkedIn: Python-based JARVIS personal assistant integrated with a Raspberry Pi, built during the Inventeron internship]
- **Tech:** Python, Raspberry Pi
- **Repo URL:** [URL]

---

## Experience

<!-- Most recent first. Keep non-technical roles concise. Never include Sky UK / Firstsource. -->

### AI Automation & Data Analyst — Boston Soft Design

<!-- Descriptive title, not a formally assigned one. No invented conversion or growth metrics. -->

- **Dates:** Aug 2026 – Oct 2026 <!-- ended Oct 1, 2026 -->
- **Arrangement:** Part-time, unpaid
- **Location:** [CITY / Remote]
- **Company URL:** [URL]
- **Summary:** Contributed to business operations and procurement while supporting client acquisition for CRM software and AI integration services. Conducted outreach to prospective clients, helped identify business opportunities, and contributed to data analysis and AI-driven automation initiatives.
- **Highlights:**
  - Contacted hundreds of prospective clients through outreach

### Exam Invigilator — Concordia University

- **Dates:** Apr 2026 – Sep 2026 <!-- end month per Karthik, 2026-10-31: confirm -->
- **Arrangement:** Contract, part-time
- **Location:** Montréal · On-site
- **Summary:** Monitored examination environments to support academic integrity, assisted students with exam procedures, and coordinated with administrative staff to keep exam operations smooth and professional.

### Client Relations & Operations Specialist (Tele Fundraising) — Fundraising Direct

<!-- No invented fundraising figures, sales performance or conversion rates. -->

- **Dates:** Feb 2026 – Present
- **Arrangement:** Part-time
- **Location:** Montréal, QC · Remote
- **Company URL:** https://fundraisingdirect.ca/clients-success/
- **Summary:** Bilingual (EN/FR) outbound outreach to donors across Canada for organizations including the Canadian Red Cross and the Heart & Stroke Foundation.
- **Highlights (from resume):**
  - Managed high-volume, bilingual (English/French) client communications
  - Analyzed operational data and daily performance metrics to manage weekly scheduling

### Quality Assurance & Hardware Tester (Freelance) — NetEase Games Montréal

- **Dates:** 2025
- **Engagement:** One day, under NDA
- **Location:** Montréal, QC
- **Summary:** Manual testing and QA to find defects and keep game software performing well.
- **Highlights:**
  - Executed manual testing and QA protocols to identify defects and verify software performance
  - Worked with cross-functional development teams to troubleshoot technical issues and improve system reliability

### Junior Engineer — Inventeron Technologies

<!-- Much of this period was bench time. Do not invent deliverables. -->

- **Dates:** Jun 2023 – Mar 2024
- **Location:** Bengaluru, India · Hybrid
- **Highlights (as supplied; add nothing):**
  - Developed and integrated backend applications and scalable APIs using Java and Python within a Linux/Unix environment.
  - Collaborated directly with cross-functional analysts and engineering teams to implement software enhancements and resolve cybersecurity vulnerabilities.
  - Participated in rigorous design and code reviews, ensuring adherence to continuous improvement practices and high-quality output.
  - Contributed to CI/CD workflows utilizing Git, documenting program development and actively participating in Agile team discussions.
- **Tech:** Java, Python, Linux/Unix, Git, CI/CD

### Machine Learning and Automation Intern — Inventeron Technologies

- **Dates:** Mar 2023 – May 2023
- **Location:** Bengaluru, India · Hybrid
- **Highlights:**
  - Collaborated on a predictive maintenance model that cut equipment downtime by 20% <!-- per LinkedIn -->
  - Automated S3-based data processing workflows to reduce manual effort and streamline operational processes. <!-- Never publish a percentage for this -->
  - Built a Python-based JARVIS personal assistant running on a Raspberry Pi
- **Tech:** Python, Machine Learning, AWS S3, Raspberry Pi, Jira

### Website & Graphic Designer (Intern) — Knowbility Media

- **Dates:** Jun 2020 – Oct 2020
- **Location:** New Delhi, India · Remote
- **Summary:** Website and graphic design for clients, including a lead-generating website, marketing assets and social media creatives, working directly with clients on requirements.

---

## Skills

<!-- Only skills supported by the resume and project history. No proficiency levels or "expert" labels. "Concepts"-level resume items (Spring Boot, Azure, Selenium) intentionally left out. -->

- **Languages:** Python, Java, SQL, JavaScript, HTML/CSS
- **Backend & APIs:** FastAPI, Pydantic, HTTPX, asyncio, Flask, Play Framework, Akka, WebSockets, REST APIs, PostgreSQL
- **Cloud & DevOps:** AWS (EC2, S3, Lambda via Mangum, S3 static hosting), Cloudflare Pages, Docker, Git, GitHub Actions, CI/CD, Linux/Unix
- **AI & Data:** ONNX Runtime, AMD Ryzen AI (NPU), INT8 quantization (AMD Quark), YOLOv8n-pose, OpenCV, NumPy, Gemini API, machine learning (regression models), data analysis <!-- NPU/ONNX/OpenCV etc. backed by Sloucher -->
- **Frontend & desktop:** React, HTML5, CSS3, Tkinter, pystray, PyInstaller, Inno Setup
- **Quality:** Manual and automated testing, pytest, code reviews, Sonar, Javadoc
- **Practices:** Object-oriented design, Agile, software project management, requirements analysis, risk management
- **Currently learning:** Terraform, AWS Solutions Architect – Associate

---

## Education

### M.Eng. Software Engineering — Concordia University

<!-- Entered M.Eng. Quality Systems Engineering; transferred to Software Engineering effective Sep 3, 2024. Do not list QSE as a completed degree. -->

- **Dates:** May 2024 – May 2026
- **Location:** Montréal, Quebec, Canada
- **School:** Gina Cody School of Engineering and Computer Science
- **Credits:** 45
- **GPA:** 3.29 <!-- Karthik asked to show it (2026-10-13) -->
- **Activities:**
  - Moved from M.Eng. Quality Systems Engineering into Software Engineering (Sep 2024) to align my degree with my software and cloud goals, carrying my quality-assurance coursework into the new program
  - Board Member, Graduate Student Representative, Concordia Council on Student Life (CCSL): voted on funding for student-led initiatives
  - Event Coordinator, Concordia Filmmaking Club: organized events for the student film community
  - Volunteered at Concordia's used book fair in November <!-- year: [confirm] -->

### B.E. Computer Science Engineering — New Horizon College of Engineering

- **Dates:** Aug 2019 – Jun 2023
- **Location:** Bengaluru, India
- **GPA:** 8.44 CGPA (~3.5 GPA)
- **Activities:**
  - Published three research papers, including a Best Paper Award at a conference
  - Vice President, ACE CS Club: led a 20-member team running coding contests, tech events and app/web projects
  - Secretary, Drama Club: guided a 25+ member team to national-level wins
  - Student Coordinator, CIE Department (innovation and entrepreneurship)

---

## Coursework

<!-- Concordia M.Eng. course history. -->

| Code | Course title | Term |
|------|--------------|------|
| INSE 6260 | Software Quality Assurance | Summer 2024 |
| INSE 6250 | Quality Methodologies for Software | Summer 2024 |
| SOEN 6431 | Software Competence & Maintenance | Fall 2024 |
| SOEN 6441 | Advanced Programming Practices | Fall 2024 |
| SOEN 6841 | Software Project Management | Fall 2024 |
| COMP 6481 | Program & Problem Solving | Winter 2025 |
| COMP 6961 | Graduate Seminar – Computer Science | Winter 2025 |
| SOEN 6111 | Big Data Analytics | Winter 2025 |
| COMP 6461 | Computer Networks + Protocol | Fall 2025 |
| SOEN 6491 | Software Refactoring | Fall 2025 |
| SOEN 6611 | Software Measurement | Fall 2025 |
| SOEN 6461 | Software Design Methodologies | Winter 2026 |

---

## Certifications

<!-- IBM verification links (skillsnetwork.site) were offline on 2026-10-11: show credential IDs, no links. -->

| Certification | Issuer | Date | Credential URL / ID | Asset |
|---------------|--------|------|---------------------|-------|
| AWS Certified Cloud Practitioner | Amazon Web Services | Dec 2024 (expires Dec 2027) | [URL] | portfolio-assets/aws_badge.png |
| AWS Certified Solutions Architect – Associate | Amazon Web Services | In progress | — | — |
| AWS re/Start (12-week program) | AWS, delivered by Vinsys IT Services | Sep – Dec 2023 (certificate Dec 2023) | [URL] | [path] |
| IBM Certified Data Science – Data Science 101 (DS0101EN) | IBM | Nov 2022 | ID b2b41ac632984836b23d29a1cf2f69a3 | [PDF pending] |
| IBM Certified Data Science – Data Science Tools (DS0105EN) | IBM | Nov 2022 | ID 9ef2d4e376064782a44bb08211df5fd4 | portfolio-assets/ibm 1 cert.pdf |
| IBM Data Science Methodology (DS0103EN) | IBM | Nov 2022 | ID 4721648463274034a49fe8c5393d9f3f | portfolio-assets/ibm 2 cert.pdf |

- **AWS re/Start coverage:** EC2, S3, RDS, IAM, VPC, Lambda, CloudWatch, Linux, Jenkins and AWS fundamentals

---

## Publications & Awards

### Publications

1. **[A Regression Analysis of iPhone 11 Pricing Factors](https://link.springer.com/chapter/10.1007/978-3-031-51167-7_45)**
   Karthikeyan Umesh, G. Nikhileswara Reddy, K. V. Charan Reddy, S. V. Bhaskar, K. R. Tejas. In *Accelerating Discoveries in Data Science and Artificial Intelligence I* (ICDSAI 2023), Springer Proceedings in Mathematics & Statistics, pp. 467–477. Springer, first online May 29, 2024. Scopus-indexed. DOI 10.1007/978-3-031-51167-7_45
   - **Summary:** Uses historical Amazon iPhone 11 price data to train and test machine-learning regression models, and proposes a consumer tool to support purchasing decisions.
   - **Related project:** PennyWise
   - **Image:** portfolio-assets/Springer_Scopus Paper.png
2. **Product Price Rate Detection Using Regression Models and Shopping Assistant**
   [AUTHORS]. 43rd World Conference on Applied Science, Engineering & Technology (WCASET 2022), Goa, India, in association with IFERP. Dec 30, 2022. Best Paper Award.
   - **Related project:** PennyWise
   - **URL:** none supplied (title not linked)
3. **[Analysis of Use of Big Data in Google](https://ijsrset.com/IJSRSET12291116)**
   Karthikeyan Umesh, K V Charan Reddy, J Karthik Surya. *International Journal of Scientific Research in Science, Engineering and Technology* (IJSRSET), Vol. 9, Issue 11, pp. 90–94. May 11, 2022.
   - **Related project:** none (not PennyWise)

### Awards

- **Best Paper Award — WCASET 2022.** For "Product Price Rate Detection Using Regression Models and Shopping Assistant" at the 43rd World Conference on Applied Science, Engineering & Technology, organized by Padre Conceição College of Engineering in association with the Institute For Engineering, Research and Publication (IFERP), Dec 29–30, 2022, Goa, India.
  - **Image:** portfolio-assets/Certificate_best Paper.jpg
- **Best Software Project Pitch Award — Concordia University, 2024.** For the AI-Based Academic Advisor project (SOEN 6841); delivered an Apple Keynote-style presentation that received a standing ovation.
- **2nd Best Short Film, IIM Shortcuts Film Festival, 2019** (awarded by Film Companion; national level). Short film *Delusions of Grandeur*, directed by Karthik; the work was viewed by Anupama Chopra. Also 3rd Best Short Film, Estrade St. Claret Film Festival 2020, and Official Selection, CARV Karnataka Film Festival 2020. IMDb: https://www.imdb.com/name/nm18409484/
  - **Image:** public/images/film-poster-480.webp · public/images/film-poster-727.webp <!-- from portfolio-assets/IIM shortfilm Poster award.jpeg; award facts taken from this poster -->
- **Best Software Project Pitch Award** image: [PLACEHOLDER: presentation photo or screengrab] <!-- card shows a thumbnail + link like the Best Paper one once added -->

---

## Beyond Code

<!-- A few cohesive stories with optional visual cards, not a bullet dump. -->

**Intro:** [Short intro line about life outside work]

### Filmmaking and creative leadership

I love making and directing short films. I directed *Delusions of Grandeur*, which won 2nd Best Short Film at the IIM Shortcuts Film Festival 2019 (Film Companion) and 3rd Best Short Film at the Estrade St. Claret Film Festival 2020, and was an Official Selection at the CARV Karnataka Film Festival 2020. I've also worked as Assistant Director on two short films, one of which is listed on IMDb. From Sep 2025 to May 2026 I was Event Coordinator for the Concordia Filmmaking Club. Filmmaking has shaped how I approach storytelling, creative problem-solving, teamwork and coordination.

- **Film titles / AD credits:** [pending]
- **IMDb link:** https://www.imdb.com/name/nm18409484/ (profile)

### Learning French

I studied French through MIFI at EMULCQ (near Vendôme station) for about a year and a half, alongside demanding coursework at Concordia. I completed the program through niveau 7 and was the only student in my class to continue through every level without dropping out. Today I converse in French in everyday and professional settings.

### Leadership and student engagement

- **Board Member, Concordia Council on Student Life (CCSL)**, Sep 2025 – Apr 2026: represented graduate student interests in university-level student-life decisions, voted on student-focused initiatives and funding for student-led programs, and worked with faculty and administrative stakeholders to advocate for student needs.
- **Event Coordinator, Concordia Filmmaking Club**, Sep 2025 – May 2026: organized Film Jam, coordinated a short film made under the club, and organized a meet-and-greet with filmmakers from Montréal and Concordia University. <!-- per Karthik, 2026-10-31; only these three for now -->
- **Participant, [Concordia Homeroom](https://www.concordia.ca/students/homeroom.html)**, Summer 2024: regular weekend student meetups when I first joined Concordia, building community through discussions and activities.
- **Menstrual Health Educator Volunteer, Marshel**, Jul 2022: ran household awareness sessions on menstrual health and hygiene.

### PeaceGeeks — Welcome to Canada

Featured in PeaceGeeks' newcomer story about using their Welcome to Canada platform when moving from Bengaluru to Montréal.

- **URL:** https://www.peacegeeks.org/blogs/from-bangalore-to-montreal-how-peacegeeks-tool-helped-karthik-find-confidence-and-build-a-new-life-in-canada
- **Image:** public/images/peacegeeks-800.webp · public/images/peacegeeks-1600.webp (story banner with quote; credited "Image: PeaceGeeks"; full-width card)

### Personal

Diligent note-taker, hard worker, avid French learner. I enjoy travel and organizing schedules, transit and logistics.

### Travel gallery (optional)

<!-- Cards without photos are hidden. Photos are WebP, 640px wide, all metadata stripped.
     Confirmed by Karthik: all four are from the Edmonton trip, Oct 2026. -->

| Place | When | Caption | Photo |
|-------|------|---------|-------|
| Montréal | Oct 2026 | Heading out from Montréal Metropolitan Airport | public/images/travel-met-airport.webp |
| Edmonton | Oct 2026 | West Edmonton Mall | public/images/travel-edmonton-mall.webp |
| Edmonton | Oct 2026 | Royal Alberta Museum | public/images/travel-edmonton-museum.webp |
| Edmonton | Oct 2026 | The river valley at night, Legislature dome in the distance | public/images/travel-edmonton-night.webp |
| Toronto | Dec 2024 | AWS Cloud Practitioner exam | [path] |
| India | Summer 2025 | 21-day trip | [path] |
| Toronto | Late Jun 2026 | [caption] | [path] |

---

## Contact

- **Email:** karthikeyanumesh@gmail.com
- **LinkedIn:** https://linkedin.com/in/karthikeyanumesh
- **GitHub:** https://github.com/naraianlegrand
- **Contact form:** Formspree not configured yet. Show a working email link; the form stays disabled or clearly marked until configured.
- **Formspree form ID:** [FORM ID]
- **Contact CTA EN:** [e.g. "Let's build something together."]
