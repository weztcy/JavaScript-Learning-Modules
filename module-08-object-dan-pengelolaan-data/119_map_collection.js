// Struktur Data Map: Koleksi pasangan key-value yang mengizinkan tipe data apa pun sebagai kunci

const kamusMap = new Map();

const kunciObjek = { id: 1 };
kamusMap.set("nama", "Aplikasi POS");
kamusMap.set(100, "Seratus");
kamusMap.set(kunciObjek, "Data Metadata Objek");

console.log("Ukuran Map:", kamusMap.size);
console.log("Ambil 'nama'      :", kamusMap.get("nama"));
console.log("Ambil kunciObjek  :", kamusMap.get(kunciObjek));
console.log("Cek kunci 100     :", kamusMap.has(100));
