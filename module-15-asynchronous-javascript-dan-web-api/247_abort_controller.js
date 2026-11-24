// AbortController: Membatalkan operasi asinkron atau fetch request yang sedang berlangsung

const controller = new AbortController();
const signal = controller.signal;

signal.addEventListener("abort", () => {
  console.log("Sinyal pembatalan diterima: Operasi asinkron dihentikan!");
});

console.log("Memulai proses asinkron...");
// Batalkan operasi
controller.abort();
console.log("Apakah operasi dibatalkan?", signal.aborted);
