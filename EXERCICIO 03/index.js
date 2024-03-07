const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44]

const maiorNumero = numeros.reduce(function(a,b) {
    return Math.max(a, b);
}, -Infinity);

console.log(maiorNumero)