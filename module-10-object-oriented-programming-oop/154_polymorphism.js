// Polymorphism: Berbagai kelas turunan merespons pesan method yang sama dengan perilaku spesifik masing-masing

class Notifikasi {
  kirim(pesan) {
    console.log("Mengirim notifikasi umum:", pesan);
  }
}

class NotifikasiEmail extends Notifikasi {
  kirim(pesan) {
    console.log("[EMAIL] Mengirim ke inbox:", pesan);
  }
}

class NotifikasiSMS extends Notifikasi {
  kirim(pesan) {
    console.log("[SMS] Mengirim SMS ke seluler:", pesan);
  }
}

// Memproses polimorfisme melalui daftar objek heterogen
const antrianNotif = [new NotifikasiEmail(), new NotifikasiSMS(), new Notifikasi()];
antrianNotif.forEach(n => n.kirim("Kode OTP Anda: 8821"));
