// Referensi Objek: Objek disimpan sebagai referensi memori, bukan nilai independen

const objekAwal = { judul: "Belajar JavaScript" };

// variabel referensiB mengarah ke alamat memori yang SAMA dengan objekAwal
const referensiB = objekAwal;

referensiB.judul = "Mastering Node.js";

console.log("Judul pada objekAwal  :", objekAwal.judul);  // Turut berubah!
console.log("Judul pada referensiB :", referensiB.judul);
console.log("Apakah referensinya sama?", objekAwal === referensiB); // true
