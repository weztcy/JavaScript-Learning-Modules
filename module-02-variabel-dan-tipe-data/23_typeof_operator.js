// Operator 'typeof' digunakan untuk memeriksa tipe data dari suatu nilai atau variabel

console.log("typeof 'Halo'      :", typeof "Halo");
console.log("typeof 123         :", typeof 123);
console.log("typeof true        :", typeof true);
console.log("typeof undefined   :", typeof undefined);
console.log("typeof Symbol()    :", typeof Symbol());
console.log("typeof 10n         :", typeof 10n);
console.log("typeof {}          :", typeof {});
console.log("typeof []          :", typeof []); // array juga bertipe object
console.log("typeof function(){} :", typeof function() {}); // function khusus
console.log("typeof null        :", typeof null); // object (dikenal sebagai keunikan historis JS)
