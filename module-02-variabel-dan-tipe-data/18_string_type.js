// Tipe data String merepresentasikan urutan karakter teks
// String dapat ditulis menggunakan kutip tunggal (''), kutip ganda (""), atau backtick (``)

const kutipTunggal = 'Belajar JavaScript';
const kutipGanda = "Frontend dan Backend";
const templateLiteral = `Topik: ${kutipTunggal} - ${kutipGanda}`;

console.log(templateLiteral);
console.log("Panjang teks:", templateLiteral.length);
console.log("Karakter pertama:", templateLiteral[0]);
console.log("Huruf kapital:", templateLiteral.toUpperCase());
