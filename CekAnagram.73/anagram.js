function cekAnagram() {
    const s1 = document.getElementById("str1").value.toLowerCase().replace(/\s+/g, "");
    const s2 = document.getElementById("str2").value.toLowerCase().replace(/\s+/g, "");

    if (s1.length !== s2.length) {
        document.getElementById("hasil").textContent = "Bukan anagram (panjang string berbeda)";
        return;
    }

    const sortedS1 = s1.split("").sort().join("");
    const sortedS2 = s2.split("").sort().join("");

    if (sortedS1 === sortedS2) {
        document.getElementById("hasil").textContent = "Kedua string adalah anagram!";
    } else {
        document.getElementById("hasil").textContent = "Bukan anagram";
    }
}
