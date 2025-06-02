function hitungLuas() {
  let alas = parseFloat(document.getElementById('alas').value);
  let tinggi = parseFloat(document.getElementById('tinggi').value);
  let luas = alas * tinggi;
  document.getElementById('output').innerText = `Luas: ${luas}`;
}