// The Header Store....
const header = document.getElementById('header');
let headerHeight = header.offsetHeight;

// The Hamburger Store....
const hamburger = document.getElementById('hamburger');
const boxMenu = document.getElementById('boxMenu');
const overlay = document.getElementById('overlay');

// The Typing Effect Store....
const texts = [
  "We Fix Leaks Fast",
  "Reliable Plumbing You Can Trust",
  "Emergency Service Anytime",
  "Professional Plumbing Solutions"
];

const textElement = document.getElementById('text-title');

let textIndex = 0;   // Which sentence
let charIndex = 0;   // Character position
let isDeleting = false;


// Sticky Header Scroll Effect
window.addEventListener('scroll', () => {
    let scrollY = window.pageYOffset;

    if (scrollY > headerHeight) {
        header.classList.add('sticky');

        setTimeout(() => {
            header.classList.add('show');
        }, 100);
    } else {
        header.classList.remove('sticky');
        header.classList.remove('show');
    }
});


// Hamburger Menu Toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    overlay.classList.toggle('active');
    boxMenu.classList.toggle('active');
});


// Close Menu When Clicking Outside
window.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !boxMenu.contains(e.target)) {
        hamburger.classList.remove('active');
        overlay.classList.remove('active');
        boxMenu.classList.remove('active');
    }
});


// Typing Effect (FIXED & LOOPING)
function typeEffect() {
    let currentText = texts[textIndex];

    if (!isDeleting) {
        // Typing
        textElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(typeEffect, 2000); // Pause before deleting
            return;
        }
    } else {
        // Deleting
        textElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            textIndex++;

            if (textIndex === texts.length) {
                textIndex = 0; // Loop back
            }
        }
    }

    const speed = isDeleting ? 50 : 100;
    setTimeout(typeEffect, speed);
}

// Start Typing Effect
typeEffect();