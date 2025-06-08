const inputKalimat = document.getElementById("kalimat");
const tombolUbah = document.getElementById("ubahBtn");
const hasil = document.getElementById("hasil");

tombolUbah.addEventListener("click", () => {
  const kalimat = inputKalimat.value;
  hasil.textContent = kalimat.toLowerCase();
});
