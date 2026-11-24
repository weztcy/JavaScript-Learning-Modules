// Deep Copy: Menyalin seluruh hierarki objek hingga tingkat terdalam secara independen

const konfigurasiKompleks = {
  tema: "Gelap",
  koneksi: { timeout: 5000, retry: 3 }
};

// Menggunakan structuredClone() bawaan JavaScript modern
const salinanMendalam = structuredClone(konfigurasiKompleks);

// Mengubah properti bersarang pada salinan
salinanMendalam.koneksi.timeout = 10000;

console.log("Timeout Asli    :", konfigurasiKompleks.koneksi.timeout); // Tetap 5000 (aman!)
console.log("Timeout Salinan :", salinanMendalam.koneksi.timeout);      // 10000
