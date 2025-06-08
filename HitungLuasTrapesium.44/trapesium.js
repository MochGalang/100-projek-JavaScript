const sisiA = document.getElementById("sisiA");
const sisiB = document.getElementById("sisiB");
const tinggi = document.getElementById("tinggi");
const tombol = document.getElementById("btnHitung");
const hasil = document.getElementById("hasilLuas");

function hitungLuasTrapesium(a, b, t) {
  return 0.5 * (a + b) * t;
}

tombol.addEventListener("click", () => {
  const a = parseFloat(sisiA.value);
  const b = parseFloat(sisiB.value);
  const t = parseFloat(tinggi.value);

  const luas = hitungLuasTrapesium(a, b, t);
  hasil.textContent = luas.toFixed(2);
});
