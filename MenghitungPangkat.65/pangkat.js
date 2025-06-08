function pangkat() {
  let a = parseFloat(document.getElementById("a").value);
  let b = parseFloat(document.getElementById("b").value);
  document.getElementById("hasil").innerText = `Hasil: ${Math.pow(a, b)}`;
}