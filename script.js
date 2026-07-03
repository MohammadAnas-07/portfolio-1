// =========================
// MOBILE MENU
// =========================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("mobile-open");
  });
}

// =========================
// NAVBAR SCROLL EFFECT
// =========================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    navbar.style.borderBottom =
      "1px solid rgba(255,255,255,.08)";
  } else {
    navbar.style.borderBottom =
      "1px solid rgba(255,255,255,.04)";
  }
});

// =========================
// SCROLL REVEAL
// =========================

const revealElements =
  document.querySelectorAll(
    ".project, .about-card, .skills-grid span, .contact"
  );

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  {
    threshold: 0.15,
  }
);

revealElements.forEach((el) => {
  el.classList.add("reveal");
  observer.observe(el);
});

// =========================
// ACTIVE NAVIGATION
// =========================

const sections =
  document.querySelectorAll("section[id]");

const navItems =
  document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop =
      section.offsetTop - 150;

    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach((link) => {
    link.classList.remove("active-link");

    if (
      link.getAttribute("href") ===
      `#${current}`
    ) {
      link.classList.add("active-link");
    }
  });
});

// =========================
// SMOOTH LINK CLOSING
// =========================

document.querySelectorAll('a[href^="#"]')
.forEach((anchor) => {
  anchor.addEventListener("click", () => {
    navLinks.classList.remove("mobile-open");
  });
});
// =========================
// THEME TOGGLE
// =========================
const themeToggles = document.querySelectorAll('.theme-toggle');

const setTheme = (theme) => {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
};

themeToggles.forEach(toggle => {
  toggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  });
});

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
  if (!localStorage.getItem('theme')) {
    setTheme(e.matches ? 'dark' : 'light');
  }
});
