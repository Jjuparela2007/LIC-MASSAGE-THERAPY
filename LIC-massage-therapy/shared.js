
/* ─── KINESYS SHARED JS ────────────────────────────────────────────────────── */
 
// ─── i18n ────────────────────────────────────────────────────────────────────
const i18n = {
  es: {
    "nav.home":"Inicio","nav.services":"Servicios","nav.stretch":"Estiramiento",
    "nav.about":"Sobre Raul","nav.testimonials":"Testimonios","nav.book":"Reservar","nav.contact":"Contacto",
    "hero.tag":"Centro de Terapia Muscular","hero.title1":"Restaura","hero.title2":"Tu Cuerpo",
    "hero.desc":"Bienvenido a Long Island City (LIC) Massage Therapy. El lugar en la ciudad de New York para venir a estar libre de dolor, aprender cómo estirar para una salud óptima y relajarse en Long Island City. Mi nombre es Raul Araque. Soy un terapeuta de masaje con licencia del estado de Nueva York . Mi objetivo es ayudar y educar a las personas . Me especializo en masaje terapéutico y estiramiento aislado activo (AIS).",
    "hero.cta1":"Reservar Cita","hero.cta2":"Ver Servicios",
    "hero.stat1":"Años de experiencia","hero.stat2":"Pacientes tratados","hero.stat3":"Satisfacción",
    "badge.specialty":"Especialidad","badge.specialtyVal":"Deportiva","badge.sessions":"Sesiones",
    "services.tag":"Nuestros Servicios","services.title1":"Tratamientos","services.title2":"Especializados",
    "services.subtitle":"Cada tratamiento está diseñado con base en evidencia científica y técnicas avanzadas de terapia corporal.",
    "s1.name":"Masaje relajante","s1.desc":"Un masaje integral que combina la manipulación de los tejidos blandos para aliviar el estrés y la tensión, a la vez que mejora la circulación sanguínea y linfática. La presión es de ligera a media; su objetivo principal es la relajación. Puede incluir estiramientos activos suaves.",
    "s2.name":"Masaje de presión profunda","s2.desc":"Diseñada para abordar afecciones o molestias específicas. Ideal para quienes buscan aliviar dolores causados por tensión muscular.",
    "s3.name":"Relajación guiada","s3.desc":"El objetivo es ayudarte a relajarte, respirar y visualizarte de una forma nueva y empoderadora.",
    "s4.name":"¿Como dar masaje a tu pareja?","s4.desc":"Protocolo de recuperación activa mediante técnicas combinadas de compresión, vibración y manipulación manual profunda.",
    "s5.name":"Liberación Miofascial","s5.desc":"Técnica especializada para liberar restricciones en la fascia muscular. Ideal para dolor crónico y síndrome miofascial.",
    "s6.name":"Recuperación Muscular","s6.desc":"Experiencia sensorial completa con técnicas suecas y aceites esenciales premium. Reduce el estrés y restaura el equilibrio mental.",
    "sf1.1":"✓ Alivio de dolor crónico","sf1.2":"✓ Mejora circulación","sf1.3":"✓ Reducción de tensión",
    "sf2.1":"✓ Pre y post competencia","sf2.2":"✓ Optimiza rendimiento","sf2.3":"✓ Recuperación acelerada",
    "sf3.1":"✓ Mejora flexibilidad","sf3.2":"✓ Corrección postural","sf3.3":"✓ Rango de movimiento",
    "sf4.1":"✓ Recuperación activa","sf4.2":"✓ Compresión terapéutica","sf4.3":"✓ Manipulación profunda",
    "sf5.1":"✓ Liberación de fascia","sf5.2":"✓ Dolor crónico","sf5.3":"✓ Síndrome miofascial",
    "sf6.1":"✓ Reducción de estrés","sf6.2":"✓ Aceites esenciales","sf6.3":"✓ Equilibrio mental",
    "home.allServices":"Ver Todos los Servicios",
    "cta.title":"¿Listo para recuperarte?","cta.sub":"Primera consulta incluye evaluación muscular completa sin costo.",
    "cta.sub2":"Agenda tu cita online en menos de 2 minutos.",
    "about.tag":"Sobre el Terapeuta","about.title1":"Ciencia","about.title2":"& Precisión",
    "about.years":"años de práctica","about.name":"Raul Araque","about.role":" terapeuta de masaje con licencia del estado de Nueva York",
    "about.bio":"Bienvenido a Long Island City (LIC) Massage Therapy, un espacio dedicado a la liberación del dolor, la educación en estiramiento funcional y la recuperación del bienestar integral.",
    "about.bio2":"Recibí un título de asociado en estudios ocupacionales en 2003, del Swedish Institute College of Health Sciences , una de las escuelas de masaje más antiguas del país. También fui uno de los terapeutas de masaje en The Yale Club de Nueva York en Manhattan, donde atendí a personas de todo el mundo. Mi práctica también me ha permitido trabajar con artistas y bailarines en el Mark Morris Dance Center en el centro de Brooklyn. Mi filosofía se basa en entender el cuerpo como un sistema integrado. Cada sesión comienza con una evaluación exhaustiva para diseñar un protocolo personalizado que aborde la causa raíz, no solo los síntomas.",
    "cert.1":"Certificación en Terapia Manual Ortopédica – IFOMPT","cert.2":"Especialista en Medicina Deportiva – Federación Colombiana",
    "cert.3":"Técnicas Avanzadas de Liberación Miofascial – ART Certified","cert.4":"Kinesiotaping Terapéutico – Nivel Avanzado",
    "cert.5":"Terapia de Puntos Gatillo – Certificado Internacional","cert.6":"Rehabilitación Deportiva – Universidad Nacional",
    "metric.patients":"Pacientes","metric.certs":"Certificaciones","metric.sessions":"Sesiones",
    "values.tag":"Mi Filosofía","values.title1":"Principios","values.title2":"de Tratamiento",
    "v1.name":"Evaluación Integral","v1.desc":"Cada paciente recibe una evaluación postural y muscular completa antes de iniciar cualquier tratamiento.",
    "v2.name":"Evidencia Científica","v2.desc":"Todas las técnicas aplicadas están respaldadas por investigación clínica y biomecánica actual.",
    "v3.name":"Personalización Total","v3.desc":"Ningún protocolo es igual. Cada sesión se adapta a las necesidades únicas de cada cuerpo.",
    "v4.name":"Resultados Medibles","v4.desc":"Seguimiento objetivo de cada tratamiento con métricas de rango de movimiento y niveles de dolor.",
    "test.tag":"Testimonios","test.title1":"Lo que dicen","test.title2":"nuestros pacientes","test.rating":"Calificación",
    "t1.text":"Después de años con dolor lumbar crónico, tres sesiones de terapia miofascial cambiaron completamente mi calidad de vida. La precisión técnica es incomparable.",
    "t1.name":"María Fernández","t1.role":"Maratonista Amateur",
    "t2.text":"Como futbolista profesional, la recuperación rápida es esencial. El protocolo de masaje deportivo me permitió volver al campo en tiempo récord tras una lesión muscular.",
    "t2.name":"Carlos Mendoza","t2.role":"Futbolista Profesional",
    "t3.text":"El ambiente es absolutamente premium, y el nivel de conocimiento anatómico del terapeuta se nota en cada movimiento. Resultados reales, no solo relajación.",
    "t3.name":"Andrea Torres","t3.role":"Ejecutiva / Ciclismo",
    "t4.text":"La terapia de estiramiento asistido transformó mi postura y eliminó la tensión cervical que me había acompañado por años. Altamente recomendado.",
    "t4.name":"Roberto Silva","t4.role":"Ingeniero / Triatleta",
    "t5.text":"Vine por una lesión de hombro que me impedía entrenar. Cuatro sesiones después, recuperé el 100% de mi rango de movimiento. Excelencia profesional.",
    "t5.name":"Laura Ospina","t5.role":"Nadadora Competitiva",
    "t6.text":"Llevo 6 meses asistiendo regularmente y mi rendimiento como ciclista ha mejorado notablemente. La liberación miofascial ha sido un cambio de vida.",
    "t6.name":"Diego Morales","t6.role":"Ciclista Aficionado",
    "contact.tag":"Contacto","contact.title1":"Hablemos",
    "contact.infoTag":"Información","contact.infoTitle1":"Estamos","contact.infoTitle2":"aquí para ti",
    "contact.desc":"No dudes en contactarnos para cualquier consulta, información sobre tratamientos o para programar tu primera cita de evaluación.",
    "contact.address":"Dirección","contact.hours":"Horarios","contact.phone":"Teléfono",
    "contact.formTitle":"Envíanos un Mensaje","contact.send":"Enviar Mensaje →","contact.subject":"Asunto","contact.subjectPh":"¿En qué podemos ayudarte?",
    "book.tag":"Reservar Cita","book.title1":"Tu bienestar","book.title2":"comienza hoy",
    "book.desc":"Agenda tu consulta inicial y recibe una evaluación postural y muscular completa sin costo adicional.",
    "book.location":"Nueva York — Long Island City","book.hours":"Lun–Vie: 10am–7pm · Sáb: 10am–6pm · Dom: Cerrado",
    "book.infoTag":"Información","book.infoTitle1":"¿Qué esperar","book.infoTitle2":"en tu primera visita?",
    "step1.name":"Evaluación Inicial","step1.desc":"Análisis postural y muscular completo para identificar áreas de tensión y patrones de movimiento.",
    "step2.name":"Protocolo Personalizado","step2.desc":"Diseño de un plan de tratamiento específico basado en tus objetivos y condición actual.",
    "step3.name":"Primera Sesión","step3.desc":"Aplicación del tratamiento seleccionado con seguimiento de resultados en tiempo real.",
    "step4.name":"Plan de Seguimiento","step4.desc":"Recomendaciones personalizadas para maximizar los resultados entre sesiones.",
    "form.title":"Solicitar Cita","form.subtitle":"Responderemos en menos de 2 horas",
    "form.name":"Nombre completo","form.namePh":"Tu nombre","form.phone":"Teléfono",
    "form.email":"Correo electrónico","form.service":"Servicio","form.servicePh":"Seleccionar servicio",
    "form.date":"Fecha preferida","form.time":"Horario preferido","form.message":"Mensaje (opcional)","form.messagePh":"Cuéntanos sobre tu condición o área de tratamiento...",
    "form.submit":"Reservar Mi Cita →",
    "time.morning":"Mañana (7am–12pm)","time.afternoon":"Tarde (12pm–5pm)","time.evening":"Noche (5pm–8pm)",
    "footer.tagline":"Centro de excelencia en terapia muscular y bienestar corporal premium en Bogotá.",
    "footer.links":"Servicios","footer.nav":"Páginas","footer.contact":"Contacto",
    "footer.copy":"© 2025 LIC MASSAGE THERAPY. Todos los derechos reservados.","footer.privacy":"Privacidad","footer.terms":"Términos"
  },
  en: {
    "nav.home":"Home","nav.services":"Services","nav.stretch":"Stretching",
    "nav.about":"About","nav.testimonials":"Testimonials","nav.contact":"Contact","nav.book":"Book Now",
    "hero.tag":"Muscle Therapy Center","hero.title1":"Restore","hero.title2":"Your Body",
    "hero.desc":"Precision muscle therapy for athletes and those seeking optimal wellness. Science, technique, and premium care in every session.",
    "hero.cta1":"Book Appointment","hero.cta2":"View Services",
    "hero.stat1":"Years of experience","hero.stat2":"Patients treated","hero.stat3":"Satisfaction",
    "badge.specialty":"Specialty","badge.specialtyVal":"Sports","badge.sessions":"Sessions",
    "services.tag":"Our Services","services.title1":"Specialized","services.title2":"Treatments",
    "services.subtitle":"Each treatment is designed based on scientific evidence and advanced body therapy techniques.",
    "s1.name":"Therapeutic Massage","s1.desc":"Deep soft tissue manipulation technique to relieve chronic pain, muscle tension, and improve circulation.",
    "s2.name":"Sports Massage","s2.desc":"Specialized protocol for athletes. Pre and post competition. Optimizes performance and accelerates muscle recovery.",
    "s3.name":"Stretching Therapy","s3.desc":"Assisted elongation of specific muscle groups. Improves flexibility, posture, and joint range of motion.",
    "s4.name":"Muscle Recovery","s4.desc":"Active recovery protocol using combined techniques of compression, vibration, and deep manual manipulation.",
    "s5.name":"Myofascial Release","s5.desc":"Specialized technique to release restrictions in the muscle fascia. Ideal for chronic pain and myofascial syndrome.",
    "s6.name":"Relaxing Massage","s6.desc":"Complete sensory experience with Swedish techniques and premium essential oils. Reduces stress and restores mental balance.",
    "sf1.1":"✓ Chronic pain relief","sf1.2":"✓ Improved circulation","sf1.3":"✓ Tension reduction",
    "sf2.1":"✓ Pre and post competition","sf2.2":"✓ Optimizes performance","sf2.3":"✓ Accelerated recovery",
    "sf3.1":"✓ Improves flexibility","sf3.2":"✓ Postural correction","sf3.3":"✓ Range of motion",
    "sf4.1":"✓ Active recovery","sf4.2":"✓ Therapeutic compression","sf4.3":"✓ Deep manipulation",
    "sf5.1":"✓ Fascia release","sf5.2":"✓ Chronic pain","sf5.3":"✓ Myofascial syndrome",
    "sf6.1":"✓ Stress reduction","sf6.2":"✓ Essential oils","sf6.3":"✓ Mental balance",
    "home.allServices":"View All Services",
    "cta.title":"Ready to recover?","cta.sub":"First consultation includes complete muscle assessment at no extra cost.",
    "cta.sub2":"Schedule your appointment online in under 2 minutes.",
    "about.tag":"About the Therapist","about.title1":"Science","about.title2":"& Precision",
    "about.years":"years of practice","about.name":"Raul Araque","about.role":"Certified Physiotherapist · Sports Therapist",
    "about.bio":"With over 12 years of clinical practice in muscle and sports therapy, I have treated professional athletes, national teams, and thousands of patients seeking optimal recovery. My approach combines functional anatomy with advanced tissue manipulation techniques for lasting results.",
    "about.bio2":"My philosophy is based on understanding the body as an integrated system. Each session begins with a thorough assessment to design a personalized protocol that addresses the root cause, not just symptoms.",
    "cert.1":"Orthopedic Manual Therapy Certification – IFOMPT","cert.2":"Sports Medicine Specialist – Colombian Federation",
    "cert.3":"Advanced Myofascial Release Techniques – ART Certified","cert.4":"Therapeutic Kinesiotaping – Advanced Level",
    "cert.5":"Trigger Point Therapy – International Certificate","cert.6":"Sports Rehabilitation – National University",
    "metric.patients":"Patients","metric.certs":"Certifications","metric.sessions":"Sessions",
    "values.tag":"My Philosophy","values.title1":"Treatment","values.title2":"Principles",
    "v1.name":"Comprehensive Assessment","v1.desc":"Each patient receives a complete postural and muscular evaluation before starting any treatment.",
    "v2.name":"Scientific Evidence","v2.desc":"All techniques applied are backed by current clinical and biomechanical research.",
    "v3.name":"Full Personalization","v3.desc":"No protocol is the same. Each session adapts to the unique needs of every body.",
    "v4.name":"Measurable Results","v4.desc":"Objective tracking of each treatment with metrics on range of motion and pain levels.",
    "test.tag":"Testimonials","test.title1":"What our","test.title2":"patients say","test.rating":"Rating",
    "t1.text":"After years of chronic low back pain, three myofascial therapy sessions completely changed my quality of life. The technical precision is unmatched.",
    "t1.name":"María Fernández","t1.role":"Amateur Marathon Runner",
    "t2.text":"As a professional footballer, fast recovery is essential. The sports massage protocol allowed me to return to the field in record time after a muscle injury.",
    "t2.name":"Carlos Mendoza","t2.role":"Professional Footballer",
    "t3.text":"The environment is absolutely premium, and the therapist's level of anatomical knowledge shows in every movement. Real results, not just relaxation.",
    "t3.name":"Andrea Torres","t3.role":"Executive / Cycling",
    "t4.text":"Assisted stretching therapy transformed my posture and eliminated cervical tension that had accompanied me for years. Highly recommended.",
    "t4.name":"Roberto Silva","t4.role":"Engineer / Triathlete",
    "t5.text":"I came in with a shoulder injury that prevented me from training. Four sessions later, I recovered 100% of my range of motion. Professional excellence.",
    "t5.name":"Laura Ospina","t5.role":"Competitive Swimmer",
    "t6.text":"I've been attending regularly for 6 months and my performance as a cyclist has improved noticeably. Myofascial release has been life-changing.",
    "t6.name":"Diego Morales","t6.role":"Amateur Cyclist",
    "contact.tag":"Contact","contact.title1":"Let's Talk",
    "contact.infoTag":"Information","contact.infoTitle1":"We're","contact.infoTitle2":"here for you",
    "contact.desc":"Don't hesitate to contact us for any inquiry, information about treatments, or to schedule your first evaluation appointment.",
    "contact.address":"Address","contact.hours":"Hours","contact.phone":"Phone",
    "contact.formTitle":"Send Us a Message","contact.send":"Send Message →","contact.subject":"Subject","contact.subjectPh":"How can we help you?",
    "book.tag":"Book Appointment","book.title1":"Your wellness","book.title2":"starts today",
    "book.desc":"Schedule your initial consultation and receive a complete postural and muscular assessment at no extra cost.",
    "book.location":"Nueva York — Long Island City","book.hours":"Mon–Fri: 7am–8pm · Sat: 8am–4pm",
    "book.infoTag":"Information","book.infoTitle1":"What to expect","book.infoTitle2":"on your first visit?",
    "step1.name":"Initial Assessment","step1.desc":"Complete postural and muscular analysis to identify tension areas and movement patterns.",
    "step2.name":"Personalized Protocol","step2.desc":"Design of a specific treatment plan based on your goals and current condition.",
    "step3.name":"First Session","step3.desc":"Application of the selected treatment with real-time result tracking.",
    "step4.name":"Follow-up Plan","step4.desc":"Personalized recommendations to maximize results between sessions.",
    "form.title":"Request Appointment","form.subtitle":"We'll respond within 2 hours",
    "form.name":"Full Name","form.namePh":"Your name","form.phone":"Phone",
    "form.email":"Email","form.service":"Service","form.servicePh":"Select service",
    "form.date":"Preferred date","form.time":"Preferred time","form.message":"Message (optional)","form.messagePh":"Tell us about your condition or treatment area...",
    "form.submit":"Book My Appointment →",
    "time.morning":"Morning (7am–12pm)","time.afternoon":"Afternoon (12pm–5pm)","time.evening":"Evening (5pm–8pm)",
    "footer.tagline":"Center of excellence in muscle therapy and premium body wellness in Bogotá.",
    "footer.links":"Services","footer.nav":"Pages","footer.contact":"Contact",
    "footer.copy":"© LIC MASSAGE THERAPY. All rights reserved.","footer.privacy":"Privacy","footer.terms":"Terms"
  }
};
 
