function updateJam() {
  const sekarang = new Date();

  let jam = sekarang.getHours();
  let menit = sekarang.getMinutes();
  let detik = sekarang.getSeconds();

  jam = jam < 10 ? '0' + jam : jam;
  menit = menit < 10 ? '0' + menit : menit;
  detik = detik < 10 ? '0' + detik : detik;

  const waktu = `${jam}:${menit}:${detik}`;
  document.getElementById('jam').textContent = waktu;
}

setInterval(updateJam, 1000);

updateJam();
