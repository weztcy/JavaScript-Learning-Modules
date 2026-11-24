// Fetch API: Standar modern untuk melakukan HTTP Request (tersedia global di Node.js modern dan Browser)

async function demoFetch() {
  console.log("=== Konsep Fetch API ===");
  console.log("Memanggil endpoint API secara asinkron...");
  
  // Demonstrasi pembacaan respon simulasi
  const responSimulasi = {
    ok: true,
    status: 200,
    json: async () => ({ status: "OK", timestamp: Date.now() })
  };

  const data = await responSimulasi.json();
  console.log("Status Respon HTTP:", responSimulasi.status);
  console.log("Data Payload      :", data);
}

demoFetch();
