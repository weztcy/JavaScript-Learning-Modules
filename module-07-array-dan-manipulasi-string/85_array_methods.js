// Metode-metode dasar pada Array: join, concat, includes, indexOf

const warnaPrimer = ["Merah", "Kuning", "Biru"];
const warnaSekunder = ["Hijau", "Oranye", "Ungu"];

// 1. concat() - menggabungkan dua array menjadi array baru
const semuaWarna = warnaPrimer.concat(warnaSekunder);
console.log("Hasil concat:", semuaWarna);

// 2. join() - menggabungkan seluruh elemen menjadi satu string
console.log("Hasil join: ", semuaWarna.join(" - "));

// 3. includes() - memeriksa keberadaan elemen
console.log("Mengandung 'Biru'?", semuaWarna.includes("Biru"));

// 4. indexOf() - mencari indeks kemunculan elemen
console.log("Indeks 'Kuning'   :", semuaWarna.indexOf("Kuning"));
