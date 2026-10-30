// Percabangan 'if' mengeksekusi blok kode hanya jika kondisi bernilai true

const totalBelanja = 150000;
const batasMinimalGratisOngkir = 100000;

console.log("Total Belanja:", totalBelanja);

// Memeriksa syarat promo gratis ongkir
if (totalBelanja >= batasMinimalGratisOngkir) {
  console.log("Selamat! Anda berhak mendapatkan promo Gratis Ongkir.");
}

console.log("Transaksi selesai diproses.");