let currentLang = localStorage.getItem('kinesys-lang') || 'es';
 
function applyLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  localStorage.setItem('kinesys-lang', lang);
 
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[lang][key] !== undefined) el.textContent = i18n[lang][key];
  });
  document.querySelectorAll('[data-placeholder]').forEach(el => {
    const key = el.getAttribute('data-placeholder');
    if (i18n[lang][key] !== undefined) el.placeholder = i18n[lang][key];
  });
  document.querySelectorAll('option[data-i18n]').forEach(opt => {
    const key = opt.getAttribute('data-i18n');
    if (i18n[lang][key] !== undefined) opt.textContent = i18n[lang][key];
  });
 
  // Update all lang buttons
  ['btn-es','btn-en','mob-btn-es','mob-btn-en'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.toggle('active', el.id.endsWith(lang === 'es' ? 'es' : 'en'));
  });
  ['btn-es','mob-btn-es'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.toggle('active', lang === 'es');
  });
  ['btn-en','mob-btn-en'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.toggle('active', lang === 'en');
  });
}
 
function setLang(lang) { applyLang(lang); }
 
// ─── THEME ────────────────────────────────────────────────────────────────────
let currentTheme = localStorage.getItem('kinesys-theme') || 'dark';
 
function applyTheme(theme) {
  currentTheme = theme;
  localStorage.setItem('kinesys-theme', theme);
  document.body.classList.toggle('light', theme === 'light');
  const icon = document.getElementById('theme-icon');
  if (icon) icon.textContent = theme === 'light' ? '●' : '◐';
  const mobIcon = document.querySelector('#mob-theme-btn .theme-icon');
  if (mobIcon) mobIcon.textContent = theme === 'light' ? '●' : '◐';
}
 
