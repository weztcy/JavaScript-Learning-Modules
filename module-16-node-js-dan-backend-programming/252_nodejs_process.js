// Objek Bawaan 'process': Informasi status dan lingkungan runtime Node.js

console.log("=== Informasi Objek process ===");
console.log("Process ID (PID) :", process.pid);
console.log("Current Dir      :", process.cwd());
console.log("Penggunaan Memori:");
const mem = process.memoryUsage();
console.log("- Heap Terpakai  :", (mem.heapUsed / 1024 / 1024).toFixed(2), "MB");
console.log("- RSS            :", (mem.rss / 1024 / 1024).toFixed(2), "MB");
