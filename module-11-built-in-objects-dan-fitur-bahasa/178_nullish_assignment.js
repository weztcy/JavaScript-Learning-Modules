// Nullish Assignment (??=): Memberikan nilai HANYA jika variabel bernilai null atau undefined

let konfigurasiPort;
let timeout = 5000;

konfigurasiPort ??= 8080; // Karena konfigurasiPort bernilai undefined, nilai 8080 diberikan
timeout ??= 3000;         // Karena timeout sudah ada (5000), nilainya tidak berubah

console.log("Port   :", konfigurasiPort);
console.log("Timeout:", timeout);
