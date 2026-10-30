// Operator Increment (++) dan Decrement (--)
// Prefix (++x) mengubah nilai sebelum dievaluasi, Postfix (x++) mengubah setelah dievaluasi

let angkaPostfix = 5;
console.log("Nilai awal:", angkaPostfix);
console.log("Saat dievaluasi postfix (angkaPostfix++) :", angkaPostfix++); // Mencetak 5
console.log("Setelah postfix                          :", angkaPostfix);   // Bernilai 6

let angkaPrefix = 5;
console.log("Nilai awal:", angkaPrefix);
console.log("Saat dievaluasi prefix (++angkaPrefix)   :", ++angkaPrefix); // Mencetak 6
console.log("Setelah prefix                           :", angkaPrefix);   // Bernilai 6

// Pengurangan decrement
let countdown = 3;
countdown--;
console.log("Setelah countdown--                      :", countdown);
