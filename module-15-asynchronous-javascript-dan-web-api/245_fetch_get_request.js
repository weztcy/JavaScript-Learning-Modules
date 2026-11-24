// HTTP GET Request: Mengambil data dari server

async function ambilDataCuaca(kota) {
  console.log("Mengirim GET request untuk kota:", kota);
  
  // Simulasi penanganan respons GET
  const mockResponse = {
    kota: kota,
    suhu: "29°C",
    kondisi: "Cerah Berawan"
  };

  return mockResponse;
}

ambilDataCuaca("Bandung").then(data => {
  console.log("Hasil Cuaca:", data.kota, "| Suhu:", data.suhu, "| Kondisi:", data.kondisi);
});
