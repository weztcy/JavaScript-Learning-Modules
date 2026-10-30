// Type Coercion: Konversi tipe data otomatis oleh JavaScript

// 1. Coercion string: operator + dengan salah satu operand string memicu penggabungan string
console.log("'5' + 2     =", "5" + 2, "(Tipe:", typeof ("5" + 2) + ")");

// 2. Coercion angka: operator matematika selain + mengonversi string ke angka
console.log("'10' - 4    =", "10" - 4, "(Tipe:", typeof ("10" - 4) + ")");
console.log("'6' * '3'   =", "6" * "3", "(Tipe:", typeof ("6" * "3") + ")");

// 3. Coercion boolean: konversi nilai ke boolean dalam konteks logika
console.log("Boolean('halo') =", Boolean("halo"));
console.log("Boolean('')     =", Boolean(""));
