// Countdown Timer
const countdownElement = document.querySelector('.countdown');
function updateCountdown() {
  const now = new Date();
  const newYear = new Date('2024-01-01T00:00:00');
  const diff = newYear - now;

  if (diff > 0) {
    const hours = String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(2, '0');
    const minutes = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, '0');
    const seconds = String(Math.floor((diff / 1000) % 60)).padStart(2, '0');
    countdownElement.textContent = `${hours}:${minutes}:${seconds}`;
  } else {
    countdownElement.textContent = 'Happy New Year!';
  }
}
setInterval(updateCountdown, 1000);

// Celebrate Button Animation
const celebrateBtn = document.querySelector('.celebrate-btn');
celebrateBtn.addEventListener('click', () => {
  gsap.to('.title', { duration: 1, scale: 1.5, color: '#ff0', ease: 'bounce.out' });
  createMovingCookies();
});

// Moving Cookies Animation
function createMovingCookies() {
  const container = document.querySelector('.cookies-container') || createCookieContainer();

  for (let i = 0; i < 20; i++) {
    const cookie = document.createElement('div');
    cookie.classList.add('cookie');
    container.appendChild(cookie);

    // Animate each cookie
    gsap.fromTo(cookie, {
      x: Math.random() * window.innerWidth,
      y: Math.random() * -100, // Start above the screen
      scale: Math.random() * 0.5 + 0.5, // Random scale between 0.5 and 1
      rotation: Math.random() * 360, // Random initial rotation
    }, {
      y: window.innerHeight + 100, // End below the screen
      x: Math.random() * window.innerWidth, // Move horizontally
      rotation: Math.random() * 360, // Continue rotating
      duration: Math.random() * 3 + 2, // Random duration
      ease: 'power1.inOut',
      onComplete: () => cookie.remove() // Remove cookie after animation
    });
  }
}

function createCookieContainer() {
  const container = document.createElement('div');
  container.classList.add('cookies-container');
  document.body.appendChild(container);
  return container;
}
// Smooth scroll behavior when clicking the Celebrate button
// celebrateBtn.addEventListener('click', () => {
//     document.querySelector('.scroll-section').scrollIntoView({ behavior: 'smooth' });
//   });

// GSAP Scroll-triggered fade-in effect
gsap.from(".scroll-section", {
    scrollTrigger: {
      trigger: ".scroll-section",
      start: "top 75%",
      end: "top 25%",
      toggleActions: "play none none reverse",
    },
    opacity: 0,
    y: 50,
    duration: 1,
  });
  
  // Floating stars animation
  function createStars(num) {
    const container = document.querySelector(".floating-stars");
    for (let i = 0; i < num; i++) {
      const star = document.createElement("div");
      star.classList.add("star");
      star.style.left = Math.random() * 100 + "vw";
      star.style.top = Math.random() * 100 + "vh";
      star.style.animationDelay = Math.random() * 5 + "s";
      star.style.animationDuration = Math.random() * 10 + 5 + "s";
      container.appendChild(star);
  
      gsap.to(star, {
        y: "-100vh",
        opacity: 0,
        repeat: -1,
        duration: Math.random() * 10 + 5,
        ease: "linear",
      });
    }
  }
  
  createStars(50); // Add 50 floating stars

  const quotes = [
    "This year, let your dreams be bigger, your actions bolder, and your heart stronger.",
    "Every great revolution begins with a single step toward change. Make this year your first step.",
    "The future belongs to those who dare to innovate and refuse to settle for ordinary.",
    "This year isn’t about resolutions; it’s about revolutions—transforming your life, one decision at a time.",
    "Let your courage be the spark that ignites a year of limitless possibilities.",
  ];
  
  const quoteText = document.querySelector(".quote-text");
  
  let currentQuoteIndex = 0;
  
  // Function to change the quote
  function updateQuote() {
    quoteText.textContent = quotes[currentQuoteIndex];
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length; // Loop through quotes
  }
  
  // Initialize with the first quote and start a timer
  updateQuote();
  setInterval(updateQuote, 5000); // Change quote every 5 seconds

  document.getElementById('animatePhotosBtn').addEventListener('click', function() {
    // Add the 'moved' class to the button to make it move down
    this.classList.add('moved');
  
    // GSAP Animation for Family Photos Section
    gsap.to(".family-container", {
      duration: 1,
      opacity: 1, // Fade in the container
      x: 0,
      ease: "power2.out"
    });
    
    // Animate each image box one by one with a stagger effect
    gsap.from(".image-box", {
      duration: 1.2,
      opacity: 0,
      y: 50,
      stagger: 0.3, // Delay each animation for a staggered effect
      ease: "bounce.out"
    });
  });
  