// Dynamic Import: Memuat modul secara dinamis saat runtime menggunakan import() yang mengembalikan Promise

async function muatModulDinamis(namaModul) {
  console.log("Meminta pemuatan modul secara dinamis:", namaModul);
  
  // Simulasi import() asinkron
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        pesan: "Modul " + namaModul + " berhasil dimuat atas permintaan (on-demand)!",
        waktuMuat: new Date().toLocaleTimeString()
      });
    }, 10);
  });
}

(async () => {
  const modul = await muatModulDinamis("analitik");
  console.log("Status:", modul.pesan);
  console.log("Waktu :", modul.waktuMuat);
})();
