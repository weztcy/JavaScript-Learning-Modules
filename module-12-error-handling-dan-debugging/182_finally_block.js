// Blok finally SELALU dijalankan terlepas dari apakah terjadi error atau tidak
// Sangat ideal untuk proses pembersihan (cleanup), seperti menutup koneksi atau file

function simulasiKoneksiDatabase(berhasil) {
  console.log("\n--- Membuka koneksi database ---");
  try {
    if (!berhasil) {
      throw new Error("Koneksi jaringan terputus!");
    }
    console.log("Query data berhasil dieksekusi.");
  } catch (err) {
    console.error("Terjadi masalah:", err.message);
  } finally {
    // Selalu dieksekusi untuk menutup koneksi
    console.log("Pembersihan: Menutup koneksi database dengan aman.");
  }
}

simulasiKoneksiDatabase(true);
simulasiKoneksiDatabase(false);
