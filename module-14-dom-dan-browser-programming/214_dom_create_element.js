// Membuat Elemen DOM Baru secara Dinamis dengan document.createElement()

function buatKartuProduk(nama, harga) {
  // Simulasi langkah pembuatan elemen
  const kartu = { tag: "div", className: "produk-card", anak: [] };
  const judul = { tag: "h4", textContent: nama };
  const labelHarga = { tag: "span", textContent: "Rp " + harga.toLocaleString("id-ID") };

  kartu.anak.push(judul, labelHarga);
  return kartu;
}

const produkBaru = buatKartuProduk("Mouse Wireless Ergonomis", 175000);
console.log("=== Pembuatan Elemen DOM Dinamis ===");
console.log("Root Elemen : <" + produkBaru.tag + " class='" + produkBaru.className + "'>");
produkBaru.anak.forEach(child => {
  console.log("  <" + child.tag + ">" + child.textContent + "</" + child.tag + ">");
});
