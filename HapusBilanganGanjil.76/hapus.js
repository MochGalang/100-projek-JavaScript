function hapusGanjil() {
    const input = document.getElementById("listInput").value;
    const angkaArray = input.split(",").map(Number);

    const hasilFilter = angkaArray.filter(num => num % 2 === 0);

    document.getElementById("hasil").textContent = hasilFilter.join(", ");
}
