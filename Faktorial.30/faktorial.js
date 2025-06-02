function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

function hitungFaktorial() {
  const input = document.getElementById('num');
  const hasil = document.getElementById('hasil');
  const angka = parseInt(input.value);

  if (isNaN(angka) || angka < 0) {
    hasil.textContent = 'Masukkan angka bulat >= 0!';
    return;
  }

  const faktorial = factorial(angka);
  hasil.textContent = `Faktorial dari ${angka} adalah ${faktorial}`;
}
