// Optional Chaining Lanjutan: Memanggil method bersarang dan mengakses array secara aman

const dataSistem = {
  server: {
    dapatkanStatus: () => ({ online: true, cpuLoad: "18%" })
  },
  layanan: ["Auth", "Billing"]
};

// Akses method yang mungkin tidak ada
console.log("Status Server:", dataSistem.server?.dapatkanStatus?.().cpuLoad);
console.log("Status Database:", dataSistem.database?.dapatkanStatus?.()); // undefined tanpa error

// Akses indeks array secara opsional
console.log("Layanan 1:", dataSistem.layanan?.[0]);
console.log("Layanan 5:", dataSistem.layanan?.[5]);
