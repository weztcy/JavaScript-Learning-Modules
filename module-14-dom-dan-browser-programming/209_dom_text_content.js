// Manipulasi Teks dengan textContent: Membaca dan Mengubah Teks Mentah Tanpa Parsing HTML

class ElementSimulasi {
  constructor(teks) {
    this._textContent = teks;
  }
  get textContent() { return this._textContent; }
  set textContent(val) {
    // textContent memperlakukan tag HTML sebagai teks murni (aman dari XSS injection)
    this._textContent = val;
  }
}

const elemenParagraf = new ElementSimulasi("Teks awal sebelum diubah.");
console.log("Teks semula:", elemenParagraf.textContent);

elemenParagraf.textContent = "Teks berhasil diperbarui dengan aman via textContent!";
console.log("Teks baru  :", elemenParagraf.textContent);
