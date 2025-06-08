let saldo = 1000000; // saldo awal Rp 1.000.000

const saldoDisplay = document.getElementById('saldoDisplay');
const pesan = document.getElementById('pesan');
const inputJumlah = document.getElementById('inputJumlah');

function updateSaldoDisplay() {
  saldoDisplay.textContent = `Rp ${saldo.toLocaleString('id-ID')}`;
}

document.getElementById('cekSaldoBtn').addEventListener('click', () => {
  pesan.textContent = `Saldo Anda saat ini adalah Rp ${saldo.toLocaleString('id-ID')}`;
});

document.getElementById('tarikBtn').addEventListener('click', () => {
  const jumlah = parseInt(inputJumlah.value);
  if (isNaN(jumlah) || jumlah <= 0) {
    pesan.textContent = 'Masukkan jumlah yang valid untuk tarik tunai.';
    return;
  }
  if (jumlah > saldo) {
    pesan.textContent = 'Saldo tidak cukup untuk melakukan penarikan.';
    return;
  }
  saldo -= jumlah;
  updateSaldoDisplay();
  pesan.textContent = `Berhasil tarik Rp ${jumlah.toLocaleString('id-ID')}. Saldo tersisa Rp ${saldo.toLocaleString('id-ID')}.`;
  inputJumlah.value = '';
});

document.getElementById('setorBtn').addEventListener('click', () => {
  const jumlah = parseInt(inputJumlah.value);
  if (isNaN(jumlah) || jumlah <= 0) {
    pesan.textContent = 'Masukkan jumlah yang valid untuk setor tunai.';
    return;
  }
  saldo += jumlah;
  updateSaldoDisplay();
  pesan.textContent = `Berhasil setor Rp ${jumlah.toLocaleString('id-ID')}. Saldo sekarang Rp ${saldo.toLocaleString('id-ID')}.`;
  inputJumlah.value = '';
});

// Tampilkan saldo awal waktu buka halaman
updateSaldoDisplay();
