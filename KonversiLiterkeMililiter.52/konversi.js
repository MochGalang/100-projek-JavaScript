const liter = document.getElementById("liter");
const btn = document.getElementById("btnKonversi");
const hasil = document.getElementById("hasil");

function konversiLiterKeMililiter(l) {
  return l * 1000;
}

btn.addEventListener("click", () => {
  const l = parseFloat(liter.value);
  const ml = konversiLiterKeMililiter(l);
  hasil.textContent = `${ml.toFixed(2)}`;
});
