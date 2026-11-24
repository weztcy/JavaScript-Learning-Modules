// Closure Factory: Menghasilkan pemvalidasi data berdasarkan aturan yang dikonfigurasi

function pembuatValidatorPanjang(minimal, maksimal) {
  return function(teks) {
    const panjang = teks.length;
    return panjang >= minimal && panjang <= maksimal;
  };
}

const validasiPassword = pembuatValidatorPanjang(8, 20);
const validasiKodepos = pembuatValidatorPanjang(5, 5);

console.log("Password 'pass12345' (panjang 9) valid?", validasiPassword("pass12345"));
console.log("Password 'pendek' (panjang 6) valid?   ?", validasiPassword("pendek"));
console.log("Kode pos '12345' valid?                ?", validasiKodepos("12345"));
