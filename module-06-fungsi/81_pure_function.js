// Pure Function: Fungsi yang selalu menghasilkan output sama untuk input yang sama
// dan tidak menimbulkan efek samping (side effects) seperti mengubah variabel global

// Contoh Pure Function
function hitungTotalBelanja(harga, jumlah, pajak) {
  return (harga * jumlah) * (1 + pajak);
}

console.log("Panggilan 1:", hitungTotalBelanja(10000, 2, 0.1));
console.log("Panggilan 2 (input sama, hasil identik):", hitungTotalBelanja(10000, 2, 0.1));
