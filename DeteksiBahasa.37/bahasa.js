function deteksiBahasa() {
  const teks = document.getElementById("teks").value.toLowerCase();

  const bahasa = {
    "Indonesia": ["saya", "kamu", "dia", "kita", "mereka", "apa", "dimana", "mengapa"],
    "Inggris": ["i", "you", "he", "she", "we", "they", "what", "where", "why"],
    "Jepang": ["watashi", "anata", "kare", "kanojo", "doko", "nani", "nande"]
  };

  const jumlahKecocokan = Object.entries(bahasa).map(([namaBahasa, kataKunci]) => {
    const total = kataKunci.filter(kata => teks.includes(kata)).length;
    return { namaBahasa, total };
  });

  const hasil = jumlahKecocokan.sort((a, b) => b.total - a.total)[0];

  document.getElementById("hasil").textContent =
    hasil.total > 0
      ? `Kemungkinan besar ini bahasa: ${hasil.namaBahasa}`
      : "Bahasa tidak dikenali.";
}
