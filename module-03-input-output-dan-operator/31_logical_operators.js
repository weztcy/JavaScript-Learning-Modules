// Operator Logika: AND (&&), OR (||), dan NOT (!)

const punyaTiket = true;
const lulusPemeriksaan = true;
const membawaBarangTerlarang = false;

// Operator AND (&&): bernilai true hanya jika kedua kondisi true
const bolehMasuk = punyaTiket && lulusPemeriksaan;
console.log("Boleh Masuk (AND)          :", bolehMasuk);

// Operator OR (||): bernilai true jika salah satu kondisi true
const butuhPemeriksaanUlang = membawaBarangTerlarang || !lulusPemeriksaan;
console.log("Pemeriksaan Ulang (OR)     :", butuhPemeriksaanUlang);

// Operator NOT (!): membalik nilai boolean
console.log("Status Ditolak (NOT masuk) :", !bolehMasuk);
