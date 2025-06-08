function balikArray() {
  const input = document.getElementById("elemen").value.trim();

  if (!input) {
    document.getElementById("hasil").textContent = "Masukkan elemen dulu ya!";
    return;
  }

  const arr = input.split(/\s+/); // Pisah berdasarkan spasi
  const arrBalik = arr.slice().reverse(); // Membalik array tanpa merubah asli

  document.getElementById("hasil").textContent = arrBalik.join(" ");
}
