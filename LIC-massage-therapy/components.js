(function () {

  /* ── Configuración de navegación ──────────────────────────────────────── */
  const NAV_LINKS = [
    { href: 'index.html',      key: 'nav.home',         page: 'index'      },
    { href: 'masajes.html',    key: 'nav.masajes',      page: 'masajes'  },
    { href: 'stretch.html',    key: 'nav.terapia',      page: 'terapia'  },
    { href: 'sobre-mi.html',   key: 'nav.about',        page: 'Sobre Raul'   },
    { href: 'testimonios.html',key: 'nav.testimonials', page: 'testimonios'},
    { href: 'reservas.html',   key: 'nav.book',         page: 'reserva'   },
  
  ];

  /* ── Configuración del footer ─────────────────────────────────────────── */


  const FOOTER_PAGES = [
    { href: 'index.html',       key: 'nav.home'         },
    { href: 'masajes.html',    key: 'nav.masajes',     },
    { href: 'stretch.html',    key: 'nav.terapia',     },
    { href: 'sobre-mi.html',    key: 'nav.about'        },
    { href: 'testimonios.html', key: 'nav.testimonials' },
    { href: 'reservas.html',    key: 'nav.book'      },

  ];

  /* ── Íconos SVG reutilizables ─────────────────────────────────────────── */
  const ICONS = {
    location: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
    clock:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,
    email:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
    instagram:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`,
    facebook: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>`,
    whatsapp: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></svg>`,
    flagES: `<svg viewBox="0 0 24 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect width="24" height="16" fill="#c60b1e"/><rect y="4" width="24" height="8" fill="#ffc400"/></svg>`,
    flagUS: `<svg viewBox="0 0 24 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect width="24" height="16" fill="#fff"/><g fill="#b22234"><rect width="24" height="1.23"/><rect y="2.46" width="24" height="1.23"/><rect y="4.92" width="24" height="1.23"/><rect y="7.38" width="24" height="1.23"/><rect y="9.85" width="24" height="1.23"/><rect y="12.31" width="24" height="1.23"/><rect y="14.77" width="24" height="1.23"/></g><rect width="10.4" height="8.62" fill="#3c3b6e"/></svg>`,
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
      <button class="lang-btn" id="${esId}" onclick="setLang('es')" aria-label="Español">
        <span class="lang-flag">${ICONS.flagES}</span>
        <span class="lang-code">ES</span>
      </button>
      <button class="lang-btn" id="${enId}" onclick="setLang('en')" aria-label="English">
        <span class="lang-flag">${ICONS.flagUS}</span>
        <span class="lang-code">EN</span>
      </button>
    </div>`;
  }

  /* Estilos del toggle de idioma — se inyectan una sola vez */
  function injectLangStyles() {
    if (document.getElementById('lang-toggle-styles')) return;
    const style = document.createElement('style');
    style.id = 'lang-toggle-styles';
    style.textContent = `
      .lang-toggle {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        background: rgba(0,0,0,0.04);
        border: 1px solid rgba(0,0,0,0.08);
        border-radius: 999px;
        padding: 3px;
      }
      .lang-btn {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        border: none;
        background: transparent;
        cursor: pointer;
        padding: 5px 11px;
        border-radius: 999px;
        font-family: 'DM Sans', sans-serif;
        font-size: 12.5px;
        font-weight: 600;
        letter-spacing: 0.04em;
        color: rgba(0,0,0,0.55);
        transition: background 0.2s, color 0.2s, box-shadow 0.2s;
        line-height: 1;
      }
      .lang-btn .lang-flag {
        display: inline-flex;
        width: 20px;
        height: 14px;
        border-radius: 3px;
        overflow: hidden;
        box-shadow: 0 0 0 1px rgba(0,0,0,0.08);
        flex-shrink: 0;
      }
      .lang-btn .lang-flag svg { width: 100%; height: 100%; display: block; }
      .lang-btn:hover { color: rgba(0,0,0,0.85); }
      .lang-btn.active {
        background: #1F606F;
        color: #fff;
        box-shadow: 0 1px 3px rgba(31,96,111,0.35);
      }
      .lang-btn.active .lang-flag { box-shadow: 0 0 0 1px rgba(255,255,255,0.4); }

      /* Móvil: dentro del menú las banderas se ven más grandes */
      .mobile-lang-row .lang-toggle {
        background: rgba(0,0,0,0.05);
        padding: 4px;
      }
      .mobile-lang-row .lang-btn {
        font-size: 14px;
        padding: 8px 16px;
      }
      .mobile-lang-row .lang-btn .lang-flag {
        width: 24px;
        height: 17px;
      }

      /* Pantallas muy estrechas: solo banderas en la navbar */
      @media (max-width: 380px) {
        #navbar .lang-btn .lang-code { display: none; }
        #navbar .lang-btn { padding: 6px 8px; }
      }

      /* Móvil: ocultar el toggle de la navbar (se usa el del menú hamburguesa) */
      @media (max-width: 900px) {
        #navbar .nav-actions { display: none; }
      }
    `;
    document.head.appendChild(style);
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
  </ul>
  <div class="mobile-lang-row">
    ${langToggleHTML('mob')}
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
  <a href="index.html" class="nav-logo">
    <svg class="nav-logo-svg" width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="21" cy="21" r="21" fill="url(#navLogoGrad)"/>
      <text x="21" y="26" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="13" font-weight="700" letter-spacing="1.5" fill="#ffffff">LMT</text>
      <defs>
        <linearGradient id="navLogoGrad" x1="0" y1="0" x2="42" y2="42" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#2c6e6a"/>
          <stop offset="100%" stop-color="#1a4a47"/>
        </linearGradient>
      </defs>
    </svg>
    <span class="nav-logo-text">
      <span class="nav-logo-title">LIC MASSAGE</span>
      <span class="nav-logo-sub">THERAPY</span>
    </span>
  </a>
  <ul class="nav-links">
    ${links}
  </ul>
  <div class="nav-actions">
    ${langToggleHTML()}
   
  
  </div>
  <div class="hamburger" onclick="toggleMenu()"><span></span><span></span><span></span></div>`;
    return nav;
  }

  /* ── Componente: Footer ───────────────────────────────────────────────── */
  function renderFooter() {
   

    const pageLinks = FOOTER_PAGES.map(p =>
      `<li><a href="${p.href}" data-i18n="${p.key}">${p.key}</a></li>`
    ).join('\n        ');

    const footer = document.createElement('footer');
    footer.id = 'footer';
    footer.innerHTML = `
  <style>
    #footer {
      background: #0a2828;
      padding: 72px 0 0;
      color: rgba(255,255,255,0.65);
    }
    .footer-main {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      align-items: start;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 64px 64px;
      gap: 40px;
    }
    .footer-brand {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 28px;
    }
    .footer-col-center {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
    .footer-col-right {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      text-align: right;
    }
    .footer-col-title {
      font-family: 'DM Sans', sans-serif;
      font-size: 10.5px;
      font-weight: 500;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: rgba(255,255,255,0.38);
      margin-bottom: 22px;
    }
    .footer-links {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 13px;
    }
    .footer-links a {
      font-family: 'DM Sans', sans-serif;
      font-size: 14.5px;
      font-weight: 400;
      color: rgba(255,255,255,0.62);
      text-decoration: none;
      transition: color 0.2s;
    }
    .footer-links a:hover { color: #fff; }
    .footer-contact-items {
      display: flex;
      flex-direction: column;
      gap: 14px;
      align-items: flex-end;
    }
    .footer-contact-item {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      font-family: 'DM Sans', sans-serif;
      font-size: 13.5px;
      line-height: 1.55;
      color: rgba(255,255,255,0.62);
      text-align: right;
    }
    .footer-contact-item svg {
      width: 15px;
      height: 15px;
      flex-shrink: 0;
      margin-top: 2px;
      opacity: 0.5;
    }
    .footer-logo {
      display: flex;
      align-items: center;
      gap: 13px;
      text-decoration: none;
    }
    .footer-logo-svg { flex-shrink: 0; }
    .footer-logo-text {
      display: flex;
      flex-direction: column;
      line-height: 1.1;
    }
    .footer-logo-title {
      font-family: 'Cormorant Garamond', Georgia, serif;
      font-size: 16px;
      font-weight: 600;
      letter-spacing: 0.18em;
      color: #fff;
    }
    .footer-logo-sub {
      font-family: 'DM Sans', sans-serif;
      font-size: 10px;
      font-weight: 400;
      letter-spacing: 0.22em;
      color: rgba(255,255,255,0.5);
      margin-top: 2px;
    }
    .social-links {
      display: flex;
      gap: 12px;
    }
    .social-link {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 1px solid rgba(255,255,255,0.15);
      display: flex;
      align-items: center;
      justify-content: center;
      color: rgba(255,255,255,0.55);
      text-decoration: none;
      transition: border-color 0.2s, color 0.2s, background 0.2s;
    }
    .social-link:hover {
      border-color: rgba(255,255,255,0.4);
      color: #fff;
      background: rgba(255,255,255,0.07);
    }
    .social-link svg { width: 15px; height: 15px; }
    .footer-bottom {
      border-top: 1px solid rgba(255,255,255,0.08);
      max-width: 1200px;
      margin: 0 auto;
      padding: 22px 64px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .footer-copy {
      font-family: 'DM Sans', sans-serif;
      font-size: 12px;
      color: rgba(255,255,255,0.3);
    }
    .footer-legal { display: flex; gap: 24px; }
    .footer-legal a {
      font-family: 'DM Sans', sans-serif;
      font-size: 12px;
      color: rgba(255,255,255,0.3);
      text-decoration: none;
      transition: color 0.2s;
    }
    .footer-legal a:hover { color: rgba(255,255,255,0.6); }
    @media (max-width: 900px) {
      .footer-main {
        grid-template-columns: 1fr;
        padding: 0 32px 48px;
        gap: 40px;
      }
      .footer-col-center,
      .footer-col-right { align-items: flex-start; text-align: left; }
      .footer-contact-items { align-items: flex-start; }
      .footer-contact-item { text-align: left; }
      .footer-bottom { padding: 22px 32px; flex-direction: column; gap: 10px; text-align: center; }
    }
  </style>

  <div class="footer-main">

    <!-- LEFT: Brand + social -->
    <div class="footer-brand">
      <a href="index.html" class="footer-logo">
        <svg class="footer-logo-svg" width="40" height="40" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="21" cy="21" r="21" fill="url(#footerLogoGrad)"/>
          <text x="21" y="26" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="13" font-weight="700" letter-spacing="1.5" fill="#ffffff">LMT</text>
          <defs>
            <linearGradient id="footerLogoGrad" x1="0" y1="0" x2="42" y2="42" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stop-color="#2c6e6a"/>
              <stop offset="100%" stop-color="#1a4a47"/>
            </linearGradient>
          </defs>
        </svg>
        <span class="footer-logo-text">
          <span class="footer-logo-title">LIC MASSAGE</span>
          <span class="footer-logo-sub">THERAPY</span>
        </span>
      </a>
      <div class="social-links">
        <a href="https://www.instagram.com/licmassagetherapy?igsh=MXJyMDU5M2h0NHpudA%3D%3D" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="Instagram">${ICONS.instagram}</a>
        <a href="https://www.facebook.com/licmst?rdid=8ZIs4nAKwI0Xblo7&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Coq5x8tCq%2F#" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="Facebook">${ICONS.facebook}</a>
        <a href="https://wa.me/13478375503" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="WhatsApp">${ICONS.whatsapp}</a>
      </div>
    </div>

    <!-- CENTER: Pages -->
    <div class="footer-col-center">
      <div class="footer-col-title" data-i18n="footer.nav">Páginas</div>
      <ul class="footer-links">
        ${pageLinks}
      </ul>
    </div>

    <!-- RIGHT: Contact — centrado dentro de su columna -->
    <div class="footer-col-right">
      <div class="footer-col-title" data-i18n="footer.contact">Contacto</div>
      <div class="footer-contact-items">
        <div class="footer-contact-item">
          ${ICONS.location}
          <span data-i18n="book.location">12-17 Jackson Ave<br>Long Island City, NY 11101</span>
        </div>
        <div class="footer-contact-item">
          ${ICONS.clock}
          <span data-i18n="book.hours">Lun–Vie: 10am–7pm<br>Sáb: 10am–6pm · Dom: Cerrado</span>
        </div>
        <div class="footer-contact-item">
          ${ICONS.email}
          <span>ra@licmassagetherapy.com</span>
        </div>
      </div>
    </div>

  </div>
  <div class="footer-bottom">
    <div class="footer-copy" data-i18n="footer.copy">© 2026 LIC MASSAGE THERAPY. Todos los derechos reservados.</div>
    <div class="footer-legal">
      <a href="politica-privacidad.html" data-i18n="footer.privacy">Privacidad</a>
      <a href="politica-privacidad.html" data-i18n="footer.terms">Términos</a>
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

      // Inyectar estilos del toggle de idioma una sola vez
      injectLangStyles();

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
        applyLang(localStorage.getItem('kinesys-lang') || 'en');
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