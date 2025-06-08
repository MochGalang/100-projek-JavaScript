function cariKataTerpendek(kalimat) {
    let kataList = kalimat.split(" ").filter(kata => kata.length > 0);
    let kataTerpendek = kataList.reduce((terpendek, kata) => {
        return kata.length < terpendek.length ? kata : terpendek;
    }, kataList[0] || "");

    return kataTerpendek;
}

function prosesInput() {
    let kalimat = document.getElementById("inputKalimat").value;
    let hasil = cariKataTerpendek(kalimat);

    let output = hasil
        ? `Kata terpendek dalam kalimat adalah: '${hasil}' dengan panjang ${hasil.length} karakter.`
        : "Masukkan kalimat terlebih dahulu.";

    document.getElementById("hasil").textContent = output;
}
