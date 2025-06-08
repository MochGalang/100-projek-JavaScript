function konversiRupiahKeYen(rupiah) {
  const kursRupiahKeYen = 0.0082;
  return rupiah * kursRupiahKeYen;
}

document.getElementById('convertBtn').addEventListener('click', function() {
  const inputRupiah = document.getElementById('inputRupiah').value;
  const rupiah = parseFloat(inputRupiah);

  if (isNaN(rupiah) || rupiah < 0) {
    document.getElementById('hasil').textContent = 'Tolong masukkan jumlah Rupiah yang valid (>= 0).';
    return;
  }

  const yen = konversiRupiahKeYen(rupiah);
  document.getElementById('hasil').textContent = `${rupiah} Rupiah = ¥${yen.toFixed(2)} Yen`;
});
