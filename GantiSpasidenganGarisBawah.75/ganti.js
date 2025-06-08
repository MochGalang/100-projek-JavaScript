function gantiSpasi() {
    const kalimat = document.getElementById("kalimat").value;
    const hasil = kalimat.replace(/ /g, "_");
    document.getElementById("hasil").textContent = hasil;
}
