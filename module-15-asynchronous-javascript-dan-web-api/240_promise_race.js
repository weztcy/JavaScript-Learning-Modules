// Promise.race(): Mengembalikan hasil dari Promise tercepat yang selesai pertama kali

const serverA = new Promise(res => setTimeout(() => res("Respon Server Jakarta (50ms)"), 50));
const serverB = new Promise(res => setTimeout(() => res("Respon Server Singapura (20ms)"), 20));

console.log("Mencari server dengan respon tercepat...");
Promise.race([serverA, serverB])
  .then(pemenang => {
    console.log("Server tercepat yang menang:", pemenang);
  });
