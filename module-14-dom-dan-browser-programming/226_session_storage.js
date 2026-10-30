// Session Storage: Penyimpanan data sementara yang hilang saat tab peramban ditutup

class SessionStorageSimulasi {
  constructor() { this.sesi = new Map(); }
  setItem(k, v) { this.sesi.set(k, String(v)); }
  getItem(k) { return this.sesi.get(k) || null; }
}

const sess = (typeof sessionStorage !== "undefined") ? sessionStorage : new SessionStorageSimulasi();

console.log("=== Browser Session Storage ===");
sess.setItem("stepRegistrasi", "Langkah 2: Verifikasi OTP");
console.log("Status langkah sesi pengguna:", sess.getItem("stepRegistrasi"));
