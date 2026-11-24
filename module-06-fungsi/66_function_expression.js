// Function Expression menyimpan fungsi anonim ke dalam variabel
// Tidak mengalami hoisting nilai fungsi (variabel let/const berada di Temporal Dead Zone)

const hitungKelilingLingkaran = function(jariJari) {
  const PI = 3.14159;
  return 2 * PI * jariJari;
};

console.log("Keliling lingkaran (r = 7):", hitungKelilingLingkaran(7).toFixed(2));
