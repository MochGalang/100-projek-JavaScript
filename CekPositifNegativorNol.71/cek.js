function cekPositifNegatifNol() {
    let input = document.getElementById("inputAngka").value.trim();
    let angka = parseFloat(input);

    if (isNaN(angka)) {
        document.getElementById("hasil").textContent = "Masukkan angka yang valid!";
        return;
    }

    let hasil;
    if (angka > 0) {
        hasil = "Bilangan positif";
    } else if (angka < 0) {
        hasil = "Bilangan negatif";
    } else {
        hasil = "Bilangan nol";
    }

    document.getElementById("hasil").textContent = hasil;
}
