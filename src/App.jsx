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
                <h3 className="text-xl font-semibold">Python Developer</h3>
                <span className="text-zinc-400">JUL 2024 - APR 2025</span>
              </div>
              <a href="https://www.psychx86.com/" target='_blank' className="flex items-center">
                <p className="text-lg text-zinc-300 mb-4">
                  Psychx86 Technologies | Full time | Hybrid
                  <span className="inline-flex ml-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                      <path d="M7 17L17 7"></path>
                      <path d="M7 7h10v10"></path>
                    </svg>
                  </span>
                </p>
              </a>
              <ul className="list-disc pl-5 space-y-2">
                <li>Designed and developed scalable microservices architecture for BPMN workflows using FastAPI, integrated Kafka event-driven pipelines, and automated processing with Airflow DAGs.</li>
                <li>Optimized PostgreSQL performance with bulk inserts, indexing, and materialized views, improving system responsiveness by 30%.</li>
                <li>Implemented secure authentication, authorization, async processing (Asyncpg, asyncio), and deployed services on Docker, EC2, and Nginx with SupervisorD for production stability.</li>
                <li>Delivered full backend solutions across projects like Advantus, Wishmasters (Django REST, PhonePe gateway), Dypatil Admissions (Flask, PayUmoney), Tata Neural HR (RAG, LLMs), and data scraping POCs.</li>
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
            <div className=" bg-gradient-to-br from-zinc-900 to-zinc-800 p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-103">
              <a href="https://advantus.io/" target='_blank' className="flex items-center">
                <h3 className="text-xl font-semibold mb-2">
                  Journey Builder - Microservices
                  <span className="inline-flex ml-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17L17 7"></path>
                      <path d="M7 7h10v10"></path>
                    </svg>
                  </span>
                </h3>
              </a>
              <p className="text-zinc-400 mb-4">Designed and developed BPMN based microservice</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Designed and structured scalable database schema and clean project architecture for BPMN-based workflow management.</li>
                <li>Implemented full CRUD operations, JWT-based authentication, user authorization, and real-time process execution flows using FastAPI and Uvicorn.</li>
                <li>Integrated Apache Kafka (admin tools, partitions, producers, consumers) and Asyncpg for efficient async communication and high-performance PostgreSQL operations.</li>
                <li>Built asynchronous task management with asyncio and supervised service orchestration using SupervisorD, ensuring system reliability.</li>
                <li>Developed robust logging, monitoring, and PostgreSQL Listen/Notify mechanisms, and enabled dynamic tagging and journey instance tracking for enhanced process management.</li>
              </ul>
              <div className="flex flex-wrap gap-2 mb-4 pt-5">
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">Python</span>
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">FastAPI</span>
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">Kafka</span>
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">Apache Airflow</span>
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">Message Queues</span>
              </div>
            </div>
            <div className=" bg-gradient-to-br from-zinc-900 to-zinc-800 p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-103">
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
              <p className="text-zinc-400 mb-4">Worked on Backend Optimization and Feature Developmente</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Designed audience verification and validation logic, ensuring data integrity and faster operations.</li>
                <li>Enhanced database performance by leveraging PostgreSQL COPY for bulk inserts, creating Materialized Views, and implementing strategic indexing.</li>
                <li>Improved audience retrieval speed and optimized insertion workflows, significantly boosting system responsiveness.</li>
                <li>Optimized Dockerfiles for streamlined container builds, improving deployment efficiency across repositories.</li>
              </ul>
              <div className="flex flex-wrap gap-2 mb-4 pt-5">
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">Python</span>
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">Flask-Restful</span>
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">Kafka</span>
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">Apache Airflow</span>
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">Message Queues</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-103">
              
                <h3 className="text-xl font-semibold mb-2">
                  Wishmasters
                </h3>
              <p className="text-zinc-400 mb-4">Worked on Backend API Development using Django REST Framework</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Developed Django REST APIs for managing Coupons, Rewards, and Reward Categories with scalable and secure design principles.</li>
                <li>Built Qualification Round API workflows to support dynamic business logic and user interactions.</li>
                <li>Integrated PhonePe Payment Gateway for seamless and secure transaction handling within the platform.</li>
                <li>Designed and implemented Admin panel functionalities, enabling easy management of offers, rewards, and user data.</li>
              </ul>
              <div className="flex flex-wrap gap-2 mb-4 pt-5">
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">Python</span>
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">Django REST Framework</span>
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">Payment Gateway</span>
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">Apache Airflow</span>
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
              <p className="text-zinc-400 mb-4">Worked on Admission form API with payment gateway integration</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Flask + Flask-RESTful based APIs.</li>
                <li>EC2 instance deployments with Nginx server setup and used S3 for storages.</li>
                <li>Integrated PayUmoney Payment Gateway.</li>
                <li>Implemented Logging and Integrated thrid party apis for CRM</li>
              </ul>
              <div className="flex flex-wrap gap-2 mb-4 pt-5">
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">Python</span>
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">Flask</span>
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">Payment Gateway</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-103">
              <h3 className="text-xl font-semibold mb-2">Media Flagger</h3>
              <p className="text-zinc-400 mb-4">Developed a CNN model for semantic analysis using Glove Word Embeddings</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Developed a Flask web app for media file flagging based on its contents.</li>
                <li>Implemented automated classification using CNN model.</li>
                <li>Integrated GloVe embeddings for enhanced NLP tasks.</li>
                <li>Enabled multilabel classification for precise media tagging.</li>
              </ul>
              <div className="flex flex-wrap gap-2 mb-4 pt-5">
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">Python</span>
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">Flask</span>
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">Tensorflow</span>
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">CNN</span>
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">Glove Embeddings</span>
              </div>
              <div className="flex gap-4">
                <a href="https://github.com/omdusane/media-flagger" target="_blank" className="flex items-center">
                  <img src="/assets/github-white-icon.svg" className="w-9 h-9 transform transition-transform duration-300 hover:scale-110" alt="Github.com" />
                </a>
              </div>
            </div>
            <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-103">
              <h3 className="text-xl font-semibold mb-2">CarSearch</h3>
              <p className="text-zinc-400 mb-4">Project includes features like CRUD operations for car listings, advanced search capabilities, and user authentication</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Developed a Django REST API for managing and searching car listings.</li>
                <li>Implemented JWT, Access tokens, Refresh tokens for user authentication.</li>
                <li>Utilized custom permissions, throttling, and validators.</li>
                <li>Implemented pagination, routers, and generic views.</li>
              </ul>
              <div className="flex flex-wrap gap-2 mb-4 pt-5">
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">Python</span>
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">Django REST Framework</span>
                <span className="px-2 py-1 bg-zinc-700 text-xs rounded">ORM</span>
              </div>
              <div className="flex gap-4">
                <a href="https://github.com/omdusane/carSearch-django-rest" target="_blank" className="flex items-center">
                  <img src="/assets/github-white-icon.svg" className="w-9 h-9 transform transition-transform duration-300 hover:scale-110" alt="Github.com" />
                </a>
              </div>
            </div>
            <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-103">
              <h3 className="text-xl font-semibold mb-2">Attendence System</h3>
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
