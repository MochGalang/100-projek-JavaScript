function buatKuadrat() {
  const n = parseInt(document.getElementById("angka").value);
  const hasil = document.getElementById("hasil");

  if (isNaN(n) || n < 1) {
    hasil.textContent = "Masukkan angka yang valid (minimal 1)";
    return;
  }

  const kuadratList = [];

  for (let i = 1; i <= n; i++) {
    kuadratList.push(i * i);
  }

  hasil.textContent = kuadratList.join(", ");
}
