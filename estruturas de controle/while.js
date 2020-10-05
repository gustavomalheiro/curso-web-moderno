/*
    while é uma estrutura que é mais apropriada para quantidades indeterminadas de repetições.
    sempre use a estrura que mais se adeque ao problema que está tentando resolver.
*/

function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

let opcao = 0;

while (opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1, 10);
    console.log(`Opcao escolhida foi ${opcao}.`);
}

console.log('Até a próxima!');
