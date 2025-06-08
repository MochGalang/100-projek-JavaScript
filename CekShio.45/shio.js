const tahun = document.getElementById("tahun");
const tombol = document.getElementById("cekShio");
const hasil = document.getElementById("hasilShio");

const daftarShio = [
  "Monyet",
  "Ayam",
  "Anjing",
  "Babi",
  "Tikus",
  "Kerbau",
  "Macan",
  "Kelinci",
  "Naga",
  "Ular",
  "Kuda",
  "Kambing"
];

tombol.addEventListener("click", () => {
  const inputTahun = parseInt(tahun.value);
  const index = inputTahun % 12;
  const shio = daftarShio[index];
  hasil.textContent = shio;
});
