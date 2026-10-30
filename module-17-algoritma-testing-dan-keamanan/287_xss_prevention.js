// Pencegahan Cross-Site Scripting (XSS): Sanitasi Karakter Entitas HTML Berbahaya

function sanitasiHTML(stringKotor) {
  const petaEntitas = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  };
  return stringKotor.replace(/[&<>"']/g, c => petaEntitas[c]);
}

const inputPenggunaJahat = "<script>alert('Akun Anda Diretas!')</script>";
const inputAman = sanitasiHTML(inputPenggunaJahat);

console.log("Input Asli (Bahaya):", inputPenggunaJahat);
console.log("Input Bersih (Aman) :", inputAman);
