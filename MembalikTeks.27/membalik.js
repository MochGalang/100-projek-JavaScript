const teks = document.getElementById("teks");
const btn = document.getElementById("btn-button");
const hasil = document.getElementById("hasil");

btn.addEventListener("click", () => {
  let text = teks.value;

  function balikTeks(teks) {
    return teks.split('').reverse().join('');
  }

  hasil.textContent = balikTeks(text);
});
