function triggerMagic() {
    // 1. Reproducir música
    const music = document.getElementById('bg-music');
    music.play().catch(e => console.log("La música requiere interacción previa"));

    // 2. Cambiar mensaje para Jesús
    const title = document.getElementById('title');
    const msg = document.getElementById('message');
    
    title.textContent = "HECHIZO: AMOR ETERNO";
    title.style.color = "#ff003c";
    title.style.textShadow = "0 0 10px #ff003c";
    
    msg.innerHTML = "<b>Jesús</b>, eres el capitán de mi corazón. <br> ¡Gracias por ser mi caballero mágico favorito!";

    // 3. Crear partículas de antimagia
    createParticles();
}

function createParticles() {
    const container = document.getElementById('particles-container');
    for (let i = 0; i < 50; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        
        // Posición inicial (centro)
        const x = window.innerWidth / 2;
        const y = window.innerHeight / 2;
        
        p.style.left = x + 'px';
        p.style.top = y + 'px';
        
        // Destino aleatorio
        const destX = (Math.random() - 0.5) * 1000;
        const destY = (Math.random() - 0.5) * 1000;
        
        container.appendChild(p);
        
        const animation = p.animate([
            { transform: 'translate(0, 0) scale(1)', opacity: 1 },
            { transform: `translate(${destX}px, ${destY}px) scale(0)`, opacity: 0 }
        ], {
            duration: 1000 + Math.random() * 1000,
            easing: 'ease-out'
        });
        
        animation.onfinish = () => p.remove();
    }
}
