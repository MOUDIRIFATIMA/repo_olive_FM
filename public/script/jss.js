// jss.js

// Typing animation
const bienvenue = document.getElementById("bienvenue");
const etapes = document.getElementById("etapes");

function typeWriter(textElement, text, i, callback) {
    if (i < text.length) {
        textElement.innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

        setTimeout(function() {
            typeWriter(textElement, text, i + 1, callback);
        }, 50); // Increased speed of typing
    } else {
        setTimeout(callback, 300); // Reduced delay before next text
    }
}

function startAnimation() {
    bienvenue.style.visibility = "visible";
    typeWriter(bienvenue, bienvenue.textContent, 0, function() {
        etapes.style.visibility = "visible";
        typeWriter(etapes, etapes.textContent, 0, function() {
            setTimeout(function() {
                bienvenue.style.visibility = "hidden";
                etapes.style.visibility = "hidden";
                setTimeout(startAnimation, 300); // Reduced delay before restarting the animation
            }, 1000); // Reduced delay before both texts disappear
        });
    });
}

document.addEventListener("DOMContentLoaded", function() {
    bienvenue.style.visibility = "hidden";
    etapes.style.visibility = "hidden";
    startAnimation();
});

// Carousel functionality
let currentIndex = 0;

function moveCarousel(direction) {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    const itemsToShow = 3; // Nombre d'éléments à afficher en même temps

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalItems - itemsToShow; // Revenir à la fin
    } else if (currentIndex >= totalItems) {
        currentIndex = 0; // Revenir au début
    }

    const offset = -currentIndex * (100 / itemsToShow); // Calculer le décalage
    carousel.style.transform = `translateX(${offset}%)`;
}

// Initialize carousel
document.addEventListener('DOMContentLoaded', () => {
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');

    prevButton.addEventListener('click', () => moveCarousel(-1));
    nextButton.addEventListener('click', () => moveCarousel(1));
});
