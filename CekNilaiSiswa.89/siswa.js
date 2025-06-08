const nilai_siswa = {
  "Frans": 85,
  "Syafiq": 90,
  "Alif": 78,
  "Faris": 88,
  "Cahyo": 92
};

function cekNilai() {
  const nama = document.getElementById("nama").value.trim();
  const hasil = document.getElementById("hasil");

  if (!nama) {
    hasil.textContent = "Masukkan nama siswa dulu ya!";
    return;
  }

  if (nama in nilai_siswa) {
    hasil.textContent = `Nilai ${nama} adalah ${nilai_siswa[nama]}`;
  } else {
    hasil.textContent = `Maaf, ${nama} tidak ditemukan dalam daftar.`;
  }
}
