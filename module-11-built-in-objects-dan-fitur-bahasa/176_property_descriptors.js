// Property Descriptors: Mengatur atribut writable, enumerable, dan configurable pada properti

const produk = {};

// Mendefinisikan properti dengan kontrol ketat
Object.defineProperty(produk, "sku", {
  value: "PRD-9988",
  writable: false,      // Nilai tidak bisa diubah
  enumerable: true,     // Muncul saat iterasi loop
  configurable: false   // Tidak bisa dihapus atau didefinisikan ulang
});

console.log("Deskriptor properti SKU:");
console.log(Object.getOwnPropertyDescriptor(produk, "sku"));

// Mencoba mengubah properti non-writable
produk.sku = "BERUBAH";
console.log("SKU tetap:", produk.sku);
