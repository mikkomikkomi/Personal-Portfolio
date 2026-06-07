# Personal Portfolio Website - Mikko Nazareno

Welcome to the repository for my personal portfolio website! I designed and built this site to act as a digital hub for my UI/UX designs, game development projects, and 2D art. 

You can view the live site here: **https://mikkomikkomi.github.io/website-portfolio/**

## Design Philosophy

As a Computer Science student and aspiring game developer, I wanted my portfolio to reflect my specific interests. The website is built with a "Video Game HUD / Terminal" aesthetic, featuring a dark mode color palette, monospace typography, and subtle CRT scanline overlays to create an immersive, game-like experience for the user.

## Key Features

I built this site from scratch using vanilla web technologies, focusing heavily on custom interactions and smooth animations:
* **Custom Image Gallery Modal:** A fully custom-coded modal that includes a drag-and-pan zoom feature, allowing users to closely inspect high-fidelity UI mockups and art.
* **Dynamic Category Filters:** A JavaScript-driven filtering system that smoothly fades non-relevant projects into the background.
* **Interactive 3D Cards:** Implemented `vanilla-tilt.js` combined with CSS `preserve-3d` to create a physical pop-out effect on the project and game cards when hovered.
* **Scroll & Mouse Reactivity:** Features a custom target-lock cursor, click shockwave ripples, and scroll-velocity distortion to make the site feel alive and highly responsive.
* **GSAP Animations:** Utilized the GSAP library and ScrollTrigger for smooth, staggered element loading and glitch-text decryption effects.

## Tech Stack

* **Structure:** HTML5
* **Styling:** CSS3 (Custom variables, CSS Grid/Flexbox, Keyframe animations)
* **Logic & Interactivity:** Vanilla JavaScript
* **Animation Libraries:** GSAP (GreenSock), Vanilla-Tilt.js

## How to Run Locally

If you want to view the code locally on your machine:
1. Clone this repository: `git clone https://github.com/mikkomikkomi/[your-repo-name].git`
2. Open the project folder in VS Code or your preferred editor.
3. Open `index.html` in any modern web browser (or use the Live Server extension in VS Code for hot-reloading). No `npm install` or build steps required.
