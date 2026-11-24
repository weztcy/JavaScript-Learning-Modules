// Pola Penanganan Error Berulang (Retry Pattern) dengan Backoff Sederhana

function operasiJaringanRentan(percobaan) {
  if (percobaan < 3) {
    throw new Error("Koneksi timeout pada percobaan ke-" + percobaan);
  }
  return "Data sukses diterima pada percobaan ke-" + percobaan;
}

function eksekusiDenganRetry(maksimalRetry) {
  for (let i = 1; i <= maksimalRetry; i++) {
    try {
      console.log("Mencoba eksekusi percobaan #" + i);
      const hasil = operasiJaringanRentan(i);
      console.log("-> Berhasil!", hasil);
      return hasil;
    } catch (err) {
      console.log("-> Gagal:", err.message);
      if (i === maksimalRetry) {
        console.error("-> Batas retry tercapai. Operasi dibatalkan.");
      }
    }
  }
}

eksekusiDenganRetry(3);
