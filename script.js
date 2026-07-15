// 1. Animate Welcome Text with delay
window.addEventListener('load', () => {
  const welcomeText = document.getElementById('welcome-text');
  if (welcomeText) {
    welcomeText.style.opacity = 0;
    welcomeText.style.transform = 'translateY(-20px)';

    setTimeout(() => {
      welcomeText.style.transition = 'all 1s ease-in-out';
      welcomeText.style.opacity = 1;
      welcomeText.style.transform = 'translateY(0)';
    }, 500); // delay for smooth entry
  }
});

// 2. Smooth Scroll for Internal Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// 3. Button hover animation
const buttons = document.querySelectorAll('.btn');
buttons.forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    btn.style.transform = 'scale(1.05)';
    btn.style.transition = 'transform 0.2s ease-in-out';
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.transform = 'scale(1)';
  });
});

// 4. Back to Top Button
const backToTopBtn = document.createElement('button');
backToTopBtn.textContent = '↑';
backToTopBtn.id = 'backToTop';
document.body.appendChild(backToTopBtn);

// Styling for the button
Object.assign(backToTopBtn.style, {
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  padding: '10px',
  fontSize: '18px',
  background: '#ff6600',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  display: 'none',
  zIndex: '1000'
});

// Show button after scroll
window.addEventListener('scroll', () => {
  backToTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

// Scroll to top on click
backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
