function adalahBilanganSempurna(n) {
    if (n <= 0) return false;

    let jumlahPembagi = 0;
    for (let i = 1; i < n; i++) {
        if (n % i === 0) {
            jumlahPembagi += i;
        }
    }

    return jumlahPembagi === n;
}

function cekBilanganSempurna() {
    let input = document.getElementById("inputAngka").value.trim();

    if (!/^\d+$/.test(input)) {
        document.getElementById("hasil").textContent = "Masukkan bilangan positif yang valid!";
        return;
    }

    let angka = parseInt(input);
    let hasil = adalahBilanganSempurna(angka);

    document.getElementById("hasil").textContent = hasil
        ? `${angka} adalah bilangan sempurna.`
        : `${angka} bukan bilangan sempurna.`;
}
