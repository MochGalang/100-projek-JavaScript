function cariKataTerpanjang(kalimat) {
    let kataList = kalimat.split(" ");
    let kataTerpanjang = kataList.reduce((terpanjang, kata) => {
        return kata.length > terpanjang.length ? kata : terpanjang;
    }, "");

    return kataTerpanjang;
}

function prosesInput() {
    let kalimat = document.getElementById("inputKalimat").value;
    let hasil = cariKataTerpanjang(kalimat);

    let output = `Kata terpanjang dalam kalimat adalah: '${hasil}' dengan panjang ${hasil.length} karakter.`;
    document.getElementById("hasil").textContent = output;
}
