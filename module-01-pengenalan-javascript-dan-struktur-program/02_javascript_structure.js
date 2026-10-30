// Struktur dasar program JavaScript terdiri dari pernyataan (statements),
// ekspresi (expressions), dan blok kode yang dibungkus dengan kurung kurawal {}

// Pernyataan deklarasi variabel
let namaBahasa = "JavaScript";
let tahunRilis = 1995;

// Blok kode kondisional untuk memeriksa tahun rilis
if (tahunRilis < 2000) {
  // Blok pernyataan yang dieksekusi jika kondisi bernilai true
  console.log(namaBahasa + " diciptakan pada era awal web (" + tahunRilis + ").");
}

// Pemanggilan fungsi terpisah sebagai bagian dari struktur alur program
function sapaPengembang(nama) {
  return "Halo, " + nama + "! Selamat belajar struktur JavaScript.";
}

console.log(sapaPengembang("Programmer"));
