let num1 = 1;
let num2 = 2;

num1++; //posfixada
console.log(num1);

--num1; //prefixada (prioridade maior do que o posfixado)
console.log(num1);

console.log(++num1 === num2--); //fuja desse padrão
console.log(num1 === num2);