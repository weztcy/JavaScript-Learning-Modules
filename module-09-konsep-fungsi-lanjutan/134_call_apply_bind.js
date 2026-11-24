// Metode Pemanggilan Fungsi Eksplisit: call(), apply(), dan bind()

function cetakInfoPegawai(departemen, level) {
  console.log("Nama: " + this.nama + " | Departemen: " + departemen + " | Level: " + level);
}

const pegawai1 = { nama: "Satria" };
const pegawai2 = { nama: "Nadia" };

// 1. call() mengirim argumen satu per satu dipisahkan koma
cetakInfoPegawai.call(pegawai1, "Teknologi", "Senior");

// 2. apply() mengirim argumen dalam bentuk Array
cetakInfoPegawai.apply(pegawai2, ["Pemasaran", "Manager"]);

// 3. bind() mengembalikan fungsi baru dengan konteks 'this' yang terkunci
const cetakSatria = cetakInfoPegawai.bind(pegawai1, "Teknologi", "Lead");
cetakSatria();
