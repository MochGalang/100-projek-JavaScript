function urutkanKata() {
  const input = document.getElementById("kalimat").value;
  const kataArray = input.trim().split(/\s+/);

  const hasilUrut = kataArray.sort((a, b) => a.length - b.length);

  document.getElementById("hasil").textContent = hasilUrut.join(" ");
}
