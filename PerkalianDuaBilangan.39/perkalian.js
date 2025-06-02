function kali() {
  const a = parseFloat(document.getElementById("bil1").value) || 0;
  const b = parseFloat(document.getElementById("bil2").value) || 0;
  const hasil = a * b;

  document.getElementById("hasil").textContent = `Hasil: ${hasil}`;
}
