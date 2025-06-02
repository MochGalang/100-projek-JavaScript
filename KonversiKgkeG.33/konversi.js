const kgInput = document.getElementById('kgInput');
const convertBtn = document.getElementById('convertBtn');
const result = document.getElementById('result');

convertBtn.addEventListener('click', () => {
  const kg = parseFloat(kgInput.value) || 0;
  const gram = kg * 1000;
  result.textContent = gram;
});
