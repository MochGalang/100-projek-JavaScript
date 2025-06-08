const input = document.getElementById("input");
const tombol = document.getElementById("btn-urutkan");
const hasil = document.getElementById("hasil");

tombol.addEventListener("click", () => {
  const angka = input.value
    .split(',')
    .map(a => parseFloat(a.trim()))
    .sort((a, b) => a - b);

  hasil.textContent = angka.join(', ');
});
