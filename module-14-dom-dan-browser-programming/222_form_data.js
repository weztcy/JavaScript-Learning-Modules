// Menggunakan Objek FormData untuk Mengumpulkan Nilai Form Secara Ringkas

class FormDataSimulasi {
  constructor() {
    this.fields = new Map();
  }
  append(kunci, nilai) { this.fields.set(kunci, nilai); }
  get(kunci) { return this.fields.get(kunci); }
  entries() { return this.fields.entries(); }
}

const fd = new FormDataSimulasi();
fd.append("username", "developer_muda");
fd.append("kategori", "Frontend");
fd.append("fileLampiran", "resume.pdf");

console.log("=== Isi FormData ===");
for (const [kunci, nilai] of fd.entries()) {
  console.log("- " + kunci.padEnd(14) + ": " + nilai);
}
