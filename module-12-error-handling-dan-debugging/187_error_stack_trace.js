// Membaca dan Menganalisis Stack Trace untuk Keperluan Investigasi Bug

function prosesSubSistem() {
  const err = new Error("Pengecekan jejak tumpukan fungsi");
  return err.stack;
}

function fungsiUtama() {
  return prosesSubSistem();
}

const trace = fungsiUtama();
console.log("=== Informasi Stack Trace ===");
// Stack trace menampilkan nama file, baris kode, dan fungsi yang dipanggil
console.log(trace.split("\n").slice(0, 3).join("\n"));
