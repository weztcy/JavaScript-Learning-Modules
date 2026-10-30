// Class (ES6): Sintaks modern berbasis prototype untuk memodelkan Blueprint Objek

class Buku {
  // Konstruktor dan properti diinisialisasi
  constructor(judul, penulis) {
    this.judul = judul;
    this.penulis = penulis;
  }

  // Method instance
  detail() {
    return "'" + this.judul + "' karya " + this.penulis;
  }
}

const novel = new Buku("Laskar Pelangi", "Andrea Hirata");
console.log("Informasi Buku:", novel.detail());
