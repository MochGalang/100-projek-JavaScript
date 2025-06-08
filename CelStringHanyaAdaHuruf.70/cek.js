function cekCumaHuruf() {
    let input = document.getElementById("inputString").value.trim();

    let cumaHuruf = /^[A-Za-z]+$/.test(input);

    document.getElementById("hasil").textContent = cumaHuruf
        ? "String hanya mengandung huruf."
        : "String mengandung karakter selain huruf.";
}
