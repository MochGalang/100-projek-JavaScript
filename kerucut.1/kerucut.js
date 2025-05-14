const jari = document.getElementById("jari")
const tinggi = document.getElementById("tinggi")
const selimut = document.getElementById("selimut")
const btn = document.getElementById("btn-hitung")
const luas = document.getElementById("txt-luas")
const volume = document.getElementById("txt-volume")

const PHI = Math.PI

function hitungLuas (r,s){
return PHI * r * (r + s);
}

const hitungVolume = (r, t) => (1/3) * PHI * r * r * t;

btn.addEventListener('click', () => {
  const r = parseFloat(jari.value);
  const t = parseFloat(tinggi.value);
  const s = parseFloat(selimut.value);

  luas.textContent = hitungLuas(r,s).toFixed(2);
  volume.textContent = hitungVolume(r,t).toFixed(2);
})
