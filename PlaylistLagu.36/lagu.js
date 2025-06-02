const input = document.getElementById("judul");
const tombolTambah = document.getElementById("tambah");
const daftar = document.getElementById("daftarLagu");
const status = document.getElementById("status");

let playlist = [];

function renderPlaylist() {
  daftar.innerHTML = "";
  playlist.forEach((lagu, index) => {
    const item = document.createElement("li");
    item.textContent = lagu;

    const btnMainkan = document.createElement("button");
    btnMainkan.textContent = "Mainkan";
    btnMainkan.onclick = () => {
      status.textContent = `Memutar: ${lagu}`;
    };

    const btnHapus = document.createElement("button");
    btnHapus.textContent = "Hapus";
    btnHapus.onclick = () => {
      playlist = playlist.filter((_, i) => i !== index);
      renderPlaylist();
    };

    item.append(" ", btnMainkan, " ", btnHapus);
    daftar.appendChild(item);
  });
}

tombolTambah.addEventListener("click", () => {
  playlist.push(input.value);
  input.value = "";
  renderPlaylist();
});
