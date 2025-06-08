function cetakPola() {
  const n = parseInt(document.getElementById("ukuran").value);
  const hasil = document.getElementById("hasil");

  if (isNaN(n) || n < 1) {
    hasil.textContent = "Masukkan angka valid (>= 1)";
    return;
  }

  let output = "";

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      output += j;
    }
    output += "\n";
  }

  hasil.textContent = output;
}
