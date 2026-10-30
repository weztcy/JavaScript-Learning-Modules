// Konfigurasi Lingkungan (Environment Configuration) untuk Backend Production
const config = {
  port: parseInt(process.env.APP_PORT || "3000", 10),
  dbHost: process.env.DB_HOST || "localhost",
  dbPort: 5432,
  isProd: process.env.NODE_ENV === "production"
};

console.log("=== Konfigurasi Backend ===");
console.log("Port Server    :", config.port);
console.log("Database Host  :", config.dbHost);
console.log("Mode Produksi? :", config.isProd);
