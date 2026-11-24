// Percabangan 'else if' digunakan untuk mengevaluasi beberapa kondisi secara bertahap

const suhuAir = 45;
console.log("Suhu air:", suhuAir, "derajat Celsius");

if (suhuAir <= 0) {
  console.log("Kondisi: Air membeku (Padat / Es).");
} else if (suhuAir < 100) {
  console.log("Kondisi: Air berada pada fase Cair normal.");
} else {
  console.log("Kondisi: Air mendidih dan menguap (Gas).");
}
