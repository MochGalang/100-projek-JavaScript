function konversiWaktu() {
    const totalDetik = parseInt(document.getElementById("detik").value);
    const hasil = document.getElementById("hasil");

    if (isNaN(totalDetik) || totalDetik < 0) {
        hasil.textContent = "Masukkan detik yang valid (>= 0)";
        return;
    }

    const jam = Math.floor(totalDetik / 3600);
    const sisaSetelahJam = totalDetik % 3600;
    const menit = Math.floor(sisaSetelahJam / 60);
    const detik = sisaSetelahJam % 60;

    const jamStr = String(jam).padStart(2, '0');
    const menitStr = String(menit).padStart(2, '0');
    const detikStr = String(detik).padStart(2, '0');

    hasil.textContent = `${jamStr}:${menitStr}:${detikStr}`;
}
