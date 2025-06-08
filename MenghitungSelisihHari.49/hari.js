function hitungSelisih() {
  const tgl1 = new Date(document.getElementById("tanggal1").value);
  const tgl2 = new Date(document.getElementById("tanggal2").value);
  const hasil = document.getElementById("hasil");

  
  const selisihMs = Math.abs(tgl2 - tgl1);

  const selisihHari = selisihMs / (1000 * 60 * 60 * 24);

  hasil.textContent = `${selisihHari} hari`;
}
