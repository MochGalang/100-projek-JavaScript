function konversiMBkeGB(mb) {
  return mb / 1024;
}

document.getElementById('convertBtn').addEventListener('click', function() {
  const inputMB = document.getElementById('inputMB').value;
  const mb = parseFloat(inputMB);

  if (isNaN(mb) || mb < 0) {
    document.getElementById('hasil').textContent = 'Tolong masukkan angka MB yang valid (>= 0).';
    return;
  }

  const gb = konversiMBkeGB(mb);
  document.getElementById('hasil').textContent = `${mb} MB = ${gb.toFixed(2)} GB`;
});
