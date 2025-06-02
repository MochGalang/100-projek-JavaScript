const kalimat = document.getElementById("kalimat")
const btn = document.getElementById("btn-button")
const hasil = document.getElementById("hasil")

btn.addEventListener("click", () => {
  const teks = kalimat.value;
  let jumlahKapital = 0;

  for(let karakter of teks){
    if (karakter >= 'A' && karakter <= 'Z'){
      jumlahKapital++;
      }
  }
  hasil.textContent = `Jumlah huruf kapital: ${jumlahKapital}`;
})



