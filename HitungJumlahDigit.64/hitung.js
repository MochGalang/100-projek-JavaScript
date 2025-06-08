function hitungDigit() {
    let angka = document.getElementById("inputAngka").value.trim();

    if (angka.startsWith("-")) {
        angka = angka.substring(1);
    }

    if (!/^\d+$/.test(angka)) {
        document.getElementById("hasil").textContent = "Masukkan bilangan bulat yang valid!";
        return;
    }

    let jumlahDigit = angka.length;

    document.getElementById("hasil").textContent = `Jumlah digit dalam bilangan adalah: ${jumlahDigit}`;
}
