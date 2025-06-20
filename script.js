// ===== Scroll-triggered Animations =====
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

// ===== Form Submission Alert =====
const forms = document.querySelectorAll('form');
forms.forEach(form => {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('✅ Thank you for your submission! We will get back to you shortly.');
    form.reset();
  });
});

// ===== Image Preloading =====
function preloadImages(imagePaths) {
  imagePaths.forEach(src => {
    const img = new Image();
    img.src = src;
  });
}

preloadImages([
  'assets/playschool.jpg',
  'assets/gallery1.jpg',
  'assets/gallery2.jpg',
  'assets/gallery3.jpg',
  'assets/gallery4.jpg',
  'assets/gallery5.jpg',
  'assets/yoga.jpg',
  'assets/languages.jpg',
  'assets/music.jpg'
]);

// ===== Smooth Scroll to Sections or Top =====
document.querySelectorAll('a[href^="#"], .program-card').forEach(link => {
  link.addEventListener('click', e => {
    const targetId = link.getAttribute('href');
    if (targetId && targetId.startsWith('#')) {
      e.preventDefault();
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });
});

// ===== Dark Mode Toggle =====
const toggleButton = document.querySelector('.dark-toggle');
if (toggleButton) {
  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggleButton.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
  });
}

// ===== Back to Top Button =====
const backToTopBtn = document.getElementById('backToTop');
if (backToTopBtn) {
  window.addEventListener('scroll', () => {
    backToTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ===== Mobile Navigation Toggle =====
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });
}
