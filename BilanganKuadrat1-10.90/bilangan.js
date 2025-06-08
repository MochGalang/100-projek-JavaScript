function tampilkanKuadrat() {
  const bilangan_kuadrat = [];

  for(let x = 1; x <= 10; x++) {
    bilangan_kuadrat.push(x ** 2);
  }

  document.getElementById("hasil").textContent = 
    "Bilangan kuadrat dari 1 hingga 10: " + bilangan_kuadrat.join(", ");
}
