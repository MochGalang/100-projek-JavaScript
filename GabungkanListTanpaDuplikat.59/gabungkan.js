function gabungkanList(list1, list2) {
            let gabungan = list1.concat(list2);
            let tanpaDuplikat = [...new Set(gabungan)];
            tanpaDuplikat.sort((a, b) => a - b);
            return tanpaDuplikat;
        }

        let list1 = [1, 2, 3, 4];
        let list2 = [3, 4, 5, 6];

        let hasilGabung = gabungkanList(list1, list2);

        document.getElementById("hasil").textContent = "Hasil penggabungan tanpa duplikat: " + hasilGabung.join(", ")