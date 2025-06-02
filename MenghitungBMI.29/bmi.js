const beratInput = document.getElementById('berat');
const tinggiInput = document.getElementById('tinggi');
const tombolHitung = document.getElementById('btn-hitung');
const hasil = document.getElementById('hasil');
const keterangan = document.getElementById('keterangan');

const kategoriBMI = [
  { batasAtas: 18.5, status: 'Kurus' },
  { batasAtas: 25, status: 'Normal' },
  { batasAtas: 30, status: 'Kelebihan Berat Badan' },
  { batasAtas: Infinity, status: 'Obesitas' }
];

tombolHitung.addEventListener('click', () => {
  const berat = parseFloat(beratInput.value);
  const tinggiCm = parseFloat(tinggiInput.value);

  if (isNaN(berat) || isNaN(tinggiCm) || berat <= 0 || tinggiCm <= 0) {
    hasil.textContent = '-';
    keterangan.textContent = 'Masukkan berat dan tinggi yang valid!';
    return;
  }

  const tinggiM = tinggiCm / 100;
  const bmi = berat / (tinggiM * tinggiM);
  const bmiRounded = bmi.toFixed(2);

  hasil.textContent = bmiRounded;

  const kategori = kategoriBMI.find(k => bmi < k.batasAtas);

  keterangan.textContent = kategori.status;
});
