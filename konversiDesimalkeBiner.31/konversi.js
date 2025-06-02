const inputDesimal = document.getElementById('desimal');
const tombolKonversi = document.getElementById('btn-konversi');
const hasil = document.getElementById('hasil');

tombolKonversi.addEventListener('click', () => {
  const desimal = parseInt(inputDesimal.value);

  if (isNaN(desimal) || desimal < 0) {
    hasil.textContent = 'Masukkan angka desimal valid (>= 0)';
    return;
  }

  const biner = desimal.toString(2);

  hasil.textContent = biner;
});
