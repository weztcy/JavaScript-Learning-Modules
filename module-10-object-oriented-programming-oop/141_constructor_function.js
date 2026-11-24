// Constructor Function: Pola pembuatan objek sebelum pengenalan sintaks class (ES5)

function Mobil(merek, tahun) {
  // Properti unik untuk setiap instance
  this.merek = merek;
  this.tahun = tahun;
  
  this.info = function() {
    return this.merek + " keluaran tahun " + this.tahun;
  };
}

const mobilA = new Mobil("Honda Civic", 2022);
const mobilB = new Mobil("Toyota Corolla", 2024);

console.log("Mobil A:", mobilA.info());
console.log("Mobil B:", mobilB.info());
