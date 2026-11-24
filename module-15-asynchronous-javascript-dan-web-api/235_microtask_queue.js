// Microtask Queue (Promise callbacks, queueMicrotask) memiliki prioritas LEBIH TINGGI daripada Macrotask Queue (setTimeout)

console.log("1. Synchronous Awal");

setTimeout(() => {
  console.log("4. Macrotask (setTimeout)");
}, 0);

Promise.resolve().then(() => {
  console.log("3. Microtask (Promise.then)");
});

queueMicrotask(() => {
  console.log("3. Microtask (queueMicrotask)");
});

console.log("2. Synchronous Akhir");
