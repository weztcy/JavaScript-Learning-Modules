// Penggunaan titik koma (semicolon) dalam JavaScript
// JavaScript memiliki mekanisme Automatic Semicolon Insertion (ASI),
// namun penulisan titik koma secara eksplisit sangat dianjurkan untuk mencegah ambiguitas.

// Pernyataan dengan titik koma eksplisit (Best Practice)
const pesanA = "Gunakan titik koma untuk kejelasan alur kode.";
console.log(pesanA);

// Kasus di mana ASI bisa menyebabkan kesalahan jika titik koma diabaikan:
function ambilData() {
  // Jika 'return' dipisah dengan baris baru tanpa nilai, ASI menyisipkan titik koma setelah return
  return {
    status: "Sukses",
    kode: 200
  };
}

const respon = ambilData();
console.log("Status respon fungsi:", respon.status);
