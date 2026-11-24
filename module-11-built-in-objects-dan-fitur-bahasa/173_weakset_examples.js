// Penggunaan Praktis WeakSet: Melacak Objek yang Telah Diproses

const daftarObjekDiproses = new WeakSet();

function prosesTransaksi(transaksi) {
  if (daftarObjekDiproses.has(transaksi)) {
    console.log("Peringatan: Transaksi ini sudah pernah diproses sebelumnya!");
    return;
  }

  console.log("Memproses transaksi ID:", transaksi.id, "Rp", transaksi.nominal);
  daftarObjekDiproses.add(transaksi);
}

const tx1 = { id: "TX-001", nominal: 150000 };
prosesTransaksi(tx1);
prosesTransaksi(tx1); // Percobaan duplikasi terdeteksi
