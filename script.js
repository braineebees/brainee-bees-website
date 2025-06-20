const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');

// Set canvas full screen
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Create particles
const particles = Array.from({ length: 70 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  r: Math.random() * 3 + 1,
  dx: (Math.random() - 0.5) * 1.5,
  dy: (Math.random() - 0.5) * 1.5
}));

// Animation loop
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(p => {
    // Move
    p.x += p.dx;
    p.y += p.dy;

    // Bounce from edges
    if (p.x <= 0 || p.x >= canvas.width) p.dx *= -1;
    if (p.y <= 0 || p.y >= canvas.height) p.dy *= -1;

    // Draw particle
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
    ctx.fill();
  });

  requestAnimationFrame(animate);
}
animate();
