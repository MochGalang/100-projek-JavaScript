function hitungKata() {
  const teks = document.getElementById("kalimat").value.trim();

  if (!teks) {
    document.getElementById("hasil").textContent = "Masukkan kalimat dulu ya!";
    return;
  }

  // Pisah berdasarkan spasi dan hitung panjang array
  const kata = teks.split(/\s+/);
  const jumlah_kata = kata.length;

  document.getElementById("hasil").textContent = jumlah_kata;
}
