// Keyword 'super': Memanggil constructor dan method milik parent class

class Karyawan {
  constructor(nama, gajiPokok) {
    this.nama = nama;
    this.gajiPokok = gajiPokok;
  }

  infoGaji() {
    return "Gaji Pokok: Rp " + this.gajiPokok.toLocaleString("id-ID");
  }
}

class Manajer extends Karyawan {
  constructor(nama, gajiPokok, tunjangan) {
    super(nama, gajiPokok); // Wajib memanggil super() sebelum menggunakan 'this'
    this.tunjangan = tunjangan;
  }

  infoLengkap() {
    return this.nama + " -> " + super.infoGaji() + " + Tunjangan: Rp " + this.tunjangan.toLocaleString("id-ID");
  }
}

const mgr = new Manajer("Danang", 12000000, 4000000);
console.log(mgr.infoLengkap());