function toggleTheme() { applyTheme(currentTheme === 'dark' ? 'light' : 'dark'); }
 
// ─── NAVBAR SCROLL ────────────────────────────────────────────────────────────
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  if (navbar.classList.contains('scrolled-static')) return; // inner pages always solid
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });
}
 
// ─── CURSOR ───────────────────────────────────────────────────────────────────
function initCursor() {
  const dot = document.querySelector('.cursor-dot');
  const ring = document.querySelector('.cursor-ring');
  if (!dot || !ring) return;
  let mx = 0, my = 0, rx = 0, ry = 0;
  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx + 'px'; dot.style.top = my + 'px';
  });
  (function anim() {
    rx += (mx - rx) * 0.12; ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
    requestAnimationFrame(anim);
  })();
  document.querySelectorAll('a, button, .service-card, .preview-card, .testimonial-card-full, .contact-card').forEach(el => {
    el.addEventListener('mouseenter', () => { ring.style.width='60px'; ring.style.height='60px'; ring.style.borderColor='rgba(201,168,76,0.8)'; });
    el.addEventListener('mouseleave', () => { ring.style.width='40px'; ring.style.height='40px'; ring.style.borderColor='rgba(201,168,76,0.5)'; });
  });
}
 
// ─── SCROLL REVEAL ────────────────────────────────────────────────────────────
function initScrollReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}
 
