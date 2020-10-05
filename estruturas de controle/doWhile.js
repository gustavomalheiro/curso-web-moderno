/*
    a do while é uma variante da while, que garante que haja pelo menos uma vez a repetição do laço.
    é pouco usada. 
*/

function gerarNumeroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

let opcao = -1; // diferente do while, se opcao valer -1, ele AINDA vai executar, pois a verificação só é feita na última parte do laço.

do {
    opcao = gerarNumeroAleatorioEntre(-1, 10);
    console.log(`Opção escolhida foi ${opcao}.`)
} while (opcao != -1);

console.log('Até a próxima!');

