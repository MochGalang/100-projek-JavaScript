const huruf = document.getElementById('huruf');
const btn = document.getElementById("btn-hitung");
const txt = document.getElementById("hasil");

const vokal = ['a', 'i', 'u', 'e', 'o'];

btn.addEventListener("click", () => {
  const teks = huruf.value.toLowerCase();
  let jumlah = 0;

  for (let i = 0; i < teks.length; i++) {
    if (vokal.includes(teks[i])) {
      jumlah++;
    }
  }

  txt.textContent = `Jumlah huruf vokal: ${jumlah}`;
});
