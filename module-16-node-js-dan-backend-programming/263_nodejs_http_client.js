// HTTP Client: Mengirimkan Permintaan Jaringan Menggunakan 'node:http' atau 'node:https'
const https = require('node:https');

console.log("=== HTTP Client Mengirim Permintaan Jaringan ===");

// Demonstrasi pemanggilan URL aman
https.get('https://nodejs.org/dist/index.json', (res) => {
  console.log("Status Code Respon:", res.statusCode);
  console.log("Header Content-Type:", res.headers['content-type']);
  res.resume(); // Menghabiskan data stream
}).on('error', (e) => {
  console.log("Info Jaringan Simulasi:", e.message);
});
