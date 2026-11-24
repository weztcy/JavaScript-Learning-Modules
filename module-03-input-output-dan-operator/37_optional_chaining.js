// Optional Chaining Operator (?.)
// Memungkinkan pembacaan properti bersarang tanpa memicu error jika properti induk null atau undefined

const pengguna = {
  id: 1,
  profil: {
    nama: "Fajar",
    kontak: {
      email: "fajar@example.com"
    }
  }
};

// Mengakses properti yang ada dengan aman
console.log("Email pengguna:", pengguna?.profil?.kontak?.email);

// Mengakses properti yang tidak ada tanpa error (mengembalikan undefined)
console.log("Nomor Telepon :", pengguna?.profil?.telepon?.nomor);

// Pemanggilan method opsional
console.log("Metode opsional:", pengguna.cetakProfil?.());
