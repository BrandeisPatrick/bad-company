document.addEventListener('DOMContentLoaded', () => {
  const mobileMenu = document.querySelector('.mobile-menu');
  const navList = document.querySelector('.nav-list');
  const header = document.querySelector('.header');
  const enterBtn = document.querySelector('.enter-btn');

  // Mobile menu: simple toggle, no backdrop animations
  mobileMenu?.addEventListener('click', () => {
    navList.classList.toggle('open');
    mobileMenu.classList.toggle('active');
    document.body.style.overflow = navList.classList.contains('open') ? 'hidden' : '';
  });

  // Links: set active + (optional) smooth scroll — no ripples
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
      link.classList.add('active');

      if (navList.classList.contains('open')) {
        navList.classList.remove('open');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
      }

      const target = document.querySelector(link.getAttribute('href'));
      target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // ENTER button: just scroll down
  enterBtn?.addEventListener('click', () => {
    document.querySelector('.actions')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  // Header tint on scroll (kept subtle)
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY > 100;
    header.style.background = scrolled ? 'rgba(26,26,26,.95)' : 'rgba(26,26,26,.8)';
    header.style.backdropFilter = scrolled ? 'blur(20px)' : 'blur(12px)';
  });
});