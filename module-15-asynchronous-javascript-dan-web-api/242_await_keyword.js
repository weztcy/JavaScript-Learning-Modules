// Keyword 'await': Menunggu penyelesaian Promise secara synchronous-like di dalam fungsi async

function tunda(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function alurPemesanan() {
  console.log("1. Memvalidasi pesanan...");
  await tunda(20);
  console.log("2. Memotong stok barang...");
  await tunda(20);
  console.log("3. Mengirim email konfirmasi...");
  return "Pesanan berhasil diselesaikan!";
}

alurPemesanan().then(pesan => console.log(pesan));
