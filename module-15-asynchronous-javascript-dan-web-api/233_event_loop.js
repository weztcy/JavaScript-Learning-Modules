// Event Loop: Mekanisme konkurensi yang mengoordinasikan eksekusi Call Stack, Web APIs, dan Task Queue

console.log("1. Eksekusi Synchronous di Call Stack.");

setTimeout(() => {
  console.log("3. Callback Timer dari Macrotask Queue dijalankan oleh Event Loop.");
}, 0);

console.log("2. Eksekusi Synchronous selesai, Call Stack kosong.");
