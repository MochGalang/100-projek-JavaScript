const btn = document.getElementById("btnCek");
const input = document.getElementById("angka");
const hasil = document.getElementById("hasil");

btn.addEventListener("click", () => {
  const angka = parseInt(input.value);

  if (isNaN(angka)) {
    hasil.textContent = "Masukkan angka yang valid!";
  } else if (angka % 2 === 0) {
    hasil.textContent = angka + " adalah GENAP";
  } else {
    hasil.textContent = angka + " adalah GANJIL";
  }
});
