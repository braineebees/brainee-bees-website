// script.js for Brainee Bees Academy

// Scroll animation for navbar links
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Simple form validation alert
const forms = document.querySelectorAll('form');
forms.forEach(form => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    alert('Thank you! We will contact you shortly. 🐝');
    form.reset();
  });
});

// Subtle animated background effect
const bg = document.querySelector('.animated-bg');
let hue = 0;
setInterval(() => {
  hue = (hue + 1) % 360;
  bg.style.background = `linear-gradient(135deg, hsl(${hue}, 100%, 90%) 0%, hsl(${(hue + 60) % 360}, 100%, 85%) 100%)`;
}, 100);

// Scroll reveal animations
const revealElements = document.querySelectorAll('section');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal');
    }
  });
}, { threshold: 0.1 });

revealElements.forEach(el => observer.observe(el));

// Add hover animations to videos
const videoGrid = document.querySelectorAll('.video-grid iframe');
videoGrid.forEach(vid => {
  vid.addEventListener('mouseover', () => {
    vid.style.transform = 'scale(1.05)';
    vid.style.transition = 'transform 0.3s ease-in-out';
  });
  vid.addEventListener('mouseout', () => {
    vid.style.transform = 'scale(1)';
  });
});

// Random tip generator for parents
const tips = [
  "Read a bedtime story every night 📚",
  "Play with building blocks for better motor skills 🧱",
  "Talk to your child in full sentences to build vocabulary 🗣️",
  "Sing songs to improve memory and rhythm 🎶",
  "Encourage pretend play for imagination 🌈",
  "Celebrate small milestones with excitement 🎉",
  "Limit screen time and promote outdoor games ⚽",
  "Practice colors using everyday objects 🌈",
  "Use flashcards for alphabet and numbers 🔤",
  "Teach through fun stories, not lectures 📖"
];

const randomTip = tips[Math.floor(Math.random() * tips.length)];
const tipBox = document.createElement('div');
tipBox.className = 'tip-box';
tipBox.innerText = `💡 Parenting Tip: ${randomTip}`;
document.body.appendChild(tipBox);

// Night mode toggle
const toggleBtn = document.createElement('button');
toggleBtn.innerText = '🌙 Toggle Night Mode';
toggleBtn.className = 'night-toggle';
document.body.appendChild(toggleBtn);

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('night');
});

// Animated mascot eye-follow effect
const mascot = document.createElement('div');
mascot.className = 'mascot';
mascot.innerHTML = '<img src="https://cdn-icons-png.flaticon.com/512/616/616408.png" width="60" height="60" alt="Bee Mascot">';
document.body.appendChild(mascot);

window.addEventListener('mousemove', (e) => {
  mascot.style.left = `${e.pageX + 10}px`;
  mascot.style.top = `${e.pageY + 10}px`;
});

// Scroll-to-top button
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerText = '↑';
scrollTopBtn.className = 'scroll-top';
document.body.appendChild(scrollTopBtn);

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollTopBtn.style.display = 'block';
  } else {
    scrollTopBtn.style.display = 'none';
  }
});
