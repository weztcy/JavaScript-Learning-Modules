// Metode splice(start, deleteCount, ...items) memutasi array asli: menghapus atau menyisipkan

const hari = ["Senin", "Rabu", "Kamis"];
console.log("Hari awal:", hari);

// Menyisipkan "Selasa" pada indeks 1 tanpa menghapus elemen (deleteCount = 0)
hari.splice(1, 0, "Selasa");
console.log("Setelah disisipkan 'Selasa':", hari);

// Menghapus 1 elemen pada indeks 3 ("Kamis") dan menggantinya dengan "Jumat"
const dihapus = hari.splice(3, 1, "Jumat");
console.log("Elemen dihapus:", dihapus);
console.log("Hari akhir    :", hari);
