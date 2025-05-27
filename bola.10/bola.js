const jari = document.getElementById('jari')
const btn = document.getElementById("btn-hitung")
const luas = document.getElementById("txt-luas")
const volume = document.getElementById("txt-volume")

const PHI = Math.PI

function hitungLuas (r){
  return 4 * PHI * r **2
}

function hitungVolume (r){
  return 4/3 * PHI * r **3
}

btn.addEventListener('click', () => {
  const r = parseFloat(jari.value);

  luas.textContent = hitungLuas(r).toFixed(2);
  volume.textContent = hitungVolume(r).toFixed(2);
})