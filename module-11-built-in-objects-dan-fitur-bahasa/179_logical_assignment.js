// Logical Assignment Operators: &&= dan ||=

let opsiLogging = true;
let judulDokumen = "";

// AND Assignment (&&=): menetapkan nilai baru jika nilai saat ini truthy
opsiLogging &&= "Level: DEBUG";

// OR Assignment (||=): menetapkan nilai baru jika nilai saat ini falsy
judulDokumen ||= "Dokumen Tanpa Judul";

console.log("Opsi Logging  :", opsiLogging);
console.log("Judul Dokumen :", judulDokumen);
