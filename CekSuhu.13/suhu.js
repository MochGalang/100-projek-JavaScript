function cekSuhu() {
  const input = document.getElementById("suhu").value;
  const suhu = parseFloat(input);

  if (isNaN(suhu)) {
    document.getElementById("hasil").innerText = "Masukkan angka suhu yang valid!";
    return;
  }

  let status = "";

  if (suhu < 20) {
    status = "Dingin ❄️";
  } else if (suhu <= 30) {
    status = "Normal 🌤️";
  } else {
    status = "Panas 🔥";
  }

  document.getElementById("hasil").innerText = `Suhu ${suhu}°C tergolong: ${status}`;
}
