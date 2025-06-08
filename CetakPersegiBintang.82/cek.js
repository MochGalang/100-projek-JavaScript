function cetakPersegi() {
  const n = parseInt(document.getElementById("ukuran").value);
  const hasil = document.getElementById("hasil");

  if (isNaN(n) || n < 1) {
    hasil.textContent = "Masukkan angka valid (>= 1)";
    return;
  }

  let output = "";

  for (let i = 0; i < n; i++) {
    output += "*".repeat(n) + "\n";
  }

  hasil.textContent = output;
}
