/*
    no capítulo de switch nós vimos a palavra break, que causava um desvio de fluxo.
    agora, além desse, veremos o continue, que interrompe apenas aquela execução e parte para a próxima.
    o break só influencia no switch, laços for e while.
    o continue, funciona só dentro do laço for e while.
    o uso dessas duas palavras é desencorajado para não causar confusões.
    as duas formas causam desvio de fluxo, porém o break causa desvio para fora do bloco corrente que ele suporta
    ele basicamente interrompe a repetição corrente e vai pra próxima. 
    também é possível utilizar um break com rótulos, porém não é muito incentivado pois lembra os códigos com goto super confusos
    mas basicamente serve para você rotular breaks e poder sair de um laço externo dentro de um laço interno, ecerrando assim toda a execução desse laço externo e tudo que havia dentro dele.
    pode utilizar esses desvios de fluxo, mas tenha cautela.
*/

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let x in nums) {
    if (x == 5) { //comparando o indice e não o valor para qual ele aponta
        break; // o break não age em cima de um bloco if, ele age no bloco mais próximo dele do tipo for, while ou tipo switch.
    }
    console.log(`${x} = ${nums[x]}`);
}

for (let y in nums) {
    if (y == 5) {
        continue; // só vai interromper a repetição cujo o índice seja igual a 5.
    }
    console.log(`${y} = ${nums[y]}`);
}

externo: for (let a in nums) {
    for (let b in nums) {
        if (a == 2 && b == 3) {
            break externo; // quand o ele encontrou o par 2,3 ele encontrou o break do for externo, encerrando assim os dois laços.
            
        }
        console.log(`Par = ${a}, ${b}`);
    }
}

console.log('Fim!');