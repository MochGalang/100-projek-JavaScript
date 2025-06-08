function cekLogin() {
  const username = "admin";
  const password = "nimda123";

  const inputUsername = document.getElementById("username").value;
  const inputPassword = document.getElementById("password").value;

  const hasil = document.getElementById("hasil");

  if (inputUsername === username && inputPassword === password) {
    hasil.textContent = "Login berhasil!";
  } else {
    hasil.textContent = "Username atau password salah.";
  }
}
