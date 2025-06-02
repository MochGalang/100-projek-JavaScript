const diagonal1Input = document.getElementById("diagonal1");
const diagonal2Input = document.getElementById("diagonal2");
const hitungBtn = document.getElementById("hitungBtn");
const hasil = document.getElementById("hasil");

function hitungLuas(d1, d2) {
  return (d1 * d2) / 2;
}

function validasiInput(d1, d2) {
  return d1 > 0 && d2 > 0;
}

hitungBtn.addEventListener("click", () => {
  const d1 = Number(diagonal1Input.value);
  const d2 = Number(diagonal2Input.value);

  hasil.textContent = validasiInput(d1, d2)
    ? hitungLuas(d1, d2).toFixed(2)
    : "Masukkan diagonal dengan nilai positif!";
});
