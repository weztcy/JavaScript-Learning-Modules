// Validasi Input Aman: Mencegah SQL Injection & Format Manipulation

function validasiInputUsername(username) {
  // Hanya memperbolehkan alfanumerik dan garis bawah dengan panjang 4-16 karakter
  const regexAman = /^[a-zA-Z0-9_]{4,16}$/;
  return regexAman.test(username);
}

const daftarInput = ["budi_wijaya", "admin' OR 1=1 --", "user123", "a!b"];
daftarInput.forEach(u => {
  console.log("Username: '" + u + "' -> " + (validasiInputUsername(u) ? "AMAN & VALID" : "DITOLAK"));
});
