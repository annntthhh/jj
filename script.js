function triggerMagic() {
    const music = document.getElementById('bg-music');
    music.play().catch(() => console.log("Música activada manualmente"));

    const title = document.getElementById('title');
    const msg = document.getElementById('message');
    
    // Grito de guerra
    title.textContent = "¡JESÚS, SUPERA TUS LÍMITES!";
    title.style.color = "#ff003c";
    title.style.textShadow = "0 0 20px #ff003c";
    
    msg.innerHTML = "<b>¡Unión de Almas Activada!</b><br>En este grimorio se escribe nuestra historia. ¡Eres el caballero más fuerte que conozco!";

    createParticles();
    
    // Sacudida épica del grimorio
    const container = document.querySelector('.grimorio-container');
    container.style.animation = "none"; // Reset
    void container.offsetWidth; // Trigger reflow
    container.style.animation = "shake 0.5s ease-in-out";
    
    setTimeout(() => { 
        container.style.animation = "aura 3s infinite ease-in-out"; 
    }, 500);
}

function createParticles() {
    const container = document.getElementById('particles-container');
    for (let i = 0; i < 70; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        
        // Las partículas salen del centro
        const x = window.innerWidth / 2;
        const y = window.innerHeight / 2;
        p.style.left = x + 'px';
        p.style.top = y + 'px';
        
        const destX = (Math.random() - 0.5) * 800;
        const destY = (Math.random() - 0.5) * 800;
        
        container.appendChild(p);
        
        p.animate([
            { transform: 'translate(0, 0) scale(1.5)', opacity: 1 },
            { transform: `translate(${destX}px, ${destY}px) scale(0)`, opacity: 0 }
        ], {
            duration: 1200 + Math.random() * 800,
            easing: 'ease-out'
        }).onfinish = () => p.remove();
    }
}
