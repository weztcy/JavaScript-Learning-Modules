// Metode find() dan findIndex() mencari elemen pertama yang memenuhi kriteria

const pengguna = [
  { id: 1, nama: "Cahyo", role: "User" },
  { id: 2, nama: "Dewi", role: "Admin" },
  { id: 3, nama: "Eko", role: "User" }
];

// Mencari objek admin pertama
const adminPertama = pengguna.find(u => u.role === "Admin");
console.log("Admin ditemukan:", adminPertama);

// Mencari indeks user bernama Eko
const indeksEko = pengguna.findIndex(u => u.nama === "Eko");
console.log("Indeks data Eko:", indeksEko);
