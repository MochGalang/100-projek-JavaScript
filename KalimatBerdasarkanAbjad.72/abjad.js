function urutkanKata() {
    let kalimat = document.getElementById("inputKalimat").value.trim();
    if (kalimat === "") {
        document.getElementById("hasil").textContent = "Masukkan kalimat dulu ya!";
        return;
    }
    let kataList = kalimat.split(/\s+/);
    kataList.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
    document.getElementById("hasil").textContent = "Kata-kata terurut: " + kataList.join(' ');
}
