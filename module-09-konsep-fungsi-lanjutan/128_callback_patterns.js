// Pola Callback Standar: Node.js style (Error-First Callback)

function bacaDataSimulasi(id, callback) {
  // Simulasi operasi pembacaan data
  if (id <= 0) {
    // Parameter pertama adalah error objek
    return callback(new Error("ID tidak valid! ID harus lebih besar dari 0."), null);
  }

  const data = { id: id, nama: "Produk Premium", harga: 75000 };
  // Parameter pertama null menandakan tidak ada error
  callback(null, data);
}

bacaDataSimulasi(10, (err, hasil) => {
  if (err) {
    console.error("Gagal membaca data:", err.message);
  } else {
    console.log("Berhasil membaca data:", hasil);
  }
});
