// Navigation logic
function showSection(sectionId) {
    const sections = document.getElementsByClassName('section');
    const buttons = document.getElementsByClassName('nav-btn');
    for (let section of sections) section.classList.remove('active');
    for (let button of buttons) button.classList.remove('active');
    document.getElementById(sectionId).classList.add('active');
    document.querySelector(`.nav-btn[onclick="showSection('${sectionId}')"]`).classList.add('active');
}

// Initial load
document.addEventListener('DOMContentLoaded', () => {
    showSection('home');
});

// Form submission logic
document.getElementById('carbon-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const transport = parseFloat(document.getElementById('transport').value) || 0;
    const energy = parseFloat(document.getElementById('energy').value) || 0;
    const diet = document.getElementById('diet').value;

    // Simplified carbon calculation (example factors)
    const transportEmission = transport * 0.4; // 0.4 kg CO₂ per mile (approx.)
    const energyEmission = energy * 0.0023; // 2.3 kg CO₂ per kWh (approx.)
    const dietEmission = diet === 'meat' ? 1.0 : diet === 'vegetarian' ? 0.7 : 0.5; // tons CO₂/year

    const totalFootprint = (transportEmission / 1000) + (energyEmission / 1000) + dietEmission; // Convert kg to tons

    document.getElementById('carbon-value').textContent = totalFootprint.toFixed(1);
    document.getElementById('result').textContent = `Your estimated carbon footprint is ${totalFootprint.toFixed(1)} tons CO₂/year.`;
    showSection('home');
});