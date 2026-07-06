/* Shanti — interacties */
(function () {
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.nav-toggle');

  /* Header state bij scrollen */
  const onScroll = () => {
    if (window.scrollY > 40) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* Mobiel menu */
  if (toggle) {
    toggle.addEventListener('click', () => {
      document.body.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', document.body.classList.contains('nav-open'));
    });
    document.querySelectorAll('.mobile-menu a').forEach((a) =>
      a.addEventListener('click', () => document.body.classList.remove('nav-open'))
    );
  }

  /* Stagger voor mobiele menulinks */
  document.querySelectorAll('.mobile-menu .menu-link').forEach((link, i) => {
    link.style.transitionDelay = 0.08 + i * 0.05 + 's';
  });

  /* Scroll-reveal */
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  document.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el));

  /* Stagger binnen grids */
  document.querySelectorAll('[data-stagger]').forEach((grid) => {
    Array.from(grid.children).forEach((child, i) => {
      child.setAttribute('data-reveal', '');
      child.style.setProperty('--d', (i % 6) * 0.08 + 's');
      observer.observe(child);
    });
  });

  /* Woord-voor-woord hero-animatie */
  document.querySelectorAll('.words').forEach((el) => {
    const words = el.textContent.trim().split(/\s+/);
    el.textContent = '';
    words.forEach((w, i) => {
      const outer = document.createElement('span');
      outer.className = 'word';
      const inner = document.createElement('span');
      inner.textContent = w;
      inner.style.animationDelay = 0.15 + i * 0.09 + 's';
      outer.appendChild(inner);
      el.appendChild(outer);
      if (i < words.length - 1) el.appendChild(document.createTextNode(' '));
    });
  });

  /* Accordion: maar één tegelijk open */
  document.querySelectorAll('.accordion').forEach((acc) => {
    acc.querySelectorAll('details').forEach((d) => {
      d.addEventListener('toggle', () => {
        if (d.open) {
          acc.querySelectorAll('details[open]').forEach((other) => {
            if (other !== d) other.open = false;
          });
        }
      });
    });
  });
})();
