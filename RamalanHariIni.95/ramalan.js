 const ramalanList = [
      "Kamu akan menemukan uang receh di bawah kasur.",
      "Hindari gorengan hari ini, trust me bro.",
      "Chat dari orang tak terduga bakal masuk hari ini!",
      "Kamu butuh istirahat... dan es krim.",
      "Jangan buka chat mantan hari ini, demi kesehatan mental.",
      "Hari ini cocok untuk rebahan produktif.",
      "Seseorang merindukanmu, tapi pura-pura cuek.",
      "Kalau kamu senyum sekarang, besok hoki 💫",
      "Jangan lupa minum air putih, ya!",
      "Sebuah peluang baru akan datang, siap-siap aja~"
    ];

    function tampilkanRamalan() {
      const index = Math.floor(Math.random() * ramalanList.length);
      const hasil = document.getElementById("hasil");
      hasil.textContent = ramalanList[index];
    }