const r = document.getElementById('jarii')
const t = document.getElementById('tingii')
const hitung =  document.getElementById('btn-hitung')
const luas = document.getElementById('txt-luas')
const volume = document.getElementById('txt-volume')

function hitungLuas(r, t) {
  return 2 * Math.PI * r * (r + t);
}

const hitungVolume = (r,t) => Math.PI * r * r * t;

hitung.addEventListener('click', function () {
  const nilaiR = parseFloat(r.value)
  const nilaiT = parseFloat(t.value)

  luas.textContent = hitungLuas(nilaiR, nilaiT).toFixed(2)
  volume.textContent = hitungVolume(nilaiR, nilaiT).toFixed(2)
})