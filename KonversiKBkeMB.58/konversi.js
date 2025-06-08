const kbInput = document.getElementById("kb");
const btn = document.getElementById("konversiBtn");
const hasil = document.getElementById("hasilMB");

function konversiKBkeMB(kb) {
  return kb / 1024;
}

btn.addEventListener("click", () => {
  const kb = parseFloat(kbInput.value);
  const mb = konversiKBkeMB(kb);
  hasil.textContent = mb.toFixed(2);
});
