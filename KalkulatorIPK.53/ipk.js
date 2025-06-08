const btn = document.getElementById("btnHitung");
const hasil = document.getElementById("hasil");

btn.addEventListener("click", () => {
  const nilaiInputs = document.querySelectorAll(".nilai");
  const sksInputs = document.querySelectorAll(".sks");

  let totalBobot = 0;
  let totalSKS = 0;

  for (let i = 0; i < nilaiInputs.length; i++) {
    const nilai = parseFloat(nilaiInputs[i].value);
    const sks = parseInt(sksInputs[i].value);

    if (!isNaN(nilai) && !isNaN(sks)) {
      totalBobot += nilai * sks;
      totalSKS += sks;
    }
  }

  const ipk = totalSKS > 0 ? (totalBobot / totalSKS) : 0;
  hasil.textContent = ipk.toFixed(2);
});
