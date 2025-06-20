// script.js – Applies to all pages (index.html, admissions.html, tution.html, yoga.html, gallery.html, etc.)

// Animate sections on scroll
const sections = document.querySelectorAll('section');
const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('appear');
    observer.unobserve(entry.target);
  });
}, {
  threshold: 0.1
});

sections.forEach(section => {
  appearOnScroll.observe(section);
});

// Handle all forms with feedback
const forms = document.querySelectorAll('form');
forms.forEach(form => {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('✅ Thank you for your submission! We will get back to you shortly.');
    form.reset();
  });
});

// Preload images to optimize UX
function preloadImages(imagePaths) {
  imagePaths.forEach(src => {
    const img = new Image();
    img.src = src;
  });
}

preloadImages([
  'assets/images/play-school.jpg',
  'assets/images/kids-painting.jpg',
  'assets/images/fun-games.jpg',
  'assets/images/hero-bg.jpg',
  'assets/images/story-time.jpg',
  'assets/images/yoga-session.jpg',
  'assets/images/language-activity.jpg',
  'assets/images/music-time.jpg'
]);

// Optional: Scroll to top when navigating from card links (simulate smooth load)
document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

// (Future enhancement) Mobile menu toggle logic
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('nav');
if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}
