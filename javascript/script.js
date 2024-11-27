import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox.css";


document.addEventListener('DOMContentLoaded', () => {
    // Menu mobile
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('active');
        burger.classList.toggle('active');
        navLinks.forEach((link, index) => {
            link.style.animation = link.style.animation
                ? ''
                : `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        });
    });

    const dropdowns = document.querySelectorAll('.dropdown');
    if (window.matchMedia("(min-width: 769px)").matches) {
        dropdowns.forEach(dropdown => {
            dropdown.addEventListener('mouseenter', () => dropdown.classList.add('active'));
            dropdown.addEventListener('mouseleave', () => dropdown.classList.remove('active'));
        });
    } else {
        dropdowns.forEach(dropdown => {
            const trigger = dropdown.querySelector('.dropdown-trigger');
            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                dropdown.classList.toggle('active');
            });
        });
    }

    // Carrossel
    const slides = document.querySelectorAll('.carousel-item');
    const carouselInner = document.querySelector('.carousel-inner');
    const nextButton = document.querySelector('.carousel-control next');
    const prevButton = document.querySelector('.carousel-control prev');
    let currentIndex = 0;

    function updateCarousel() {
        const offset = -currentIndex * 100;
        carouselInner.style.transform = `translateX(${offset}%)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateCarousel();
    }

    // Registra eventos nos botões
    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    // Inicializa o carrossel
    updateCarousel();
});

Fancybox.bind("[data-fancybox]", {
    // Custom options for all galleries
  });
  
  Fancybox.bind('[data-fancybox="gallery-a"]', {
    // Custom options for the first gallery
  });
  
  Fancybox.bind('[data-fancybox="gallery-b"]', {
    // Custom options for the second gallery
  });git --version;