// CommonJS Exports: Mengekspor properti melalui module.exports atau exports

const modulPenyimpan = {};

// Meniru mekanisme module.exports pada CommonJS
modulPenyimpan.exports = {
  penulis: "Tim Pengembang JS",
  simpanData: function(data) {
    return "Data '" + data + "' berhasil disimpan.";
  }
};

console.log("=== CommonJS module.exports ===");
console.log("Penulis Modul :", modulPenyimpan.exports.penulis);
console.log("Operasi Simpan:", modulPenyimpan.exports.simpanData("Siswa Baru"));
