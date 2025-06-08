const input = document.getElementById("angka");
const tombol = document.getElementById("cekBtn");
const hasil = document.getElementById("hasil");

const cekKelipatan5 = (angka) => 
  angka % 5 === 0 ? "Ya, kelipatan 5" : "Bukan kelipatan 5";

tombol.addEventListener("click", () => {
  const angka = parseInt(input.value);
  hasil.textContent = isNaN(angka) 
    ? "Masukkan angka yang valid" 
    : cekKelipatan5(angka);
});
