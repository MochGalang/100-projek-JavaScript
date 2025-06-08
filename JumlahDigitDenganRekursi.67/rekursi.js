function jumlahDigit(angka) {
    angka = Math.abs(angka);
    if (angka < 10) {
        return 1;
    } else {
        return 1 + jumlahDigit(Math.floor(angka / 10));
    }
}

function prosesInput() {
    let input = document.getElementById("inputAngka").value.trim();

    if (!/^-?\d+$/.test(input)) {
        document.getElementById("hasil").textContent = "Masukkan bilangan bulat yang valid!";
        return;
    }

    let angka = parseInt(input);
    let hasil = jumlahDigit(angka);

    document.getElementById("hasil").textContent = `Jumlah digit dari ${angka} adalah: ${hasil}`;
}
