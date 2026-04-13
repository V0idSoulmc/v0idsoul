/* ========================================================
   VØID Studio — Main JavaScript
   Shared across all pages
   ======================================================== */

(function () {
  'use strict';

  /* ── CURSOR ── */
  const cursor     = document.getElementById('cursor');
  const cursorRing = document.getElementById('cursorRing');

  if (cursor && cursorRing && window.innerWidth > 768) {
    let mx = -100, my = -100;
    let rx = -100, ry = -100;
    let isHovered = false;

    document.addEventListener('mousemove', e => {
      mx = e.clientX;
      my = e.clientY;
      cursor.style.transform = `translate(${mx - 5}px, ${my - 5}px)`;
    });

    // Smooth ring follow
    function animateRing() {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      const offset = isHovered ? 28 : 18;
      cursorRing.style.transform = `translate(${rx - offset}px, ${ry - offset}px)`;
      requestAnimationFrame(animateRing);
    }
    animateRing();

    // Hover effect on interactive elements
    const hoverTargets = 'a, button, .service-card, .work-card, .process-step, [data-hover]';
    document.addEventListener('mouseover', e => {
      if (e.target.closest(hoverTargets)) {
        isHovered = true;
        cursorRing.classList.add('hovered');
      }
    });
    document.addEventListener('mouseout', e => {
      if (e.target.closest(hoverTargets)) {
        isHovered = false;
        cursorRing.classList.remove('hovered');
      }
    });

    document.addEventListener('mousedown', () => cursorRing.classList.add('clicking'));
    document.addEventListener('mouseup',   () => cursorRing.classList.remove('clicking'));
  }

  /* ── STAR CANVAS ── */
  const canvas = document.getElementById('stars');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let W, H, stars = [];

    function resize() {
      W = canvas.width  = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }

    function initStars(count = 160) {
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 1.1 + 0.15,
        o: Math.random() * 0.5 + 0.05,
        s: Math.random() * 0.4 + 0.06,
        d: Math.random() * Math.PI * 2,
      }));
    }

    function drawStars() {
      ctx.clearRect(0, 0, W, H);
      const t = Date.now() * 0.001;
      stars.forEach(s => {
        const alpha = 0.05 + 0.45 * (0.5 + 0.5 * Math.sin(t * s.s + s.d));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(240,239,234,${alpha})`;
        ctx.fill();
      });
      requestAnimationFrame(drawStars);
    }

    window.addEventListener('resize', () => { resize(); initStars(); });
    resize();
    initStars();
    drawStars();
  }

  /* ── NAV: ACTIVE LINK ── */
  const page     = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-links a, .nav-mobile a');
  navLinks.forEach(link => {
    const href = link.getAttribute('href') || '';
    if (href === page || (page === '' && href === 'index.html') ||
        (href.includes(page) && page !== '')) {
      link.classList.add('active');
    }
  });

  /* ── NAV: MOBILE TOGGLE ── */
  const toggle    = document.querySelector('.nav-toggle');
  const mobileNav = document.querySelector('.nav-mobile');
  if (toggle && mobileNav) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('open');
      mobileNav.classList.toggle('open');
      document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
    });
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        toggle.classList.remove('open');
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  /* ── SCROLL REVEAL ── */
  const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  if (revealEls.length) {
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(el => revealObserver.observe(el));
  }

  /* ── COUNTER ANIMATION ── */
  function animateCounter(el) {
    const target  = parseFloat(el.dataset.target);
    const suffix  = el.dataset.suffix || '';
    const decimals = (target % 1 !== 0) ? 1 : 0;
    let current = 0;
    const duration = 1800;
    const start = performance.now();

    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      current = target * eased;
      el.textContent = current.toFixed(decimals) + suffix;
      if (progress < 1) requestAnimationFrame(update);
      else el.textContent = target.toFixed(decimals) + suffix;
    }
    requestAnimationFrame(update);
  }

  const statsEl = document.querySelector('.stats-bar');
  if (statsEl) {
    const statsObserver = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        statsEl.querySelectorAll('.stat-number[data-target]').forEach(animateCounter);
        statsObserver.disconnect();
      }
    }, { threshold: 0.3 });
    statsObserver.observe(statsEl);
  }

  /* ── PAGE TRANSITIONS ── */
  const overlay = document.querySelector('.page-transition');
  if (overlay) {
    // Animate out on load (slide up)
    overlay.classList.add('leaving');
    setTimeout(() => overlay.classList.remove('leaving'), 600);

    // Intercept local link clicks
    document.querySelectorAll('a[href]').forEach(link => {
      const href = link.getAttribute('href');
      if (!href || href.startsWith('#') || href.startsWith('mailto') || href.startsWith('tel') || href.startsWith('http')) return;
      link.addEventListener('click', e => {
        e.preventDefault();
        overlay.classList.add('entering');
        setTimeout(() => { window.location = href; }, 500);
      });
    });
  }

  /* ── PARALLAX HERO TITLE ── */
  const heroTitle = document.querySelector('.hero-parallax');
  if (heroTitle) {
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      heroTitle.style.transform = `translateY(${y * 0.2}px)`;
    }, { passive: true });
  }

  /* ── SMOOTH SECTION INDICATOR ── */
  const sections = document.querySelectorAll('section[id]');
  if (sections.length) {
    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(sec => {
        if (window.scrollY >= sec.offsetTop - 200) current = sec.id;
      });
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) link.classList.add('active');
      });
    }, { passive: true });
  }

  /* ── INJECT FOOTER ── */
  function buildFooter() {
    const footer = document.querySelector('.footer');
    if (!footer) return;
    footer.innerHTML = `
      <div class="footer-top">
        <div class="footer-brand">
          <span class="logo">VØID</span>
          <p>Un studio créatif basé à Paris. On construit des choses qui méritent d'être vues.</p>
        </div>
        <div class="footer-col">
          <h4>Navigation</h4>
          <ul>
            <li><a href="index.html">Accueil</a></li>
            <li><a href="services.html">Services</a></li>
            <li><a href="projets.html">Projets</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Contact</h4>
          <ul>
            <li><a href="mailto:hello@void-studio.fr">hello@void-studio.fr</a></li>
            <li><a href="tel:+33612345678">+33 6 12 34 56 78</a></li>
            <li><a href="#">12 Rue du Faubourg, Paris</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p class="footer-copy">© ${new Date().getFullYear()} VØID Studio — Tous droits réservés</p>
        <div class="footer-socials">
          <a href="#">Instagram</a>
          <a href="#">Behance</a>
          <a href="#">LinkedIn</a>
          <a href="#">GitHub</a>
        </div>
      </div>
    `;
  }
  buildFooter();

})();