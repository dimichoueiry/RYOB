import './style.css'

// Simple Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Add fade-in class to sections
document.querySelectorAll('section').forEach(section => {
  section.classList.add('fade-in-section');
  observer.observe(section);
});

// Typing Effect for Hero Title
const textToType = "STOP BUILDING IN SILENCE";
const titleElement = document.querySelector('.glitch-text');
const typingSpeed = 100;

if (titleElement) {
  titleElement.textContent = ''; // Clear initial text
  titleElement.removeAttribute('data-text'); // Remove glitch attr for now

  // Create cursor
  const cursor = document.createElement('span');
  cursor.className = 'cursor';
  titleElement.parentNode.insertBefore(cursor, titleElement.nextSibling);

  let i = 0;
  function typeWriter() {
    if (i < textToType.length) {
      titleElement.textContent += textToType.charAt(i);
      i++;
      setTimeout(typeWriter, typingSpeed);
    } else {
      // Optional: remove cursor after typing
      // cursor.style.display = 'none';
    }
  }

  // Start typing after a small delay
  setTimeout(typeWriter, 500);
}

// Dynamic bar chart animation in hero
const bars = document.querySelectorAll('.bar');
function animateBars() {
  bars.forEach(bar => {
    const randomHeight = Math.floor(Math.random() * 60) + 20;
    bar.style.height = `${randomHeight}%`;
  });
}

setInterval(animateBars, 2000);

// Network Animation Score Counter
const scores = [
  { id: 'idea-validation', target: 890 }
];

function animateScores() {
  scores.forEach(item => {
    const el = document.querySelector(`#${item.id} .score-bubble`);
    if (!el) return;

    // Reset
    el.style.opacity = '1';
    let current = 0;
    const duration = 2000; // Count up over 2 seconds
    const stepTime = 50;
    const steps = duration / stepTime;
    const increment = item.target / steps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= item.target) {
        current = item.target;
        clearInterval(timer);
      }
      el.textContent = Math.floor(current);
    }, stepTime);
  });
}

// Start loop and sync with CSS animation (4s cycle)
animateScores();
setInterval(animateScores, 4000);
