function hitungGaji(jamKerja, tarifPerJam) {
  const jamNormal = 40;
  const tarifLembur = tarifPerJam * 1.5;
  let gaji;

  if (jamKerja <= jamNormal) {
    gaji = jamKerja * tarifPerJam;
  } else {
    const jamLembur = jamKerja - jamNormal;
    gaji = (jamNormal * tarifPerJam) + (jamLembur * tarifLembur);
  }

  return gaji;
}

document.getElementById('hitungBtn').addEventListener('click', function() {
  const jamKerjaInput = parseFloat(document.getElementById('jamKerja').value);
  const tarifInput = parseFloat(document.getElementById('tarifPerJam').value);

  if (isNaN(jamKerjaInput) || jamKerjaInput < 0 || isNaN(tarifInput) || tarifInput < 0) {
    document.getElementById('hasil').textContent = 'Tolong masukkan nilai yang valid dan tidak negatif.';
    return;
  }

  const totalGaji = hitungGaji(jamKerjaInput, tarifInput);
  document.getElementById('hasil').textContent = `Total gaji = Rp ${totalGaji.toFixed(2)}`;
});
