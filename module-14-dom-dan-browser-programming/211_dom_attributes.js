// Manipulasi Atribut Elemen: getAttribute, setAttribute, hasAttribute, removeAttribute

class AtributElemenSimulasi {
  constructor() {
    this.attributes = new Map();
  }
  setAttribute(nama, nilai) { this.attributes.set(nama, String(nilai)); }
  getAttribute(nama) { return this.attributes.get(nama) || null; }
  hasAttribute(nama) { return this.attributes.has(nama); }
  removeAttribute(nama) { this.attributes.delete(nama); }
}

const tautan = new AtributElemenSimulasi();
tautan.setAttribute("href", "https://developer.mozilla.org");
tautan.setAttribute("target", "_blank");

console.log("=== Manipulasi Atribut ===");
console.log("Nilai href       :", tautan.getAttribute("href"));
console.log("Memiliki target? :", tautan.hasAttribute("target"));

tautan.removeAttribute("target");
console.log("Setelah remove   :", tautan.hasAttribute("target"));
