const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2];
numeros.sort((a, b) => a - b);
console.log(numeros);

const numeros1 = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2];
numeros1.sort((a, b) => b - a);
console.log(numeros1);

const numeros3 = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2];
numeros3.sort();
console.log(numeros3);

const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"];
frutas.sort((a, b) => a.localeCompare(b));
console.log(frutas);

const frutas2 = ["Banana", "Amora", "abacaxi", "uva", "Pera"];
frutas2.sort((a, b) => b.localeCompare(a));
console.log(frutas2);

const frutas3 = ["Banana", "Amora", "abacaxi", "uva", "Pera"];
frutas3.sort((a, b) => a.length - b.length);
console.log(frutas3);



