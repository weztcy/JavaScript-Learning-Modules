// URL dan URLSearchParams API: Penguraian dan manipulasi alamat URL

const urlTarget = new URL("https://toko.id:8080/pencarian?kategori=elektronik&halaman=2#review");

console.log("=== Penguraian URL API ===");
console.log("Protocol :", urlTarget.protocol);
console.log("Hostname :", urlTarget.hostname);
console.log("Port     :", urlTarget.port);
console.log("Pathname :", urlTarget.pathname);
console.log("Kategori :", urlTarget.searchParams.get("kategori"));
console.log("Halaman  :", urlTarget.searchParams.get("halaman"));
console.log("Hash     :", urlTarget.hash);
