const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
]

function maiorPalavra (cidades) {
    const maior = cidades.reduce(function(palavra, palavraMaior) {
        return palavra.length > palavraMaior.length ? palavra : palavraMaior;
},"");
    return maior;
}

const cidadesArray = maiorPalavra(cidades)

console.log(cidadesArray)


