// Mixins: Menyisipkan perilaku (method) ke class tanpa menggunakan single inheritance yang kaku

const LoggerMixin = {
  log(pesan) {
    console.log("[" + new Date().toISOString() + "] [LOG] " + pesan);
  }
};

const SerializableMixin = {
  serialize() {
    return JSON.stringify({ nama: this.nama });
  }
};

class PenggunaApp {
  constructor(nama) {
    this.nama = nama;
  }
}

// Menyisipkan kapabilitas mixin ke prototype class
Object.assign(PenggunaApp.prototype, LoggerMixin, SerializableMixin);

const u = new PenggunaApp("Wahyu");
u.log("Pengguna berhasil login ke sistem.");
console.log("Representasi Serialized:", u.serialize());
