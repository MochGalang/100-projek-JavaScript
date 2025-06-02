function rollDice() {
    const faces = ['⚀ (1)', '⚁ (2)', '⚂ (3)', '⚃ (4)', '⚄ (5)', '⚅ (6)'];
    const randomFace = faces[Math.floor(Math.random() * 6)];
    document.getElementById("hasil").textContent = "Hasil: " + randomFace;
}