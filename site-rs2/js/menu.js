// ===== MENU.JS - GESTION DU MENU MOBILE =====

document.addEventListener('DOMContentLoaded', function() {
    // Éléments du menu
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const dropdowns = document.querySelectorAll('.dropdown');
    
    // Toggle menu mobile
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Changer l'icône du menu
            if (navMenu.classList.contains('active')) {
                menuToggle.innerHTML = '✕';
            } else {
                menuToggle.innerHTML = '☰';
            }
        });
    }
    
    // Gestion des dropdowns sur mobile
    if (window.innerWidth <= 640) {
        dropdowns.forEach(dropdown => {
            const link = dropdown.querySelector('a');
            
            link.addEventListener('click', function(e) {
                e.preventDefault();
                dropdown.classList.toggle('active');
            });
        });
    }
    
    // Fermer le menu quand on clique sur un lien
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 640) {
                navMenu.classList.remove('active');
                menuToggle.innerHTML = '☰';
            }
        });
    });
    
    // Fermer le menu quand on clique en dehors
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 640) {
            if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
                navMenu.classList.remove('active');
                menuToggle.innerHTML = '☰';
            }
        }
    });
    
    // Highlight du lien actif
    const currentLocation = window.location.pathname;
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (currentLocation.includes(linkPath) && linkPath !== '#') {
            link.classList.add('active');
        }
    });
});