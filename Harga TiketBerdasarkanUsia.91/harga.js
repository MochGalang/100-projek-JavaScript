function hitungHarga() {
  const usiaInput = document.getElementById("usia").value.trim();
  const hasil = document.getElementById("hasil");

  const usia = parseInt(usiaInput);

  if (isNaN(usia) || usia < 0) {
    hasil.textContent = "Masukkan usia yang valid ya!";
    return;
  }

  let harga;
  if (usia < 12) {
    harga = 20000;
  } else if (usia >= 12 && usia <= 17) {
    harga = 30000;
  } else if (usia >= 18 && usia <= 59) {
    harga = 50000;
  } else {
    harga = 25000;
  }

  // Format angka dengan ribuan pake titik (ID style)
  const hargaFormatted = harga.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  hasil.textContent = `Harga tiket untuk usia ${usia} tahun adalah Rp ${hargaFormatted}.`;
}
