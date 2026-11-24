// Metode-metode Lengkap pada Set: add, has, delete, clear, forEach

const tagUnik = new Set();

tagUnik.add("javascript");
tagUnik.add("tutorial");
tagUnik.add("webdev");
tagUnik.add("javascript"); // Nilai duplikat diabaikan otomatis

console.log("Jumlah tag:", tagUnik.size);
console.log("Memiliki tag 'webdev'?", tagUnik.has("webdev"));

tagUnik.delete("tutorial");
console.log("Daftar tag sekarang:", Array.from(tagUnik));
