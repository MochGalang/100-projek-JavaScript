const inputTeks = document.getElementById('teks');
const tombolHitung = document.getElementById('btn-hitung');
const hasil = document.getElementById('hasil');

tombolHitung.addEventListener('click', () => {
  const teks = inputTeks.value;

  const spasi = teks.match(/ /g);
  const jumlahSpasi = spasi ? spasi.length : 0;

  hasil.textContent = jumlahSpasi;
});
