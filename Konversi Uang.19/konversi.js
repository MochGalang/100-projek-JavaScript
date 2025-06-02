const jumlahInput = document.getElementById("jumlah");
const mataUangSelect = document.getElementById("mata-uang");
const tombol = document.getElementById("btn-konversi");
const hasilTeks = document.getElementById("hasil");

const nilaiTukar = {
  USD: 0.00006072, // 1 IDR = 0.00006072 USD
  EUR: 0.00005623,
  JPY: 0.009084
};

tombol.addEventListener("click", () => {
  const jumlah = Number(jumlahInput.value);
  const mataUang = mataUangSelect.value;
  const kurs = nilaiTukar[mataUang];
  
  const hasil = jumlah * kurs;
  hasilTeks.textContent = `${jumlah} Rupiah = ${hasil.toFixed(2)} ${mataUang}`;
});
