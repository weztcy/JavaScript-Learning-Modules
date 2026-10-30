// Program Validasi Login Sederhana

function validasiLogin(username, password) {
  const USER_BENAR = "admin";
  const PASS_BENAR = "rahasia123";

  // Memeriksa kelengkapan input
  if (!username || !password) {
    return { sukses: false, pesan: "Username dan password tidak boleh kosong!" };
  }

  // Memeriksa kecocokan data kredensial
  if (username === USER_BENAR && password === PASS_BENAR) {
    return { sukses: true, pesan: "Login berhasil! Selamat datang, Administrator." };
  } else {
    return { sukses: false, pesan: "Kredensial salah: Username atau password tidak sesuai." };
  }
}

console.log("Percobaan 1:", validasiLogin("admin", "rahasia123"));
console.log("Percobaan 2:", validasiLogin("admin", "salah"));
console.log("Percobaan 3:", validasiLogin("", ""));
