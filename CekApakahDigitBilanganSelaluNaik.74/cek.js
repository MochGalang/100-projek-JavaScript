function cekDigitNaik() {
    const angka = document.getElementById("angka").value;
    const hasil = document.getElementById("hasil");

    if (angka.length < 2) {
        hasil.textContent = "Masukkan angka minimal 2 digit.";
        return;
    }

    let isNaik = true;
    for (let i = 0; i < angka.length - 1; i++) {
        if (angka[i] >= angka[i + 1]) {
            isNaik = false;
            break;
        }
    }

    if (isNaik) {
        hasil.textContent = "Digit selalu naik (ascending).";
    } else {
        hasil.textContent = "Digit tidak naik.";
    }
}
