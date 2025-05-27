const rusuk = document.getElementById("rusuk")
const btn = document.getElementById("btn-hitung")
const luas = document.getElementById("txt-luas")
const volume = document.getElementById("txt-volume")

function hitungLuas (r){
  return 6 * r * r
}

function hitungVolume(r){
  return r * r * r
}

btn.addEventListener('click', () => {
  const r = parseFloat(rusuk.value);

luas.textContent = hitungLuas(r);
volume.textContent = hitungVolume(r);
})