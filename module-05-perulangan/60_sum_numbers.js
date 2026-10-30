// Menghitung Jumlah Akumulasi Bilangan dari 1 hingga N

function hitungTotalPenjumlahan(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i; // Akumulasikan nilai i ke dalam total
  }
  return total;
}

const n = 10;
console.log("Penjumlahan angka 1 sampai " + n + " =", hitungTotalPenjumlahan(n));
console.log("Verifikasi rumus n*(n+1)/2 =", (n * (n + 1)) / 2);
