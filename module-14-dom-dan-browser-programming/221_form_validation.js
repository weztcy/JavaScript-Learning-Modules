// Validasi Formulir HTML secara Programatis Sebelum Pengiriman Data

function validasiFormulirPendaftaran(dataForm) {
  const errors = [];

  if (!dataForm.nama || dataForm.nama.trim().length < 3) {
    errors.push("Nama minimal terdiri dari 3 karakter.");
  }
  if (!dataForm.email || !dataForm.email.includes("@")) {
    errors.push("Email tidak valid.");
  }
  if (!dataForm.setujuKetentuan) {
    errors.push("Anda wajib menyetujui syarat & ketentuan.");
  }

  return {
    valid: errors.length === 0,
    errors: errors
  };
}

const formInput = { nama: "Al", email: "al@mail", setujuKetentuan: false };
console.log("Hasil Validasi Form:", validasiFormulirPendaftaran(formInput));
