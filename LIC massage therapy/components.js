/* ─── KINESYS COMPONENTS.JS ─────────────────────────────────────────────────
   Módulo de componentes reutilizables.
   Uso: renderComponents({ page: 'index' })
   El parámetro `page` debe coincidir con el nombre del archivo HTML sin extensión.
   Ejemplo: index.html → 'index', servicios.html → 'servicios'
────────────────────────────────────────────────────────────────────────────── */

(function () {

  /* ── Configuración de navegación ──────────────────────────────────────── */
  const NAV_LINKS = [
    { href: 'index.html',      key: 'nav.home',         page: 'index'      },
    { href: 'servicios.html',  key: 'nav.services',     page: 'servicios'  },
    { href: 'sobre-mi.html',   key: 'nav.about',        page: 'sobre Raul'   },
    { href: 'testimonios.html',key: 'nav.testimonials', page: 'testimonios'},
    { href: 'reservas.html',   key: 'nav.book',         page: 'reserva'   },
  ];

  /* ── Configuración del footer ─────────────────────────────────────────── */
  const FOOTER_SERVICES = [
    { href: 'servicios.html', key: 's1.name' },
    { href: 'servicios.html', key: 's2.name' },
    { href: 'servicios.html', key: 's3.name' },
    { href: 'servicios.html', key: 's4.name' },
    { href: 'servicios.html', key: 's5.name' },
    { href: 'servicios.html', key: 's6.name' },
  ];

  const FOOTER_PAGES = [
    { href: 'index.html',       key: 'nav.home'         },
    { href: 'servicios.html',   key: 'nav.services'     },
    { href: 'sobre-mi.html',    key: 'nav.about'        },
    { href: 'testimonios.html', key: 'nav.testimonials' },
    { href: 'reservas.html',    key: 'nav.book'      },
    { href: 'contacto.html',    key: 'nav.contact'         },
  ];

  /* ── Íconos SVG reutilizables ─────────────────────────────────────────── */
  const ICONS = {
    location: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
    clock:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,
    email:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
    instagram:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>`,
    facebook: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>`,
    whatsapp: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></svg>`,
  };

  /* ── Helpers ──────────────────────────────────────────────────────────── */
  function navLinksHTML(currentPage, mobile = false) {
    return NAV_LINKS.map(link => {
      const active = link.page === currentPage ? ' class="active"' : '';
      return `<li><a href="${link.href}"${active} data-i18n="${link.key}">${link.key}</a></li>`;
    }).join('\n    ');
  }

  function langToggleHTML(prefix = '') {
    const esId = prefix ? `${prefix}-btn-es` : 'btn-es';
    const enId = prefix ? `${prefix}-btn-en` : 'btn-en';
    return `<div class="lang-toggle">
      <button class="lang-btn" id="${esId}" onclick="setLang('es')">ES</button>
      <button class="lang-btn" id="${enId}" onclick="setLang('en')">EN</button>
    </div>`;
  }

  /* ── Componente: Mobile Menu ──────────────────────────────────────────── */
  function renderMobileMenu(currentPage) {
    const links = NAV_LINKS.map(link => {
      const active = link.page === currentPage ? ' class="active"' : '';
      return `<li><a href="${link.href}"${active} data-i18n="${link.key}">${link.key}</a></li>`;
    }).join('\n    ');

    const div = document.createElement('div');
    div.className = 'mobile-menu';
    div.id = 'mobileMenu';
    div.innerHTML = `
  <button class="mobile-menu-close" onclick="toggleMenu()">✕</button>
  <ul class="nav-links-mobile">
    ${links}
    <li><a href="reservas.html" data-i18n="nav.book">Reservar</a></li>
  </ul>
  <div class="mobile-lang-row">
    ${langToggleHTML('mob')}
    <button class="theme-btn" onclick="toggleTheme()"><span class="theme-icon">◐</span></button>
  </div>`;
    return div;
  }

  /* ── Componente: Navbar ───────────────────────────────────────────────── */
  function renderNavbar(currentPage) {
    const isHome = currentPage === 'index';
    const links = NAV_LINKS.map(link => {
      const active = link.page === currentPage ? ' class="active"' : '';
      return `<li><a href="${link.href}"${active} data-i18n="${link.key}">${link.key}</a></li>`;
    }).join('\n    ');

    const nav = document.createElement('nav');
    nav.id = 'navbar';
    if (!isHome) nav.className = 'scrolled-static';

    nav.innerHTML = `
  <a href="index.html" class="nav-logo"><div class="nav-logo-symbol">K</div>LIC MASSAGE THERAPY</a>
  <ul class="nav-links">
    ${links}
  </ul>
  <div class="nav-actions">
    ${langToggleHTML()}
    <button class="theme-btn" id="theme-btn" onclick="toggleTheme()">
      <span class="theme-icon" id="theme-icon">◐</span>
    </button>
    <a href="contacto.html" class="btn-nav${currentPage === 'contacto' ? ' active-page' : ''}" data-i18n="nav.contact">Contactanos</a>
  </div>
  <div class="hamburger" onclick="toggleMenu()"><span></span><span></span><span></span></div>`;
    return nav;
  }

  /* ── Componente: Footer ───────────────────────────────────────────────── */
  function renderFooter() {
    const serviceLinks = FOOTER_SERVICES.map(s =>
      `<li><a href="${s.href}" data-i18n="${s.key}">${s.key}</a></li>`
    ).join('\n        ');

    const pageLinks = FOOTER_PAGES.map(p =>
      `<li><a href="${p.href}" data-i18n="${p.key}">${p.key}</a></li>`
    ).join('\n        ');

    const footer = document.createElement('footer');
    footer.id = 'footer';
    footer.innerHTML = `
  <div class="footer-main">
    <div class="footer-brand">
      <a href="index.html" class="footer-logo">LIC MASSAGE THERAPY</a>
      <p class="footer-tagline" data-i18n="footer.tagline">Centro de excelencia en terapia muscular y bienestar corporal premium.</p>
      <div class="social-links">
        <a href="#" class="social-link" aria-label="Instagram">${ICONS.instagram}</a>
        <a href="#" class="social-link" aria-label="Facebook">${ICONS.facebook}</a>
        <a href="#" class="social-link" aria-label="WhatsApp">${ICONS.whatsapp}</a>
      </div>
    </div>
    <div>
      <div class="footer-col-title" data-i18n="footer.links">Servicios</div>
      <ul class="footer-links">
        ${serviceLinks}
      </ul>
    </div>
    <div>
      <div class="footer-col-title" data-i18n="footer.nav">Páginas</div>
      <ul class="footer-links">
        ${pageLinks}
      </ul>
    </div>
    <div>
      <div class="footer-col-title" data-i18n="footer.contact">Contacto</div>
      <div class="footer-contact-items">
        <div class="footer-contact-item">${ICONS.location}<span data-i18n="book.location"> Nueva York — Long Island City</span></div>
        <div class="footer-contact-item">${ICONS.clock}<span data-i18n="book.hours">Lun–Vie: 10am–7pm · Sáb: 10am–6pm · Dom: Cerrado</span></div>
        <div class="footer-contact-item">${ICONS.email}<span>ra@licmassagetherapy.com</span></div>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <div class="footer-copy" data-i18n="footer.copy">© 2025 LIC MASSAGE THERAPY. Todos los derechos reservados.</div>
    <div class="footer-legal">
      <a href="#" data-i18n="footer.privacy">Privacidad</a>
      <a href="#" data-i18n="footer.terms">Términos</a>
    </div>
  </div>`;
    return footer;
  }

  /* ── Componente: Cursor ───────────────────────────────────────────────── */
  function renderCursor() {
    const div = document.createElement('div');
    div.className = 'cursor';
    div.innerHTML = '<div class="cursor-dot"></div><div class="cursor-ring"></div>';
    return div;
  }

  /* ── renderComponents — punto de entrada público ─────────────────────── */
  /*
   * Llama a esta función al inicio del <body> (o antes del </body>)
   * pasando el nombre de la página actual.
   *
   * Uso mínimo en cada página HTML:
   *
   *   <script src="shared.js"></script>
   *   <script src="components.js"></script>
   *   <script>
   *     renderComponents('servicios');  // ← nombre de página sin .html
   *     initPage('servicios');
   *   </script>
   *
   * renderComponents() inserta automáticamente:
   *   - .cursor
   *   - #mobileMenu
   *   - #navbar
   *   - #footer  (al final del body)
   *
   * La función puede llamarse antes de DOMContentLoaded porque
   * inserta los nodos directamente en document.body.
   */
  window.renderComponents = function (page) {
    function inject() {
      const body = document.body;

      // Evitar doble inserción (útil en hot-reload)
      if (document.getElementById('navbar')) return;

      // Prepend: cursor → mobileMenu → navbar (en ese orden al inicio del body)
      const firstChild = body.firstChild;
      body.insertBefore(renderNavbar(page), firstChild);
      body.insertBefore(renderMobileMenu(page), firstChild);
      body.insertBefore(renderCursor(), firstChild);

      // Footer al final, antes de los <script>
      const scripts = body.querySelectorAll('script');
      const lastScript = scripts[scripts.length - 1];
      body.insertBefore(renderFooter(), lastScript || null);

      // Re-aplicar el idioma guardado sobre los nodos recién insertados
      if (typeof applyLang === 'function') {
        applyLang(localStorage.getItem('kinesys-lang') || 'es');
      }
    }

    // Si el DOM ya está listo, insertar de inmediato; si no, esperar.
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', inject);
    } else {
      inject();
    }
  };

})();
