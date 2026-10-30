// Object Destructuring (ES6) mengekstrak properti objek ke variabel lokal

const konfigurasiServer = {
  host: "127.0.0.1",
  port: 8080,
  protokol: "https",
  maxKoneksi: 100
};

// Ekstrak dengan nama variabel baru (aliasing) dan default value
const { host, port, ssl = true } = konfigurasiServer;

console.log("Host Server:", host);
console.log("Port Server:", port);
console.log("Status SSL :", ssl);
