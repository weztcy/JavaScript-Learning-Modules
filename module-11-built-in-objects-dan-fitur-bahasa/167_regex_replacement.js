// Penggantian Teks Menggunakan Regular Expression

const teksSensor = "Hubungi admin di admin@domain.com atau help@service.org.";
const polaEmail = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;

// Mengganti semua email dengan teks sensor
const hasilSensor = teksSensor.replace(polaEmail, "[EMAIL DISENSOR]");
console.log("Teks Asli   :", teksSensor);
console.log("Hasil Sensor:", hasilSensor);
