// Parameter adalah variabel yang didefinisikan dalam tanda kurung fungsi,
// sedangkan argumen adalah nilai aktual yang dikirimkan saat fungsi dipanggil

function hitungBiayaKirim(beratKg, tarifPerKg, asuransi) {
  const biayaPokok = beratKg * tarifPerKg;
  const totalBiaya = biayaPokok + asuransi;
  return totalBiaya;
}

// Pemanggilan dengan 3 argumen konkret
const totalKirim = hitungBiayaKirim(3, 15000, 5000);
console.log("Total biaya pengiriman:", totalKirim);
