// Program Menentukan Tahun Kabisat
// Tahun kabisat habis dibagi 4, kecuali tahun abad (habis dibagi 100) yang harus habis dibagi 400

function cekTahunKabisat(tahun) {
  const isKabisat = (tahun % 4 === 0 && tahun % 100 !== 0) || (tahun % 400 === 0);
  return isKabisat;
}

const contohTahun = [2000, 2020, 2024, 2100, 2023];
console.log("=== Program Pengujian Tahun Kabisat ===");
contohTahun.forEach(th => {
  const status = cekTahunKabisat(th) ? "TAHUN KABISAT (366 hari)" : "BUKAN KABISAT (365 hari)";
  console.log("Tahun", th, "->", status);
});
