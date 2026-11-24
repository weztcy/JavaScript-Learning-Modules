// IIFE (Immediately Invoked Function Expression)
// Fungsi yang langsung dieksekusi seketika setelah didefinisikan, berguna mengisolasi variabel

const hasilKonfigurasi = (function() {
  const port = 8080;
  const host = "localhost";
  const versi = "1.0.0";

  return {
    urlLengkap: "http://" + host + ":" + port,
    versiAplikasi: versi
  };
})();

console.log("Hasil inisialisasi IIFE:", hasilKonfigurasi);
