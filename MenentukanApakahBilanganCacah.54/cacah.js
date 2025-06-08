const angka = document.getElementById("angka");
const tombol = document.getElementById("cekBtn");
const hasil = document.getElementById("hasil");

function isBilanganCacah(n) {
  return Number.isInteger(n) && n >= 0;
}

tombol.addEventListener("click", () => {
  const input = parseFloat(angka.value);
  hasil.textContent = isBilanganCacah(input)
    ? `${input} adalah bilangan cacah`
    : `${input} bukan bilangan cacah`;
});
