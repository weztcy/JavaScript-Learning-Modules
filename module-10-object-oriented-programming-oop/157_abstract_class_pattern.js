// Pola Abstract Class: Class yang dirancang khusus untuk diturunkan dan tidak boleh diinstansiasi langsung

class PembayaranAbstrak {
  constructor() {
    if (this.constructor === PembayaranAbstrak) {
      throw new Error("Abstract Class 'PembayaranAbstrak' tidak boleh diinstansiasi secara langsung!");
    }
  }

  // Method kontrak wajib
  proses(jumlah) {
    throw new Error("Method 'proses()' wajib diimplementasikan oleh kelas turunan!");
  }
}

class QRISPayment extends PembayaranAbstrak {
  proses(jumlah) {
    console.log("Memproses pembayaran QRIS sebesar: Rp", jumlah);
  }
}

const bayar = new QRISPayment();
bayar.proses(50000);
