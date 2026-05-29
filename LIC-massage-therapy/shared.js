/* ─── KINESYS SHARED JS ────────────────────────────────────────────────────── */
 
// ─── i18n ────────────────────────────────────────────────────────────────────
const i18n = {
  es: {
   
    "nav.home":"Inicio","nav.masajes":"Masajes","nav.terapia":"Terapia (AIS)",
    "nav.about":"Sobre Raul","nav.testimonials":"Testimonios","nav.book":"Reservar","nav.contact":"Contacto",
    "hero.tag":"Masaje Terapéutico y Estiramiento Activo Aislado · LIC","hero.title1":"Muévete Mejor.","hero.title2":"Siéntete Más Fuerte.",
    "hero.desc":"Bienvenido a Long Island City Massage Therapy, un espacio dedicado a aliviar el dolor, mejorar la movilidad y promover la salud a través del estiramiento terapéutico y el masaje profesional.  Soy Raúl Araque, terapeuta con licencia en el estado de Nueva York, enfocado en la educación del cuerpo y el bienestar integral.",
    "hero.cta1":"Reservar Cita","hero.cta2":"Ver Servicios",
    "hero.stat1":"Años de experiencia","hero.stat2":"Pacientes tratados","hero.stat3":"Satisfacción",
    "badge.specialty":"Especialidad","badge.specialtyVal":"Deportiva","badge.sessions":"Sesiones",
    "services.tag":"Nuestros Masajes","services.title1":"Massage in","services.title2":"LIC",
    "terapia.tag":"Terapia de estiramiento","terapia.title1":"Estiramiento y fortalecimiento activo aislado, ","terapia.title2":"el método Mattes.",
    "services.subtitle":"Cada tratamiento está diseñado con base en evidencia científica y técnicas avanzadas de terapia corporal.",
    "s1.name":"Masaje relajante","s1.desc":"Un masaje integral que combina la manipulación de los tejidos blandos para aliviar el estrés y la tensión",
    "s2.name":"Masaje de presión profunda","s2.desc":"Diseñada para abordar afecciones o molestias específicas. Ideal para quienes buscan aliviar dolores causados por tensión muscular.",
    "s3.name":"Relajación guiada","s3.desc":"El objetivo es ayudarte a relajarte, respirar y visualizarte de una forma nueva y empoderadora.",
    "s4.name":"Recuperación Muscular","s4.desc":"Protocolo de recuperación activa mediante técnicas combinadas de compresión, vibración y manipulación manual profunda.",
    "s5.name":"Liberación Miofascial","s5.desc":"Técnica especializada para liberar restricciones en la fascia muscular. Ideal para dolor crónico y síndrome miofascial.",
    "s6.name":"Masaje Relajante","s6.desc":"Experiencia sensorial completa con técnicas suecas y aceites esenciales premium. Reduce el estrés y restaura el equilibrio mental.",
    "sf1.1":"✓ Alivio de dolor crónico","sf1.2":"✓ Mejora circulación","sf1.3":"✓ Reducción de tensión",
    "sf2.1":"✓ Pre y post competencia","sf2.2":"✓ Optimiza rendimiento","sf2.3":"✓ Recuperación acelerada",
    "sf3.1":"✓ Mejora flexibilidad","sf3.2":"✓ Corrección postural","sf3.3":"✓ Rango de movimiento",
    "sf4.1":"✓ Recuperación activa","sf4.2":"✓ Compresión terapéutica","sf4.3":"✓ Manipulación profunda",
    "sf5.1":"✓ Liberación de fascia","sf5.2":"✓ Dolor crónico","sf5.3":"✓ Síndrome miofascial",
    "sf6.1":"✓ Reducción de estrés","sf6.2":"✓ Aceites esenciales","sf6.3":"✓ Equilibrio mental",
    "home.allServices":"Ver Todos los Servicios",
    "cta.title":"¿Listo para recuperarte?","cta.sub":"Primera consulta incluye evaluación muscular completa sin costo.",
    "cta.sub2":"Agenda tu cita online en menos de 2 minutos.",
    "about.tag":"Conoce a tu Terapeuta","about.title1":"La persona detrás de la","about.title2":"sanación",
    "about.years":"años de práctica","about.name":"Raul Araque, LMT","about.role":" Terapeuta de Masaje Licenciado · Especialista AIS",
    "about.bio":"Bienvenido a Long Island City (LIC) Massage Therapy. El lugar al que puedes venir para estar libre de dolor, aprender cómo estirar para una salud óptima y relajarte en Long Island City. Mi nombre es Raul Araque. Soy un terapeuta de masaje con licencia en el estado de Nueva York. Mi objetivo es ayudar y educar a las personas. Me especializo en masaje terapéutico y Estiramiento Activo Aislado (AIS).",
    "about.bio2":"Recibí un título de Associate Degree en Estudios Ocupacionales en 2003 del Swedish Institute College of Health Sciences, una de las escuelas de masaje más antiguas del país. También fui uno de los terapeutas de masaje en The Yale Club of New York en Manhattan, donde atendí a personas de todo el mundo. Mi práctica también me ha permitido trabajar con artistas y bailarines en el Mark Morris Dance Center en el centro de Brooklyn.",
    "cert.1":"Certificación en Terapia Manual Ortopédica – IFOMPT","cert.2":"Especialista en Medicina Deportiva – Federación Colombiana",
    "cert.3":"Técnicas Avanzadas de Liberación Miofascial – ART Certified","cert.4":"Kinesiotaping Terapéutico – Nivel Avanzado",
    "cert.5":"Terapia de Puntos Gatillo – Certificado Internacional","cert.6":"Rehabilitación Deportiva – Universidad Nacional",
  
    "values.tag":"Mi Filosofía","values.title1":"Principios","values.title2":"de Tratamiento",
    "v1.name":"Evaluación Integral","v1.desc":"Cada paciente recibe una evaluación postural y muscular completa antes de iniciar cualquier tratamiento.",
    "v2.name":"Evidencia Científica","v2.desc":"Todas las técnicas aplicadas están respaldadas por investigación clínica y biomecánica actual.",
    "v3.name":"Personalización Total","v3.desc":"Ningún protocolo es igual. Cada sesión se adapta a las necesidades únicas de cada cuerpo.",
    "v4.name":"Resultados Medibles","v4.desc":"Seguimiento objetivo de cada tratamiento con métricas de rango de movimiento y niveles de dolor.",
    "test.tag":"Testimonios","test.title1":"Lo que dicen","test.title2":"nuestros pacientes","test.rating":"Calificación",
   "t1.text":"Raúl es uno de los mejores masajistas que he tenido. Aborda tus inquietudes de forma integral y te brinda las herramientas para llevar una vida más tranquila y sin dolor mediante estiramientos específicos y efectivos que puedes hacer regularmente en casa. Es increíblemente amable, cálido y profesional. He vuelto muchas veces y seguiré haciéndolo durante años. ¡Lo recomiendo ampliamente!",
    "t1.name":"Laura",
    "t2.text":"Raúl es un excelente masajista. Su espacio es increíblemente limpio y meditativo, creando una atmósfera relajante desde el momento en que entras. No solo trata los síntomas, sino que ofrece una perspectiva real sobre la posible causa de tu tensión y te enseña estiramientos específicos para que puedas controlar el dolor o la rigidez de forma segura en casa. Su trabajo de tejido profundo es efectivo y alivia, y se comunica con mucha facilidad durante toda la sesión para asegurarse de que te sientas cómodo. En general, un ambiente genial y un alivio real.",
    "t2.name":"Amanda M",
    "t3.text":"He visitado a Raúl en numerosas ocasiones y mi primera vez en esta nueva ubicación fue excepcional, como siempre. Agradezco que las sesiones con él siempre incluyan un componente educativo, enseñándome a aliviar el dolor también en casa. Su presencia es muy tranquilizadora y permite relajarse de verdad durante las visitas. He probado tanto masajes como estiramientos y siempre salgo sintiéndome aliviada. ¡Lo recomiendo muchísimo!",
    "t3.name":"Michelle Wakabayashi",
    "t4.text":"Raul is always super friendly and creates a really comfortable atmosphere. His massage therapy has been key in my injury recovery. He’s incredibly responsive, even fitting me in last minute. Highly recommend him!",
    "t4.name":"Rafael Manetsch",
    "t5.text":"I’ve seen Raul a few times now for injuries and nagging aches, and each time he’s been incredibly helpful. He’s highly knowledgeable, and the combination of massage and stretch therapy he offers has made a real difference. Most notably, I was dealing with back pain just before a recent trip, and his stretch therapy techniques provided immediate relief. I can’t recommend him enough.",
    "t5.name":"Gustavo Campana",
    "t6.text":"Raul is an amazing professional! After the session I was feeling completely released from my back pain and very relaxed. Not just a massage, he explains where is the origin of the problem and how u can still take care of it at home. Recommended! ",
    "t6.name":"Liraine Rodrigues",
    "contact.tag":"Contacto","contact.title1":"Hablemos",
    "contact.infoTag":"Información","contact.infoTitle1":"Estamos","contact.infoTitle2":"aquí para ti",
    "contact.desc":"No dudes en contactarnos para cualquier consulta, información sobre tratamientos o para programar tu primera cita de evaluación.",
    "contact.address":"Dirección","contact.hours":"Horarios","contact.phone":"Teléfono",
    "contact.formTitle":"Envíanos un Mensaje","contact.send":"Enviar Mensaje →","contact.subject":"Asunto","contact.subjectPh":"¿En qué podemos ayudarte?",
    "book.tag":"Reservar Cita","book.title1":"Tu bienestar","book.title2":"comienza hoy",
    "book.desc":"Agenda tu consulta inicial y recibe una evaluación postural y muscular completa sin costo adicional.",
    "book.location":"12-17 Jackson Ave, Long Island City, NY 11101, Estados Unidos","book.hours":"Lun–Vie: 10am–7pm · Sáb: 10am–6pm · Dom: Cerrado",
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
    "footer.tagline":"Terapia muscular personalizada enfocada en bienestar, alivio y recuperación física en Nueva York",
    "footer.links":"Servicios","footer.nav":"Páginas","footer.contact":"Contacto",
    "footer.copy":"© 2026 LIC MASSAGE THERAPY. Todos los derechos reservados.","footer.privacy":"Privacidad","footer.terms":"Términos",

    
    
    "ais.badge": "Raúl Araque, Terapeuta",
    "ais.eyebrow": "El Método",
    "ais.heading": "Estiramiento Activo Aislado",
    "ais.paragraph1": "Desarrollado por el kinesiólogo Aaron L. Mattes, el AIS es un protocolo de estiramiento validado científicamente que aísla músculos individuales sosteniendo cada estiramiento solo 1.5–2 segundos, evitando el reflejo de protección que limita el estiramiento tradicional.",
    "ais.paragraph2": "Este enfoque permite que el músculo se alargue de verdad, aumenta la circulación al tejido y produce cambios neurológicos duraderos que mejoran la postura, reducen el dolor y elevan la capacidad atlética.",
    "ais.list1": "Apunta con precisión a grupos musculares específicos",
    "ais.list2": "Evita el reflejo miotático de estiramiento (regla de los 2 segundos)",
    "ais.list3": "Aumenta la circulación y oxigenación local",
    "ais.list4": "Produce mejoras neurológicas duraderas en flexibilidad",
    "ais.button": "Agenda tu primera sesión",
  
    
    // ── NUEVAS CLAVES — contacto.html ────────────────────────────────────────

    // Horarios detallados (card de contacto)
    "contact.hours.lv":"Lun–Vie: 10:00 am – 7:00 pm",
    "contact.hours.sat":"Sábado: 10:00 am – 6:00 pm",
    "contact.hours.sun":"Domingo: cerrado",

    // Email card
    "contact.email":"Email",
    "contact.emailVal":"ra@licmassagetherapy.com",

    // Placeholders del formulario de contacto
    "contact.form.namePh":"Ej: María García",
    "contact.form.phonePh":"Ej: +1 718 555 0000",
    "contact.form.emailPh":"Ej: maria@correo.com",
    "contact.form.subjectPh":"Ej: Consulta sobre masaje terapéutico",
    "contact.form.messagePh":"Ej: Tengo dolor en la zona lumbar desde hace 3 semanas y me gustaría agendar una sesión de evaluación…",

    // Consentimiento de privacidad (contacto)
    "contact.consent.pre":"He leído y acepto la",
    "contact.consent.link":"Política de Privacidad y Tratamiento de Datos Personales",
    "contact.consent.post":"de LIC Massage Therapy. Entiendo que mis datos (nombre, teléfono, correo y mensaje) serán utilizados",
    "contact.consent.bold":"únicamente para responder a mi consulta",
    "contact.consent.end":"y no serán compartidos con terceros.",

    // Estados del botón y mensajes de feedback
    "contact.submitting":"Abriendo WhatsApp…",
    "contact.submitted":"✓ Abriendo WhatsApp",
    "contact.feedback.loading":"Preparando tu mensaje en WhatsApp…",
    "contact.feedback.success":"✓ Tu mensaje está listo. Se abrirá WhatsApp para enviarlo.",
    "contact.btn.reset":"Enviar Mensaje →",

    // Mensaje de WhatsApp (partes del buildWhatsAppMsg)
    "contact.wa.greeting":"Hola Lic massage therapy, mi nombre es",
    "contact.wa.intent":"Me gustaría comunicarme con ustedes acerca de:",
    "contact.wa.contact":"Pueden contactarme a través de:",
    "contact.wa.closing":"Feliz dia.",

    // ── NUEVAS CLAVES — politica-privacidad.html ─────────────────────────────

    // Topbar / nav
    "pp.back":"Volver",

    // Hero
    "pp.hero.tag":"Legal",
    "pp.hero.title1":"Política de",
    "pp.hero.title2":"Privacidad",
    "pp.hero.sub":"LIC Massage Therapy — Long Island City, New York",

    // Sección 01 — Introducción
    "pp.s01.title":"Introducción y Compromiso",
    "pp.s01.p1":"LIC Massage Therapy (nosotros, nuestro o el negocio) opera en Long Island City, Queens, New York. Nos comprometemos a proteger la privacidad de cada cliente y visitante de nuestro sitio web licmassagetherapy.com de conformidad con las leyes aplicables del Estado de Nueva York y la legislación federal de los Estados Unidos.",
    "pp.s01.p2":"Esta Política de Privacidad describe qué información recopilamos, cómo la usamos, con quién la compartimos y cuáles son sus derechos. Al usar nuestro sitio web o completar cualquier formulario de contacto, usted acepta las prácticas descritas en este documento.",
    "pp.s01.highlight":"Última actualización: Mayo 2026. Esta política puede actualizarse periódicamente. Le recomendamos revisarla cada vez que interactúe con nosotros.",
    "pp.s01.highlightDate":"Mayo 2026",

    // Sección 02 — Información que recopilamos
    "pp.s02.title":"Información que Recopilamos",
    "pp.s02.intro":"Recopilamos únicamente la información necesaria para brindarle nuestros servicios:",
    "pp.s02.th1":"Dato",
    "pp.s02.th2":"Cómo se recopila",
    "pp.s02.th3":"Propósito",
    "pp.s02.r1.dato":"Nombre completo",
    "pp.s02.r1.como":"Formulario de contacto / cita",
    "pp.s02.r1.fin":"Identificar al cliente",
    "pp.s02.r2.dato":"Número de teléfono",
    "pp.s02.r2.como":"Formulario de contacto / cita",
    "pp.s02.r2.fin":"Confirmación y recordatorios de cita",
    "pp.s02.r3.dato":"Correo electrónico",
    "pp.s02.r3.como":"Formulario de contacto / cita",
    "pp.s02.r3.fin":"Responder consultas y enviar confirmaciones",
    "pp.s02.r4.dato":"Mensaje / consulta",
    "pp.s02.r4.como":"Formulario de contacto",
    "pp.s02.r4.fin":"Atender la solicitud específica",
    "pp.s02.r5.dato":"Condición de salud relevante",
    "pp.s02.r5.como":"Conversación directa (opcional)",
    "pp.s02.r5.fin":"Personalizar el tratamiento terapéutico",
    "pp.s02.r6.dato":"Datos de navegación (IP, cookies)",
    "pp.s02.r6.como":"Automático al visitar el sitio",
    "pp.s02.r6.fin":"Análisis de rendimiento del sitio web",

    // Sección 03 — Uso de la información
    "pp.s03.title":"Uso de la Información",
    "pp.s03.intro":"Sus datos personales se utilizan exclusivamente para:",
    "pp.s03.li1":"Responder a sus consultas y solicitudes de información.",
    "pp.s03.li2":"Programar, confirmar y recordar citas de terapia de masajes.",
    "pp.s03.li3":"Personalizar su experiencia terapéutica de acuerdo con sus necesidades de salud.",
    "pp.s03.li4":"Comunicarnos con usted a través de correo electrónico o WhatsApp cuando usted lo solicite.",
    "pp.s03.li5":"Mejorar la calidad de nuestros servicios y la experiencia en el sitio web.",
    "pp.s03.li6":"Cumplir con obligaciones legales o regulatorias aplicables en el Estado de Nueva York.",
    "pp.s03.highlight":"No realizamos marketing no solicitado. No enviaremos correos promocionales ni mensajes de texto sin su consentimiento previo y expreso.",
    "pp.s03.highlightBold":"No realizamos marketing no solicitado.",

    // Sección 04 — Compartición de datos
    "pp.s04.title":"Compartición de Datos con Terceros",
    "pp.s04.intro":"No vendemos, alquilamos ni cedemos su información personal a terceros con fines comerciales. La información puede ser compartida únicamente en los siguientes casos limitados:",
    "pp.s04.introBold":"No vendemos, alquilamos ni cedemos",
    "pp.s04.li1":"Proveedores de servicio técnico: EmailJS (envío de correos) y WhatsApp Business, quienes actúan como procesadores de datos bajo sus propias políticas de privacidad.",
    "pp.s04.li1bold":"Proveedores de servicio técnico:",
    "pp.s04.li2":"Obligación legal: Cuando la ley, un tribunal u organismo regulador de Nueva York o federal lo requiera.",
    "pp.s04.li2bold":"Obligación legal:",
    "pp.s04.li3":"Protección de derechos: Para defender los derechos legales del negocio o de nuestros clientes si fuera estrictamente necesario.",
    "pp.s04.li3bold":"Protección de derechos:",

    // Sección 05 — Seguridad
    "pp.s05.title":"Seguridad de la Información",
    "pp.s05.p1":"Implementamos medidas técnicas y organizativas razonables para proteger su información contra acceso no autorizado, pérdida o divulgación. Nuestro sitio utiliza conexiones seguras (HTTPS) y los datos transmitidos por formulario son procesados a través de servicios con cifrado SSL/TLS.",
    "pp.s05.p2":"Si bien nos esforzamos por proteger su información, ningún método de transmisión por Internet es 100% seguro. Le recomendamos tomar precauciones al compartir datos sensibles en línea.",

    // Sección 06 — Derechos
    "pp.s06.title":"Sus Derechos",
    "pp.s06.intro":"De acuerdo con las leyes de privacidad aplicables, usted tiene derecho a:",
    "pp.s06.li1bold":"Acceso:",
    "pp.s06.li1":"Solicitar una copia de los datos personales que tenemos sobre usted.",
    "pp.s06.li2bold":"Rectificación:",
    "pp.s06.li2":"Solicitar la corrección de datos inexactos o incompletos.",
    "pp.s06.li3bold":"Eliminación:",
    "pp.s06.li3":"Solicitar que eliminemos sus datos personales, salvo obligación legal de conservarlos.",
    "pp.s06.li4bold":"Oposición:",
    "pp.s06.li4":"Oponerse al uso de sus datos para determinados fines.",
    "pp.s06.li5bold":"Portabilidad:",
    "pp.s06.li5":"Recibir sus datos en un formato estructurado y de uso común.",
    "pp.s06.li6bold":"Retirar el consentimiento:",
    "pp.s06.li6":"En cualquier momento, sin afectar la legalidad del tratamiento previo.",
    "pp.s06.highlight":"Para ejercer cualquiera de estos derechos, contáctenos en ra@licmassagetherapy.com o al teléfono +1 718-478-1951. Responderemos en un plazo máximo de 30 días.",
    "pp.s06.highlightDays":"30 días",

    // Sección 07 — Cookies
    "pp.s07.title":"Cookies y Tecnologías de Seguimiento",
    "pp.s07.p1":"Nuestro sitio web puede utilizar cookies esenciales para su correcto funcionamiento (por ejemplo, para recordar su idioma preferido). No utilizamos cookies de publicidad o de seguimiento entre sitios.",
    "pp.s07.p2":"Puede configurar su navegador para rechazar las cookies; sin embargo, algunas funciones del sitio podrían verse afectadas. Para más información, consulte la configuración de privacidad de su navegador.",

    // Sección 08 — Menores
    "pp.s08.title":"Menores de Edad",
    "pp.s08.p1":"Nuestros servicios están dirigidos a personas mayores de 18 años. No recopilamos conscientemente información personal de menores de edad. Si usted cree que hemos recopilado información de un menor sin consentimiento parental, contáctenos inmediatamente para proceder a su eliminación.",

    // Sección 09 — Retención
    "pp.s09.title":"Retención de Datos",
    "pp.s09.p1":"Conservamos su información personal únicamente durante el tiempo necesario para cumplir los fines descritos en esta política o según lo exija la ley. Los mensajes de contacto se retienen por un período de 12 meses y posteriormente son eliminados, salvo que exista una relación terapéutica activa con el cliente.",
    "pp.s09.months":"12 meses",

    // Sección 10 — Contacto
    "pp.s10.title":"Contacto",
    "pp.s10.intro":"Si tiene preguntas, comentarios o desea ejercer sus derechos respecto a esta Política de Privacidad, puede comunicarse con nosotros:",
    "pp.s10.li1bold":"Negocio:",
    "pp.s10.li1val":"LIC Massage Therapy",
    "pp.s10.li2bold":"Dirección:",
    "pp.s10.li2val":"Long Island New York, NY",
    "pp.s10.li3bold":"Teléfono:",
    "pp.s10.li3val":"+1 (347) 837-5503",
    "pp.s10.li4bold":"Email:",
    "pp.s10.li5bold":"Horario de atención:",
    "pp.s10.li5val":"Lun–Vie 10 am–7 pm · Sáb 10 am–6 pm · Dom cerrado",

    // Botón volver y footer
    "pp.backBtn":"Volver al Formulario",
    "pp.footer":"© 2026 LIC Massage Therapy — Long Island City, New York",

    // ── NUEVAS CLAVES — reservas.html ────────────────────────────────────────

    // Opciones del select de servicios
    "form.service.opt1":"Masaje Relajante",
    "form.service.opt2":"Masaje de presión profunda",
    "form.service.opt3":"Relajación guiada",
    "form.service.opt4":"Recuperación Muscular",
    "form.service.opt5":"Liberación Miofascial",
    "form.service.opt6":"Masaje Relajante Premium",

    // Errores de validación de campos
    "error.name":"Por favor ingresa tu nombre completo.",
    "error.phone":"Ingresa un número de teléfono válido.",
    "error.email":"Ingresa un correo electrónico válido.",
    "error.service":"Por favor selecciona un servicio.",
    "error.date":"Selecciona una fecha válida (no puede ser en el pasado).",
    "error.fields":"⚠️ Revisa los campos marcados en rojo.",

    // Checkbox de privacidad
    "privacy.required":"Campo obligatorio:",
    "privacy.text":"He leído y acepto la",
    "privacy.link":"Política de Privacidad y Tratamiento de Datos Personales",
    "privacy.consent":"de LIC Massage Therapy. Autorizo el uso de mis datos para gestionar mi reserva y recibir comunicaciones relacionadas con mi cita.",

    // Teléfono de contacto
    "book.phone":"+1 (347) 837-5503",

    // Estados del botón de envío
    "form.submitting":"Abriendo WhatsApp…",
    "form.submitted":"✓ Abriendo WhatsApp",
    "form.successToast":"✓ ¡Tu cita está lista! Se abrirá WhatsApp para enviarla.",

    // Mensaje de WhatsApp (partes traducibles)
    "wa.greeting":"Hola Lic massage therapy, espero que estén muy bien.",
    "wa.intent":"Me gustaría agendar una cita",
    "wa.labelName":"Nombre",
    "wa.labelPhone":"Teléfono",
    "wa.labelEmail":"Email",
    "wa.labelService":"Servicio",
    "wa.labelDate":"Fecha preferida",
    "wa.labelTime":"Horario",
    "wa.labelNote":"Nota adicional",
    "wa.closing":"Quedo a la espera, Muchas gracias.",

    // ── NUEVAS CLAVES — sobre-mi.html (secciones nuevas) ─────────────────────

    // Sección Certificaciones
    "certs.tag":"Certificaciones",
    "certs.title1":"Formación",
    "certs.title2":"& Credenciales Certificadas",
    "certs.subtitle":"Cada certificación representa cientos de horas de práctica clínica supervisada y estudio avanzado.",
    "certs.imgPh":"Foto certificación",
    "certs.c1.title":"Terapia Manual Ortopédica",
    "certs.c1.org":"IFOMPT — International Federation",
    "certs.c1.desc":"Evaluación y tratamiento avanzado de disfunciones musculoesqueléticas mediante terapia manual basada en evidencia.",
    "certs.c2.title":"Estiramiento Aislado Activo",
    "certs.c2.org":"Aaron Mattes Method — AIS",
    "certs.c2.desc":"Certificación directa con el creador del método. Técnica de elongación muscular segmentada que preserva el reflejo miotático.",
    "certs.c3.title":"Liberación Miofascial Avanzada",
    "certs.c3.org":"ART Certified Provider",
    "certs.c3.desc":"Active Release Technique para tratar tejidos blandos con cicatrices, adherencias y síndromes por sobreuso.",
    "certs.c4.title":"Kinesiotaping Terapéutico",
    "certs.c4.org":"Nivel Avanzado — KT Association",
    "certs.c4.desc":"Aplicación neuromuscular del vendaje elástico para soporte articular, drenaje linfático y reducción del dolor.",
    "certs.c5.title":"Terapia de Puntos Gatillo",
    "certs.c5.org":"Certificado Internacional",
    "certs.c5.desc":"Diagnóstico y desactivación de puntos gatillo miofasciales activos y latentes mediante técnicas de presión y elongación.",
    "certs.c6.title":"Rehabilitación Deportiva",
    "certs.c6.org":"Universidad Nacional",
    "certs.c6.desc":"Protocolos de recuperación funcional para deportistas de alto rendimiento: retorno al deporte, fuerza y prevención de recidivas.",
    "certs.licensed":"Licencia activa",
    "certs.licensedVal":"Estado de Nueva York · #MT123456",
    "certs.since":"En práctica desde",
    "certs.sinceVal":"2003",

    // Sección Antecedentes Técnicos
    "tech.tag":"Antecedentes Técnicos",
    "tech.title1":"Disciplinas",
    "tech.title2":"& Metodología",
    "tech.subtitle":"Un enfoque integrador que combina ciencia del movimiento, neurociencia del dolor y terapia manual avanzada.",
    "tech.area1.name":"Biomecánica Aplicada",
    "tech.area1.desc":"Análisis del movimiento funcional, patrones de compensación y evaluación postural tridimensional para identificar la causa raíz del dolor, no solo los síntomas.",
    "tech.area2.name":"Neurociencia del Dolor",
    "tech.area2.desc":"Comprensión del procesamiento central del dolor para diseñar protocolos que modulen la sensibilización central y restauren patrones de movimiento normales.",
    "tech.area3.name":"Terapia Manual Avanzada",
    "tech.area3.desc":"Dominio de técnicas de tejidos blandos, movilización articular, liberación miofascial y manipulación neural para resultados medibles desde la primera sesión.",
    "tech.area4.name":"Prescripción de Ejercicio",
    "tech.area4.desc":"Diseño de programas de fortalecimiento, estiramiento y propiocepción específicos para cada diagnóstico, garantizando continuidad del tratamiento en casa.",
    "tech.area5.name":"Evaluación Funcional",
    "tech.area5.desc":"Uso de pruebas validadas (FMS, SFMA, Selective Functional Movement Assessment) para objetivar el estado inicial y medir el progreso terapéutico.",
    "tech.area6.name":"Medicina Deportiva",
    "tech.area6.desc":"Protocolo pre y post competencia para atletas de todos los niveles: periodización del recovery, manejo de lesiones agudas y estrategias de prevención.",

    // Carrusel de imágenes del consultorio
    "gallery.tag":"El Consultorio",
    "gallery.title1":"Conoce el",
    "gallery.title2":"espacio",
    "gallery.subtitle":"Un ambiente diseñado para la recuperación: equipamiento certificado, ambiente controlado y atención completamente personalizada.",
    "gallery.imgPh":"Foto del consultorio",
    "gallery.prev":"Anterior",
    "gallery.next":"Siguiente",
    "gallery.cap1":"Camilla profesional · ambiente controlado",
    "gallery.cap2":"Zona de estiramiento asistido",
    "gallery.cap3":"Equipamiento terapéutico certificado",
    "gallery.cap4":"Recepción y zona de bienvenida",
    "gallery.cap5":"Área de recuperación post-sesión",

    // ── NUEVAS CLAVES — sobre-mi.html ────────────────────────────────────────

    // Historia section
    "historia.tag":"Historia",
    "historia.eyebrow":"El comienzo",
    "historia.heading1":"De la pasión al",
    "historia.heading2":"propósito",
    "historia.para":"Estoy agradecido por las experiencias que he tenido a lo largo de los años, aprendiendo el arte de la excelencia en el servicio al cliente y la creatividad en el salón insignia Frederick Fekkai en Manhattan, así como en Bloomingdale’s NY; y finalmente culminando en mi club favorito de oratoria, Toastmasters International, el cual me ha ayudado a compartir mi mensaje de educar a otros. Todas estas experiencias me han ayudado a mantenerme enfocado de la mejor manera posible para estar en sintonía con mi cuerpo y mi mente, de modo que pueda ayudar a otras personas a mantenerse en sintonía con los suyos. He conocido y aprendido de expertos de la industria como Aaron Mattes (creador del método de estiramiento AIS), Mark Allen (seis veces campeón del Ironman Triathlon), Anthony Robbins (autor y conferencista motivacional), el Dr. Deepak Chopra (autor de Ageless Body, Timeless Mind), Stu Middleman (ultramaratonista), Sally Edwards (autora de The Heart Rate Monitor Book y Zoning – Fitness in a Blink), Brant Secunda (chamán y sanador huichol) y Shari Auth, LMT (creadora del método Auth Massage). He completado numerosas medias maratones, nueve maratones de la ciudad de Nueva York, tres carreras medio Ironman, varias triatlones de distancia olímpica y dos nados de 5.85 millas. Practico meditación diariamente y asisto a retiros con regularidad. He completado tres retiros de meditación silenciosa de 10 días (meditación Vipassana — www.dhamma.org).",
    "historia.quote":"\"Creo que la palabra es plata y el silencio es oro.\"",
    "historia.imgPh":"Foto de historia",
    "historia.year":"2012",

    // Formación section
    "formacion.tag":"Formación",
    "formacion.eyebrow":"Dónde aprendí",
    "formacion.heading1":"Formación que",
    "formacion.heading2":"define",
    "formacion.heading3":"la excelencia",
    "formacion.para1":"Mi preparación académica y práctica se forjó en Swedish Institute College of Health Sciences, una de las escuelas de masaje más antiguas del país, reconocida por su rigor científico y enfoque clínico. Aprendí que la terapia manual va mucho más allá de una técnica: es una disciplina que demanda anatomía, biomecánica, psicología del dolor y empatía.",
    "formacion.para2":"Los años de estudio formal me dieron las bases; los años de práctica me dieron el criterio para saber cuándo y cómo aplicarlas. Creo que hablar es plata y callar es oro. Mi objetivo es ayudarte a liberarte del dolor, ser flexible, sentirte relajado y gozar de la mejor salud posible. Si experimentas dolor, te estás recuperando de una lesión o cirugía y deseas sentirte mejor, contáctame para una consulta.",
    "formacion.imgPh":"Foto de la institución",
    "formacion.instName":"Instituto Sueco de Ciencias de la Salud",
    "formacion.grid.label1":"Institución",
    "formacion.grid.val1":"Instituto Sueco de Ciencias de la Salud",
    "formacion.grid.label2":"Año de graduación",
    "formacion.grid.val2":"Manhattan en 2003",
    "formacion.grid.label3":"Licencia",
    "formacion.grid.val3":"Estado de Nueva York",

    // Values section (sobre-mi version — textos distintos a los de v1-v4)
    "som.v1.name":"Evaluación Integral",
    "som.v1.desc":"Evaluación postural y muscular personalizada para detectar el origen del dolor.",
    "som.v2.name":"Evidencia Científica",
    "som.v2.desc":"Técnicas modernas respaldadas por biomecánica y fisioterapia clínica.",
    "som.v3.name":"Personalización Total",
    "som.v3.desc":"Cada tratamiento se adapta al cuerpo y necesidades específicas del paciente.",
    "som.v4.name":"Resultados Medibles",
    "som.v4.desc":"Seguimiento del progreso mediante movilidad, dolor y recuperación funcional.",

    // ── NUEVAS CLAVES — servicios.html ───────────────────────────────────────

    // Botón Ver tratamiento (cards de servicios)
    "service.cta":"Ver tratamiento",

    // Workspace / Showcase del espacio
    "ws.tag":"Nuestro Espacio",
    "ws.title1":"Conoce",
    "ws.title2":"el lugar donde",
    "ws.title3":"sucede la recuperación",
    "ws.intro":"Un ambiente diseñado para que tu cuerpo y mente encuentren el descanso que merecen. Equipamiento profesional, ambiente controlado y atención completamente personalizada.",
    "ws.videoCaption":"Cada sesión es guiada por terapeutas certificados con más de 8 años de experiencia clínica.",
    "ws.videoPlaceholder":"Agregar video del espacio",
    "ws.imgPlaceholderOffice":"Foto del consultorio",
    "ws.imgPlaceholderEquip":"Foto del equipamiento",
    "ws.imgPlaceholderBed":"Foto camilla",
    "ws.imgPlaceholderReception":"Foto recepción",
    "ws.imgPlaceholderRecovery":"Foto área de recuperación",
    "ws.label.office":"Consultorio principal",
    "ws.label.equip":"Equipamiento certificado",
    "ws.label.bed":"Camilla profesional",
    "ws.label.reception":"Zona de recepción",
    "ws.label.recovery":"Área de recuperación",
    "ws.stat1.num":"+500",
    "ws.stat1.label":"Pacientes atendidos",
    "ws.stat2.num":"8+",
    "ws.stat2.label":"Años de experiencia",
    "ws.stat3.num":"6",
    "ws.stat3.label":"Tratamientos especializados",

    // ── NUEVAS CLAVES — servicios.html · Política de Cancelación ────────────
    "cancel.tag":"Política de Cancelación",
    "cancel.title1":"Política",
    "cancel.title2":"de Cancelación",
    "cancel.intro":"Entendemos que imprevistos pueden ocurrir en la vida de todos. Las siguientes políticas están diseñadas para ser efectivas y justas con todos nuestros clientes.",
    "cancel.c1.title":"Cancelaciones",
    "cancel.c1.desc":"Se requiere aviso con 24 horas de anticipación para cancelar una cita. Esto permite que otra persona pueda aprovechar el horario disponible.",
    "cancel.c1.rule":"Sin aviso de 24h se cobrará el valor completo de la sesión, pagadero en 24h. Recibirás una factura por correo electrónico; pago con tarjeta de crédito.",
    "cancel.c2.title":"No-Show",
    "cancel.c2.desc":"Quien olvide o decida no asistir a su cita sin previo aviso será considerado \"no-show\" y se le cobrará el valor completo de la sesión perdida.",
    "cancel.c2.rule":"Cargo completo pagadero en 24h tras la cita perdida. Se enviará factura por correo; pago con tarjeta de crédito.",
    "cancel.c3.title":"Llegadas Tarde",
    "cancel.c3.desc":"Si llegas tarde, tu sesión podrá acortarse para no afectar a los clientes siguientes. El terapeuta determinará si hay tiempo suficiente para iniciar el tratamiento.",
    "cancel.c3.rule":"Independientemente del tiempo de tratamiento dado, se cobrará el valor completo de la sesión. Por favor, llega puntual.",

    // ── NUEVAS CLAVES — servicios.html · Sección Estudio ─────────────────────

    // Slider — captions
    "studio.slide1.title":"Sala de tratamiento",
    "studio.slide1.desc":"Paredes de cal, luz cálida y lencería impecable — cada detalle preparado para ti.",
    "studio.slide2.title":"Área de estiramiento",
    "studio.slide2.desc":"Espacio amplio y equipado para técnicas AIS y trabajo de movilidad.",
    "studio.slide3.title":"Ambiente privado",
    "studio.slide3.desc":"Silencioso, confidencial y completamente dedicado a tu recuperación.",
    "studio.slide4.title":"Long Island City, NY",
    "studio.slide4.desc":"Ubicación accesible, a minutos del metro, en el corazón de Queens.",

    // Texto derecho
    "studio.eyebrow":"En el estudio",
    "studio.heading":"Un espacio tranquilo y enfocado — diseñado para tu cuerpo.",
    "studio.para1":"Las sesiones se realizan en un estudio privado y silencioso en Long Island City. Cada cita comienza con una breve conversación sobre qué te duele, qué está tenso y qué quieres volver a poder hacer. A partir de ahí, el trabajo es manual, preciso y adaptado a ti.",
    "studio.para2":"Ya seas atleta, trabajador de oficina, te estés recuperando de una lesión o simplemente estés cansado de sentirte rígido — recibirás trato profesional, paciencia y cero juicios.",
    "studio.cta":"Reserva tu primera sesión",

    // Modal de servicios
    "svc.modal.cta":"Reservar este servicio",

    // ── NUEVAS CLAVES — index.html ────────────────────────────────────────────

    // Sección "Beneficios" (ts.*) — terapias-section
    "ts.tag":"Beneficios",
    "ts.title1":"4 beneficios",
    "ts.title2":"que cambian tu vida",
    "ts.intro":"A diferencia del estiramiento estático, la terapia AIS produce mejoras duraderas y medibles en cómo tu cuerpo se mueve y se siente.",
    "ts.item1.name":"Reduce el dolor",
    "ts.item1.desc":"Aborda la tensión crónica y el dolor muscular con técnicas de estiramiento asistido precisas.",
    "ts.item2.name":"Aumenta la flexibilidad",
    "ts.item2.desc":"Amplía progresivamente tu rango de movimiento de un modo que el estiramiento pasivo no logra.",
    "ts.item3.name":"Mejora el rendimiento",
    "ts.item3.desc":"Los atletas notan ganancias medibles en velocidad, potencia y agilidad tras sesiones constantes.",
    "ts.item4.name":"Previene lesiones",
    "ts.item4.desc":"Corrige desequilibrios musculares antes de que se conviertan en problemas dolorosos.",
    "ts.cta":"Conozca su terapeuta",

    // Terapias section
    "terapias.tag":"Nuestras Terapias",
    "terapias.title1":"Técnicas que",
    "terapias.title2":"sanan de verdad",
    "terapias.intro":"Cada tratamiento está respaldado por evidencia clínica y adaptado a tu condición específica. Raul combina múltiples disciplinas para ofrecerte resultados reales y duraderos.",
    "terapias.cta":"Ver sobre Raul",

    "terapia1.name":"Masaje Terapéutico",
    "terapia1.desc":"Manipulación profunda de tejidos blandos que alivia el dolor crónico, libera nudos musculares y mejora la circulación sanguínea. Ideal para contracturas y tensiones acumuladas.",
    "terapia2.name":"Estiramiento Aislado Activo (AIS)",
    "terapia2.desc":"Técnica desarrollada por Aaron Mattes que trabaja cada músculo de forma individual. Aumenta el rango de movimiento articular, corrige la postura y previene lesiones de forma progresiva.",
    "terapia3.name":"Liberación Miofascial",
    "terapia3.desc":"Trabajo especializado sobre la fascia muscular para eliminar restricciones que generan dolor referido y limitan el movimiento. Especialmente efectiva en síndrome miofascial crónico.",
    "terapia4.name":"Recuperación Deportiva",
    "terapia4.desc":"Protocolo pre y post competencia con técnicas combinadas de compresión, vibración y manipulación manual. Reduce la fatiga, acelera la regeneración muscular y optimiza el rendimiento.",

    // Tabs section
    "tabs.tag":"Por qué elegirnos",
    "tabs.title1":"Experiencia",
    "tabs.title2":"que transforma",
    "tab.benefits":"Beneficios",
    "tab.testimonials":"Testimonios",
    "tab.process":"El Proceso",

    // Benefits carousel cards
    "bc1.title":"Alivio del dolor crónico",
    "bc1.desc":"Técnicas de presión profunda que llegan a las capas musculares más afectadas, disolviendo tensiones acumuladas que el reposo no puede resolver.",
    "bc2.title":"Recuperación acelerada",
    "bc2.desc":"Protocolos especializados pre y post competencia que reducen el tiempo de recuperación muscular hasta en un 40% comparado con el descanso pasivo.",
    "bc3.title":"Flexibilidad y movilidad",
    "bc3.desc":"El método AIS (Active Isolated Stretching) mejora el rango de movimiento articular de forma progresiva y segura, corrigiendo patrones posturales incorrectos.",
    "bc4.title":"Bienestar mental",
    "bc4.desc":"La relajación profunda activa el sistema nervioso parasimpático, reduciendo los niveles de cortisol y promoviendo un estado de calma duradera.",
    "bc5.title":"Atención personalizada",
    "bc5.desc":"Cada sesión inicia con una evaluación funcional. No hay protocolos genéricos — cada plan de tratamiento se diseña exclusivamente para ti.",

    // Testimonials tab (inline in index.html — diferentes a los de la sección test)
    "it1.quote":"Llevaba dos años con dolor lumbar crónico. Después de cuatro sesiones con Raul, puedo hacer mi rutina de ejercicios sin molestias. No exagero cuando digo que me cambió la vida.",
    "it1.name":"María R.","it1.role":"Corredora amateur, 38 años",
    "it2.quote":"El masaje deportivo pre-competencia mejoró notablemente mi rendimiento. Me sentí más ágil y con mayor rango de movimiento desde el primer día.",
    "it2.name":"Juan L.","it2.role":"Triatleta, 44 años",
    "it3.quote":"Vine por tensión cervical y me fui con una rutina de estiramientos personalizada. Raul explica cada técnica con claridad. Un profesional excepcional.",
    "it3.name":"Sofia C.","it3.role":"Diseñadora gráfica, 31 años",

    // Process steps tab
    "ps1.title":"Evaluación inicial",
    "ps1.desc":"Comenzamos con una conversación y evaluación funcional para entender tu historial, objetivos y áreas de tensión. Sin costo adicional en tu primera visita.",
    "ps2.title":"Plan personalizado",
    "ps2.desc":"Diseñamos un protocolo de tratamiento específico para ti, combinando las técnicas más adecuadas según tus necesidades y objetivos.",
    "ps3.title":"Sesión terapéutica",
    "ps3.desc":"Cada sesión de 60 a 90 minutos combina técnicas manuales, estiramiento asistido y educación para que puedas mantener los resultados en casa.",
    "ps4.title":"Seguimiento continuo",
    "ps4.desc":"Ajustamos el plan en cada visita según tu evolución. El objetivo es que cada sesión sea mejor que la anterior y que avances hacia tu bienestar óptimo.",

    // Modal
    "modal.book":"Reservar esta sesión →",
    "modal.close":"Cerrar",

    // Service cards (dynamic — «Más información» link)
    "card.more":"Más información →",

    // ── Script de servicios (index.html — tarjetas y modal dinámico) ──────────
    "s1.tag":"Relajación","s2.tag":"Terapéutico","s3.tag":"Bienestar",
    "s1.duration":"30 min - 60 min - 90 min","s2.duration":"30 min - 60 min - 90 min","s3.duration":"45 min",
    "s1.short":"Un masaje integral que combina la manipulación de los tejidos blandos para aliviar el estrés y la tensión",
    "s2.short":"Diseñada para abordar afecciones o molestias específicas. Ideal para quienes buscan aliviar dolores causados por tensión muscular",
    "s3.short":"El objetivo es ayudarte a relajarte, respirar y visualizarte de una forma nueva y empoderadora",
    "s1.feat1":"Reduce estrés y ansiedad","s1.feat2":"Mejora circulación sanguínea y linfática","s1.feat3":"Presión ligera a media adaptable","s1.feat4":"Incluye estiramientos activos suaves",
    "s2.feat1":"Alivia dolor crónico y tensión profunda","s2.feat2":"Ideal para lesiones por sobreesfuerzo","s2.feat3":"Técnica de presión focalizada","s2.feat4":"Resultados visibles desde la primera sesión",
    "s3.feat1":"Reducción de nerviosismo y ansiedad","s3.feat2":"Técnicas de respiración consciente","s3.feat3":"Visualización guiada personalizada","s3.feat4":"Mejora el rendimiento diario",
    "sp.moreInfo":"Más información →",
    "sp.book":"Reservar esta sesión →",
    "sp.close":"Cerrar",

    // ── Títulos de página (para <title> dinámico) ─────────────────────────────
    "page.title.index":"LIC Massage Therapy",
    "page.title.servicios":"LIC Massage Therapy | Servicios",
    "page.title.sobre-mi":"LIC Massage Therapy | Sobre Mí",
    "page.title.reservas":"LIC Massage Therapy | Reservar",
    "page.title.contacto":"LIC Massage Therapy | Contacto",

    's1.name': 'Masaje Relajante',
    'svc1.duration': '60 min',
    'svc1.price': ' 80 - 130 - 165 USD',
    'svc1.fullDesc':
      'Un masaje integral que combina la manipulación de los tejidos blandos para aliviar el estrés, la tensión muscular y promover una profunda sensación de bienestar.',
    'svc1.feat1': 'Reduce el estrés y la ansiedad',
    'svc1.feat2': 'Alivia la tensión muscular',
    'svc1.feat3': 'Mejora la circulación sanguínea',
    'svc1.feat4': 'Favorece el descanso y la relajación',
    'svc1.feat5': 'Promueve el bienestar general',

    // ===== SERVICE 2 =====
    's2.name': 'Masaje de Presión Profunda',
    'svc2.duration': '75 min',
    'svc2.price': '90 - 140 - 190 USD',
    'svc2.fullDesc':
      'Diseñado para abordar molestias específicas y dolores musculares causados por tensión acumulada. Ideal para personas con contracturas o dolor crónico.',
    'svc2.feat1': 'Libera contracturas profundas',
    'svc2.feat2': 'Reduce dolores musculares',
    'svc2.feat3': 'Mejora la movilidad',
    'svc2.feat4': 'Disminuye la rigidez corporal',
    'svc2.feat5': 'Acelera la recuperación muscular',

    // ===== SERVICE 3 =====
    's3.name': 'Relajación Guiada',
    'svc3.duration': '45 min',
    'svc3.price': '70 USD',
    'svc3.fullDesc':
      'Una experiencia enfocada en ayudarte a relajarte, respirar conscientemente y visualizarte de una manera nueva, positiva y empoderadora.',
    'svc3.feat1': 'Reduce el estrés mental',
    'svc3.feat2': 'Mejora la respiración consciente',
    'svc3.feat3': 'Favorece la claridad mental',
    'svc3.feat4': 'Fortalece la conexión interior',
    'svc3.feat5': 'Promueve el equilibrio emocional',

    // ===== SERVICE 4 — Cómo dar un masaje a tu pareja =====
    's4.name': 'Cómo dar un masaje a tu pareja',
    'svc4.duration': '90 min',
    'svc4.price': '205 USD',
    'svc4.fullDesc':
      '¿Tu pareja siempre te pide que le alivieses el dolor de cuello, hombros o espalda, y después de cinco minutos no tienes ni idea de qué hacer? ¿Siempre has querido darle a tu pareja un masaje relajante y reconfortante? Si es así, ¡esto es para ti! Esta sesión relajante de hora y media incorpora las mejores técnicas que te guiarán para que puedas darle a tu pareja el mejor masaje, el más sanador y tranquilo. Durante esta sesión relajante también aprenderás qué hacer y qué no hacer, dónde y cómo aplicar la presión correctamente, para no lastimarte ni lastimar a tu pareja. La mitad del tiempo guiaré a una persona mientras la otra está en la camilla, y la otra mitad guiaré a la otra persona. Esta sesión está diseñada para enseñarte cómo trabajar con tu pareja o familia, no es una sesión avanzada. Será relajante y divertida. Está abierta a cualquier pareja. Por favor, envía un correo electrónico si tienes preguntas.',
    'svc4.feat1': 'Técnicas guiadas paso a paso',
    'svc4.feat2': 'Aprende dónde y cómo aplicar presión',
    'svc4.feat3': 'Sesión relajante para ambos',
    'svc4.feat4': 'Ideal para cualquier tipo de pareja',
    'svc4.feat5': 'Sin experiencia previa necesaria',

    // ===== SERVICE 5 — Masaje Express de Cuello y Hombros =====
    's5.name': 'Masaje Express de Cuello y Hombros',
    'svc5.duration': '30 min',
    'svc5.price': '75 USD',
    'svc5.fullDesc':
      '¿Trabajas frente a una computadora varias horas al día y sientes el cuello y los hombros tensos como piedra? Esta sesión express está diseñada específicamente para liberar la tensión acumulada en la zona cervical, trapecios y hombros — las áreas más castigadas por el estrés y las malas posturas. En 30 minutos precisos aplicaremos técnicas de presión profunda, liberación miofascial y movimientos de movilización cervical que te dejarán con una sensación inmediata de alivio y ligereza. Perfecto para quienes tienen poco tiempo pero necesitan resultados concretos. Sin cambiarse de ropa: puedes realizarlo en silla o en camilla.',
    'svc5.feat1': 'Alivia tensión cervical y trapecios',
    'svc5.feat2': 'Sin necesidad de desvestirse',
    'svc5.feat3': 'Resultados inmediatos en 30 min',
    'svc5.feat4': 'Ideal para trabajadores de oficina',
    'svc5.feat5': 'Liberación miofascial y presión profunda',

    "book.cta.heading":"Reserva tu sesión","book.cta.sub":"Te respondo en menos de 24 h","book.cta.btn":"Reservar Ahora","book.chip.hours":"Lun–Vie: 10am–7pm · Sáb: 10am–6pm · Dom: Cerrado","book.chip.location": "12-17 Jackson Ave, Long Island City, NY 11101, Estados Unidos",

    "gal-tag":"Masajes","gal-title-line":"cada masaje","gal-title-line1":"una obra",
    "vid.title1":"Raúl te explica","vid.title2":"cómo funciona la terapia","vid.desc":"Descubre el proceso, la técnica y lo que puedes esperar en tu primera sesión.",
    
  },
  en: {

    "vid.title1":"Raúl walks you through it”","vid.title2":"How the therapy works","vid.desc":"Discover the process, the technique, and what you can expect during your first session.",

"gal-tag":"Massage","gal-title-line":"Every massage is","gal-title-line1":"a work of art.",

    "testi.tag":    "Testimonials",
"testi.title1": "Real experiences",
"testi.title2": "from our clients",

"book.cta.heading":"Book your session","book.cta.sub":"I’ll respond within 24 hours.","book.cta.btn":"Book Now","book.chip.hours":"Mon–Fri: 10am–7pm · Sáb: 10am–6pm · Dom: Cerrado","book.chip.location": "12-17 Jackson Ave, Long Island City, NY 11101, Estados Unidos",
 

     "nav.home":"Home","nav.masajes":"Massage","nav.terapia":"Stretch therapy",
    "nav.about":"About","nav.testimonials":"Testimonials","nav.contact":"Contact","nav.book":"Book Now",
    "hero.tag":"Therapeutic Massage and Active Isolated Stretching · LIC","hero.title1":"Move Better.","hero.title2":"Feel Stronger.",
    "hero.desc":"Welcome to Long Island City Massage Therapy, a space dedicated to relieving pain, improving mobility, and promoting health through therapeutic stretching and professional massage. I’m Raúl Araque, a licensed massage therapist in the state of New York, focused on body education and holistic wellness.",
    "hero.cta1":"Book Appointment","hero.cta2":"View Services",
    "hero.stat1":"Years of experience","hero.stat2":"Patients treated","hero.stat3":"Satisfaction",
    "badge.specialty":"Specialty","badge.specialtyVal":"Sports","badge.sessions":"Sessions",
    "services.tag":"Our Massage","services.title1":"Massage in ","services.title2":"LIC",
    "terapia.tag":"Stretch Therapy","terapia.title1":"Active Isolated Stretching And Strengthening,, ","terapia.title2":"The Mattes Method",
    "services.subtitle":"Each treatment is designed based on scientific evidence and advanced body therapy techniques.",
    "s1.name":"Relaxing Massage","s1.desc":"A comprehensive massage that combines soft tissue manipulation to relieve stress and tension",
    "s2.name":"Deep Tissue Massage","s2.desc":"Designed to address specific conditions or discomfort. Ideal for those looking to relieve pain caused by muscle tension",
    "s3.name":"Guided Relaxation","s3.desc":"The goal is to help you relax, breathe, and visualize yourself in a new and empowering way",
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
    "about.tag":"Meet Your Therapist","about.title1":"The professional ","about.title2":"behind your care",
    "about.years":"years of practice","about.name":"Raul Araque, LMT","about.role":"Licensed Massage Therapist · AIS Specialist",
    "about.bio":"Welcome to Long Island City (LIC) Massage Therapy. The place to come to be pain-free, learn how to stretch for optimum health, and relax in Long Island City. My name is Raul Araque. I am a New York State licensed massage therapist. My goal is to help and educate individuals. I specialize in therapeutic massage and Active Isolated Stretching (AIS).",
    "about.bio2":"I received an Associates Degree in Occupational Studies in 2003, from the Swedish Institute College of Health Sciences, one of the oldest massage schools in the country. I was also one of the massage therapists at The Yale Club of New York in Manhattan, where I saw people from all over the world. My practice has also allowed me to work with performers and dancers at the Mark Morris Dance Center in Downtown Brooklyn.",
    "cert.1":"Orthopedic Manual Therapy Certification – IFOMPT","cert.2":"Sports Medicine Specialist – Colombian Federation",
    "cert.3":"Advanced Myofascial Release Techniques – ART Certified","cert.4":"Therapeutic Kinesiotaping – Advanced Level",
    "cert.5":"Trigger Point Therapy – International Certificate","cert.6":"Sports Rehabilitation – National University",
 
    "values.tag":"My Philosophy","values.title1":"Treatment","values.title2":"Principles",
    "v1.name":"Comprehensive Assessment","v1.desc":"Each patient receives a complete postural and muscular evaluation before starting any treatment.",
    "v2.name":"Scientific Evidence","v2.desc":"All techniques applied are backed by current clinical and biomechanical research.",
    "v3.name":"Full Personalization","v3.desc":"No protocol is the same. Each session adapts to the unique needs of every body.",
    "v4.name":"Measurable Results","v4.desc":"Objective tracking of each treatment with metrics on range of motion and pain levels.",
    "test.tag":"Testimonials","test.title1":"What our","test.title2":"patients say","test.rating":"Rating",
    "t1.text":"Raul is one of the best masseuses I have ever been to. He addresses your concerns holistically and gives you the tools to lead a more pain free and peaceful life via specific and effective stretches you can do regularly at home. He is incredibly kind, warm, and professional. I have gone back many times and will continue to go back for years to come. Highly recommend working with him!",
    "t1.name":"Laura",
    "t2.text":"Raul is an excellent massage therapist. His space is incredibly clean and meditative, creating a calming atmosphere from the moment you walk in. He doesn’t just treat symptoms, he offers real insight into what may be causing your tension and teaches you specific stretches so you can safely manage pain or tightness at home. His deep tissue work is both effective and relieving, and he’s very open to communicating throughout the session to make sure you’re comfortable. Overall, great vibes and real relief.",
    "t2.name":"Amanda M",
    "t3.text":"I’ve visited Raul numerous times and my first time in this new location was exceptional as always. I appreciate that sessions with him always come with an educational component, teaching me to be pain free at home, too. He has a very calming presence that allows you to really relax during visits. I’ve done both massage and stretching sessions and always leave feeling relieved. I can’t recommend him enough!",
    "t3.name":"Michelle Wakabayashi",
    "t4.text":"Raul is always super friendly and creates a really comfortable atmosphere. His massage therapy has been key in my injury recovery. He’s incredibly responsive, even fitting me in last minute. Highly recommend him!",
    "t4.name":"Rafael Manetsch",
    "t5.text":"I’ve seen Raul a few times now for injuries and nagging aches, and each time he’s been incredibly helpful. He’s highly knowledgeable, and the combination of massage and stretch therapy he offers has made a real difference. Most notably, I was dealing with back pain just before a recent trip, and his stretch therapy techniques provided immediate relief. I can’t recommend him enough.",
    "t5.name":"Gustavo Campana",
    "t6.text":"Raul is an amazing professional! After the session I was feeling completely released from my back pain and very relaxed. Not just a massage, he explains where is the origin of the problem and how u can still take care of it at home. Recommended! ",
    "t6.name":"Liraine Rodrigues",
    "contact.tag":"Contact","contact.title1":"Let's Talk",
    "contact.infoTag":"Information","contact.infoTitle1":"We're","contact.infoTitle2":"here for you",
    "contact.desc":"Don't hesitate to contact us for any inquiry, information about treatments, or to schedule your first evaluation appointment.",
    "contact.address":"Address","contact.hours":"Hours","contact.phone":"Phone",
    "contact.formTitle":"Send Us a Message","contact.send":"Send Message →","contact.subject":"Subject","contact.subjectPh":"How can we help you?",
    "book.tag":"Book Appointment","book.title1":"Your wellness","book.title2":"starts today",
    "book.desc":"Schedule your initial consultation and receive a complete postural and muscular assessment at no extra cost.",
    "book.location":"12-17 Jackson Ave, Long Island City, NY 11101, United States","book.hours":"Mon–Fri: 7am–8pm · Sat: 8am–4pm",
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
    "footer.tagline":"Personalized muscle therapy focused on wellness, relief, and physical recovery in New York.",
    "footer.links":"Services","footer.nav":"Pages","footer.contact":"Contact",
    "footer.copy":"© LIC MASSAGE THERAPY. All rights reserved.","footer.privacy":"Privacy","footer.terms":"Terms",

    "ais.badge": "Raul Araque, Therapist",
    "ais.eyebrow": "The Method",
    "ais.heading": "Active Isolated Stretching",
    "ais.paragraph1": "Developed by kinesiologist Aaron L. Mattes, AIS is a scientifically validated stretching protocol that isolates individual muscles, holding each stretch for only 1.5–2 seconds to avoid the protective reflex that limits traditional stretching.",
    "ais.paragraph2": "This approach allows the muscle to lengthen effectively, increases circulation to the tissue, and creates lasting neurological changes that improve posture, reduce pain, and enhance athletic performance.",
    "ais.list1": "Precisely targets specific muscle groups",
    "ais.list2": "Avoids the stretch reflex (2-second rule)",
    "ais.list3": "Increases local circulation and oxygenation",
    "ais.list4": "Produces lasting neurological improvements in flexibility",
    "ais.button": "Schedule Your First Session",
    
    // ── NEW KEYS — contacto.html ──────────────────────────────────────────────

    // Detailed hours
    "contact.hours.lv":"Mon–Fri: 10:00 am – 7:00 pm",
    "contact.hours.sat":"Saturday: 10:00 am – 6:00 pm",
    "contact.hours.sun":"Sunday: closed",

    // Email card
    "contact.email":"Email",
    "contact.emailVal":"ra@licmassagetherapy.com",

    // Contact form placeholders
    "contact.form.namePh":"E.g. Maria Garcia",
    "contact.form.phonePh":"E.g. +1 718 555 0000",
    "contact.form.emailPh":"E.g. maria@email.com",
    "contact.form.subjectPh":"E.g. Inquiry about therapeutic massage",
    "contact.form.messagePh":"E.g. I've had lower back pain for 3 weeks and would like to schedule an evaluation session…",

    // Privacy consent (contact)
    "contact.consent.pre":"I have read and accept the",
    "contact.consent.link":"Privacy Policy and Personal Data Processing",
    "contact.consent.post":"of LIC Massage Therapy. I understand that my data (name, phone, email, and message) will be used",
    "contact.consent.bold":"solely to respond to my inquiry",
    "contact.consent.end":"and will not be shared with third parties.",

    // Button states and feedback messages
    "contact.submitting":"Opening WhatsApp…",
    "contact.submitted":"✓ Opening WhatsApp",
    "contact.feedback.loading":"Preparing your WhatsApp message…",
    "contact.feedback.success":"✓ Your message is ready. WhatsApp will open to send it.",
    "contact.btn.reset":"Send Message →",

    // WhatsApp message parts
    "contact.wa.greeting":"Hello Lic massage therapy, my name is",
    "contact.wa.intent":"I would like to get in touch with you about:",
    "contact.wa.contact":"You can reach me at:",
    "contact.wa.closing":"Have a great day.",

    // ── NEW KEYS — politica-privacidad.html ──────────────────────────────────

    // Topbar / nav
    "pp.back":"Back",

    // Hero
    "pp.hero.tag":"Legal",
    "pp.hero.title1":"Privacy",
    "pp.hero.title2":"Policy",
    "pp.hero.sub":"LIC Massage Therapy — Long Island City, New York",

    // Section 01 — Introduction
    "pp.s01.title":"Introduction and Commitment",
    "pp.s01.p1":"LIC Massage Therapy (we, our or the business) operates in Long Island City, Queens, New York. We are committed to protecting the privacy of every client and visitor to our website licmassagetherapy.com in accordance with applicable laws of the State of New York and federal legislation of the United States.",
    "pp.s01.p2":"This Privacy Policy describes what information we collect, how we use it, who we share it with, and what your rights are. By using our website or completing any contact form, you agree to the practices described in this document.",
    "pp.s01.highlight":"Last updated: May 2026. This policy may be updated periodically. We recommend reviewing it each time you interact with us.",
    "pp.s01.highlightDate":"May 2026",

    // Section 02 — Information collected
    "pp.s02.title":"Information We Collect",
    "pp.s02.intro":"We collect only the information necessary to provide our services:",
    "pp.s02.th1":"Data",
    "pp.s02.th2":"How it is collected",
    "pp.s02.th3":"Purpose",
    "pp.s02.r1.dato":"Full name",
    "pp.s02.r1.como":"Contact / appointment form",
    "pp.s02.r1.fin":"Identify the client",
    "pp.s02.r2.dato":"Phone number",
    "pp.s02.r2.como":"Contact / appointment form",
    "pp.s02.r2.fin":"Appointment confirmation and reminders",
    "pp.s02.r3.dato":"Email address",
    "pp.s02.r3.como":"Contact / appointment form",
    "pp.s02.r3.fin":"Answer inquiries and send confirmations",
    "pp.s02.r4.dato":"Message / inquiry",
    "pp.s02.r4.como":"Contact form",
    "pp.s02.r4.fin":"Address the specific request",
    "pp.s02.r5.dato":"Relevant health condition",
    "pp.s02.r5.como":"Direct conversation (optional)",
    "pp.s02.r5.fin":"Personalize the therapeutic treatment",
    "pp.s02.r6.dato":"Browsing data (IP, cookies)",
    "pp.s02.r6.como":"Automatic when visiting the site",
    "pp.s02.r6.fin":"Website performance analysis",

    // Section 03 — Use of information
    "pp.s03.title":"Use of Information",
    "pp.s03.intro":"Your personal data is used exclusively for:",
    "pp.s03.li1":"Responding to your inquiries and information requests.",
    "pp.s03.li2":"Scheduling, confirming, and reminding massage therapy appointments.",
    "pp.s03.li3":"Personalizing your therapeutic experience according to your health needs.",
    "pp.s03.li4":"Communicating with you via email or WhatsApp when you request it.",
    "pp.s03.li5":"Improving the quality of our services and the website experience.",
    "pp.s03.li6":"Complying with legal or regulatory obligations applicable in the State of New York.",
    "pp.s03.highlight":"We do not engage in unsolicited marketing. We will not send promotional emails or text messages without your prior and express consent.",
    "pp.s03.highlightBold":"We do not engage in unsolicited marketing.",

    // Section 04 — Data sharing
    "pp.s04.title":"Sharing Data with Third Parties",
    "pp.s04.intro":"We do not sell, rent, or transfer your personal information to third parties for commercial purposes. Information may only be shared in the following limited cases:",
    "pp.s04.introBold":"We do not sell, rent, or transfer",
    "pp.s04.li1":"Technical service providers: EmailJS (email sending) and WhatsApp Business, who act as data processors under their own privacy policies.",
    "pp.s04.li1bold":"Technical service providers:",
    "pp.s04.li2":"Legal obligation: When required by law, a court, or a New York or federal regulatory body.",
    "pp.s04.li2bold":"Legal obligation:",
    "pp.s04.li3":"Rights protection: To defend the legal rights of the business or our clients if strictly necessary.",
    "pp.s04.li3bold":"Rights protection:",

    // Section 05 — Security
    "pp.s05.title":"Information Security",
    "pp.s05.p1":"We implement reasonable technical and organizational measures to protect your information against unauthorized access, loss, or disclosure. Our site uses secure connections (HTTPS) and data transmitted through forms is processed through services with SSL/TLS encryption.",
    "pp.s05.p2":"While we strive to protect your information, no method of Internet transmission is 100% secure. We recommend taking precautions when sharing sensitive data online.",

    // Section 06 — Rights
    "pp.s06.title":"Your Rights",
    "pp.s06.intro":"In accordance with applicable privacy laws, you have the right to:",
    "pp.s06.li1bold":"Access:",
    "pp.s06.li1":"Request a copy of the personal data we hold about you.",
    "pp.s06.li2bold":"Rectification:",
    "pp.s06.li2":"Request the correction of inaccurate or incomplete data.",
    "pp.s06.li3bold":"Deletion:",
    "pp.s06.li3":"Request that we delete your personal data, unless there is a legal obligation to retain it.",
    "pp.s06.li4bold":"Objection:",
    "pp.s06.li4":"Object to the use of your data for certain purposes.",
    "pp.s06.li5bold":"Portability:",
    "pp.s06.li5":"Receive your data in a structured, commonly used format.",
    "pp.s06.li6bold":"Withdraw consent:",
    "pp.s06.li6":"At any time, without affecting the lawfulness of prior processing.",
    "pp.s06.highlight":"To exercise any of these rights, contact us at ra@licmassagetherapy.com or by phone at +1 718-478-1951. We will respond within a maximum of 30 days.",
    "pp.s06.highlightDays":"30 days",

    // Section 07 — Cookies
    "pp.s07.title":"Cookies and Tracking Technologies",
    "pp.s07.p1":"Our website may use essential cookies for its proper operation (for example, to remember your preferred language). We do not use advertising or cross-site tracking cookies.",
    "pp.s07.p2":"You can configure your browser to reject cookies; however, some site features may be affected. For more information, see your browser's privacy settings.",

    // Section 08 — Minors
    "pp.s08.title":"Minors",
    "pp.s08.p1":"Our services are intended for persons over 18 years of age. We do not knowingly collect personal information from minors. If you believe we have collected information from a minor without parental consent, please contact us immediately for deletion.",

    // Section 09 — Retention
    "pp.s09.title":"Data Retention",
    "pp.s09.p1":"We retain your personal information only for as long as necessary to fulfill the purposes described in this policy or as required by law. Contact messages are retained for a period of 12 months and then deleted, unless an active therapeutic relationship with the client exists.",
    "pp.s09.months":"12 months",

    // Section 10 — Contact
    "pp.s10.title":"Contact",
    "pp.s10.intro":"If you have questions, comments, or wish to exercise your rights regarding this Privacy Policy, you can contact us:",
    "pp.s10.li1bold":"Business:",
    "pp.s10.li1val":"LIC Massage Therapy",
    "pp.s10.li2bold":"Address:",
    "pp.s10.li2val":"Long Island New York, NY",
    "pp.s10.li3bold":"Phone:",
    "pp.s10.li3val":"+1 (347) 837-5503",
    "pp.s10.li4bold":"Email:",
    "pp.s10.li5bold":"Office hours:",
    "pp.s10.li5val":"Mon–Fri 10 am–7 pm · Sat 10 am–6 pm · Sun closed",

    // Back button and footer
    "pp.backBtn":"Back to Form",
    "pp.footer":"© 2026 LIC Massage Therapy — Long Island City, New York",

    // ── NEW KEYS — reservas.html ──────────────────────────────────────────────

    // Service select options
    "form.service.opt1":"Relaxing Massage",
    "form.service.opt2":"Deep Pressure Massage",
    "form.service.opt3":"Guided Relaxation",
    "form.service.opt4":"Muscle Recovery",
    "form.service.opt5":"Myofascial Release",
    "form.service.opt6":"Premium Relaxing Massage",

    // Field validation errors
    "error.name":"Please enter your full name.",
    "error.phone":"Enter a valid phone number.",
    "error.email":"Enter a valid email address.",
    "error.service":"Please select a service.",
    "error.date":"Select a valid date (cannot be in the past).",
    "error.fields":"⚠️ Please check the fields marked in red.",

    // Privacy checkbox
    "privacy.required":"Required field:",
    "privacy.text":"I have read and accept the",
    "privacy.link":"Privacy Policy and Personal Data Processing",
    "privacy.consent":"of LIC Massage Therapy. I authorize the use of my data to manage my booking and receive communications related to my appointment.",

    // Contact phone
    "book.phone":"+1 (347) 837-5503",

    // Submit button states
    "form.submitting":"Opening WhatsApp…",
    "form.submitted":"✓ Opening WhatsApp",
    "form.successToast":"✓ Your appointment is ready! WhatsApp will open to send it.",

    // WhatsApp message parts
    "wa.greeting":"Hello Lic massage therapy, I hope you are doing well.",
    "wa.intent":"I would like to schedule an appointment",
    "wa.labelName":"Name",
    "wa.labelPhone":"Phone",
    "wa.labelEmail":"Email",
    "wa.labelService":"Service",
    "wa.labelDate":"Preferred date",
    "wa.labelTime":"Time",
    "wa.labelNote":"Additional note",
    "wa.closing":"Looking forward to hearing from you, thank you very much.",

    // ── NEW KEYS — sobre-mi.html (new sections) ──────────────────────────────

    // Certifications section
    "certs.tag":"Credentials",
    "certs.title1":"Training",
    "certs.title2":"& Credentials",
    "certs.subtitle":"My training and professional credentials reflect years of dedication to therapeutic bodywork, massage therapy, and Active Isolated Stretching techniques.",
    "certs.imgPh":"Certification photo",
    "certs.c1.title":"NY State Licensed Massage Therapist",
    "certs.c1.org":"State of New York",
    "certs.c1.desc":"New York State licensed massage therapist, focused on therapeutic massage and Active Isolated Stretching (AIS).",
    "certs.c2.title":"Associates Degree in Occupational Studies",
    "certs.c2.org":"Swedish Institute College of Health Sciences, 2003",
    "certs.c2.desc":"One of the oldest massage schools in the country.",
    "certs.c3.title":"Active Isolated Stretching (AIS)",
    "certs.c3.org":"Trained by Aaron Mattes, developer of AIS",
    "certs.c3.desc":"Trained by Aaron Mattes, developer of the Mattes Method of Active Isolated Stretching and Strengthening.",
    "certs.c4.title":"Massage Therapist — The Yale Club",
    "certs.c4.org":"The Yale Club of New York, Manhattan",
    "certs.c4.desc":"One of the massage therapists at The Yale Club of New York in Manhattan, seeing people from all over the world.",
    "certs.c5.title":"Mark Morris Dance Center",
    "certs.c5.org":"Downtown Brooklyn",
    "certs.c5.desc":"Worked with performers and dancers at the Mark Morris Dance Center in Downtown Brooklyn.",
    "certs.c6.title":"Toastmasters International",
    "certs.c6.org":"Public Speaking & Education",
    "certs.c6.desc":"Member of Toastmasters International, which has helped spread the message in educating others.",
    "certs.licensed":"Active license",
    "certs.licensedVal":"State of New York",
    "certs.since":"In practice since",
    "certs.sinceVal":"2003",

    // Technical Background section
    "tech.tag":"Technical Background",
    "tech.title1":"Disciplines",
    "tech.title2":"& Methodology",
    "tech.subtitle":"An integrative approach combining movement science, pain neuroscience, and advanced manual therapy.",
    "tech.area1.name":"Applied Biomechanics",
    "tech.area1.desc":"Functional movement analysis, compensation patterns, and three-dimensional postural assessment to identify the root cause of pain, not just symptoms.",
    "tech.area2.name":"Pain Neuroscience",
    "tech.area2.desc":"Understanding central pain processing to design protocols that modulate central sensitization and restore normal movement patterns.",
    "tech.area3.name":"Advanced Manual Therapy",
    "tech.area3.desc":"Mastery of soft tissue techniques, joint mobilization, myofascial release, and neural manipulation for measurable results from the first session.",
    "tech.area4.name":"Exercise Prescription",
    "tech.area4.desc":"Design of strengthening, stretching, and proprioception programs specific to each diagnosis, ensuring continuity of treatment at home.",
    "tech.area5.name":"Functional Assessment",
    "tech.area5.desc":"Use of validated tests (FMS, SFMA, Selective Functional Movement Assessment) to objectify the initial state and measure therapeutic progress.",
    "tech.area6.name":"Sports Medicine",
    "tech.area6.desc":"Pre and post-competition protocol for athletes at all levels: recovery periodization, acute injury management, and prevention strategies.",

    // Office gallery carousel
    "gallery.tag":"The Office",
    "gallery.title1":"Discover the",
    "gallery.title2":"space",
    "gallery.subtitle":"An environment designed for recovery: certified equipment, controlled setting, and completely personalized care.",
    "gallery.imgPh":"Office photo",
    "gallery.prev":"Previous",
    "gallery.next":"Next",
    "gallery.cap1":"Professional table · controlled environment",
    "gallery.cap2":"Assisted stretching area",
    "gallery.cap3":"Certified therapeutic equipment",
    "gallery.cap4":"Reception and welcome area",
    "gallery.cap5":"Post-session recovery area",

    // ── NEW KEYS — sobre-mi.html ──────────────────────────────────────────────

    // Historia section
    "historia.tag":"Story",
    "historia.eyebrow":"The beginning",
    "historia.heading1":"From passion to",
    "historia.heading2":"purpose",
    "historia.para":"I am grateful for the experiences I have been able to have throughout the years, learning the skillful artistry of excellence when it comes to customer service and creativity at the Frederick Fekkai flagship salon in Manhattan, to Bloomingdale's NY; finally rounding it off at my favorite public speaking club, Toastmasters International, which has helped me spread my message in educating others. All these experiences has focused me in the best way possible to stay in tuned with my body and mind, so I can best assist individuals to stay in tune with theirs. I have met and learned from industry experts such as Aaron Mattes (developer of AIS stretching method), Mark Allen (six-time Ironman Triathlon Champion), Anthony Robbins (author and motivational speaker), Dr. Deepak Chopra (author of Ageless Body, Timeless Mind), Stu Middleman (ultra-marathoner), Sally Edwards (author of The Heart Rate Monitor Book, and Zoning- Fitness in a Blink), Brant Secunda (Huichol Shaman and Healer), and Shari Auth, LMT (creator of the Auth Massage Method). I have completed many half marathons, nine New York City Marathons, three half-Ironman races, several Olympic distance triathlons and two 5.85 mile swims. I practice meditation daily, and attend retreats regularly. I have completed three 10 day silent meditation retreats (Vipassana meditation — www.dhamma.org).",
    "historia.quote":"\"I believe that speech is silver and silence is golden.\"",
    "historia.imgPh":"History photo",
    "historia.year":"2003",

    // Formación section
    "formacion.tag":"Education",
    "formacion.eyebrow":"Where I learned",
    "formacion.heading1":"Training that",
    "formacion.heading2":"defines",
    "formacion.heading3":"excellence",
    "formacion.para1":"I received an Associates Degree in Occupational Studies in 2003, from the Swedish Institute College of Health Sciences, one of the oldest massage schools in the country. I was also one of the massage therapists at The Yale Club of New York in Manhattan, where I saw people from all over the world. My practice has also allowed me to work with performers and dancers at the Mark Morris Dance Center in Downtown Brooklyn.",
    "formacion.para2":"My goal is to help you be pain-free, be flexible, feel relaxed and be in your best possible health. If you are experiencing pain, are recovering from an injury or surgery, and want to feel and be better, please contact me for consultation. I offer 1/2 hour – 1 hour and 1.5 hr. sessions that are focused on the tissue and muscles as well as the inner well-being. I look forward to meeting you, please feel free to contact me if you have any questions.",
    "formacion.imgPh":"Institution photo",
    "formacion.instName":"Swedish Institute College of Health Sciences",
    "formacion.grid.label1":"Institution",
    "formacion.grid.val1":"Swedish Institute College of Health Sciences",
    "formacion.grid.label2":"Graduation year",
    "formacion.grid.val2":"2003",
    "formacion.grid.label3":"License",
    "formacion.grid.val3":"State of New York",

    // Values section (sobre-mi version)
    "som.v1.name":"Pain-Free",
    "som.v1.desc":"The place to come to be pain-free. If you are experiencing pain or recovering from an injury or surgery, please contact me for a consultation.",
    "som.v2.name":"Learn How to Stretch",
    "som.v2.desc":"Learn how to stretch for optimum health. I specialize in Active Isolated Stretching (AIS) to help you move better and feel stronger.",
    "som.v3.name":"Relax",
    "som.v3.desc":"Relax in Long Island City. Sessions are focused on the tissue and muscles as well as the inner well-being.",
    "som.v4.name":"Best Possible Health",
    "som.v4.desc":"My goal is to help you be pain-free, be flexible, feel relaxed and be in your best possible health.",

    // ── NEW KEYS — servicios.html ─────────────────────────────────────────────

    // Service card button
    "service.cta":"View treatment",

    // Workspace / Space showcase
    "ws.tag":"Our Space",
    "ws.title1":"Discover",
    "ws.title2":"the place where",
    "ws.title3":"recovery happens",
    "ws.intro":"An environment designed so your body and mind can find the rest they deserve. Professional equipment, controlled setting, and completely personalized care.",
    "ws.videoCaption":"Every session is guided by certified therapists with over 8 years of clinical experience.",
    "ws.videoPlaceholder":"Add space video",
    "ws.imgPlaceholderOffice":"Office photo",
    "ws.imgPlaceholderEquip":"Equipment photo",
    "ws.imgPlaceholderBed":"Bed photo",
    "ws.imgPlaceholderReception":"Reception photo",
    "ws.imgPlaceholderRecovery":"Recovery area photo",
    "ws.label.office":"Main office",
    "ws.label.equip":"Certified equipment",
    "ws.label.bed":"Professional bed",
    "ws.label.reception":"Reception area",
    "ws.label.recovery":"Recovery area",
    "ws.stat1.num":"+500",
    "ws.stat1.label":"Patients treated",
    "ws.stat2.num":"8+",
    "ws.stat2.label":"Years of experience",
    "ws.stat3.num":"6",
    "ws.stat3.label":"Specialized treatments",

    // ── NEW KEYS — servicios.html · Cancellation Policy ─────────────────────
    "cancel.tag":"Cancellation Policy",
    "cancel.title1":"Cancellation",
    "cancel.title2":"Policy",
    "cancel.intro":"We understand that unanticipated events happen occasionally in everyone's life. The following policies are put in place to be effective and fair to all clients.",
    "cancel.c1.title":"Cancellations",
    "cancel.c1.desc":"24-hour advance notice is required when cancelling an appointment. This allows the opportunity for someone else to schedule an appointment.",
    "cancel.c1.rule":"Without 24h notice, the full session amount will be charged and must be paid within 24h. You will be invoiced via email and may pay by credit card.",
    "cancel.c2.title":"No-Show",
    "cancel.c2.desc":"Anyone who forgets or consciously chooses to forgo their appointment for whatever reason will be considered a \"no-show\" and charged in full for their missed session.",
    "cancel.c2.rule":"Full charge due within 24h of the missed appointment. You will be invoiced via email and may pay by credit card.",
    "cancel.c3.title":"Late Arrivals",
    "cancel.c3.desc":"If you arrive late, your session may be shortened to accommodate others. Your therapist will determine whether there is enough time remaining to begin a treatment.",
    "cancel.c3.rule":"Regardless of the treatment time given, you are responsible for the full session. Out of respect for your therapist and other clients, please arrive on time.",

    // ── NEW KEYS — servicios.html · Studio Section ───────────────────────────

    // Slider — captions
    "studio.slide1.title":"Treatment Room",
    "studio.slide1.desc":"Lime-washed walls, warm lighting, and impeccable linens — every detail prepared for you.",
    "studio.slide2.title":"Stretching Area",
    "studio.slide2.desc":"Spacious, fully equipped space for AIS techniques and mobility work.",
    "studio.slide3.title":"Private Setting",
    "studio.slide3.desc":"Quiet, confidential, and completely dedicated to your recovery.",
    "studio.slide4.title":"Long Island City, NY",
    "studio.slide4.desc":"Convenient location, minutes from the subway, in the heart of Queens.",

    // Right-side text
    "studio.eyebrow":"In the studio",
    "studio.heading":"A calm, focused space — designed for your body.",
    "studio.para1":"Sessions take place in a private, quiet studio in Long Island City. Every appointment begins with a brief conversation about what hurts, what feels tight, and what you want to be able to do again. From there, the work is hands-on, precise, and adapted to you.",
    "studio.para2":"Whether you're an athlete, an office worker, recovering from an injury, or simply tired of feeling stiff — you'll receive professional care, patience, and zero judgment.",
    "studio.cta":"Book your first session",

    // Service modal
    "svc.modal.cta":"Book this service",

    // ── NEW KEYS — index.html ─────────────────────────────────────────────────

    // "Benefits" section (ts.*) — terapias-section
    "ts.tag":"Benefits",
    "ts.title1":"4 benefits",
    "ts.title2":"that change your life",
    "ts.intro":"Unlike static stretching, AIS therapy produces lasting, measurable improvements in how your body moves and feels.",
    "ts.item1.name":"Reduces pain",
    "ts.item1.desc":"Addresses chronic tension and muscle pain with precise assisted stretching techniques.",
    "ts.item2.name":"Increases flexibility",
    "ts.item2.desc":"Progressively expands your range of motion in ways that passive stretching cannot achieve.",
    "ts.item3.name":"Improves performance",
    "ts.item3.desc":"Athletes notice measurable gains in speed, power, and agility after consistent sessions.",
    "ts.item4.name":"Prevents injuries",
    "ts.item4.desc":"Corrects muscle imbalances before they become painful problems.",
    "ts.cta":"Meet your therapist",

    // Terapias section
    "terapias.tag":"Our Therapies",
    "terapias.title1":"Techniques that",
    "terapias.title2":"truly heal",
    "terapias.intro":"Every treatment is backed by clinical evidence and tailored to your specific condition. Raul combines multiple disciplines to deliver real, lasting results.",
    "terapias.cta":"Learn about Raul",

    "terapia1.name":"Therapeutic Massage",
    "terapia1.desc":"Deep soft-tissue manipulation that relieves chronic pain, releases muscle knots, and improves blood circulation. Ideal for contractures and accumulated tension.",
    "terapia2.name":"Active Isolated Stretching (AIS)",
    "terapia2.desc":"A technique developed by Aaron Mattes that works each muscle individually. Increases joint range of motion, corrects posture, and progressively prevents injuries.",
    "terapia3.name":"Myofascial Release",
    "terapia3.desc":"Specialized work on the muscle fascia to eliminate restrictions that cause referred pain and limit movement. Particularly effective for chronic myofascial syndrome.",
    "terapia4.name":"Sports Recovery",
    "terapia4.desc":"Pre and post-competition protocol using combined techniques of compression, vibration, and manual manipulation. Reduces fatigue, accelerates muscle regeneration, and optimizes performance.",

    // Tabs section
    "tabs.tag":"Why choose us",
    "tabs.title1":"Experience",
    "tabs.title2":"that transforms",
    "tab.benefits":"Benefits",
    "tab.testimonials":"Testimonials",
    "tab.process":"The Process",

    // Benefits carousel cards
    "bc1.title":"Chronic pain relief",
    "bc1.desc":"Deep pressure techniques that reach the most affected muscle layers, dissolving accumulated tension that rest alone cannot resolve.",
    "bc2.title":"Accelerated recovery",
    "bc2.desc":"Specialized pre and post-competition protocols that reduce muscle recovery time by up to 40% compared to passive rest.",
    "bc3.title":"Flexibility and mobility",
    "bc3.desc":"The AIS (Active Isolated Stretching) method progressively and safely improves joint range of motion, correcting incorrect postural patterns.",
    "bc4.title":"Mental wellness",
    "bc4.desc":"Deep relaxation activates the parasympathetic nervous system, reducing cortisol levels and promoting a lasting state of calm.",
    "bc5.title":"Personalized attention",
    "bc5.desc":"Each session starts with a functional assessment. No generic protocols — every treatment plan is designed exclusively for you.",

    // Testimonials tab
    "it1.quote":"I had been suffering from chronic low back pain for two years. After four sessions with Raul, I can do my exercise routine without any discomfort. I'm not exaggerating when I say it changed my life.",
    "it1.name":"María R.","it1.role":"Amateur runner, 38 years old",
    "it2.quote":"The pre-competition sports massage noticeably improved my performance. I felt more agile and had greater range of motion from the very first day.",
    "it2.name":"Juan L.","it2.role":"Triathlete, 44 years old",
    "it3.quote":"I came in for cervical tension and left with a personalized stretching routine. Raul explains every technique clearly. An exceptional professional.",
    "it3.name":"Sofia C.","it3.role":"Graphic designer, 31 years old",

    // Process steps tab
    "ps1.title":"Initial assessment",
    "ps1.desc":"We start with a conversation and functional evaluation to understand your history, goals, and areas of tension. No additional cost on your first visit.",
    "ps2.title":"Personalized plan",
    "ps2.desc":"We design a treatment protocol specific to you, combining the most appropriate techniques according to your needs and goals.",
    "ps3.title":"Therapy session",
    "ps3.desc":"Each 60 to 90-minute session combines manual techniques, assisted stretching, and education so you can maintain results at home.",
    "ps4.title":"Ongoing follow-up",
    "ps4.desc":"We adjust the plan at each visit based on your progress. The goal is for each session to be better than the last as you advance toward optimal wellness.",

    // Modal
    "modal.book":"Book this session →",
    "modal.close":"Close",

    // Service cards
    "card.more":"More info →",

    // ── Service script (index.html — dynamic cards and modal) ────────────────
    "s1.tag":"Relaxation","s2.tag":"Therapeutic","s3.tag":"Wellness",
    "s1.duration":"30 min- 60 min -90 min","s2.duration":"30 min -60 min- 90 min","s3.duration":"45 min",
    "s1.short":"A comprehensive massage combining soft-tissue manipulation to relieve stress and tension",
    "s2.short":"Designed to address specific conditions or discomfort. Ideal for those seeking relief from muscular tension",
    "s3.short":"The goal is to help you relax, breathe, and visualize yourself in a new, empowering way",
    "s1.feat1":"Reduces stress and anxiety","s1.feat2":"Improves blood and lymphatic circulation","s1.feat3":"Light to medium adaptable pressure","s1.feat4":"Includes gentle active stretching",
    "s2.feat1":"Relieves chronic pain and deep tension","s2.feat2":"Ideal for overuse injuries","s2.feat3":"Focused pressure technique","s2.feat4":"Visible results from the first session",
    "s3.feat1":"Reduction of nervousness and anxiety","s3.feat2":"Conscious breathing techniques","s3.feat3":"Personalized guided visualization","s3.feat4":"Improves daily performance",
    "sp.moreInfo":"More info →",
    "sp.book":"Book this session →",
    "sp.close":"Close",

    // ── Page titles (for dynamic <title>) ────────────────────────────────────
    "page.title.index":"LIC Massage Therapy",
    "page.title.servicios":"LIC Massage Therapy | Services",
    "page.title.sobre-mi":"LIC Massage Therapy | About",
    "page.title.reservas":"LIC Massage Therapy | Book",
    "page.title.contacto":"LIC Massage Therapy | Contact",

    's1.name': 'Relaxation Massage',
    'svc1.duration': '30 min - 60 min - 90 min',
    'svc1.price': '80 130 165 USD',
    'svc1.fullDesc':
      'An all-around massage and manipulation of soft tissue that relieves stress and tension, while enhancing blood and lymph circulation, pressure applied is lite to medium. The main purpose is relaxation.  Swedish massage is an ideal introduction to the peacefulness and benefits of massage therapy. It may include some lite Active Isolated stretching.',
    'svc1.feat1': 'Reduces stress and anxiety',
    'svc1.feat2': 'Relieves muscle tension',
    'svc1.feat3': 'Improves blood circulation',
    'svc1.feat4': 'Promotes rest and relaxation',
    'svc1.feat5': 'Supports overall wellness',

    // ===== SERVICE 2 =====
    's2.name': 'Deep Pressure Massage',
    'svc2.duration': '30 min - 60 min - 90 min',
    'svc2.price': '90 140 190 USD',
    'svc2.fullDesc':
      'Designed to focus on specific conditions or areas of discomfort. This session is good for anybody looking to relieve body aches and pains caused by muscle tension, muscle over used, and/or a trauma, and athletes, before and after events, to drain away fatigue, to relieve swelling, to reduce muscle tension, to promote flexibility and to prevent injuries.  For those with muscle tears, sprains, nerve impingements , and chronic back or shoulder pain, this treatment is extremely effective. It may include Active Isolated stretching.',
    'svc2.feat1': 'Releases deep muscle knots',
    'svc2.feat2': 'Reduces muscle pain',
    'svc2.feat3': 'Improves mobility',
    'svc2.feat4': 'Decreases body stiffness',
    'svc2.feat5': 'Speeds up muscle recovery',

    // ===== SERVICE 3 =====
    's3.name': 'Guided Relaxation',
    'svc3.duration': '45 min',
    'svc3.price': '70 USD',
    'svc3.fullDesc':
      'The focus of this session is to get you to relax, breathe and visualize yourself in a new and empowering way. It is aimed at helping you be less nervous and anxious and worry less. It can help you with your performance at work, in sports and in everyday life. It’s for those wanting to change bad habits and those wanting to lose weight, among other things. You will leave with tools that will help you on a daily basis. Guided relaxation and visualization sessions are being used by professional athletes, corporate leaders and actors to help them be more relaxed and achieve their goals. You will be on a massage table, fully dressed.',
    'svc3.feat1': 'Reduces mental stress',
    'svc3.feat2': 'Improves mindful breathing',
    'svc3.feat3': 'Enhances mental clarity',
    'svc3.feat4': 'Strengthens inner connection',
    'svc3.feat5': 'Promotes emotional balance',

    // ===== SERVICE 4 — How to give your partner a massage =====
    's4.name': 'How to Give Your Partner a Massage',
    'svc4.duration': '90 min',
    'svc4.price': '$205',
    'svc4.fullDesc':
      "Does your partner always ask you to relieve their neck, shoulder or back pain, and after five minutes you have no idea what to do? Have you always wanted to give your partner a relaxing and comforting massage? If so, this is for you! This relaxing hour-and-a-half session incorporates the best techniques to guide you so you can give your partner the best, most healing and calming massage possible. During this relaxing session you will also learn the do's and don'ts, where and how to apply pressure correctly, so you don't hurt yourself or your partner. Half the time I will guide one person while the other is on the table, and the other half I will guide the other person. This session is designed to teach you how to work on your partner or family — it is not an advanced session. It will be relaxing and fun. Open to any couple. Please email if you have any questions.",
    'svc4.feat1': 'Step-by-step guided techniques',
    'svc4.feat2': 'Learn where and how to apply pressure',
    'svc4.feat3': 'Relaxing session for both partners',
    'svc4.feat4': 'Open to any type of couple',
    'svc4.feat5': 'No prior experience needed',

    "certcard1.name": "Licensed Massage Therapist in the State of New York",
"certcard1.org": "Licensed since 2003 · Issued by The University of the State of New York · Education Department",
"certcard2.name": "Active Isolated Stretching — Advanced Seminar",
"certcard2.org": "Certificate of completion · 32 hours · Issued by Aaron L. Mattes, LMT, RKT",
"certcard3.name": "Active Isolated Stretching Seminar",
"certcard3.org": "Certificate of completion · 32 hours · Issued by Aaron L. Mattes, LMT, RKT",
"certcard4.name": "Active Isolated Stretching Seminar",
"certcard4.org": "Certificate of completion · 32 hours · Issued by Aaron L. Mattes, LMT, RKT",
"athletic.tag": "Athletic Background",
"athletic.title": "I practice what I teach.",
"athletic.desc": "Endurance sports have taught me what it truly takes to keep a body strong, mobile, and resilient — decade after decade. I bring that lived experience to every session.",


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
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (i18n[lang][key] !== undefined) el.placeholder = i18n[lang][key];
  });
  document.querySelectorAll('option[data-i18n]').forEach(opt => {
    const key = opt.getAttribute('data-i18n');
    if (i18n[lang][key] !== undefined) opt.textContent = i18n[lang][key];
  });

  // Actualizar alt de imágenes con data-alt-i18n
  document.querySelectorAll('[data-alt-i18n]').forEach(el => {
    const key = el.getAttribute('data-alt-i18n');
    if (i18n[lang][key] !== undefined) el.alt = i18n[lang][key];
  });

  // Actualizar <title> de la página si existe clave page.title
  const pageTitleKey = document.documentElement.getAttribute('data-page-title');
  if (pageTitleKey && i18n[lang][pageTitleKey] !== undefined) {
    document.title = i18n[lang][pageTitleKey];
  }
 
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

  // Notificar a scripts dinámicos que el idioma cambió
  document.dispatchEvent(new CustomEvent('langChange', { detail: { lang: lang } }));
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