function konversi() {
  let rp = parseFloat(document.getElementById("rupiah").value);
  const rate = 15000;
  let usd = rp / rate;
  document.getElementById("hasil").innerText = `USD: $${usd.toFixed(2)}`;
}