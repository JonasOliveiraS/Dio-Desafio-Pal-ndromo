const conteudoVisual = document.querySelector("#conteudoVisual");
const fraseInicial = document.querySelector("#fraseInicial");
const substituicoes = [[' ', ''], ['-', ''], ['ç', 'c'], ['ó', 'o'], ['.', ''], ['?', ''], ['!', ''], ['á', 'a'], ['à', 'a'], ['ã', 'a'], ['ô', 'o'], [',', ''], ['é', 'e'], ['ó', 'o'], [':', ''], ['í', 'i'], ['”', ''], ['“', '']]


document.querySelector("#enviarFraseinicial").addEventListener('click', function (e) {
    e.preventDefault();

    fraseTransformada = fraseInicial.value.split(' ').join('').toLowerCase();
    for (const [caracterAntigo, caracterNovo] of substituicoes) {
        fraseTransformada = fraseTransformada.split(caracterAntigo).join(caracterNovo);
    }
    fraseReversa = fraseTransformada.split('').reverse().join('')

    if (fraseTransformada === fraseReversa) {
        conteudoVisual.innerHTML = `A frase/palavra "${fraseInicial.value}" é um palíndromo.`
    } else {
        conteudoVisual.innerHTML = `A frase/palavra "${fraseInicial.value}" não é um palíndromo.`
    }


})


