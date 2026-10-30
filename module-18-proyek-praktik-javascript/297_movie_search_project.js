// Proyek 9: Aplikasi Pencarian dan Rekomendasi Film

class KatalogFilm {
  constructor(filmList) { this.filmList = filmList; }
  cariBerdasarkanGenre(genre) {
    return this.filmList.filter(f => f.genre.toLowerCase() === genre.toLowerCase());
  }
}

const dataFilm = [
  { judul: "Interstellar", genre: "Sci-Fi", tahun: 2014 },
  { judul: "Inception", genre: "Sci-Fi", tahun: 2010 },
  { judul: "The Godfather", genre: "Drama", tahun: 1972 }
];

console.log("=== PROYEK: PENCARIAN FILM ===");
const appFilm = new KatalogFilm(dataFilm);
console.log("Film Sci-Fi Ditemukan:", appFilm.cariBerdasarkanGenre("Sci-Fi").map(f => f.judul).join(", "));
