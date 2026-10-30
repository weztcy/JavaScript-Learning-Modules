// Object.seal() menyegel objek: properti yang ada masih bisa diubah nilainya,
// tetapi tidak bisa menambah atau menghapus properti

const akunBank = {
  nomorRekening: "123-456-789",
  saldo: 1000000
};

Object.seal(akunBank);

// Mengubah nilai properti yang sudah ada DIPERBOLEHKAN
akunBank.saldo = 1500000;

// Menambah properti baru TIDAK DIIZINKAN
akunBank.pemilik = "Budi";

console.log("Akun Tersegel:", akunBank);
console.log("Apakah objek tersegel?", Object.isSealed(akunBank));
