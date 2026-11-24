// Unit Testing Sederhana Tanpa Framework Eksternal (Custom Test Runner)

function uji(deskripsi, fungsiTes) {
  try {
    fungsiTes();
    console.log("[LOLOS] " + deskripsi);
  } catch (err) {
    console.error("[GAGAL] " + deskripsi + " ->", err.message);
  }
}

// Fungsi yang diuji
const kali = (a, b) => a * b;

uji("Mengalikan dua bilangan positif", () => {
  if (kali(4, 5) !== 20) throw new Error("4 * 5 harus 20");
});

uji("Mengalikan bilangan dengan nol", () => {
  if (kali(7, 0) !== 0) throw new Error("7 * 0 harus 0");
});
