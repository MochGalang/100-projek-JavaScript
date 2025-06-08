function cetakKelipatan5() {
    let n = parseInt(document.getElementById("inputN").value);

    let output = "";

    for (let i = 1; i <= n; i += 5) {
        output += i + "\n";
    }

    document.getElementById("hasil").textContent = output || "Masukkan angka yang valid.";
}
