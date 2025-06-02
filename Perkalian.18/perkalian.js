const pertama = document.getElementById("pertama")
const kedua = document.getElementById("kedua")
const btn = document.getElementById("btn-kali")
const hasil = document.getElementById("hasil")

btn.addEventListener("click", () => {
  const a = Number(pertama.value);
  const b = Number(kedua.value);
  const total = a * b;
  hasil.textContent = `hasil Perkalian: ${total}`;
});