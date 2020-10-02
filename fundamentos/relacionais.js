console.log('01)', '1' == 1); //sao iguais sim pois comparo o valor e nao o tipo
console.log('02)', '1' === 1); //nao sao iguais pois compara o tipo e o valor
console.log('03)', '3' != 3); //nao sao diferentes, pois comparo apenas o valor
console.log('03)', '3' !== 3); //sao diferentes, pois comparo apenas o valor e o tipo

console.log('04)', 3 < 2); 
console.log('05)', 3 > 2); 
console.log('06)', 3 <= 2); 
console.log('07)', 3 >= 2); 

const d1 = new Date(0); // 01/01/1970
const d2 = new Date(0); // 01/01/1970

console.log('09)', d1 === d2); 
console.log('10)', d1 == d2); 
console.log('11)', d1.getTime() == d2.getTime());

console.log('12)', undefined == null)
console.log('13)', undefined === null)

// é melhor usar o estritamente igual para levar em consideração os tipos