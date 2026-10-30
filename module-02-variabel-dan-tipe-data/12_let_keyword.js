// Deklarasi variabel dengan kata kunci 'let' (standar modern ES6+)
// 'let' memiliki sifat block-scoped dan tidak mengizinkan redeklarasi dalam scope yang sama

let saldo = 500000;
console.log("Saldo awal:", saldo);

// Nilai 'let' dapat diubah kembali (reassignment)
saldo = 750000;
console.log("Saldo setelah mutasi:", saldo);

// Demonstrasi block scope pada let
{
  let saldo = 100000; // Hanya berlaku di dalam blok kurung kurawal ini
  console.log("Saldo di dalam blok lokal:", saldo);
}

// Saldo di luar blok tidak terpengaruh oleh variabel di dalam blok
console.log("Saldo di scope utama tetap:", saldo);
