const input = document.getElementById("tebakan");
const tombol = document.getElementById("btn-tebak");
const hasil = document.getElementById("hasil");

const angkaBenar = Math.floor(Math.random() * 10) + 1;

tombol.addEventListener("click", () => {
  const tebakan = Number(input.value);

  if (tebakan === angkaBenar) {
    hasil.textContent = `Tebakanmu benar! Angkanya adalah ${angkaBenar}`;
  } else {
    hasil.textContent = `Salah! Coba lagi.`;
  }
});
