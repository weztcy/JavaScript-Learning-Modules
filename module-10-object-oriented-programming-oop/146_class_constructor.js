// Constructor dalam Class: Method khusus yang otomatis dieksekusi saat 'new' dipanggil

class RekeningBank {
  constructor(nomorRekening, saldoAwal = 0) {
    this.nomorRekening = nomorRekening;
    this.saldo = saldoAwal;
    console.log("Rekening baru berhasil dibuka:", this.nomorRekening);
  }
}

const rek = new RekeningBank("ACC-9901", 250000);
console.log("Saldo rekening saat ini: Rp", rek.saldo);
