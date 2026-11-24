// Async Function: Fungsi yang selalu mengembalikan objek Promise secara implisit

async function hitungEstimasiWaktu(jarakKm) {
  const kecepatanRataRata = 60; // km/jam
  const jam = jarakKm / kecepatanRataRata;
  return "Estimasi perjalanan " + jarakKm + " km adalah " + jam.toFixed(1) + " jam.";
}

hitungEstimasiWaktu(150).then(hasil => {
  console.log(hasil);
});
