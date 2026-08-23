# Mohammad Anas - Java Backend Developer Portfolio

Welcome to my personal portfolio repository! This is a modern, fully responsive, and highly interactive single-page application built to showcase my Java backend engineering work.

## 🚀 Live Demo
*https://portfolio-1-phi-beryl.vercel.app/*

## ✨ Features
- **Intro Splash Screen:** A one-second name card on load that fades away to reveal the page. Deliberately hardcoded to white/black so it stays consistent regardless of the active theme.
- **Dark & Light Mode:** Seamless theme toggling with local storage persistence, plus an inline head script that applies the stored theme before first paint to avoid a flash of the wrong colours.
- **Live Availability Indicator:** A pulsing status dot on the hero badge, built as a pure CSS `::before` animation.
- **Responsive Mobile Navigation:** A clean, accessible hamburger menu for smaller viewports.
- **Scroll Reveal Animations:** IntersectionObserver-driven micro-animations that smoothly fade content in as you scroll.
- **Active Navigation Highlights:** Highlights the current section you are reading in the top navigation bar.
- **Consistent Project Previews:** Project images sit in fixed 16:9 panels using `aspect-ratio` and `object-fit: contain`, so screenshots and architecture diagrams line up without cropping or distortion.
- **No Frameworks, No Build Step:** Built entirely with pure HTML5, CSS3, and Vanilla JavaScript, ensuring lightning-fast load times. The only external asset is the Inter font from Google Fonts.
- **Reduced Motion Support:** Splash fade and the status dot animation both respect `prefers-reduced-motion`.

## 📁 Sections
Hero · About · Projects · Skills · Education · Certifications · Experience · Contact

## 💼 Featured Projects
- **Saga Fulfillment Engine** — Distributed order-fulfillment system across 6 microservices, using the Saga pattern for multi-step transactions with automatic rollback. Java, Spring Boot, Apache Kafka, Resilience4j, Docker.
- **Task Flow** — Full-stack collaboration platform with project management, role-based permissions, and real-time analytics.
- **SQL-Editor** — Web-based SQL environment with query execution, schema exploration, and execution history.

## 🛠️ Tech Stack
- **HTML5:** Semantic structure and accessibility.
- **CSS3:** Custom design system using CSS variables, Flexbox, Grid, and keyframe animations.
- **JavaScript (ES6+):** DOM manipulation, IntersectionObserver API, and `localStorage` state management.

## 🏃‍♂️ Running Locally

Since this is a static website, you don't need any complex build tools to run it.

1. Clone the repository:
   ```bash
   git clone https://github.com/MohammadAnas-07/portfolio-1.git
   ```
2. Navigate to the project directory:
   ```bash
   cd portfolio-1
   ```
3. Open `index.html` directly in your web browser.
   *(Alternatively, use an extension like VS Code Live Server for hot reloading during development).*

## 📬 Contact
- **Email:** ansarianas53665@gmail.com
- **LinkedIn:** [Mohammad Anas](http://linkedin.com/in/mohammad-anas-790556236)
- **GitHub:** [@MohammadAnas-07](https://github.com/MohammadAnas-07)

---
*Designed & built with ♥ by Mohammad Anas.*
