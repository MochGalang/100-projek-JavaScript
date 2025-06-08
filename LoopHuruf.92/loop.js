function tulisHuruf() {
  const hurufArr = ['A', 'B', 'C', 'D'];
  let hasil = "";

  for (const huruf of hurufArr) {
    hasil += `${huruf}. Cerdas\n`;
  }

  document.getElementById("hasil").textContent = hasil;
}
