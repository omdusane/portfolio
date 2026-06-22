import './App.css'
import { useState, useEffect } from 'react'

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the screen width is less than 768px (typical mobile breakpoint)
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);

    // Clean up event listener
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className={`flex ${isMobile ? 'flex-col' : ''}`}>
      
      {/* Left Panel - Fixed on desktop, scrollable header on mobile */}
      <div className={`${isMobile ? 'relative w-full h-auto py-10' : 'fixed w-2/5 h-screen'} bg-black text-white flex items-center justify-center`}>
        <div className="flex flex-col">
          <h2 className="animate-fade-right animate-once animate-duration-1000 animate-delay-500 text-2xl">Hello there! I'm</h2>
          <h1 className="animate-fade-right animate-once animate-duration-2000 animate-delay-1200 text-6xl font-bold mt-2">Om Dusane</h1>
          <h2 className="animate-fade-right animate-once animate-duration-1500 animate-delay-2000 text-3xl italic mt-2">Software Developer</h2>
          {/* Social icons in a row */}
          <div className="flex flex-row gap-4 mt-6 animate-fade-right animate-once animate-duration-1500 animate-delay-2500">
            <a href="https://x.com/OmDusane" target="_blank">
              <img
                src="/assets/x-social-media-white-icon.svg"
                className="w-7 h-7 transform transition-transform duration-300 hover:scale-140 animate-fade-right animate-once animate-duration-1000 animate-delay-3700"
                alt="X.com"
              />
            </a>
            <a href="https://linkedin.com/in/om-dusane" target="_blank">
              <img
                src="/assets/linkedin-app-white-icon.svg"
                className="w-7 h-7 transform transition-transform duration-300 hover:scale-140 animate-fade-right animate-once animate-duration-1000 animate-delay-3500"
                alt="Linkedin.com"
              />
            </a>
            <a href="https://github.com/omdusane" target="_blank">
              <img
                src="/assets/github-white-icon.svg"
                className="w-7 h-7 transform transition-transform duration-300 hover:scale-140 animate-fade-right animate-once animate-duration-1000 animate-delay-3300"
                alt="Github.com"
              />
            </a>
            <a href="https://medium.com/@omdusane" target="_blank">
              <img
                src="/assets/Medium-Icon-Black.svg"
                className="w-7 h-7 transform transition-transform duration-300 hover:scale-140 animate-fade-right animate-once animate-duration-1000 animate-delay-3100"
                alt="Medium.com"
              />
            </a>
            <a href="/assets/Om_Dusane_CV.pdf" target="_blank">
              <img
                src="/assets/file-check-2.svg"
                className="w-7 h-7 transform transition-transform duration-300 hover:scale-140 animate-fade-right animate-once animate-duration-1000 animate-delay-2900"
                alt="Resume"
              />
            </a>
            <a href="mailto:omdusane8@gmail.com" target="_blank">
              <img
                src="/assets/email-envelope-white-icon.svg"
                className="w-7 h-7 transform transition-transform duration-300 hover:scale-140 animate-fade-right animate-once animate-duration-1000 animate-delay-2700"
                alt="Gmail.com"
              />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scrollable Content */}
      <div className={`${isMobile ? 'w-full' : 'ml-[40%] w-3/5'}`}>
        {/* Navbar */}
        <div className="w-full text-white bg-black">
          <div className="container mx-auto px-4">
            <div className={`${isMobile ? 'hidden' : 'flex justify-around py-4'} animate-fade-down animate-once animate-duration-1000 animate-delay-5000`}>
              {/* Navigation Links */}
              <a href="#about" className="hover:text-gray-300 transition-colors duration-300">About</a>
              <a href="#experience" className="hover:text-gray-300 transition-colors duration-300">Experience</a>
              <a href="#projects" className="hover:text-gray-300 transition-colors duration-300">Projects</a>
              <a href="#techstack" className="hover:text-gray-300 transition-colors duration-300">Tech Stack</a>
              <a href="#education" className="hover:text-gray-300 transition-colors duration-300">Education</a>
            </div>
          </div>
        </div>
        
        {/* Section 1: Hero */}
        <section id="about" className={`${isMobile ? 'min-h-[70vh]' : 'min-h-screen'} bg-black text-white flex items-center justify-center p-8`}>
          <div className="max-w-2xl text-lg mb-6 leading-relaxed">
            <p className='animate-fade-left animate-duration-2200 animate-delay-[3700ms]'>Software developer with 2.5+ years of experience, building scalable services and crafting efficient, high-performance systems.</p>
            <br />
            <p className='animate-fade-left animate-duration-2200 animate-delay-[4000ms]'>I've worked with frameworks like Flask, FastAPI, Django, and MERN and have hands-on experience integrating tools like Apache Kafka and Airflow for automation and event-driven architecture.</p>
            <br />
            <p className='animate-fade-left animate-duration-2200 animate-delay-[4300ms]'>Specialize in turning ideas into reliable, real-world solutions using modern technologies, ensuring your projects run smoothly and scale with ease.</p>
          </div>
        </section>

        <div className='bg-gradient-to-b from-black via-[#333333] to-[#555555]'>
          {/* Section 2: Experience */}
          <section id='experience' className={`${isMobile ? 'min-h-[70vh]' : 'min-h-screen'} text-white p-8`}>
            <h2 className="text-3xl font-bold mb-8">Experience</h2>
            <div className="mb-12">
              <div className={`${isMobile ? 'flex flex-col space-y-2' : 'flex justify-between items-center'} mb-2`}>
                <h3 className="text-xl font-semibold">Software Developer</h3>
                <span className="text-zinc-400">MAY 2025 - Present</span>
              </div>
              <a href="https://www.63moons.com/" target='_blank' className="flex items-center">
                <p className="text-lg text-zinc-300 mb-4">
                  63 Moons Technologies | Full time | Hybrid
                  <span className="inline-flex ml-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                      <path d="M7 17L17 7"></path>
                      <path d="M7 7h10v10"></path>
                    </svg>
                  </span>
                </p>
              </a>
              <ul className="list-disc pl-5 space-y-2">
                <li>Developed a subscription management microservice using FastAPI, PostgreSQL, SQLAlchemy, and Docker, orchestrating the full subscription lifecycle across Razorpay, Google Play, and Apple App Store, emitting domain events to Kafka and supporting thousands of daily transactions.</li>
                <li>Engineered a multi-channel notification service that consumes Airflow-generated Kafka events and dispatches email (Gmail API), WhatsApp (Sinch Engage), and push (FCM) messages with at-least-once delivery, RSA-2048 PII decryption, and secret-masking logs, handling millions of notifications per month.</li>
                <li>Designed and deployed an end-to-end judicial data pipeline using Apache Airflow, Kafka, Redis, and PostgreSQL, achieving parallel processing of 100k+ case records daily with fault-tolerant retry mechanisms.</li>
                <li>Built a real-time collaborative Contract Lifecycle Management platform with FastAPI, Yjs-based CRDT over WebSockets, Keycloak JWT authentication, and Redis state persistence, reducing contract turnaround time by 30%.</li>
                <li>Implemented a Keycloak-driven user management service with Sinch WhatsApp OTP login, encrypted email/phone storage, automated plan allocation, and RBAC, cutting user onboarding time by 40%.</li>
              </ul>
            </div>
            <div className="mb-12">
              <div className={`${isMobile ? 'flex flex-col space-y-2' : 'flex justify-between items-center'} mb-2`}>
                <h3 className="text-xl font-semibold">Jr. Python Developer</h3>
                <span className="text-zinc-400">JUL 2024 - APR 2025</span>
              </div>
              <a href="https://www.psychx86.com/" target='_blank' className="flex items-center">
                <p className="text-lg text-zinc-300 mb-4">
                  Psych X86 Technologies | Full time | Hybrid
                  <span className="inline-flex ml-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                      <path d="M7 17L17 7"></path>
                      <path d="M7 7h10v10"></path>
                    </svg>
                  </span>
                </p>
              </a>
              <ul className="list-disc pl-5 space-y-2">
                <li>Implemented backend optimizations for Advantus using Flask-RESTful and PostgreSQL — designed audience verification logic, leveraged COPY for bulk inserts, materialized views, and indexing — cutting audience retrieval and insertion times by ~40%.</li>
                <li>Designed and built the Journey Builder BPMN-based microservice platform using FastAPI, Asyncpg, JWT, Apache Kafka, and Airflow, delivering scalable real-time workflow execution and monitoring.</li>
                <li>Developed scalable Django REST Framework APIs for Wishmasters, integrating the PhonePe payment gateway and admin-panel features for coupon and reward management.</li>
                <li>Engineered a Flask-RESTful admission form backend for Dypatil, integrating PayUmoney, logging, and CRM APIs, deployed on AWS EC2 with Nginx and S3, achieving 99.9% uptime.</li>
                <li>Authored CI/CD Docker configurations and utilized SupervisorD for process supervision across projects, accelerating deployment cycles by ~30%.</li>
              </ul>
            </div>
            <div className="mb-12">
            <div className={`${isMobile ? 'flex flex-col space-y-2' : 'flex justify-between items-center'} mb-2`}>
              <h3 className="text-xl font-semibold">Cloud/DevOps Architect Intern</h3>
              <span className="text-zinc-400">DEC 2023 - MAR 2024</span>
            </div>
            <a href="https://www.tciaglobal.com/" target='_blank' className="flex items-center">
              <h4 className="text-lg text-zinc-300 mb-4">
                Tcia Global | Intern | Remote
                <span className="inline-flex ml-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7"></path>
                    <path d="M7 7h10v10"></path>
                  </svg>
                </span>
              </h4>
            </a>
            <ul className="list-disc pl-5 space-y-2">
              <li>Managed cloud infrastructure for customer environments using Azure services, Azure CLI, and automated deployments with ARM templates.</li>
              <li>Provisioned and configured Azure VMs, storage accounts, and networking components for seamless cloud operations.</li>
              <li>Contributed to full-stack development by building web apps with Flask, ensuring integration between cloud resources and applications.</li>
              <li>Enhanced deployment reliability and system automation, reducing manual provisioning efforts by over 50%.</li>
            </ul>
          </div>

          <div className="mb-12">
          <div className={`${isMobile ? 'flex flex-col space-y-2' : 'flex justify-between items-center'} mb-2`}>
              <h3 className="text-xl font-semibold">Full Stack Python Developer</h3>
              <span className="text-zinc-400">JUN 2022 - JUL 2024</span>
            </div>
            <a href="https://www.mahapolice.gov.in/" target='_blank' className="flex items-center">
              <h4 className="text-lg text-zinc-300 mb-4">
                Maharastra Police | Freelance | Remote
                <span className="inline-flex ml-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7"></path>
                    <path d="M7 7h10v10"></path>
                  </svg>
                </span>
              </h4>
            </a>
            <ul className="list-disc pl-5 space-y-2">
              <li>Developed three full-stack web applications using Flask, Material Dashboard, and advanced Flask modules (Blueprints, Flask-WTF, Flask-RESTful API).</li>
              <li>Engineered complex database queries and algorithms, improving application performance and data processing efficiency.</li>
              <li>Maintained and optimized production servers for high uptime and reliable performance across deployed applications.</li>
              <li>Led backend development with clean architecture and modular coding practices, enhancing scalability and maintainability.</li>
            </ul>
          </div>
          </section>
          
          {/* Section 3: Projects */}
          <section id='projects' className={`${isMobile ? 'min-h-[70vh]' : 'min-h-screen'} text-white p-8`}>
          <h2 className="text-3xl font-bold mb-8">Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-103">
              <h3 className="text-xl font-semibold mb-2">Journey Builder</h3>
              <p className="text-zinc-400 mb-4">BPMN-based microservice platform for workflow management</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Designed scalable database schema and project architecture for BPMN-based workflow management with full CRUD and JWT authentication using FastAPI and Uvicorn.</li>
                <li>Integrated Apache Kafka (producers, consumers, partitions) and Asyncpg for high-performance async PostgreSQL operations with Listen/Notify.</li>
                <li>Built async task orchestration with asyncio and supervised service management using SupervisorD with robust logging and journey instance tracking.</li>
              </ul>
              <div className="flex flex-wrap gap-2 mb-4 pt-5">
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">Python</span>
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">FastAPI</span>
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">Kafka</span>
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">Asyncpg</span>
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">PostgreSQL</span>
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">SupervisorD</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-103">
              <a href="https://advantus.io/" target='_blank' className="flex items-center">
                <h3 className="text-xl font-semibold mb-2">
                  Advantus
                  <span className="inline-flex ml-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17L17 7"></path>
                      <path d="M7 7h10v10"></path>
                    </svg>
                  </span>
                </h3>
              </a>
              <p className="text-zinc-400 mb-4">Backend optimization and feature development for a marketing automation platform</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Designed audience verification and validation logic ensuring data integrity, and leveraged PostgreSQL COPY for bulk inserts, materialized views, and strategic indexing, cutting retrieval times by ~40%.</li>
                <li>Streamlined Dockerfile builds across repositories, improving deployment efficiency and reducing container build times.</li>
              </ul>
              <div className="flex flex-wrap gap-2 mb-4 pt-5">
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">Python</span>
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">Flask-RESTful</span>
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">PostgreSQL</span>
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">Kafka</span>
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">Apache Airflow</span>
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">Docker</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-103">
              <h3 className="text-xl font-semibold mb-2">Wishmasters</h3>
              <p className="text-zinc-400 mb-4">Backend API development for a rewards and loyalty platform</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Developed scalable Django REST Framework APIs for managing coupons, rewards, and qualification workflows with secure design principles.</li>
                <li>Integrated PhonePe Payment Gateway for seamless, secure transaction handling.</li>
                <li>Built admin panel features for offer, reward, and user data management, improving transaction reliability and reducing manual processing time.</li>
              </ul>
              <div className="flex flex-wrap gap-2 mb-4 pt-5">
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">Python</span>
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">Django REST Framework</span>
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">PhonePe</span>
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">PostgreSQL</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-103">
              <a href="https://dypatil.edu/admissions/admission-form/" target='_blank' className="flex items-center">
                <h3 className="text-xl font-semibold mb-2">
                  Dypatil Admission Form Backend
                  <span className="inline-flex ml-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17L17 7"></path>
                      <path d="M7 7h10v10"></path>
                    </svg>
                  </span>
                </h3>
              </a>
              <p className="text-zinc-400 mb-4">Admission form API with payment gateway and CRM integration</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Built Flask-RESTful APIs for the admission form flow with PayUmoney payment gateway integration and comprehensive logging.</li>
                <li>Integrated third-party CRM APIs and deployed on AWS EC2 with Nginx reverse proxy and Amazon S3 storage, achieving 99.9% uptime.</li>
              </ul>
              <div className="flex flex-wrap gap-2 mb-4 pt-5">
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">Python</span>
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">Flask-RESTful</span>
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">AWS EC2</span>
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">Nginx</span>
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">Amazon S3</span>
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">PayUmoney</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-103">
              <h3 className="text-xl font-semibold mb-2">Media Flagger</h3>
              <p className="text-zinc-400 mb-4">CNN-based media classification app using GloVe embeddings for multi-label tagging</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Developed a Flask web app that automatically classifies media files using a CNN model trained with TensorFlow.</li>
                <li>Integrated GloVe word embeddings for enhanced semantic understanding and enabled multi-label classification for precise media tagging.</li>
              </ul>
              <div className="flex flex-wrap gap-2 mb-4 pt-5">
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">Python</span>
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">Flask</span>
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">TensorFlow</span>
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">CNN</span>
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">GloVe Embeddings</span>
              </div>
              <div className="flex gap-4">
                <a href="https://github.com/omdusane/media-flagger" target="_blank" className="flex items-center">
                  <img src="/assets/github-white-icon.svg" className="w-9 h-9 transform transition-transform duration-300 hover:scale-110" alt="Github.com" />
                </a>
              </div>
            </div>
            <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-103">
              <h3 className="text-xl font-semibold mb-2">CarSearch</h3>
              <p className="text-zinc-400 mb-4">Django REST API for car listings with advanced search and JWT authentication</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Developed a Django REST API for managing and searching car listings with CRUD operations and advanced search capabilities.</li>
                <li>Implemented JWT authentication with access and refresh tokens, custom permissions, throttling, and validators.</li>
                <li>Utilized pagination, routers, and generic views for clean, scalable API design.</li>
              </ul>
              <div className="flex flex-wrap gap-2 mb-4 pt-5">
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">Python</span>
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">Django REST Framework</span>
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">JWT</span>
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">ORM</span>
              </div>
              <div className="flex gap-4">
                <a href="https://github.com/omdusane/carSearch-django-rest" target="_blank" className="flex items-center">
                  <img src="/assets/github-white-icon.svg" className="w-9 h-9 transform transition-transform duration-300 hover:scale-110" alt="Github.com" />
                </a>
              </div>
            </div>
            <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-103">
              <h3 className="text-xl font-semibold mb-2">Attendance System</h3>
              <p className="text-zinc-400 mb-4">This project automates the process of taking attendance in colleges using OpenCV for facial recognition and Tkinter for the GUI</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Developed an automated attendance system using OpenCV for facial recognition.</li>
                <li>Implemented automated attendance marking and data management.</li>
                <li>Utilized Haar cascade classifier for face detection.</li>
                <li>Built a user-friendly GUI with Tkinter.</li>
              </ul>
              <div className="flex flex-wrap gap-2 mb-4 pt-5">
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">Python</span>
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">OpenCv</span>
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">Tkinter</span>
              </div>
              <div className="flex gap-4">
                <a href="https://github.com/omdusane/Attendance-OpenCV" target="_blank" className="flex items-center">
                  <img src="/assets/github-white-icon.svg" className="w-9 h-9 transform transition-transform duration-300 hover:scale-110" alt="Github.com" />
                </a>
              </div>
            </div>
            <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-103">
              <a href="https://ekamed.in/" target="_blank" className="flex items-center">
                <h3 className="text-xl font-semibold mb-2">
                  Ekamed
                  <span className="inline-flex ml-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17L17 7"></path>
                      <path d="M7 7h10v10"></path>
                    </svg>
                  </span>
                </h3>
              </a>
              <p className="text-zinc-400 mb-4">Multi-tenant serverless Hospital Management SaaS on AWS</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Designed a multi-tenant Hospital Management SaaS on AWS Lambda and API Gateway with fully isolated data per organization.</li>
                <li>Automated hospital onboarding — provisioning S3 buckets, Cognito user pools, Verified Permissions policies, and per-org PostgreSQL schemas — in 2–3 minutes via Terraform and GitHub Actions.</li>
                <li>Built 12+ microservices (patient, employee, appointment, billing, AI, QR, etc.) with fine-grained Amazon Verified Permissions authorization and row-level security driven by JWT claims.</li>
                <li>Integrated OCR-based digitization, PDF generation, and QR/Datamatrix scanning using S3, img2pdf, and AWS KMS for secure patient check-in/out and audit trails.</li>
              </ul>
              <div className="flex flex-wrap gap-2 mb-4 pt-5">
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">Python</span>
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">AWS Lambda</span>
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">API Gateway</span>
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">PostgreSQL</span>
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">Cognito</span>
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">Terraform</span>
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">Docker</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-103">
              <h3 className="text-xl font-semibold mb-2">QiWatch Subscription Service</h3>
              <p className="text-zinc-400 mb-4">Production-grade subscription management microservice integrating Razorpay, Google Play, and Apple App Store</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Orchestrated the full subscription lifecycle across Razorpay, Google Play, and Apple App Store, enforcing per-user quotas and emitting domain events to Apache Kafka.</li>
                <li>Implemented idempotent webhook handling, background reconciliation workers, and layered provider abstraction architecture.</li>
                <li>Deployed with Docker on Python 3.12/Uvicorn with structured logging and containerized migrations using raw SQL.</li>
              </ul>
              <div className="flex flex-wrap gap-2 mb-4 pt-5">
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">Python</span>
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">FastAPI</span>
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">PostgreSQL</span>
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">Kafka</span>
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">Razorpay</span>
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">Docker</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-103">
              <h3 className="text-xl font-semibold mb-2">QiWatch Notification Service</h3>
              <p className="text-zinc-400 mb-4">Multi-channel notification microservice dispatching email, WhatsApp, and push via Kafka events</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Consumed Apache Airflow-generated Kafka events and dispatched email (Gmail API), WhatsApp (Sinch Engage), and push (FCM) notifications, handling millions of messages per month.</li>
                <li>Implemented at-least-once delivery with idempotent upserts and RSA-2048 decryption of PII with structured secret-masking logs.</li>
                <li>Persisted in-app notification state in PostgreSQL via a FastAPI REST API with a registry-based renderer pattern for extensible notification types.</li>
              </ul>
              <div className="flex flex-wrap gap-2 mb-4 pt-5">
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">Python</span>
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">FastAPI</span>
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">Kafka</span>
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">Gmail API</span>
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">Sinch</span>
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">FCM</span>
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">PostgreSQL</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-103">
              <a href="https://qilegal.com/" target="_blank" className="flex items-center">
                <h3 className="text-xl font-semibold mb-2">
                  QiLegal Judicial Microservice
                  <span className="inline-flex ml-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17L17 7"></path>
                      <path d="M7 7h10v10"></path>
                    </svg>
                  </span>
                </h3>
              </a>
              <p className="text-zinc-400 mb-4">Judicial data aggregation microservice across Indian courts</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Aggregated case data from Indian high, supreme, district, and tribunal court websites via FastAPI.</li>
                <li>Used Celery and Redis for concurrent multi-import workflows and Kafka for failed request handling and retry.</li>
              </ul>
              <div className="flex flex-wrap gap-2 mb-4 pt-5">
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">Python</span>
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">FastAPI</span>
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">Celery</span>
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">Redis</span>
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">Kafka</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-103">
              <a href="https://qilegal.com/" target="_blank" className="flex items-center">
                <h3 className="text-xl font-semibold mb-2">
                  QiLegal Data Pipeline
                  <span className="inline-flex ml-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17L17 7"></path>
                      <path d="M7 7h10v10"></path>
                    </svg>
                  </span>
                </h3>
              </a>
              <p className="text-zinc-400 mb-4">Automated end-to-end data pipeline for Indian court case data</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Automated scraping and synchronization of Indian court case data (Supreme, High, District) using Apache Airflow for orchestration.</li>
                <li>Achieved parallel processing of 100k+ case records daily with Kafka event-driven failure handling, Redis queuing, and fault-tolerant retry mechanisms.</li>
                <li>Deployed on Docker with AWS Application and Network Load Balancers for high availability.</li>
              </ul>
              <div className="flex flex-wrap gap-2 mb-4 pt-5">
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">Python</span>
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">Apache Airflow</span>
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">Kafka</span>
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">Redis</span>
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">PostgreSQL</span>
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">Docker</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-103">
              <a href="https://qilegal.com/" target="_blank" className="flex items-center">
                <h3 className="text-xl font-semibold mb-2">
                  Contract Lifecycle Management
                  <span className="inline-flex ml-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17L17 7"></path>
                      <path d="M7 7h10v10"></path>
                    </svg>
                  </span>
                </h3>
              </a>
              <p className="text-zinc-400 mb-4">Real-time collaborative contract editing platform for QiLegal</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Built a real-time collaborative document editing platform using Yjs-based CRDT over WebSockets, enabling concurrent multi-user editing per document.</li>
                <li>Implemented multi-tenant architecture with Keycloak JWT authentication (JWKS caching) and Redis-backed CRDT state persistence.</li>
                <li>Developed FastAPI REST APIs with SQLAlchemy and PostgreSQL, reducing contract turnaround time by 30%.</li>
              </ul>
              <div className="flex flex-wrap gap-2 mb-4 pt-5">
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">Python</span>
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">FastAPI</span>
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">WebSockets</span>
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">Yjs / CRDT</span>
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">Keycloak</span>
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">Redis</span>
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">PostgreSQL</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-103">
              <h3 className="text-xl font-semibold mb-2">QiWatch User Management Service</h3>
              <p className="text-zinc-400 mb-4">Keycloak-driven user management with WhatsApp OTP, encryption, and RBAC for a B2C app</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Implemented Keycloak-based authentication with Sinch WhatsApp OTP login and encrypted email/phone storage.</li>
                <li>Built automated subscription plan allocation and role-based access control for admin and staff roles.</li>
                <li>Delivered an admin dashboard with analytics and notification preferences, cutting user onboarding time by 40%.</li>
              </ul>
              <div className="flex flex-wrap gap-2 mb-4 pt-5">
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">Python</span>
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">FastAPI</span>
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">Keycloak</span>
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">Sinch WhatsApp</span>
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">OTP</span>
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">RBAC</span>
              </div>
            </div>
          </div>
          </section>
          
          {/* Section 3: Skills */}
          <section id='techstack' className={`${isMobile ? 'min-h-[70vh]' : 'min-h-screen'} text-white p-8`}>
          <h2 className="text-3xl font-bold mb-8">Tech Stack</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-103">
              <h3 className="text-xl font-semibold mb-2">Frameworks</h3>
              <div className="flex flex-wrap gap-3 mb-4">
                <span className="px-2 py-1 bg-zinc-700 text-sm rounded">Django</span>
                <span className="px-2 py-1 bg-zinc-700 text-sm rounded">Fastapi</span>
                <span className="px-2 py-1 bg-zinc-700 text-sm rounded">Flask</span>
                <span className="px-2 py-1 bg-zinc-700 text-sm rounded">Node</span>
                <span className="px-2 py-1 bg-zinc-700 text-sm rounded">Express</span>
                <span className="px-2 py-1 bg-zinc-700 text-sm rounded">Nextjs</span>
                <span className="px-2 py-1 bg-zinc-700 text-sm rounded">React</span>
                <span className="px-2 py-1 bg-zinc-700 text-sm rounded">Bootstrap</span>
                <span className="px-2 py-1 bg-zinc-700 text-sm rounded">Kafka</span>
                <span className="px-2 py-1 bg-zinc-700 text-sm rounded">Apache Airflow</span>
                <span className="px-2 py-1 bg-zinc-700 text-sm rounded">Docker</span>
                <span className="px-2 py-1 bg-zinc-700 text-sm rounded">K8s</span>
                <span className="px-2 py-1 bg-zinc-700 text-sm rounded">Jenkins</span>
                <span className="px-2 py-1 bg-zinc-700 text-sm rounded">AWS</span>
                <span className="px-2 py-1 bg-zinc-700 text-sm rounded">Azure</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-103">
              <h3 className="text-xl font-semibold mb-2">Languages</h3>
              <div className="flex flex-wrap gap-3 mb-4">
                <span className="px-2 py-1 bg-zinc-700 text-sm rounded">Python</span>
                <span className="px-2 py-1 bg-zinc-700 text-sm rounded">Javascript</span>
                <span className="px-2 py-1 bg-zinc-700 text-sm rounded">Java</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-103">
              <h3 className="text-xl font-semibold mb-2">Database</h3>
              <div className="flex flex-wrap gap-3 mb-4">
                <span className="px-2 py-1 bg-zinc-700 text-sm rounded">PostgreSQL</span>
                <span className="px-2 py-1 bg-zinc-700 text-sm rounded">MySQL</span>
                <span className="px-2 py-1 bg-zinc-700 text-sm rounded">MongoDB</span>
              </div>
            </div>
          </div>
          </section>
          
          {/* Section 4: Education */}
          <section id='education' className={`${isMobile ? 'min-h-[70vh]' : 'min-h-screen'} text-white p-8`}>
            <h2 className="text-3xl font-bold mb-8">Education</h2>
          
            <div className="mb-12">
              <div className={`${isMobile ? 'flex flex-col space-y-2' : 'flex justify-between items-center'} mb-2`}>
                <h3 className="text-xl font-semibold">BTech in Information Technology</h3>
              </div>
              <h4 className="text-zinc-400">Major in Cloud Computing, Cyber Security, AI/ML and Minor in Blockchain</h4>
              <h4 className="text-lg text-zinc-300 mb-4">University of Mumbai</h4>
            </div>
            
            {/* <div className="mb-12">
              <h3 className="text-xl font-semibold mb-4">Certifications</h3>
              <ul className="list-disc pl-5 space-y-3">
                <li>
                  <div className={`${isMobile ? 'flex flex-col space-y-1' : 'flex justify-between items-center'}`}>
                    <span className="font-medium">AWS Certified Solutions Architect</span>
                    <span className="text-zinc-400">2022</span>
                  </div>
                </li>
              </ul>
            </div> */}
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
