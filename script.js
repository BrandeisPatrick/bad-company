document.addEventListener('DOMContentLoaded', () => {
  const mobileMenu = document.querySelector('.mobile-menu');
  const navList = document.querySelector('.nav-list');
  const header = document.querySelector('.header');

  // Word Carousel functionality
  const carouselWords = document.querySelectorAll('.carousel-word');
  const leftArrow = document.querySelector('.carousel-arrow-left');
  const rightArrow = document.querySelector('.carousel-arrow-right');
  let currentWordIndex = 0;

  function showWord(index) {
    carouselWords.forEach((word, i) => {
      word.classList.toggle('active', i === index);
    });
  }

  function nextWord() {
    currentWordIndex = (currentWordIndex + 1) % carouselWords.length;
    showWord(currentWordIndex);
  }

  function prevWord() {
    currentWordIndex = (currentWordIndex - 1 + carouselWords.length) % carouselWords.length;
    showWord(currentWordIndex);
  }

  leftArrow?.addEventListener('click', prevWord);
  rightArrow?.addEventListener('click', nextWord);

  // Optional: Auto-advance every 4 seconds
  setInterval(nextWord, 4000);

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

  // Header tint on scroll (kept subtle)
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY > 100;
    header.style.background = scrolled ? 'rgba(26,26,26,.95)' : 'rgba(26,26,26,.8)';
    header.style.backdropFilter = scrolled ? 'blur(20px)' : 'blur(12px)';
  });
});