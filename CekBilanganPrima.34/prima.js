const numberInput = document.getElementById('numberInput');
const checkBtn = document.getElementById('checkBtn');
const result = document.getElementById('result');

checkBtn.addEventListener('click', () => {
  const num = parseInt(numberInput.value) || 0;

  const isPrime = num > 1 && [...Array(num - 2)].every((_, i) => num % (i + 2) !== 0);

  result.textContent = isPrime
    ? `${num} adalah bilangan prima.`
    : `${num} bukan bilangan prima.`;
});
