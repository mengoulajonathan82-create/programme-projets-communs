// MAIN.JS - Fonctions principales du site

document.addEventListener('DOMContentLoaded', function() {
    console.log('Site RS2-ISTC chargé avec succès !');
    
    // Gestion des filtres sur la page projets
    const filterTags = document.querySelectorAll('.tag[style*="cursor: pointer"]');
    const projetCards = document.querySelectorAll('.projet-card');
    
    if (filterTags.length > 0) {
        filterTags.forEach(tag => {
            tag.addEventListener('click', function() {
                const filter = this.textContent.trim();
                
                // Retirer la classe active de tous les filtres
                filterTags.forEach(t => t.style.background = '');
                
                // Ajouter la classe active au filtre cliqué
                this.style.background = 'var(--primary-dark)';
                
                // Filtrer les projets
                projetCards.forEach(card => {
                    if (filter === 'Tous') {
                        card.style.display = 'block';
                    } else {
                        const tags = card.querySelectorAll('.tag');
                        let found = false;
                        tags.forEach(t => {
                            if (t.textContent === filter) found = true;
                        });
                        card.style.display = found ? 'block' : 'none';
                    }
                });
            });
        });
    }
    
    // Animation des cartes au scroll
    const cards = document.querySelectorAll('.card, .projet-card, .membre-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease';
        observer.observe(card);
    });
});