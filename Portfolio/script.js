// Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  themeToggle.querySelector('i').classList.toggle('fa-moon');
  themeToggle.querySelector('i').classList.toggle('fa-sun');
});
themeToggle.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') themeToggle.click();
});

// Typing Animation
const phrases = ["Full Stack Developer", "Python Enthusiast", "Open Source Contributor"];
let i = 0, j = 0, isDeleting = false;
function type() {
  const display = document.getElementById("typed-text");
  const current = phrases[i];
  display.textContent = current.substring(0, j);
  if (!isDeleting && j < current.length) {
    j++;
  } else if (isDeleting && j > 0) {
    j--;
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) i = (i + 1) % phrases.length;
  }
  setTimeout(type, isDeleting ? 60 : 120);
}
type();

// Animated Skill Bars
function animateSkillBars() {
  document.querySelectorAll('.progress').forEach(bar => {
    const width = bar.style.width;
    bar.style.width = '0';
    setTimeout(() => {
      bar.style.transition = 'width 1.2s cubic-bezier(.4,2,.6,1)';
      bar.style.width = width;
    }, 100);
  });
}
function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top < window.innerHeight - 80 && rect.bottom > 0
  );
}
let skillsAnimated = false;
window.addEventListener('scroll', () => {
  if (!skillsAnimated) {
    const skillsSection = document.getElementById('skills');
    if (isInViewport(skillsSection)) {
      animateSkillBars();
      skillsAnimated = true;
    }
  }
});
// Animate on load if already in view
window.addEventListener('DOMContentLoaded', () => {
  if (isInViewport(document.getElementById('skills'))) animateSkillBars();
});

// Smooth Scroll for anchor links
const anchorLinks = document.querySelectorAll('a[href^="#"]');
anchorLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href').slice(1);
    const target = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
      target.tabIndex = -1;
      target.focus();
    }
  });
});

// Contact Form Handling
const contactForm = document.getElementById("contact-form");
const formSuccess = document.getElementById("form-success");
contactForm.addEventListener("submit", function(e) {
  e.preventDefault();
  formSuccess.style.display = 'flex';
  formSuccess.style.opacity = 0;
  setTimeout(() => { formSuccess.style.opacity = 1; }, 50);
  setTimeout(() => {
    formSuccess.style.opacity = 0;
    setTimeout(() => { formSuccess.style.display = 'none'; }, 400);
  }, 3000);
  this.reset();
});

// Resume Download Handler
document.getElementById('download-resume').addEventListener('click', function(e) {
  e.preventDefault();
  const link = document.createElement('a');
  link.href = 'Surya Siddharth Resume.pdf';
  link.download = 'Surya Siddharth Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});
  