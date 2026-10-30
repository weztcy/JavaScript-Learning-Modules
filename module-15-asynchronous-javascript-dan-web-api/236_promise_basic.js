// Promise: Objek yang mewakili penyelesaian atau kegagalan operasi asinkron
// Memiliki 3 status: pending, fulfilled, atau rejected

function cekStokBarang(jumlahDiminta) {
  return new Promise((resolve, reject) => {
    const stokTersedia = 10;
    
    if (jumlahDiminta <= stokTersedia) {
      resolve("Stok aman! Permintaan " + jumlahDiminta + " unit disetujui.");
    } else {
      reject(new Error("Stok tidak mencukupi! Hanya tersedia " + stokTersedia + " unit."));
    }
  });
}

console.log("Memulai verifikasi Promise...");
cekStokBarang(5)
  .then(pesan => console.log("Fulfilled:", pesan))
  .catch(err => console.error("Rejected :", err.message));
