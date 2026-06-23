import { useEffect, useRef, useState } from 'react';

const ACCENT = ['#ffb86b', '#ff8f6b'];

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'work', label: 'Work' },
  { id: 'stack', label: 'Stack' },
  { id: 'contact', label: 'Contact' },
];

const SOCIALS = [
  { label: 'X (Twitter)', href: 'https://x.com/OmDusane', icon: '/assets/x-social-media-white-icon.svg' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/om-dusane', icon: '/assets/linkedin-app-white-icon.svg' },
  { label: 'GitHub', href: 'https://github.com/omdusane', icon: '/assets/github-white-icon.svg' },
  { label: 'Medium', href: 'https://medium.com/@omdusane', icon: '/assets/Medium-Icon-Black.svg' },
  { label: 'Résumé', href: '/assets/Om_Dusane_CV.pdf', icon: '/assets/file-check-2.svg' },
  { label: 'Email', href: 'mailto:omdusane8@gmail.com', icon: '/assets/email-envelope-white-icon.svg' },
];

const STATS = [
  { value: '2.5', suffix: '+', label: 'Years experience' },
  { value: '14', suffix: '+', label: 'Projects shipped' },
  { value: '4', suffix: '', label: 'Companies' },
];

const PILLARS = [
  { num: '01', word: 'Build', desc: 'Design scalable services and clean architectures from first principles — FastAPI, Django, Flask, and the MERN stack.' },
  { num: '02', word: 'Scale', desc: 'Event-driven systems with Kafka, Airflow and Redis that process hundreds of thousands of events daily, without breaking.' },
  { num: '03', word: 'Ship', desc: 'Production-ready and fault-tolerant — Dockerized, CI/CD-driven, deployed and monitored at 99.9% uptime.' },
];

const MARQUEE_ITEMS = ['Python', 'FastAPI', 'Django', 'Flask', 'Apache Kafka', 'Apache Airflow', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes', 'AWS', 'Keycloak', 'WebSockets', 'Celery', 'MongoDB'];

const EXPERIENCES = [
  {
    role: 'Software Developer', company: '63 Moons Technologies · Full-time · Hybrid',
    url: 'https://www.63moons.com/', period: 'MAY 2025 — PRESENT',
    bullets: [
      'Developed a subscription management microservice with FastAPI, PostgreSQL, SQLAlchemy and Docker, orchestrating the full lifecycle across Razorpay, Google Play and Apple App Store, emitting domain events to Kafka and supporting thousands of daily transactions.',
      'Engineered a multi-channel notification service consuming Airflow-generated Kafka events to dispatch email (Gmail API), WhatsApp (Sinch) and push (FCM) with at-least-once delivery, RSA-2048 PII decryption and secret-masking logs — handling millions of notifications per month.',
      'Designed an end-to-end judicial data pipeline with Apache Airflow, Kafka, Redis and PostgreSQL, achieving parallel processing of 100k+ case records daily with fault-tolerant retries.',
      'Built a real-time collaborative Contract Lifecycle Management platform with FastAPI, Yjs-based CRDT over WebSockets, Keycloak JWT auth and Redis state persistence — cutting contract turnaround by 30%.',
    ],
  },
  {
    role: 'Jr. Python Developer', company: 'Psych X86 Technologies · Full-time · Hybrid',
    url: 'https://www.psychx86.com/', period: 'JUL 2024 — APR 2025',
    bullets: [
      'Implemented backend optimizations for Advantus using Flask-RESTful and PostgreSQL — audience verification logic, COPY bulk inserts, materialized views and indexing — cutting retrieval and insertion times by ~40%.',
      'Designed the Journey Builder BPMN-based microservice platform with FastAPI, Asyncpg, JWT, Kafka and Airflow, delivering scalable real-time workflow execution and monitoring.',
      'Developed scalable Django REST APIs for Wishmasters, integrating the PhonePe payment gateway and admin-panel coupon/reward management.',
      'Authored CI/CD Docker configs and used SupervisorD for process supervision, accelerating deployment cycles by ~30%.',
    ],
  },
  {
    role: 'Cloud / DevOps Architect Intern', company: 'Tcia Global · Intern · Remote',
    url: 'https://www.tciaglobal.com/', period: 'DEC 2023 — MAR 2024',
    bullets: [
      'Managed cloud infrastructure for customer environments using Azure services, Azure CLI and automated ARM-template deployments.',
      'Provisioned and configured Azure VMs, storage accounts and networking for seamless cloud operations.',
      'Contributed to full-stack development building web apps with Flask, integrating cloud resources with applications.',
      'Enhanced deployment reliability and automation, reducing manual provisioning by over 50%.',
    ],
  },
  {
    role: 'Full Stack Python Developer', company: 'Maharashtra Police · Freelance · Remote',
    url: 'https://www.mahapolice.gov.in/', period: 'JUN 2022 — JUL 2024',
    bullets: [
      'Developed three full-stack web apps using Flask, Material Dashboard and advanced Flask modules (Blueprints, Flask-WTF, Flask-RESTful).',
      'Engineered complex database queries and algorithms, improving application performance and data-processing efficiency.',
      'Maintained and optimized production servers for high uptime across deployed applications.',
      'Led backend development with clean, modular architecture, enhancing scalability and maintainability.',
    ],
  },
];

const PROJECTS = [
  { title: 'Ekamed', url: 'https://ekamed.in/', featured: true, desc: 'Multi-tenant serverless Hospital Management SaaS on AWS.', bullets: ['Designed a multi-tenant SaaS on AWS Lambda + API Gateway with fully isolated per-org data.', 'Automated onboarding (S3, Cognito, Verified Permissions, per-org PostgreSQL schemas) in 2–3 min via Terraform + GitHub Actions.', 'Built 12+ microservices with fine-grained authorization and JWT-driven row-level security.'], tags: ['Python', 'AWS Lambda', 'API Gateway', 'PostgreSQL', 'Cognito', 'Terraform'] },
  { title: 'Contract Lifecycle Management', url: 'https://qilegal.com/', featured: true, desc: 'Real-time collaborative contract editing platform for QiLegal.', bullets: ['Built real-time collaborative editing with Yjs CRDT over WebSockets for concurrent multi-user docs.', 'Multi-tenant architecture with Keycloak JWT (JWKS caching) and Redis-backed CRDT persistence.', 'FastAPI + SQLAlchemy + PostgreSQL, reducing contract turnaround by 30%.'], tags: ['FastAPI', 'WebSockets', 'Yjs / CRDT', 'Keycloak', 'Redis', 'PostgreSQL'] },
  { title: 'QiWatch Subscription Service', featured: true, desc: 'Production-grade subscription microservice across Razorpay, Google Play & Apple.', bullets: ['Orchestrated the full lifecycle across three providers, enforcing per-user quotas and emitting Kafka domain events.', 'Idempotent webhook handling, background reconciliation workers and layered provider abstraction.', 'Deployed with Docker on Python 3.12 / Uvicorn with structured logging.'], tags: ['Python', 'FastAPI', 'PostgreSQL', 'Kafka', 'Razorpay', 'Docker'] },
  { title: 'QiLegal Data Pipeline', url: 'https://qilegal.com/', featured: true, desc: 'Automated end-to-end pipeline for Indian court case data.', bullets: ['Automated scraping/sync of Supreme, High and District court data via Apache Airflow.', 'Parallel processing of 100k+ records daily with Kafka failure handling, Redis queuing and retries.', 'Deployed on Docker with AWS load balancers for high availability.'], tags: ['Apache Airflow', 'Kafka', 'Redis', 'PostgreSQL', 'Docker'] },
  { title: 'Journey Builder', desc: 'BPMN-based microservice platform for workflow management.', bullets: ['Designed scalable schema and architecture with full CRUD and JWT auth using FastAPI + Uvicorn.', 'Integrated Kafka (producers, consumers, partitions) and Asyncpg with Listen/Notify.', 'Async task orchestration with asyncio, supervised by SupervisorD with robust logging.'], tags: ['FastAPI', 'Kafka', 'Asyncpg', 'PostgreSQL', 'SupervisorD'] },
  { title: 'QiWatch Notification Service', desc: 'Multi-channel notifications via Kafka events — email, WhatsApp, push.', bullets: ['Consumed Airflow-generated Kafka events to dispatch Gmail, Sinch WhatsApp and FCM — millions/month.', 'At-least-once delivery with idempotent upserts and RSA-2048 PII decryption.', 'Registry-based renderer pattern over a FastAPI REST API for extensible types.'], tags: ['FastAPI', 'Kafka', 'Gmail API', 'Sinch', 'FCM', 'PostgreSQL'] },
  { title: 'QiLegal Judicial Microservice', url: 'https://qilegal.com/', desc: 'Judicial data aggregation across Indian courts.', bullets: ['Aggregated case data from high, supreme, district and tribunal court sites via FastAPI.', 'Used Celery + Redis for concurrent multi-import workflows and Kafka for retry handling.'], tags: ['FastAPI', 'Celery', 'Redis', 'Kafka'] },
  { title: 'QiWatch User Management', desc: 'Keycloak-driven user management with WhatsApp OTP, encryption & RBAC.', bullets: ['Keycloak auth with Sinch WhatsApp OTP login and encrypted email/phone storage.', 'Automated subscription plan allocation and role-based access for admin/staff.', 'Admin dashboard with analytics, cutting onboarding time by 40%.'], tags: ['FastAPI', 'Keycloak', 'Sinch WhatsApp', 'OTP', 'RBAC'] },
  { title: 'Advantus', url: 'https://advantus.io/', desc: 'Backend optimization for a marketing automation platform.', bullets: ['Audience verification logic with COPY bulk inserts, materialized views and indexing — ~40% faster retrieval.', 'Streamlined Dockerfile builds across repos, reducing container build times.'], tags: ['Flask-RESTful', 'PostgreSQL', 'Kafka', 'Airflow', 'Docker'] },
  { title: 'Wishmasters', desc: 'Backend APIs for a rewards and loyalty platform.', bullets: ['Scalable Django REST APIs for coupons, rewards and qualification workflows.', 'Integrated PhonePe payment gateway and built admin-panel management features.'], tags: ['Django REST', 'PhonePe', 'PostgreSQL'] },
  { title: 'Dypatil Admission Backend', url: 'https://dypatil.edu/admissions/admission-form/', desc: 'Admission-form API with payment gateway and CRM integration.', bullets: ['Flask-RESTful APIs with PayUmoney integration and comprehensive logging.', 'Integrated CRM APIs, deployed on AWS EC2 with Nginx and S3 at 99.9% uptime.'], tags: ['Flask-RESTful', 'AWS EC2', 'Nginx', 'S3', 'PayUmoney'] },
  { title: 'Media Flagger', github: 'https://github.com/omdusane/media-flagger', desc: 'CNN media classification with GloVe embeddings for multi-label tagging.', bullets: ['Flask web app classifying media using a CNN trained with TensorFlow.', 'GloVe embeddings for semantic understanding and precise multi-label tagging.'], tags: ['Flask', 'TensorFlow', 'CNN', 'GloVe'] },
  { title: 'CarSearch', github: 'https://github.com/omdusane/carSearch-django-rest', desc: 'Django REST API for car listings with advanced search and JWT.', bullets: ['CRUD + advanced search over car listings.', 'JWT access/refresh tokens, custom permissions, throttling and validators.', 'Pagination, routers and generic views for clean, scalable design.'], tags: ['Django REST', 'JWT', 'ORM'] },
  { title: 'Attendance System', github: 'https://github.com/omdusane/Attendance-OpenCV', desc: 'Automated college attendance via OpenCV facial recognition.', bullets: ['Facial recognition with Haar cascade classifier for face detection.', 'Automated attendance marking and data management with a Tkinter GUI.'], tags: ['OpenCV', 'Tkinter', 'Python'] },
];

const TECH_GROUPS = [
  { label: 'Languages', items: ['Python', 'JavaScript', 'Java'] },
  { label: 'Frameworks & Infra', items: ['Django', 'FastAPI', 'Flask', 'Node', 'Express', 'Next.js', 'React', 'Bootstrap', 'Kafka', 'Apache Airflow', 'Docker', 'K8s', 'Jenkins', 'AWS', 'Azure'] },
  { label: 'Databases', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'] },
];

const accentText = { background: `linear-gradient(120deg, ${ACCENT[0]}, ${ACCENT[1]})`, WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' };
const sectionLabel = { fontFamily: "'JetBrains Mono',monospace", fontSize: 12, letterSpacing: '.2em', color: 'var(--ac)' };
const sectionHr = { flex: 1, height: 1, background: 'rgba(255,255,255,.08)' };

function App() {
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth < 760);
  const rootRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 760);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      const goingDown = y > lastY + 2;
      const goingUp = y < lastY - 2;
      if (y > 40) {
        nav.style.background = 'rgba(7,8,11,.82)';
        nav.style.backdropFilter = 'blur(14px)';
        nav.style.webkitBackdropFilter = 'blur(14px)';
        nav.style.borderBottomColor = 'rgba(255,255,255,.07)';
      } else {
        nav.style.background = 'transparent';
        nav.style.backdropFilter = 'none';
        nav.style.webkitBackdropFilter = 'none';
        nav.style.borderBottomColor = 'transparent';
      }
      if (y > 160 && goingDown) nav.style.transform = 'translateY(-112%)';
      else if (goingUp || y <= 160) nav.style.transform = 'translateY(0)';
      lastY = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const enterEls = [...root.querySelectorAll('[data-enter]')];
    const timers = enterEls.map((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity .8s cubic-bezier(.22,1,.36,1), transform .8s cubic-bezier(.22,1,.36,1)';
      return setTimeout(() => { el.style.opacity = '1'; el.style.transform = 'none'; }, 120 * i + 120);
    });

    const countEl = (el) => {
      if (el._done) return;
      el._done = true;
      const raw = el.getAttribute('data-count');
      const target = parseFloat(raw);
      const dec = raw.indexOf('.') >= 0 ? 1 : 0;
      const dur = 1500, t0 = performance.now();
      const step = (t) => {
        let p = Math.min(1, (t - t0) / dur);
        p = 1 - Math.pow(1 - p, 3);
        el.textContent = (target * p).toFixed(dec);
        if (p < 1) requestAnimationFrame(step); else el.textContent = target.toFixed(dec);
      };
      requestAnimationFrame(step);
    };

    const revealIo = new IntersectionObserver((ents) => {
      ents.forEach((e) => {
        if (e.isIntersecting) {
          const el = e.target;
          el.style.opacity = '1';
          el.style.transform = 'none';
          el.querySelectorAll('[data-count]').forEach(countEl);
          revealIo.unobserve(el);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -5% 0px' });

    const revealEls = [...root.querySelectorAll('[data-reveal]')];
    revealEls.forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(28px)';
      el.style.transition = 'opacity .8s cubic-bezier(.22,1,.36,1), transform .8s cubic-bezier(.22,1,.36,1)';
      revealIo.observe(el);
    });

    const links = [...root.querySelectorAll('[data-navlink]')];
    const spyIo = new IntersectionObserver((ents) => {
      ents.forEach((e) => {
        if (e.isIntersecting) {
          const id = e.target.id;
          links.forEach((l) => {
            const on = l.getAttribute('data-navlink') === id;
            l.style.color = on ? '#f4f5f8' : 'rgba(160,166,178,.8)';
            const bar = l.querySelector('[data-navbar]');
            if (bar) bar.style.width = on ? '100%' : '0';
          });
        }
      });
    }, { rootMargin: '-48% 0px -48% 0px' });
    root.querySelectorAll('section[id]').forEach((s) => spyIo.observe(s));

    return () => {
      timers.forEach(clearTimeout);
      revealIo.disconnect();
      spyIo.disconnect();
    };
  }, [isMobile]);

  const pillarCols = isMobile ? '1fr' : 'minmax(0,1.05fr) minmax(0,1fr)';
  const bulletCols = isMobile ? '1fr' : '1fr 1fr';
  const footerCols = isMobile ? '1fr' : '1.6fr 1fr 1fr';

  return (
    <div
      id="od-root"
      ref={rootRef}
      style={{ position: 'relative', minHeight: '100vh', width: '100%', overflowX: 'hidden', background: '#06070a', '--ac': ACCENT[0], '--ac2': ACCENT[1] }}
    >
      {/* fixed background field */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-24%', left: '-10%', width: '60vw', height: '60vw', borderRadius: '50%', background: 'radial-gradient(circle at center, color-mix(in srgb, var(--ac) 26%, transparent), transparent 62%)', filter: 'blur(44px)', animation: 'auroraA 22s ease-in-out infinite' }} />
        <div style={{ position: 'absolute', bottom: '-28%', right: '-12%', width: '58vw', height: '58vw', borderRadius: '50%', background: 'radial-gradient(circle at center, color-mix(in srgb, var(--ac2) 22%, transparent), transparent 62%)', filter: 'blur(50px)', animation: 'auroraB 26s ease-in-out infinite' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,.05) 1px, transparent 1px)', backgroundSize: '26px 26px', opacity: .45, maskImage: 'radial-gradient(ellipse at 50% 30%, #000 25%, transparent 75%)', WebkitMaskImage: 'radial-gradient(ellipse at 50% 30%, #000 25%, transparent 75%)' }} />
        <div style={{ position: 'absolute', inset: '-10%', opacity: .05, mixBlendMode: 'overlay', backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")", animation: 'grainShift 8s steps(6) infinite' }} />
      </div>

      {/* STICKY NAV */}
      <header
        id="od-nav"
        ref={navRef}
        style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, borderBottom: '1px solid transparent', transition: 'background .35s, border-color .35s, backdrop-filter .35s, transform .45s cubic-bezier(.22,1,.36,1)' }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '16px clamp(20px,4vw,44px)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: 11, textDecoration: 'none' }}>
            <span style={{ width: 34, height: 34, borderRadius: 9, border: '1px solid rgba(255,255,255,.16)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Schibsted Grotesk',sans-serif", fontWeight: 700, fontSize: 13, color: '#fff', background: 'rgba(255,255,255,.04)' }}>OD</span>
            <span style={{ fontFamily: "'Schibsted Grotesk',sans-serif", fontWeight: 600, fontSize: 15, color: '#eef1f7', letterSpacing: '-.01em' }}>Om Dusane</span>
          </a>
          {!isMobile && (
            <nav style={{ display: 'flex', alignItems: 'center', gap: 30 }}>
              {NAV_ITEMS.map((n) => (
                <a key={n.id} href={`#${n.id}`} data-navlink={n.id} className="od-navlink" style={{ position: 'relative', textDecoration: 'none', color: 'rgba(160,166,178,.8)', fontSize: 13.5, fontWeight: 500, letterSpacing: '.01em', padding: '4px 0' }}>
                  {n.label}
                  <span data-navbar="" style={{ position: 'absolute', left: 0, bottom: -2, height: 2, width: 0, borderRadius: 2, background: 'var(--ac)', transition: 'width .35s cubic-bezier(.22,1,.36,1)' }} />
                </a>
              ))}
            </nav>
          )}
          <a href="mailto:omdusane8@gmail.com" className="od-cta-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '10px 18px', borderRadius: 10, background: 'linear-gradient(120deg, var(--ac), var(--ac2))', color: '#06070a', fontWeight: 600, fontSize: 13.5, textDecoration: 'none' }}>Get in touch <span>→</span></a>
        </div>
      </header>

      <div id="top" style={{ position: 'relative', zIndex: 1 }}>

        {/* HERO */}
        <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', maxWidth: 1280, margin: '0 auto', padding: '120px clamp(20px,4vw,44px) 90px' }}>
          <div data-enter="" style={{ display: 'inline-flex', alignItems: 'center', gap: 12, marginBottom: 30 }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#4ade80', animation: 'pulseDot 2.4s infinite' }} />
            <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, letterSpacing: '.22em', color: '#9aa0ad', textTransform: 'uppercase' }}>Om Dusane — Software Developer</span>
          </div>
          <h1 data-enter="" style={{ fontFamily: "'Schibsted Grotesk',sans-serif", fontWeight: 800, fontSize: 'clamp(38px,6.6vw,92px)', lineHeight: 1.0, letterSpacing: '-.035em', margin: 0, color: '#f4f5f8', maxWidth: '15ch' }}>Backend systems,<br />engineered to <span style={accentText}>scale.</span></h1>
          <p data-enter="" style={{ fontSize: 'clamp(16px,1.7vw,19px)', lineHeight: 1.6, color: '#9aa0ad', maxWidth: 560, margin: '34px 0 0' }}>Software developer with 4+ years building scalable services, event-driven architectures, and high-performance systems — with Python, FastAPI, Kafka, Airflow and more.</p>
          <div data-enter="" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 14, marginTop: 40 }}>
            <a href="#work" className="od-cta-primary-lg" style={{ display: 'inline-flex', alignItems: 'center', gap: 9, padding: '15px 26px', borderRadius: 12, background: 'linear-gradient(120deg, var(--ac), var(--ac2))', color: '#06070a', fontWeight: 600, fontSize: 15, textDecoration: 'none' }}>View my work <span>→</span></a>
            <a href="mailto:omdusane8@gmail.com" className="od-cta-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: 9, padding: '15px 24px', borderRadius: 12, border: '1px solid rgba(255,255,255,.14)', color: '#e8eaf0', fontWeight: 500, fontSize: 15, textDecoration: 'none' }}>Get in touch</a>
            <div style={{ display: 'flex', gap: 10, marginLeft: 6 }}>
              {SOCIALS.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener" title={s.label} className="od-social-btn" style={{ width: 44, height: 44, borderRadius: 11, border: '1px solid rgba(255,255,255,.1)', background: 'rgba(255,255,255,.025)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ width: 18, height: 18, background: '#aeb4c0', WebkitMask: `url('${s.icon}') center/contain no-repeat`, mask: `url('${s.icon}') center/contain no-repeat` }} />
                </a>
              ))}
            </div>
          </div>
          <div data-enter="" style={{ position: 'absolute', bottom: 34, left: 'clamp(20px,4vw,44px)', display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ width: 1, height: 34, background: 'linear-gradient(var(--ac), transparent)', animation: 'scrollCue 2s ease-in-out infinite' }} />
            <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: '.2em', color: '#6b7280' }}>SCROLL</span>
          </div>
        </section>

        {/* HOW I WORK */}
        <section id="how" style={{ position: 'relative', padding: 'clamp(80px,11vh,140px) 0' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 clamp(20px,4vw,44px)' }}>
            <div data-reveal="" style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 54 }}>
              <span style={sectionLabel}>/ HOW I WORK</span>
              <span style={sectionHr} />
            </div>
            {PILLARS.map((p) => (
              <div key={p.num} data-reveal="" style={{ display: 'grid', gridTemplateColumns: pillarCols, gap: 'clamp(16px,4vw,60px)', alignItems: 'start', padding: 'clamp(28px,3.5vw,44px) 0', borderTop: '1px solid rgba(255,255,255,.1)' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 13, color: 'var(--ac)', letterSpacing: '.04em' }}>{p.num}</span>
                  <h3 style={{ fontFamily: "'Schibsted Grotesk',sans-serif", fontWeight: 800, fontSize: 'clamp(38px,5.6vw,82px)', lineHeight: .95, letterSpacing: '-.03em', margin: 0, color: '#f4f5f8', textTransform: 'uppercase' }}>{p.word}</h3>
                </div>
                <p style={{ fontSize: 'clamp(15px,1.5vw,18px)', lineHeight: 1.6, color: '#9aa0ad', margin: 0, maxWidth: 480, paddingTop: 6 }}>{p.desc}</p>
              </div>
            ))}
            <div style={{ borderTop: '1px solid rgba(255,255,255,.1)' }} />
          </div>
        </section>

        {/* ABOUT + STATS + MARQUEE */}
        <section id="about" style={{ position: 'relative', padding: 'clamp(80px,11vh,140px) 0' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 clamp(20px,4vw,44px)' }}>
            <div data-reveal="" style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 44 }}>
              <span style={sectionLabel}>/ ABOUT</span>
              <span style={sectionHr} />
            </div>
            <p data-reveal="" style={{ fontFamily: "'Schibsted Grotesk',sans-serif", fontWeight: 500, fontSize: 'clamp(24px,3.4vw,46px)', lineHeight: 1.25, letterSpacing: '-.02em', margin: 0, maxWidth: '18ch', color: '#dfe2e9' }}>I turn ideas into <span style={{ color: '#fff' }}>reliable, real-world systems</span> — from subscription platforms handling <span style={{ color: 'var(--ac)' }}>thousands of daily transactions</span> to pipelines dispatching <span style={{ color: 'var(--ac)' }}>millions of events</span> a month.</p>
            <div data-reveal="" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: 16, marginTop: 56 }}>
              {STATS.map((st) => (
                <div key={st.label} style={{ padding: '26px 28px', border: '1px solid rgba(255,255,255,.08)', borderRadius: 18, background: 'linear-gradient(160deg, rgba(255,255,255,.04), rgba(255,255,255,.012))' }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 2, fontFamily: "'Schibsted Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(38px,4.4vw,52px)', letterSpacing: '-.02em', color: '#fff' }}>
                    <span data-count={st.value}>0</span><span style={{ color: 'var(--ac)' }}>{st.suffix}</span>
                  </div>
                  <div style={{ fontSize: 13.5, color: '#888e9c', marginTop: 6, letterSpacing: '.01em' }}>{st.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div data-reveal="" style={{ position: 'relative', marginTop: 72, overflow: 'hidden', borderTop: '1px solid rgba(255,255,255,.08)', borderBottom: '1px solid rgba(255,255,255,.08)', WebkitMaskImage: 'linear-gradient(90deg,transparent,#000 6%,#000 94%,transparent)', maskImage: 'linear-gradient(90deg,transparent,#000 6%,#000 94%,transparent)' }}>
            <div style={{ display: 'flex', width: 'max-content', animation: 'marquee 42s linear infinite' }}>
              {[0, 1].map((rep) => (
                MARQUEE_ITEMS.map((t, i) => (
                  <span key={`${rep}-${i}`} style={{ display: 'inline-flex', alignItems: 'center', gap: 24, padding: '18px 0' }}>
                    <span style={{ fontFamily: "'Schibsted Grotesk',sans-serif", fontSize: 'clamp(15px,1.6vw,18px)', fontWeight: 500, letterSpacing: '.02em', color: '#868c9a', padding: '0 28px', whiteSpace: 'nowrap' }}>{t}</span>
                    <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'color-mix(in srgb, var(--ac) 65%, transparent)' }} />
                  </span>
                ))
              ))}
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" style={{ position: 'relative', padding: 'clamp(80px,11vh,140px) 0' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 clamp(20px,4vw,44px)' }}>
            <div data-reveal="" style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24 }}>
              <span style={sectionLabel}>/ EXPERIENCE</span>
              <span style={sectionHr} />
            </div>
            {EXPERIENCES.map((exp) => (
              <div key={exp.role + exp.company} data-reveal="" style={{ padding: 'clamp(26px,3vw,40px) 0', borderTop: '1px solid rgba(255,255,255,.1)' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', justifyContent: 'space-between', gap: 8, marginBottom: 6 }}>
                  <h3 style={{ fontFamily: "'Schibsted Grotesk',sans-serif", fontWeight: 600, fontSize: 'clamp(22px,2.7vw,34px)', letterSpacing: '-.02em', color: '#f4f5f8', margin: 0 }}>{exp.role}</h3>
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12.5, color: '#7e8596', letterSpacing: '.04em' }}>{exp.period}</span>
                </div>
                <a href={exp.url} target="_blank" rel="noopener" className="od-footer-link" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, textDecoration: 'none', color: 'var(--ac)', fontSize: 15, fontWeight: 500, marginBottom: 18 }}>{exp.company} <span style={{ fontSize: 13 }}>↗</span></a>
                <ul style={{ margin: '6px 0 0', padding: 0, listStyle: 'none', display: 'grid', gridTemplateColumns: bulletCols, gap: '10px 32px' }}>
                  {exp.bullets.map((b, i) => (
                    <li key={i} style={{ position: 'relative', paddingLeft: 18, color: '#9aa0ad', fontSize: 14.5, lineHeight: 1.6 }}>
                      <span style={{ position: 'absolute', left: 0, top: 9, width: 5, height: 5, borderRadius: '50%', background: 'color-mix(in srgb, var(--ac) 70%, transparent)' }} />{b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div style={{ borderTop: '1px solid rgba(255,255,255,.1)' }} />
          </div>
        </section>

        {/* WORK / PROJECTS */}
        <section id="work" style={{ position: 'relative', padding: 'clamp(80px,11vh,140px) 0' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 clamp(20px,4vw,44px)' }}>
            <div data-reveal="" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 14, marginBottom: 14 }}>
              <span style={sectionLabel}>/ SELECTED WORK</span>
              <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, color: '#6b7280' }}>{PROJECTS.length} PROJECTS</span>
            </div>
            <h2 data-reveal="" style={{ fontFamily: "'Schibsted Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(32px,4.4vw,60px)', letterSpacing: '-.03em', lineHeight: 1.02, margin: '0 0 40px', color: '#f4f5f8' }}>Things I've built.</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))', gap: 18 }}>
              {PROJECTS.map((p) => (
                <article key={p.title} data-reveal="" className="od-card" style={{ position: 'relative', display: 'flex', flexDirection: 'column', background: 'linear-gradient(160deg, rgba(255,255,255,.045), rgba(255,255,255,.012))', border: '1px solid rgba(255,255,255,.08)', borderRadius: 18, padding: '26px 24px 24px', overflow: 'hidden' }}>
                  {p.featured && (
                    <span style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, var(--ac), var(--ac2))' }} />
                  )}
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 10, marginBottom: 10 }}>
                    <h3 style={{ fontFamily: "'Schibsted Grotesk',sans-serif", fontSize: 19, fontWeight: 600, color: '#eef1f7', margin: 0, letterSpacing: '-.01em', lineHeight: 1.25 }}>{p.title}</h3>
                    <div style={{ display: 'flex', gap: 8, flex: 'none' }}>
                      {p.url && (
                        <a href={p.url} target="_blank" rel="noopener" title="Visit" className="od-icon-btn" style={{ width: 31, height: 31, borderRadius: 9, border: '1px solid rgba(255,255,255,.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9aa0ad', textDecoration: 'none', fontSize: 14 }}>↗</a>
                      )}
                      {p.github && (
                        <a href={p.github} target="_blank" rel="noopener" title="Source" className="od-icon-btn-github" style={{ width: 31, height: 31, borderRadius: 9, border: '1px solid rgba(255,255,255,.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <span style={{ width: 15, height: 15, background: '#9aa0ad', WebkitMask: "url('/assets/github-white-icon.svg') center/contain no-repeat", mask: "url('/assets/github-white-icon.svg') center/contain no-repeat" }} />
                        </a>
                      )}
                    </div>
                  </div>
                  <p style={{ color: '#9aa0ad', fontSize: 13.5, lineHeight: 1.5, margin: '0 0 14px' }}>{p.desc}</p>
                  <ul style={{ margin: '0 0 16px', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 7 }}>
                    {p.bullets.map((b, i) => (
                      <li key={i} style={{ position: 'relative', paddingLeft: 15, color: '#b0b5c0', fontSize: 13, lineHeight: 1.5 }}>
                        <span style={{ position: 'absolute', left: 0, top: 7, width: 4, height: 4, borderRadius: '50%', background: 'color-mix(in srgb, var(--ac) 70%, transparent)' }} />{b}
                      </li>
                    ))}
                  </ul>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 'auto' }}>
                    {p.tags.map((t) => (
                      <span key={t} className="od-tag" style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10.5, letterSpacing: '.01em', color: '#a7adba', padding: '4px 8px', border: '1px solid rgba(255,255,255,.09)', borderRadius: 6, background: 'rgba(255,255,255,.02)' }}>{t}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* STACK */}
        <section id="stack" style={{ position: 'relative', padding: 'clamp(80px,11vh,140px) 0' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 clamp(20px,4vw,44px)' }}>
            <div data-reveal="" style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 40 }}>
              <span style={sectionLabel}>/ STACK</span>
              <span style={sectionHr} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 18 }}>
              {TECH_GROUPS.map((g) => (
                <div key={g.label} data-reveal="" style={{ padding: 26, border: '1px solid rgba(255,255,255,.08)', borderRadius: 18, background: 'linear-gradient(160deg, rgba(255,255,255,.04), rgba(255,255,255,.012))' }}>
                  <h3 style={{ fontFamily: "'Schibsted Grotesk',sans-serif", fontSize: 13, fontWeight: 600, letterSpacing: '.04em', color: '#eef1f7', margin: '0 0 18px', textTransform: 'uppercase' }}>{g.label}</h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {g.items.map((i) => (
                      <span key={i} className="od-tag" style={{ fontSize: 13.5, color: '#c2c7d1', padding: '7px 13px', border: '1px solid rgba(255,255,255,.1)', borderRadius: 9, background: 'rgba(255,255,255,.025)' }}>{i}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div data-reveal="" style={{ marginTop: 18, padding: '26px 30px', border: '1px solid rgba(255,255,255,.08)', borderRadius: 18, background: 'linear-gradient(160deg, rgba(255,255,255,.045), rgba(255,255,255,.012))', position: 'relative', overflow: 'hidden' }}>
              <span style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: 3, background: 'linear-gradient(var(--ac), var(--ac2))' }} />
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: '.2em', color: 'var(--ac)', marginBottom: 12 }}>EDUCATION</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', justifyContent: 'space-between', gap: 8 }}>
                <h3 style={{ fontFamily: "'Schibsted Grotesk',sans-serif", fontSize: 'clamp(19px,2.2vw,26px)', fontWeight: 600, color: '#eef1f7', margin: 0, letterSpacing: '-.01em' }}>BTech in Information Technology</h3>
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, color: '#7e8596' }}>University of Mumbai</span>
              </div>
              <p style={{ color: '#9aa0ad', fontSize: 14.5, lineHeight: 1.6, margin: '10px 0 0', maxWidth: 580 }}>Major in Cloud Computing, Cyber Security, and AI/ML, with a Minor in Blockchain.</p>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" style={{ position: 'relative', padding: 'clamp(90px,13vh,170px) 0 0' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 clamp(20px,4vw,44px)' }}>
            <div data-reveal="" style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 30 }}>
              <span style={sectionLabel}>/ CONTACT</span>
              <span style={sectionHr} />
            </div>
            <h2 data-reveal="" style={{ fontFamily: "'Schibsted Grotesk',sans-serif", fontWeight: 800, fontSize: 'clamp(40px,8vw,104px)', letterSpacing: '-.035em', lineHeight: .98, margin: 0, color: '#f4f5f8' }}>Let's build<br />something <span style={accentText}>reliable.</span></h2>
            <p data-reveal="" style={{ fontSize: 'clamp(16px,1.7vw,19px)', color: '#9aa0ad', maxWidth: 480, margin: '30px 0 0', lineHeight: 1.6 }}>Open to backend, platform, and distributed-systems roles. Drop a line — I usually reply within a day.</p>
            <div data-reveal="" style={{ display: 'flex', flexWrap: 'wrap', gap: 14, alignItems: 'center', marginTop: 34 }}>
              <a href="mailto:omdusane8@gmail.com" className="od-cta-primary-contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '16px 26px', borderRadius: 13, background: 'linear-gradient(120deg, var(--ac), var(--ac2))', color: '#06070a', fontWeight: 600, fontSize: 16, textDecoration: 'none' }}>omdusane8@gmail.com <span>→</span></a>
              <div style={{ display: 'flex', gap: 10 }}>
                {SOCIALS.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener" title={s.label} className="od-social-btn" style={{ width: 50, height: 50, borderRadius: 13, border: '1px solid rgba(255,255,255,.1)', background: 'rgba(255,255,255,.025)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ width: 19, height: 19, background: '#aeb4c0', WebkitMask: `url('${s.icon}') center/contain no-repeat`, mask: `url('${s.icon}') center/contain no-repeat` }} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* footer */}
          <footer style={{ marginTop: 'clamp(80px,12vh,140px)', borderTop: '1px solid rgba(255,255,255,.08)' }}>
            <div style={{ maxWidth: 1280, margin: '0 auto', padding: '48px clamp(20px,4vw,44px)', display: 'grid', gridTemplateColumns: footerCols, gap: 36 }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 11, marginBottom: 16 }}>
                  <span style={{ width: 34, height: 34, borderRadius: 9, border: '1px solid rgba(255,255,255,.16)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Schibsted Grotesk',sans-serif", fontWeight: 700, fontSize: 13, color: '#fff', background: 'rgba(255,255,255,.04)' }}>OD</span>
                  <span style={{ fontFamily: "'Schibsted Grotesk',sans-serif", fontWeight: 600, fontSize: 15, color: '#eef1f7' }}>Om Dusane</span>
                </div>
                <p style={{ fontSize: 13.5, color: '#7e8596', lineHeight: 1.6, margin: 0, maxWidth: 260 }}>Software developer building reliable, scalable backend systems. Based in India · open to remote.</p>
              </div>
              <div>
                <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: '.2em', color: '#6b7280', marginBottom: 16 }}>NAVIGATE</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {NAV_ITEMS.map((n) => (
                    <a key={n.id} href={`#${n.id}`} className="od-footer-link" style={{ textDecoration: 'none', color: '#9aa0ad', fontSize: 14 }}>{n.label}</a>
                  ))}
                </div>
              </div>
              <div>
                <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: '.2em', color: '#6b7280', marginBottom: 16 }}>ELSEWHERE</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {SOCIALS.map((s) => (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener" className="od-footer-link" style={{ textDecoration: 'none', color: '#9aa0ad', fontSize: 14 }}>{s.label}</a>
                  ))}
                </div>
              </div>
            </div>
            <div style={{ maxWidth: 1280, margin: '0 auto', padding: '20px clamp(20px,4vw,44px) 40px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 14, borderTop: '1px solid rgba(255,255,255,.06)' }}>
              <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, color: '#6b7280' }}>© 2026 Om Dusane — Designed &amp; built with care.</span>
              <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="od-backtotop" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'none', border: '1px solid rgba(255,255,255,.1)', color: '#9aa0ad', fontFamily: "'JetBrains Mono',monospace", fontSize: 12, padding: '9px 14px', borderRadius: 9, cursor: 'pointer' }}>Back to top ↑</button>
            </div>
          </footer>
        </section>

      </div>
    </div>
  );
}

export default App;
