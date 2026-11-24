// Operator 'instanceof' memeriksa apakah suatu objek merupakan instance dari suatu Class atau Constructor

class Hewan {}
class Burung extends Hewan {}

const elang = new Burung();

console.log("elang instanceof Burung:", elang instanceof Burung); // true
console.log("elang instanceof Hewan :", elang instanceof Hewan);  // true (karena inheritance)
console.log("elang instanceof Object:", elang instanceof Object); // true (puncak rantai prototype)
console.log("elang instanceof Array :", elang instanceof Array);  // false
