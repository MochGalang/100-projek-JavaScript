function cekHari() {
    const inputTanggal = document.getElementById("inputTanggal").value;

    if (!inputTanggal) {
        document.getElementById("hasil").textContent = "Mohon masukkan tanggal.";
        return;
    }

    const tanggal = new Date(inputTanggal);
    if (isNaN(tanggal)) {
        document.getElementById("hasil").textContent = "Format tanggal tidak valid.";
        return;
    }

    const hari = tanggal.getDay();

    const hasil = (hari === 0 || hari === 6) ? "Weekend" : "Weekday";

    document.getElementById("hasil").textContent = `Tanggal tersebut adalah: ${hasil}`;
}
