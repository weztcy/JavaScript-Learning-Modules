// Program Kalkulator Diskon Belanja Berdasarkan Jumlah Pembelian

function hitungTotalSetelahDiskon(totalBelanja) {
  let persentaseDiskon = 0;

  if (totalBelanja >= 500000) {
    persentaseDiskon = 0.20; // Diskon 20%
  } else if (totalBelanja >= 250000) {
    persentaseDiskon = 0.10; // Diskon 10%
  } else if (totalBelanja >= 100000) {
    persentaseDiskon = 0.05; // Diskon 5%
  }

  const potonganHarga = totalBelanja * persentaseDiskon;
  const bayarAkhir = totalBelanja - potonganHarga;

  return {
    totalBelanja: totalBelanja,
    diskonPersen: persentaseDiskon * 100 + "%",
    potongan: potonganHarga,
    totalBayar: bayarAkhir
  };
}

console.log("=== Kalkulator Diskon Pembelian ===");
const simulasiA = hitungTotalSetelahDiskon(650000);
console.log("Belanja Rp 650.000:", simulasiA);

const simulasiB = hitungTotalSetelahDiskon(180000);
console.log("Belanja Rp 180.000:", simulasiB);
