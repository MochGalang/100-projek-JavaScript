function cetakAngka() {
      let hasil = "";
      for (let i = 1; i <= 20; i++) {
        if (i === 13) {
          continue;
        }
        hasil += i + "\n";
      }
      document.getElementById("output").textContent = hasil;
    }