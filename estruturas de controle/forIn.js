/*
    ele percorre os atributchos de uma determinada estrutura. 
    existem muitas outras formas de percorres um array.
    então podemos observar que o for in vai percorrer todos os elementos de um array ou de um objeto. 
    mas ele percorre os "atributos", então é mais interessante utilizar para objetos. 
    no caso do array tem formas muito mais interessantes de o fazê-lo.
*/

const notas = [0, 1, 2, 3, 4, 5, 6, 7];

// o for in não vai te dar as notas em si. ele vai te dar o índice (atributos de um array).

for (let i in notas) {
    console.log(i, notas[i]);
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 45
}

for (let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`);
}
