function cetakFibonacci() {
    const max = parseInt(document.getElementById("angka").value);
    const hasilEl = document.getElementById("hasil");

    if (isNaN(max) || max < 1) {
        hasilEl.textContent = "Masukkan angka yang valid (>=1).";
        return;
    }

    let fibo = [0, 1];
    let next = 0;

    while (true) {
        next = fibo[fibo.length - 1] + fibo[fibo.length - 2];
        if (next > max) break;
        fibo.push(next);
    }

    hasilEl.textContent = fibo.join(", ");
}
