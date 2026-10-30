// Object.assign(target, ...sources) menyalin properti yang dapat dihitung ke objek target

const target = { a: 1, b: 2 };
const sumber = { b: 4, c: 5 };

const hasilGabung = Object.assign(target, sumber);

console.log("Hasil Object.assign:", hasilGabung);
console.log("Nilai properti b ditimpa oleh objek sumber:", hasilGabung.b);
