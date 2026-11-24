// Function Currying: Mengubah fungsi dengan banyak argumen menjadi rangkaian fungsi satu argumen

// Fungsi standar f(a, b, c) -> Curried f(a)(b)(c)
function tambahCurry(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}

// Menggunakan sintaks arrow function ringkas
const volumeCurry = panjang => lebar => tinggi => panjang * lebar * tinggi;

console.log("Hasil tambah currying (2)(3)(4) =", tambahCurry(2)(3)(4));
console.log("Volume balok (5)(4)(2)          =", volumeCurry(5)(4)(2));
