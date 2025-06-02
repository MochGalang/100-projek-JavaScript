function generateRandomColor() {
  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
  document.body.style.backgroundColor = randomColor;
  document.getElementById('colorCode').textContent = randomColor.toUpperCase();
}

document.getElementById('generateBtn').addEventListener('click', generateRandomColor);
