// Mengenal Berbagai Jenis Standar Error Bawaan JavaScript

// 1. ReferenceError - Mengakses variabel yang tidak ada
try { console.log(variabelGhaib); } catch(e) { console.log("1.", e.name); }

// 2. TypeError - Mengoperasikan nilai yang tidak sesuai tipenya
try { const num = 123; num.toUpperCase(); } catch(e) { console.log("2.", e.name); }

// 3. SyntaxError - Format JSON salah
try { JSON.parse("{ nama: salah }"); } catch(e) { console.log("3.", e.name); }

// 4. RangeError - Nilai numerik di luar batas yang diizinkan
try { const arr = new Array(-5); } catch(e) { console.log("4.", e.name); }

// 5. URIError - Kesalahan decoding URI
try { decodeURIComponent("%"); } catch(e) { console.log("5.", e.name); }
