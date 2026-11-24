// Memahami Peran Code Formatter (Prettier) untuk Konsistensi Gaya Penulisan

console.log("=== Konsep Formatter dengan Prettier ===");
console.log("Prettier memformat ulang spasi, tanda petik, indentasi, dan panjang baris secara otomatis.");

const contohFormat = {
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "none"
};

console.log("Konfigurasi Standar Prettier (.prettierrc):");
console.log(JSON.stringify(contohFormat, null, 2));
console.log("Hasilnya: Semua pengembang dalam tim memiliki gaya penulisan kode yang identik dan rapi.");
