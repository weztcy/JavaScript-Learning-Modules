// Local Storage: Penyimpanan data persisten di sisi klien peramban (browser)

class StorageSimulasi {
  constructor() { this.store = new Map(); }
  setItem(k, v) { this.store.set(k, String(v)); }
  getItem(k) { return this.store.get(k) || null; }
  removeItem(k) { this.store.delete(k); }
  clear() { this.store.clear(); }
}

const storage = (typeof localStorage !== "undefined") ? localStorage : new StorageSimulasi();

console.log("=== Browser Local Storage ===");
storage.setItem("temaAplikasi", "dark-mode");
storage.setItem("tokenAuth", "JWT-ABC-12345");

console.log("Tema tersimpan  :", storage.getItem("temaAplikasi"));
console.log("Token tersimpan :", storage.getItem("tokenAuth"));
