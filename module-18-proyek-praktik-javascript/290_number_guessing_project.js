// Proyek 2: Permainan Tebak Angka Lengkap dengan Riwayat dan Penilaian Skor

class GameTebakAngka {
  constructor(angkaRahasia) {
    this.angkaRahasia = angkaRahasia;
    this.riwayatTebakan = [];
    this.selesai = false;
  }

  tebak(angka) {
    if (this.selesai) return "Permainan sudah berakhir!";
    this.riwayatTebakan.push(angka);

    if (angka === this.angkaRahasia) {
      this.selesai = true;
      return "Tepat sekali! Anda menang dalam " + this.riwayatTebakan.length + " percobaan.";
    } else if (angka < this.angkaRahasia) {
      return "Terlalu kecil!";
    } else {
      return "Terlalu besar!";
    }
  }
}

console.log("=== PROYEK: GAME TEBAK ANGKA ===");
const game = new GameTebakAngka(73);
console.log("Tebak 50 :", game.tebak(50));
console.log("Tebak 80 :", game.tebak(80));
console.log("Tebak 73 :", game.tebak(73));
