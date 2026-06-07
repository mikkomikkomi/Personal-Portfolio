// This tells the browser to use the GSAP you installed via npm
import { gsap } from "gsap";

// Custom Crosshair Cursor Movement
const cursor = document.querySelector('.cursor-crosshair');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Modal Logic
window.openModal = function(imgSrc, title, desc) {
    document.getElementById("projectModal").style.display = "flex";
    document.getElementById("modalImg").src = imgSrc;
    document.getElementById("modalTitle").innerHTML = title;
    document.getElementById("modalDesc").innerHTML = desc;
}

window.closeModal = function() { 
    document.getElementById("projectModal").style.display = "none"; 
}

window.onclick = function(e) { 
    if (e.target.className == "modal") window.closeModal(); 
}

// GSAP Animations
window.onload = function() {
    gsap.fromTo(".animate-header", 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power2.out" }
    );
    gsap.fromTo(".animate-section, .game-card, .project-card, .skill-box", 
        { opacity: 0, scale: 0.9, y: 20 }, 
        { opacity: 1, scale: 1, y: 0, duration: 0.6, stagger: 0.05, ease: "back.out(1.2)", delay: 0.5 }
    );
};