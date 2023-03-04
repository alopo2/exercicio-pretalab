let pares = 0;
let impares = 0;

for (let num = 0; num <= 40; num++) {
    console.log(num);
  if (num % 2 === 0) {
    pares++;
  } else {
    impares++;
  }
}

console.log(`Foram impressos ${pares} números pares e ${impares} números ímpares.`)