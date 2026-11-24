// Event Listener: addEventListener() untuk Menangani Interaksi Pengguna

class TombolSimulasi {
  constructor(label) {
    this.label = label;
    this.listeners = {};
  }
  addEventListener(event, callback) {
    if (!this.listeners[event]) this.listeners[event] = [];
    this.listeners[event].push(callback);
  }
  klik() {
    console.log("Pengguna mengklik tombol '" + this.label + "'...");
    if (this.listeners["click"]) {
      this.listeners["click"].forEach(cb => cb({ type: "click", target: this.label }));
    }
  }
}

const btnSimpan = new TombolSimulasi("Simpan Perubahan");
btnSimpan.addEventListener("click", (e) => {
  console.log("-> Event Handler Dipicu: Data formulir berhasil disimpan!");
});

btnSimpan.klik();
