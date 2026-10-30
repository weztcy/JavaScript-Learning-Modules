// Nested Objects: Objek bersarang di dalam objek lain

const perusahaan = {
  nama: "Teknologi Nusantara",
  lokasi: {
    kota: "Jakarta Selatan",
    kodePos: "12190",
    koordinat: { lat: -6.2297, lng: 106.8166 }
  },
  manajemen: {
    ceo: "Irfan Santoso",
    cto: "Maya Putri"
  }
};

console.log("Nama Perusahaan:", perusahaan.nama);
console.log("Kota           :", perusahaan.lokasi.kota);
console.log("CTO            :", perusahaan.manajemen.cto);
