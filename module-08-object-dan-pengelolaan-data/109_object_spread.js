// Spread Syntax (...) pada Objek untuk menyalin dan menggabungkan properti

const profilDasar = { nama: "Arman", kota: "Bandung" };
const profilAkademik = { kampus: "ITB", jurusan: "Informatika" };

// Menggabungkan kedua profil dan menambahkan properti baru
const profilLengkap = {
  ...profilDasar,
  ...profilAkademik,
  status: "Mahasiswa Aktif"
};

console.log("Hasil Penggabungan Objek:", profilLengkap);
