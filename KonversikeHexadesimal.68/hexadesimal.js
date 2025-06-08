function tampilkanHex() {
    let input = document.getElementById("inputAngka").value.trim();

    if (!/^-?\d+$/.test(input)) {
        document.getElementById("hasil").textContent = "Masukkan bilangan bulat yang valid!";
        return;
    }

    let angka = parseInt(input);
    let hexa = angka.toString(16);

    document.getElementById("hasil").textContent = `Angka ${angka} dalam format heksadesimal adalah: 0x${hexa.toUpperCase()}`;
}
