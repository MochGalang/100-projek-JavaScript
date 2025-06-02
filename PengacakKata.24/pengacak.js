const inputKata = document.getElementById("inputKata");
const acakBtn = document.getElementById("acakBtn");
const hasil = document.getElementById("hasil");

function shuffleArray(array) {
  for (let i = array.length -1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

acakBtn.addEventListener("click", () => {
  const kata = inputKata.value;
  if (!kata) {
    hasil.textContent = "Masukkan kata atau kalimat dulu ya!";
    return;
  }

  const arrayKata = kata.split("");
  const kataDiacak = shuffleArray(arrayKata).join("");

  hasil.textContent = kataDiacak;
});
