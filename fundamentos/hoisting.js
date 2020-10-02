console.log('a =', a);
var a = 2; //hoisting: o javascript joga a declaração da variável pra cima do código
console.log('a =', a);


/*
seria a mesma coisa que isso para o interpretador:
var = a;
console.log('a =', a);
a = 2; 
console.log('a =', a);
*/

console.log('b =', b);
let b = 2; //esse conceito de hoisting não funciona com o let, apenas com var
console.log('b =', b);
