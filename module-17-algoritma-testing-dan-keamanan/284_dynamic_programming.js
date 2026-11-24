// Dynamic Programming: Optimasi Perhitungan dengan Tabulasi (Bottom-Up)

function fibonacciDP(n) {
  if (n <= 1) return n;
  const tabel = [0, 1];

  for (let i = 2; i <= n; i++) {
    tabel[i] = tabel[i - 1] + tabel[i - 2];
  }
  return tabel[n];
}

console.log("Fibonacci ke-10 (DP) =", fibonacciDP(10));
console.log("Fibonacci ke-20 (DP) =", fibonacciDP(20));
