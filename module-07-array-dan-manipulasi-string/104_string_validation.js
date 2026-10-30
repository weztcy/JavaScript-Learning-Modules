// Validasi Format String Sederhana

function validasiEmailSederhana(email) {
  if (!email || typeof email !== "string") return false;
  
  // Memeriksa keberadaan karakter '@' dan '.' serta posisi yang valid
  const adaAt = email.includes("@");
  const adaTitik = email.includes(".");
  const posisiAt = email.indexOf("@");
  const posisiTitikTerakhir = email.lastIndexOf(".");
  
  return adaAt && adaTitik && posisiAt > 0 && posisiTitikTerakhir > posisiAt + 1;
}

const emailUji = ["budi@mail.com", "invalid-email.com", "user@domain", "halo@host.id"];
console.log("=== Validasi String Alamat Email ===");
emailUji.forEach(em => {
  console.log(em.padEnd(20), "->", validasiEmailSederhana(em) ? "VALID" : "TIDAK VALID");
});
