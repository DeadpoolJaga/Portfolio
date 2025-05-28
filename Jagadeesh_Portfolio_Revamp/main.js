const roles = ["Web Developer", "Full Stack Engineer", "MS in CS", "Tech Enthusiast"];
let i = 0;

function cycleRole() {
  document.getElementById("role").textContent = roles[i];
  i = (i + 1) % roles.length;
}
setInterval(cycleRole, 2000);

function toggleTheme() {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
}


function toggleMenu() {
  const nav = document.getElementById('navLinks');
  nav.classList.toggle('show');
}

function sendMessage(event) {
  event.preventDefault();
  alert("Thanks! Your message has been sent.");
}

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target?.scrollIntoView({ behavior: 'smooth' });
  });
});

function sendMessage(event) {
  event.preventDefault();
  alert("Thanks for reaching out! I’ll get back to you soon.");
}


// Redirect to Portfolio Function
function redirectToPortfolio() {
    // Update this URL to your actual portfolio link
    window.location.href = "http://127.0.0.1:5500/index.html";
}


// Scroll fade-in animation
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.1,
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");
    appearOnScroll.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

let lastScrollTop = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;

  if (scrollTop > lastScrollTop) {
    // Scrolling down
    navbar.style.transform = "translateY(-100%)";
  } else {
    // Scrolling up
    navbar.style.transform = "translateY(0)";
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

