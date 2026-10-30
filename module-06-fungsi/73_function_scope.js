// Function Scope: Variabel yang dideklarasikan di dalam fungsi bersifat privat bagi fungsi tersebut

function prosesOrder() {
  const idPesanan = "ORD-" + Math.floor(Math.random() * 1000);
  console.log("Memproses pesanan internal:", idPesanan);
  return idPesanan;
}

const hasilOrder = prosesOrder();
console.log("ID Pesanan berhasil dibuat:", hasilOrder);
// idPesanan tidak dapat diakses di luar prosesOrder()
