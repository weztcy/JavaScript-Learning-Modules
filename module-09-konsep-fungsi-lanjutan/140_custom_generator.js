// Custom Generator untuk Deret Bilangan Fibonacci

function* deretFibonacci(batasMaksimal) {
  let a = 0;
  let b = 1;
  let count = 0;

  while (count < batasMaksimal) {
    yield a;
    const temp = a + b;
    a = b;
    b = temp;
    count++;
  }
}

console.log("10 Bilangan Pertama Deret Fibonacci:");
const fib = deretFibonacci(10);
console.log([...fib].join(", "));
