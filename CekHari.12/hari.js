function cekHari() {
  const input = document.getElementById("tanggal").value;
  const parts = input.split("-");

  if (parts.length !== 3) {
    document.getElementById("hasil").innerText = "Format salah! Gunakan DD-MM-YYYY";
    return;
  }

  const day = parseInt(parts[0]);
  const month = parseInt(parts[1]) - 1; // Bulan dimulai dari 0
  const year = parseInt(parts[2]);

  const tanggal = new Date(year, month, day);

  if (isNaN(tanggal.getTime())) {
    document.getElementById("txt-hasil").innerText = "Tanggal tidak valid!";
    return;
  }

  const hari = tanggal.getDay(); // 0 = Minggu, 6 = Sabtu

  if (hari === 0 || hari === 6) {
    document.getElementById("txt-hasil").innerText = "Tanggal adalah weekend";
  } else {
    document.getElementById("txt-hasil").innerText = "Tanggal adalah weekday";
  }
}
