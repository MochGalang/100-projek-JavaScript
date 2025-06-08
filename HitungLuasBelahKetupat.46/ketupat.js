const d1 = document.getElementById("d1");
const d2 = document.getElementById("d2");
const btn = document.getElementById("hitungBtn");
const hasil = document.getElementById("hasilLuas");

function hitungLuasBelahKetupat(d1, d2) {
  return 0.5 * d1 * d2;
}

btn.addEventListener("click", () => {
  const diagonal1 = parseFloat(d1.value);
  const diagonal2 = parseFloat(d2.value);
  const luas = hitungLuasBelahKetupat(diagonal1, diagonal2);
  hasil.textContent = `${luas.toFixed(2)}`;
});
