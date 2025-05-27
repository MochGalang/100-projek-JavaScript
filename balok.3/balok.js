const panjang = document.getElementById("panjang")
const lebar = document.getElementById("lebar")
const tinggi = document.getElementById("tinggi")
const btnHitung = document.getElementById("btn-hitungnya")
const luas = document.querySelector('#txt-luas')
const volume = document.querySelector('#txt-volume')


function hitungLuas(p, l, t){
  return 2 *((p * l) + (p * t) + (l * t))
}


const hitungVolume = (p,l,t) => p * l * t

btnHitung.addEventListener('click', function() {
  luas.textContent = hitungLuas(panjang.value, lebar.value, tinggi.value)
  volume.textContent = hitungVolume(panjang.value, lebar.value, tinggi.value);
})