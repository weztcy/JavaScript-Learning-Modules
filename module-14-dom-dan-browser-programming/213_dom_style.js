// Manipulasi Style CSS Inline Menggunakan Properti element.style

const elemenTombol = {
  style: {}
};

// Mengatur properti CSS (menggunakan camelCase untuk properti ber-hyphen)
elemenTombol.style.backgroundColor = "#2563eb";
elemenTombol.style.color = "#ffffff";
elemenTombol.style.padding = "10px 20px";
elemenTombol.style.borderRadius = "6px";
elemenTombol.style.border = "none";

console.log("=== Konfigurasi Style Inline DOM ===");
console.log("Style diterapkan pada tombol:");
for (const [properti, nilai] of Object.entries(elemenTombol.style)) {
  console.log("- " + properti.padEnd(16) + ": " + nilai);
}
