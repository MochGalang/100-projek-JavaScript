document.getElementById("btn-hitung").addEventListener("click", function() {
  let tglLahir = new Date(document.getElementById("date").value);
  let today = new Date();

  let umur = today.getFullYear() - tglLahir.getFullYear();

  let bulanSekarang = today.getMonth();
  let tanggalSekarang = today.getDate();
  let bulanLahir = tglLahir.getMonth();
  let tanggalLahir = tglLahir.getDate();

  if (
    bulanSekarang < bulanLahir || 
    (bulanSekarang === bulanLahir && tanggalSekarang < tanggalLahir)
  ) {
    umur--;
  }

  document.getElementById("txt-hasil").innerText = `Umur kamu: ${umur} tahun`;
});
