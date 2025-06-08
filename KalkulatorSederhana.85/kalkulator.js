function hitung(op) {
  const a = parseFloat(document.getElementById("angka1").value);
  const b = parseFloat(document.getElementById("angka2").value);
  const hasil = document.getElementById("hasil");

  if (isNaN(a) || isNaN(b)) {
    hasil.textContent = "Masukkan angka yang valid!";
    return;
  }

  let res;
  switch (op) {
    case '+':
      res = a + b;
      break;
    case '-':
      res = a - b;
      break;
    case '*':
      res = a * b;
      break;
    case '/':
      if (b === 0) {
        hasil.textContent = "Tidak bisa dibagi dengan nol!";
        return;
      }
      res = a / b;
      break;
  }

  hasil.textContent = res;
}
