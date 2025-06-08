function konversiWaktu() {
  const input = document.getElementById("waktu").value.trim();
  const hasil = document.getElementById("hasil");

  const [jamMenit, meridian] = input.split(" ");
  const [jam, menit] = jamMenit.split(":").map(Number);
  const upperMeridian = meridian.toUpperCase();

  let jam24 = jam;

  if (upperMeridian === "AM" && jam === 12) {
    jam24 = 0;
  } else if (upperMeridian === "PM" && jam !== 12) {
    jam24 = jam + 12;
  }

  const jamFormat = jam24.toString().padStart(2, "0");
  const menitFormat = menit.toString().padStart(2, "0");

  hasil.textContent = `${jamFormat}:${menitFormat}`;
}
