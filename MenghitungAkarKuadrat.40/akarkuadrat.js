const angka = document.getElementById("angka")
const btnHitung = document.getElementById("btn-hitung")
const hasil = document.getElementById("txt-hasil")

function hitungAkar(n) {
  return Math.sqrt(n)
}

btnHitung.addEventListener("click", function () {
  hasil.textContent = hitungAkar(angka.value).toFixed(2);
})
