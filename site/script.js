document.addEventListener('wheel', function(event) {
    event.preventDefault(); // Empêche le défilement par défaut

    const delta = event.deltaY; // Récupère la valeur de défilement
    const scrollAmount = delta > 0 ? 1 : -1; // Définit la direction

    window.scrollBy({
        top: scrollAmount * 100, // Ajuste cette valeur pour modifier la vitesse
        behavior: 'smooth' // Défilement fluide
    });
});