// Proyek 11: Arsitektur Aplikasi Chat Real-Time

class ChatRoom {
  constructor(namaRuang) {
    this.namaRuang = namaRuang;
    this.pesan = [];
  }
  kirim(pengirim, teks) {
    const dataPesan = { pengirim, teks, waktu: new Date().toLocaleTimeString() };
    this.pesan.push(dataPesan);
    console.log("[" + this.namaRuang + "] " + pengirim + ": " + teks);
  }
}

console.log("=== PROYEK: REAL-TIME CHAT APPLICATION ===");
const room = new ChatRoom("Komunitas Developer");
room.kirim("Andra", "Halo rekan-rekan pengembang!");
room.kirim("Bagus", "Halo Andra, selamat bergabung!");
