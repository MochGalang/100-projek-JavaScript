const tglInput = document.getElementById('tgl');
const blnInput = document.getElementById('bln');
const cekBtn = document.getElementById('cekZodiakBtn');
const hasil = document.getElementById('hasilZodiak');

cekBtn.addEventListener('click', () => {
  const day = parseInt(tglInput.value);
  const month = parseInt(blnInput.value);

  // Validasi tanggal dan bulan sederhana (tanpa if bercabang banyak)
  const validDay = day >= 1 && day <= 31;
  const validMonth = month >= 1 && month <= 12;

  if (!validDay || !validMonth) {
    hasil.textContent = 'Masukkan tanggal dan bulan yang valid.';
    return;
  }

  function getZodiac(day, month) {
    const zodiacs = [
      { name: "Capricorn", start: [12, 22], end: [1, 19] },
      { name: "Aquarius", start: [1, 20], end: [2, 18] },
      { name: "Pisces", start: [2, 19], end: [3, 20] },
      { name: "Aries", start: [3, 21], end: [4, 19] },
      { name: "Taurus", start: [4, 20], end: [5, 20] },
      { name: "Gemini", start: [5, 21], end: [6, 20] },
      { name: "Cancer", start: [6, 21], end: [7, 22] },
      { name: "Leo", start: [7, 23], end: [8, 22] },
      { name: "Virgo", start: [8, 23], end: [9, 22] },
      { name: "Libra", start: [9, 23], end: [10, 22] },
      { name: "Scorpio", start: [10, 23], end: [11, 21] },
      { name: "Sagittarius", start: [11, 22], end: [12, 21] }
    ];

    for (let z of zodiacs) {
      const [startMonth, startDay] = z.start;
      const [endMonth, endDay] = z.end;

      if (
        (month === startMonth && day >= startDay) ||
        (month === endMonth && day <= endDay) ||
        (startMonth > endMonth &&
          (month === startMonth && day >= startDay || month === endMonth && day <= endDay))
      ) {
        return z.name;
      }
    }
    return "Tidak diketahui";
  }

  hasil.textContent = `Zodiak kamu adalah: ${getZodiac(day, month)}`;
});
