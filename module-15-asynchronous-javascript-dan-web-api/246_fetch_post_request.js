// HTTP POST Request: Mengirimkan data ke server (misal formulir pendaftaran)

async function kirimDataPelanggan(pelanggan) {
  console.log("Mengirim POST request ke endpoint /api/pelanggan...");
  console.log("Payload Header : Content-Type: application/json");
  console.log("Payload Body   :", JSON.stringify(pelanggan));

  // Simulasi jawaban dari backend server
  return {
    id: "PEL-" + Math.floor(Math.random() * 9000 + 1000),
    status: "Terdaftar",
    waktu: new Date().toLocaleTimeString()
  };
}

kirimDataPelanggan({ nama: "Kusuma", email: "kusuma@web.id" }).then(res => {
  console.log("Konfirmasi Server:", res);
});
