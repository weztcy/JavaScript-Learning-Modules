// Method Overriding: Menimpa implementasi method milik parent class pada child class

class Bentuk {
  gambar() {
    console.log("Menggambar bentuk geometris umum.");
  }
}

class Lingkaran extends Bentuk {
  // Override method gambar()
  gambar() {
    console.log("Menggambar lingkaran sempurna dengan radius tertentu (O).");
  }
}

const b1 = new Bentuk();
const b2 = new Lingkaran();

b1.gambar();
b2.gambar();
