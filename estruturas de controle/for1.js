/*
    while tambem pode ser usado para quantidades determinadas.
    porém o for é mais preciso e oficial.
    sempre bom utilizar let em declarações de variáveis para serem usadas em laços, pois ela só vai existir naquele escopo de bloco
    e você não terá acesso a ela depois.
*/

let contador = 1;

while (contador <= 10) {
    console.log(`contador = ${contador}`);
    contador++;
}

for (let i = 1; i <= 10; i++) {
    console.log(`i = ${i}`);
}

const notas = [6, 9, 8, 5, 6, 2];

// uma forma de navegar nos arrays utilizando .lenght
for (let i = 0; i < notas.length; i++) {
    console.log(`nota = ${notas[i]}`);
}