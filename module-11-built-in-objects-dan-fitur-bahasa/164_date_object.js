// Objek Bawaan Date: Penanganan Tanggal dan Waktu

const sekarang = new Date();
console.log("Waktu sekarang (ISO) :", sekarang.toISOString());
console.log("Tahun saat ini       :", sekarang.getFullYear());
console.log("Bulan (0-11)         :", sekarang.getMonth());
console.log("Tanggal (1-31)       :", sekarang.getDate());
console.log("Waktu Lokal          :", sekarang.toLocaleTimeString("id-ID"));

const tahunBaru = new Date("2027-01-01T00:00:00Z");
console.log("Format Tanggal Indonesia:", tahunBaru.toLocaleDateString("id-ID", {
  weekday: "long", year: "numeric", month: "long", day: "numeric"
}));
