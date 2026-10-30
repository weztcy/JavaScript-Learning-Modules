// Nested If: Struktur percabangan di dalam percabangan lainnya

const sudahRegistrasi = true;
const memilikiTiket = true;
const usia = 19;

console.log("Verifikasi Akses Konser Musik:");

if (sudahRegistrasi) {
  console.log("- Status registrasi: Terverifikasi");
  
  if (memilikiTiket) {
    console.log("- Status tiket: Valid");
    
    if (usia >= 18) {
      console.log("-> Akses Diberikan: Selamat menikmati konser!");
    } else {
      console.log("-> Akses Ditolak: Penonton harus berusia minimal 18 tahun.");
    }
  } else {
    console.log("-> Akses Ditolak: Tiket belum dibeli.");
  }
} else {
  console.log("-> Akses Ditolak: Akun belum terdaftar.");
}
