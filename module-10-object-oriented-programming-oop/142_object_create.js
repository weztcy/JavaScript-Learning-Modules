// Object.create(proto): Membuat objek baru dengan prototype yang ditentukan secara eksplisit

const hewanProto = {
  bersuara: function() {
    console.log(this.nama + " mengeluarkan suara khas.");
  }
};

// Objek kucing mewarisi metode dari hewanProto
const kucing = Object.create(hewanProto);
kucing.nama = "Milo";

kucing.bersuara();
console.log("Apakah prototype kucing adalah hewanProto?", Object.getPrototypeOf(kucing) === hewanProto);
