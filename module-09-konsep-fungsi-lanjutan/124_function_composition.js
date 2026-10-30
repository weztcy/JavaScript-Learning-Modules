// Function Composition: Menggabungkan beberapa fungsi sederhana untuk membangun alur komputasi

const tambahDua = x => x + 2;
const kaliTiga = x => x * 3;
const kuadratkan = x => x * x;

// Compose: f(g(h(x))) - dieksekusi dari kanan ke kiri
const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x);

const kalkulasiPipa = compose(kuadratkan, kaliTiga, tambahDua);
// Alur untuk x = 4: (4 + 2) = 6 -> (6 * 3) = 18 -> (18^2) = 324

console.log("Hasil komposisi fungsional untuk x = 4:", kalkulasiPipa(4));