// ─── PARALLAX HERO MUSCLES ───────────────────────────────────────────────────
function initParallax() {
  const muscles = document.querySelector('.hero-muscles');
  if (!muscles) return;
  window.addEventListener('scroll', () => {
    muscles.style.transform = `translateY(${window.scrollY * 0.28}px)`;
  }, { passive: true });
}
 
// ─── MOBILE MENU ─────────────────────────────────────────────────────────────
function toggleMenu() {
  const m = document.getElementById('mobileMenu');
  if (m) m.classList.toggle('open');
}
 
// ─── PAGE TRANSITION ─────────────────────────────────────────────────────────
function initPageTransition() {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.35s ease';
  requestAnimationFrame(() => {
    requestAnimationFrame(() => { document.body.style.opacity = '1'; });
  });
  document.querySelectorAll('a[href]').forEach(link => {
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('mailto') || href.startsWith('tel') || link.target === '_blank') return;
    if (href.endsWith('.html') || href === '/') {
      link.addEventListener('click', e => {
        e.preventDefault();
        document.body.style.opacity = '0';
        setTimeout(() => { window.location.href = href; }, 320);
      });
    }
  });
}
 
// ─── INIT ─────────────────────────────────────────────────────────────────────
function initPage(page) {
  // Restore preferences immediately (before paint)
  applyTheme(localStorage.getItem('kinesys-theme') || 'dark');
  applyLang(localStorage.getItem('kinesys-lang') || 'es');
 
  document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initCursor();
    initScrollReveal();
    initParallax();
    initPageTransition();
  });
 
  // Also run immediately if DOM is already loaded
  if (document.readyState !== 'loading') {
    initNavbar();
    initCursor();
    initScrollReveal();
    initParallax();
    initPageTransition();
  }
}