const tanggal = document.getElementById("tanggal")
const btn = document.getElementById("btn-button")
const hasil = document.getElementById("hasil")

const namaHari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"]

btn.addEventListener("click", () => {
  const nilaiTanggal = tanggal.value;

  if (!nilaiTanggal) {
    hasil.textContent = "Silakan masukkan tanggal terlebih dahulu.";
    return;
  }

  const objTanggal = new Date(nilaiTanggal);
  const indexHari = objTanggal.getDay();
  const hari = namaHari[indexHari];

  hasil.textContent = `Hari dari tanggal tersebut adalah: ${hari}`;
})
