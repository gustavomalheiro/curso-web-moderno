// destructuring em arrays
const [a] = [10]; //operador de desestruturação em arrays fica do lado direito
console.log(a);

const [n1, , n3, , n5, n6 = 0 ] = [10, 7, 9, 8]; //você atribui valor a cada elemento do vetor. podendo até pular valores.
console.log(n1, n3, n5, n6);

const [, [, nota]] = [[, 8, 8], [9,6,8]];
console.log(nota);