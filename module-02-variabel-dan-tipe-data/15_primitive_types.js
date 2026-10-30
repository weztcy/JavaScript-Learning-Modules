// JavaScript memiliki 7 tipe data primitif:
// string, number, bigint, boolean, undefined, null, dan symbol.

const dataString = "Teks";
const dataNumber = 42;
const dataBigInt = 9007199254740991n;
const dataBoolean = true;
const dataUndefined = undefined;
const dataNull = null;
const dataSymbol = Symbol("unik");

// Nilai primitif bersifat immutable (nilainya tidak dapat diubah secara in-place)
console.log("1. String    :", typeof dataString, "->", dataString);
console.log("2. Number    :", typeof dataNumber, "->", dataNumber);
console.log("3. BigInt    :", typeof dataBigInt, "->", dataBigInt.toString());
console.log("4. Boolean   :", typeof dataBoolean, "->", dataBoolean);
console.log("5. Undefined :", typeof dataUndefined, "->", dataUndefined);
console.log("6. Null      :", typeof dataNull, "(historis bertipe object) ->", dataNull);
console.log("7. Symbol    :", typeof dataSymbol, "->", dataSymbol.toString());
