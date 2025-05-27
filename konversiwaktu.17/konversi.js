const inputDetik = document.getElementById("inputDetik");
const btn = document.querySelector(".btn-konversi"); // pakai class
const output = document.getElementById("output");

function konversiWaktu(detik) {
  const jam = Math.floor(detik / 3600);
  const sisaMenit = Math.floor((detik % 3600) / 60);
  const sisaDetik = detik % 60;

  return `${jam} jam, ${sisaMenit} menit, ${sisaDetik} detik`;
}

btn.addEventListener("click", function() {
  const detik = parseInt(inputDetik.value);

    const hasil = konversiWaktu(detik);
    output.textContent = `Hasil konversi: ${hasil}`;
});
