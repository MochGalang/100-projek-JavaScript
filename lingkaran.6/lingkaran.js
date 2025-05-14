const jari = document.getElementById("jari")
const luas = document.querySelector('#txt-luas');
const keliling = document.querySelector('#txt-keliling');
const btnHitung = document.getElementById('btn-hitung');

const PHI = Math.PI

function hitungLuas (r){
  return PHI * r * r
}

function hitungKeliling (r){
  return 2 * PHI * r
}

btnHitung.addEventListener('click', () => {
  const r = parseFloat(jari.value);

  luas.textContent = hitungLuas(r).toFixed(2);
  keliling.textContent = hitungKeliling(r).toFixed(2);  
})