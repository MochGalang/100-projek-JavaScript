function cekArmstrong() {
  const angkaInput = document.getElementById("angka").value.trim();
  const hasil = document.getElementById("hasil");

  if (angkaInput === "") {
    hasil.textContent = "Masukkan angka dulu ya!";
    return;
  }

  const angka = parseInt(angkaInput);
  if (isNaN(angka) || angka < 0) {
    hasil.textContent = "Masukkan angka bulat positif yang valid!";
    return;
  }

  const strAngka = angka.toString();
  const jumlahDigit = strAngka.length;

  let total = 0;
  for (const digit of strAngka) {
    total += Math.pow(parseInt(digit), jumlahDigit);
  }

  if (total === angka) {
    hasil.textContent = `${angka} adalah bilangan Armstrong.`;
  } else {
    hasil.textContent = `${angka} bukan bilangan Armstrong.`;
  }
}
