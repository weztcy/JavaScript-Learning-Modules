// Membuat Custom Error dengan Mewarisi (extends) Class bawaan 'Error'

class ValidasiError extends Error {
  constructor(pesan, kodeError) {
    super(pesan);
    this.name = "ValidasiError";
    this.kodeError = kodeError;
  }
}

function daftarAkun(email) {
  if (!email.includes("@")) {
    throw new ValidasiError("Format email tidak sah!", "ERR_EMAIL_INVALID");
  }
  return "Akun " + email + " berhasil terdaftar.";
}

try {
  console.log(daftarAkun("email-salah"));
} catch (err) {
  if (err instanceof ValidasiError) {
    console.log("Tertangkap Custom Error:", err.name);
    console.log("Kode Error :", err.kodeError);
    console.log("Pesan      :", err.message);
  } else {
    console.log("Error tidak terduga:", err);
  }
}
