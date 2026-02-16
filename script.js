function triggerMagic() {
    // Cambiar el mensaje con un efecto de escritura
    const msg = document.getElementById('message');
    const title = document.getElementById('title');
    
    document.body.style.backgroundColor = "#1a0005";
    
    title.textContent = "¡Vínculo de Sangre Activado!";
    title.style.color = "#ff003c";
    
    msg.textContent = "Para el caballero más fuerte: Tu magia es única y eres mi persona favorita en todo el Reino del Trébol.";
    
    // Pequeño efecto de vibración
    const box = document.querySelector('.grimorio-container');
    box.style.animation = "shake 0.5s";
    setTimeout(() => { box.style.animation = "aura 3s infinite"; }, 500);
}

// Añadir el efecto de vibración en CSS dinámicamente
const style = document.createElement('style');
style.innerHTML = `
    @keyframes shake {
        0% { transform: translate(1px, 1px) rotate(0deg); }
        20% { transform: translate(-3px, 0px) rotate(-1deg); }
        40% { transform: translate(3px, 2px) rotate(1deg); }
        100% { transform: translate(0px, 0px) rotate(0deg); }
    }
`;
document.head.appendChild(style);
