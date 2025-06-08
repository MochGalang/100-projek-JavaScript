function cekPalindrom() {
  let kata = document.getElementById("kata").value.toLowerCase();
  let balik = kata.split('').reverse().join('');
  let hasil = (kata === balik) ? "Palindrom" : "Bukan Palindrom";
  document.getElementById("hasil").innerText = hasil;
}