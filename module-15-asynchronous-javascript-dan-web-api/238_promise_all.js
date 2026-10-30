// Promise.all(): Menunggu SEMUA Promise selesai; gagal segera jika salah satu rejected

const p1 = Promise.resolve("Data Pengguna Berhasil");
const p2 = new Promise(resolve => setTimeout(() => resolve("Data Transaksi Berhasil"), 20));
const p3 = Promise.resolve("Data Notifikasi Berhasil");

console.log("Menunggu seluruh Promise paralel selesai...");
Promise.all([p1, p2, p3])
  .then(hasil => {
    console.log("Semua data berhasil diterima:");
    hasil.forEach((h, i) => console.log((i + 1) + ".", h));
  });
