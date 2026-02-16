function changeSquad(squad) {
    const root = document.documentElement;
    const msg = document.getElementById('status-msg');

    if (squad === 'black-bulls') {
        root.style.setProperty('--accent-color', '#e74c3c'); // Rojo
        msg.textContent = "¡Has seleccionado a los Toros Negros! Supera tus límites.";
    } else if (squad === 'golden-dawn') {
        root.style.setProperty('--accent-color', '#f1c40f'); // Dorado
        msg.textContent = "Has seleccionado al Amanecer Dorado. La élite del Reino del Trébol.";
    }
}
