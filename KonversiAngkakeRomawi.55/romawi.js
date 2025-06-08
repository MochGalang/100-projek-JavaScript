const angka = document.getElementById("angka");
const tombol = document.getElementById("btnKonversi");
const hasil = document.getElementById("hasil");

function konversiKeRomawi(num) {
  const angkaRomawi = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"]
  ];

  let hasil = "";
  for (const [value, symbol] of angkaRomawi) {
    while (num >= value) {
      hasil += symbol;
      num -= value;
    }
  }
  return hasil;
}

tombol.addEventListener("click", () => {
  const n = parseInt(angka.value);
  if (n >= 1 && n <= 3999) {
    hasil.textContent = konversiKeRomawi(n);
  } else {
    hasil.textContent = "Masukkan angka antara 1 hingga 3999";
  }
});
