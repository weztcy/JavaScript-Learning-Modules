// Rantai Promise (Promise Chaining) menggunakan .then() dan penanganan error dengan .catch()

function ambilUserId() {
  return Promise.resolve(101);
}

function ambilDetailProfil(userId) {
  return Promise.resolve({ id: userId, nama: "Laksana", role: "Developer" });
}

ambilUserId()
  .then(id => {
    console.log("Langkah 1: User ID diperoleh ->", id);
    return ambilDetailProfil(id);
  })
  .then(profil => {
    console.log("Langkah 2: Profil pengguna ->", profil.nama, "(" + profil.role + ")");
  })
  .catch(err => {
    console.error("Terjadi kegagalan:", err.message);
  });
