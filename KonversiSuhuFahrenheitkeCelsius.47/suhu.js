const fahrenheit = document.getElementById("fahrenheit");
const btn = document.getElementById("konversiBtn");
const hasil = document.getElementById("hasilCelsius");

function konversiFtoC(f) {
  return (f - 32) * 5 / 9;
}

btn.addEventListener("click", () => {
  const f = parseFloat(fahrenheit.value);
  const c = konversiFtoC(f);
  hasil.textContent = `${c.toFixed(2)} °C`;
});
