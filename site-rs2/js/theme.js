// theme.js - Gestionnaire de thème clair/sombre

(function() {
    // Attendre que le DOM soit chargé
    document.addEventListener('DOMContentLoaded', function() {
        
        // Créer le bouton s'il n'existe pas
        createThemeButton();
        
        // Récupérer les éléments
        const themeToggle = document.getElementById('theme-toggle');
        const themeIcon = themeToggle ? themeToggle.querySelector('i') : null;
        
        if (!themeToggle) {
            console.log('Bouton de thème non trouvé');
            return;
        }
        
        // Vérifier le thème sauvegardé
        const savedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        console.log('Thème sauvegardé:', savedTheme);
        console.log('Préférence système:', systemPrefersDark ? 'sombre' : 'clair');
        
        // Appliquer le thème initial
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-mode');
            if (themeIcon) {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
            }
            console.log('Mode sombre activé (sauvegardé)');
        } else if (savedTheme === 'light') {
            document.body.classList.remove('dark-mode');
            if (themeIcon) {
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
            }
            console.log('Mode clair activé (sauvegardé)');
        } else {
            // Pas de préférence sauvegardée, utiliser celle du système
            if (systemPrefersDark) {
                document.body.classList.add('dark-mode');
                if (themeIcon) {
                    themeIcon.classList.remove('fa-moon');
                    themeIcon.classList.add('fa-sun');
                }
                console.log('Mode sombre activé (système)');
            } else {
                document.body.classList.remove('dark-mode');
                if (themeIcon) {
                    themeIcon.classList.remove('fa-sun');
                    themeIcon.classList.add('fa-moon');
                }
                console.log('Mode clair activé (système)');
            }
        }
        
        // Ajouter l'événement au clic
        themeToggle.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Bouton cliqué');
            
            // Basculer la classe
            document.body.classList.toggle('dark-mode');
            
            // Changer l'icône
            if (document.body.classList.contains('dark-mode')) {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
                localStorage.setItem('theme', 'dark');
                console.log('Mode sombre activé');
            } else {
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
                localStorage.setItem('theme', 'light');
                console.log('Mode clair activé');
            }
        });
    });
    
    // Fonction pour créer le bouton si nécessaire
    function createThemeButton() {
        const navMenu = document.querySelector('.nav-menu');
        if (!navMenu) return;
        
        // Vérifier si le bouton existe déjà
        if (document.getElementById('theme-toggle-container')) return;
        
        // Créer le conteneur
        const container = document.createElement('li');
        container.id = 'theme-toggle-container';
        container.className = 'theme-toggle-container';
        
        // Créer le bouton
        const button = document.createElement('button');
        button.id = 'theme-toggle';
        button.className = 'theme-toggle';
        button.setAttribute('aria-label', 'Changer le mode sombre/clair');
        
        // Créer l'icône
        const icon = document.createElement('i');
        icon.className = 'fas fa-moon';
        
        button.appendChild(icon);
        container.appendChild(button);
        navMenu.appendChild(container);
        
        console.log('Bouton de thème créé automatiquement');
    }
})();