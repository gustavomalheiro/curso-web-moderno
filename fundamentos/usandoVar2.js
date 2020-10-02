var numero = 1;
{
    var numero = 2;
    console.log('dentro =', numero) 
}
//dentro de blocos que não sejam funções o escopo também é global.
console.log('fora =', numero);