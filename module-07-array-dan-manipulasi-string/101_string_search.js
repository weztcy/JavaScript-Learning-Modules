// Pencarian Teks dalam String: includes, startsWith, endsWith, indexOf

const dokumen = "laporan_keuangan_tahunan_2026.pdf";

console.log("Nama File           :", dokumen);
console.log("Apakah file PDF?    :", dokumen.endsWith(".pdf"));
console.log("Apakah file laporan?:", dokumen.startsWith("laporan"));
console.log("Mengandung 'keuangan':", dokumen.includes("keuangan"));
console.log("Posisi kata 'tahun' :", dokumen.indexOf("tahunan"));
