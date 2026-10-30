// Prototype: Mekanisme pewarisan fitur antarfungsi dan objek dalam JavaScript

function Person(nama) {
  this.nama = nama;
}

// Mendefinisikan method pada prototype agar tidak diduplikasi di setiap instance
Person.prototype.sapa = function() {
  return "Halo, nama saya " + this.nama;
};

const orang1 = new Person("Rizky");
const orang2 = new Person("Fani");

console.log(orang1.sapa());
console.log("Apakah kedua objek berbagi prototype method yang sama?", orang1.sapa === orang2.sapa);
