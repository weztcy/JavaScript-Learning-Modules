// Pola Validasi Input Defensif untuk Mencegah Kesalahan Runtime

function transferSaldo(pengirim, penerima, jumlah) {
  // Pemeriksaan tipe dan nilai
  if (typeof pengirim !== "string" || pengirim.trim() === "") {
    throw new TypeError("Nama pengirim harus berupa string tidak kosong!");
  }
  if (typeof penerima !== "string" || penerima.trim() === "") {
    throw new TypeError("Nama penerima harus berupa string tidak kosong!");
  }
  if (typeof jumlah !== "number" || jumlah <= 0 || isNaN(jumlah)) {
    throw new RangeError("Jumlah transfer harus berupa angka positif!");
  }

  return {
    status: "Berhasil",
    detail: pengirim + " mentransfer Rp " + jumlah.toLocaleString("id-ID") + " kepada " + penerima
  };
}

try {
  console.log(transferSaldo("Andi", "Citra", 150000));
  // Uji input salah
  transferSaldo("Andi", "Citra", -5000);
} catch (err) {
  console.log("[VALIDASI GAGAL]:", err.message);
}
