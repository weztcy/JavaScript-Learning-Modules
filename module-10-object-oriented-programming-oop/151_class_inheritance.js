// Class Inheritance: Pewarisan class menggunakan kata kunci 'extends'

class Kendaraan {
  constructor(merek) {
    this.merek = merek;
  }

  jalan() {
    console.log(this.merek + " sedang bergerak maju.");
  }
}

// SepedaMotor mewarisi properti dan method Kendaraan
class SepedaMotor extends Kendaraan {
  standarSamping() {
    console.log(this.merek + ": Standar samping diturunkan.");
  }
}

const motor = new SepedaMotor("Yamaha");
motor.jalan();
motor.standarSamping();
