// BigInt digunakan untuk bilangan bulat berukuran sangat besar
// yang melebihi batas aman Number.MAX_SAFE_INTEGER (2^53 - 1 = 9007199254740991).

const batasMaksimalNumber = Number.MAX_SAFE_INTEGER;
console.log("Batas Maksimal Safe Integer:", batasMaksimalNumber);

// Jika ditambahkan 2 pada tipe Number biasa, presisi akan hilang
console.log("Presisi Number biasa:", batasMaksimalNumber + 1 === batasMaksimalNumber + 2); // true (tidak akurat!)

// Menggunakan BigInt dengan akhiran 'n' atau BigInt()
const angkaBigIntA = 9007199254740991n;
const angkaBigIntB = BigInt("9007199254740992");

const totalBigInt = angkaBigIntA + angkaBigIntB;
console.log("Hasil penjumlahan BigInt:", totalBigInt.toString());
