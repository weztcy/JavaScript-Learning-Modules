// Penanganan Error Asinkron Menggunakan Blok try...catch

async function prosesDataEksternal(url) {
  try {
    if (!url.startsWith("https://")) {
      throw new Error("Protokol tidak aman! Wajib menggunakan HTTPS.");
    }
    return "Data berhasil ditarik dari " + url;
  } catch (error) {
    console.error("[ERROR ASINKRON DITANGANI]:", error.message);
    return null;
  }
}

prosesDataEksternal("http://situs-tidak-aman.org");
prosesDataEksternal("https://api.resmi.org").then(res => {
  if (res) console.log(res);
});
