function triggerMagic() {
    // 1. Música (Si existe music.mp3)
    const music = document.getElementById('bg-music');
    music.play().catch(() => console.log("Música lista"));

    // 2. Acción épica para Jesús
    const title = document.getElementById('title');
    const msg = document.getElementById('message');
    
    // El grito de los Toros Negros personalizado
    title.textContent = "¡JESÚS, SUPERA TUS LÍMITES!";
    title.style.color = "#ff003c";
    title.style.textShadow = "0 0 15px #ff003c";
    
    msg.innerHTML = "<b>¡Hechizo de Unión Activado!</b><br>Como un trébol de cinco hojas, nuestra conexión no tiene límites. Eres mi capitán favorito.";

    // 3. Efectos visuales
    createParticles();
    document.body.style.backgroundColor = "#1a0005";
    setTimeout(() => { document.body.style.backgroundColor = "#050505"; }, 2000);
}

function createParticles() {
    const container = document.getElementById('particles-container');
    for (let i = 0; i < 60; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        const x = window.innerWidth / 2;
        const y = window.innerHeight / 2;
        p.style.left = x + 'px';
        p.style.top = y + 'px';
        
        const destX = (Math.random() - 0.5) * 800;
        const destY = (Math.random() - 0.5) * 800;
        
        container.appendChild(p);
        
        p.animate([
            { transform: 'translate(0, 0) scale(1)', opacity: 1 },
            { transform: `translate(${destX}px, ${destY}px) scale(0)`, opacity: 0 }
        ], {
            duration: 1500,
            easing: 'ease-out'
        }).onfinish = () => p.remove();
    }
}
