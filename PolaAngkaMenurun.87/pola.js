function cetakPola() {
  const tinggi = parseInt(document.getElementById("tinggi").value);
  const hasil = document.getElementById("hasil");

  if (isNaN(tinggi) || tinggi < 1) {
    hasil.textContent = "Masukkan angka valid (>=1)";
    return;
  }

  let output = "";

  for (let i = tinggi; i >= 1; i--) {
    output += String(i).repeat(i) + "\n";
  }

  hasil.textContent = output;
}
