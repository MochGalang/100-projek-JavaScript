const inputDetik = document.getElementById("detik");
const tombolMulai = document.getElementById("mulai");
const tampil = document.getElementById("tampil");

let countdown;

tombolMulai.addEventListener("click", () => {
  let waktu = parseInt(inputDetik.value);
  clearInterval(countdown); // reset jika sebelumnya sudah jalan

  if (isNaN(waktu) || waktu <= 0) {
    tampil.textContent = "Masukkan angka lebih dari 0";
    return;
  }

  tampil.textContent = `Sisa waktu: ${waktu} detik`;

  countdown = setInterval(() => {
    waktu--;
    tampil.textContent = `Sisa waktu: ${waktu} detik`;

    if (waktu <= 0) {
      clearInterval(countdown);
      tampil.textContent = "Waktu habis!";
    }
  }, 1000);
});
