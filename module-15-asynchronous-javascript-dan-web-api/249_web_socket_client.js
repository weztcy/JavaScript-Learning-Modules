// WebSocket: Komunikasi dua arah (full-duplex) secara real-time antara klien dan server

console.log("=== Konsep Protokol WebSocket (ws:// atau wss://) ===");

class WebSocketKlienSimulasi {
  constructor(url) {
    this.url = url;
    console.log("Menghubungkan ke server WebSocket di:", this.url);
  }
  kirimPesan(pesan) {
    console.log("-> Mengirim pesan:", pesan);
  }
  terimaPesan(pesan) {
    console.log("<- Menerima pesan real-time:", pesan);
  }
}

const ws = new WebSocketKlienSimulasi("wss://chat.belajarjs.org/room/1");
ws.kirimPesan("Halo semua, saya baru bergabung!");
ws.terimaPesan("Admin: Selamat datang di ruang diskusi.");
