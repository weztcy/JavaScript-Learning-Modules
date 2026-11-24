// Private Class Fields (ditandai dengan simbol '#')
// Benar-benar terenkapsulasi dan tidak dapat diakses dari luar tubuh class

class AkunKeamanan {
  #kunciEnkripsi; // Field privat

  constructor(username, kunci) {
    this.username = username;
    this.#kunciEnkripsi = kunci;
  }

  verifikasi(inputKunci) {
    return this.#kunciEnkripsi === inputKunci;
  }
}

const akun = new AkunKeamanan("admin_sec", "super_secret_99");
console.log("Username publik :", akun.username);
console.log("Verifikasi benar:", akun.verifikasi("super_secret_99"));
console.log("Verifikasi salah:", akun.verifikasi("salah"));
