// Instance Methods: Method yang melekat pada prototype class dan beroperasi pada data instance

class DompetElektronik {
  constructor(namaPemilik) {
    this.namaPemilik = namaPemilik;
    this.saldo = 0;
  }

  topUp(jumlah) {
    this.saldo += jumlah;
    console.log("Top-up Rp", jumlah, "berhasil. Saldo baru: Rp", this.saldo);
  }

  bayar(jumlah) {
    if (jumlah > this.saldo) {
      console.log("Transaksi gagal: Saldo tidak mencukupi!");
      return false;
    }
    this.saldo -= jumlah;
    console.log("Pembayaran Rp", jumlah, "berhasil. Sisa saldo: Rp", this.saldo);
    return true;
  }
}

const dompet = new DompetElektronik("Yohan");
dompet.topUp(100000);
dompet.bayar(45000);
