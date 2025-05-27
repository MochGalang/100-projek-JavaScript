document.getElementById('btn-enter').addEventListener("click", function() {
    let tahun = parseInt(document.getElementById("tahun").value);
  let hasil = "";

  if (isNaN(tahun)) {
    hasil = "Tolong masukkan angka tahun yang valid!";
  } else if ((tahun % 400 === 0) || (tahun % 4 === 0 && tahun % 100 !== 0)) {
    hasil = tahun + " adalah tahun kabisat.";
  } else {
    hasil = tahun + " bukan tahun kabisat.";
  }

  document.getElementById("txt-hasil").innerText = hasil;
});