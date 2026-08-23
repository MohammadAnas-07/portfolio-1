# Mohammad Anas — Java Backend Developer Portfolio

Personal portfolio site built to showcase my Java backend work.

## Live Demo
https://portfolio-1-phi-beryl.vercel.app/

## Features
- **Intro splash screen** — a one-second name card on load that fades away to reveal the page. Colors are hardcoded to white/black so it stays consistent regardless of the active theme.
- **Dark and light mode** — the choice is saved in local storage, with an inline head script that applies it before first paint so there's no flash of the wrong colors.
- **Live availability indicator** — a pulsing status dot on the hero badge, built with a pure CSS `::before` animation.
- **Mobile navigation** — a hamburger menu for smaller screens.
- **Scroll reveal animations** — content fades in as you scroll, using IntersectionObserver.
- **Active nav highlights** — the nav bar highlights whichever section you're currently viewing.
- **Consistent project previews** — images sit in fixed 16:9 panels using `aspect-ratio` and `object-fit: contain`, so screenshots and architecture diagrams line up without cropping.
- **No frameworks, no build step** — pure HTML5, CSS3, and vanilla JavaScript. The only external asset is the Inter font from Google Fonts.
- **Reduced motion support** — the splash fade and the status dot animation both respect `prefers-reduced-motion`.

## Sections
Hero · About · Projects · Skills · Education · Contact

## Featured Projects
- **Saga Fulfillment Engine** — distributed order-fulfillment system across 6 microservices, using the Saga pattern for multi-step transactions with automatic rollback. Java, Spring Boot, Apache Kafka, Resilience4j, Docker.
- **Task Flow** — full-stack collaboration platform with project management, role-based permissions, and real-time analytics.
- **SQL-Editor** — web-based SQL environment with query execution, schema exploration, and execution history.

## Tech Stack
- **HTML5** — semantic structure.
- **CSS3** — CSS variables, Flexbox, Grid, keyframe animations.
- **JavaScript (ES6+)** — DOM manipulation, IntersectionObserver, localStorage.

## Running Locally

It's a static site, so no build tools needed.

1. Clone the repo:
```bash
   git clone https://github.com/MohammadAnas-07/portfolio-1.git
```
2. Move into the folder:
```bash
   cd portfolio-1
```
3. Open `index.html` in your browser. Or use VS Code's Live Server extension if you want hot reload while editing.

## Contact
- **Email:** ansarianas53665@gmail.com
- **LinkedIn:** [Mohammad Anas](http://linkedin.com/in/mohammad-anas-790556236)
- **GitHub:** [@MohammadAnas-07](https://github.com/MohammadAnas-07)

---
Built by Mohammad Anas.~