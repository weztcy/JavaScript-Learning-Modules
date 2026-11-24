// Proyek 8: Aplikasi Pemantau Cuaca Berbasis API Mocking

class CuacaService {
  async dapatkanCuaca(kota) {
    return {
      kota: kota,
      temperatur: "28°C",
      kelembaban: "75%",
      ringkasan: "Hujan Ringan"
    };
  }
}

console.log("=== PROYEK: WEATHER SERVICE ===");
const cuaca = new CuacaService();
cuaca.dapatkanCuaca("Semarang").then(res => {
  console.log("Laporan Cuaca " + res.kota + ": " + res.temperatur + ", " + res.ringkasan);
});
