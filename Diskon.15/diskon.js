function hitungDiskon() {
  const harga = parseFloat(document.getElementById("harga").value);
  const diskon = parseFloat(document.getElementById("diskon").value);
  const hasil = document.getElementById("hasil");

  if (isNaN(harga) || isNaN(diskon)) {
    hasil.textContent = "Masukkan angka yang valid ya!";
    return;
  }

  const potongan = (diskon / 100) * harga;
  const totalBayar = harga - potongan;

  hasil.innerHTML = `
    Harga Awal: Rp ${harga.toLocaleString()}<br>
    Potongan: Rp ${potongan.toLocaleString()}<br>
    <strong>Total Bayar: Rp ${totalBayar.toLocaleString()}</strong>
  `;
}
