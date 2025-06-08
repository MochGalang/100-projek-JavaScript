const teks = document.getElementById("teks");
const jumlah = document.getElementById("jumlah");
const btn = document.getElementById("btnUlangi");
const hasil = document.getElementById("hasil");

function ulangiTeks(teks, n) {
  return Array.from({ length: n }, () => teks).join(' ');
}

btn.addEventListener("click", () => {
  const t = teks.value;
  const n = parseInt(jumlah.value);

  hasil.textContent = ulangiTeks(t, n);
});
