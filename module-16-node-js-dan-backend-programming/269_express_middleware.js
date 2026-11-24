// Express Middleware: Fungsi yang Memiliki Akses ke Request (req), Response (res), dan Next (next)
const express = require('express');

const app = express();

// Custom Logger Middleware
const loggerMiddleware = (req, res, next) => {
  console.log("[LOG] " + req.method + " " + req.url);
  next(); // Lanjutkan ke handler berikutnya
};

app.use(loggerMiddleware);

console.log("Middleware logging berhasil dipasang ke alur request Express.");
