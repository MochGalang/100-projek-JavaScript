const sisi = document.getElementById('sisi');
const luas = document.querySelector('#txt-luas');
const keliling = document.querySelector('#txt-keliling');
const btnHitung = document.getElementById('btn-hitungnya');

function hitungLuas(s) {
  return s * s;
}

const hitungKeliling = (s) => 4 * s;

btnHitung.addEventListener('click', function() {
  luas.textContent = hitungLuas(parseInt(sisi.value));
  keliling.textContent = hitungKeliling(parseInt(sisi.value));
});
