const sisiA =  document.getElementById('a')
const sisiB =  document.getElementById('b')
const sisiC =  document.getElementById('c')
const alas =  document.getElementById('alas')
const tinggi =  document.getElementById('tinggi')
const btn =  document.getElementById('btn-hitung')
const luas =  document.getElementById('txt-luas')
const keliling =  document.getElementById('txt-keliling')

function hitungLuas (a,t){
  return 1/2 * a * t
}

function hitungKeliling (sa,sb,sc){
  return sa + sb + sc
}

btn.addEventListener('click', () => {
  const a = parseFloat(alas.value);
  const t = parseFloat(tinggi.value);
  const sa = parseFloat(sisiA.value);
  const sb = parseFloat(sisiB.value);
  const sc = parseFloat(sisiC.value);

  luas.textContent = hitungLuas(a,t);
  keliling.textContent = hitungKeliling(sa,sb,sc);
})