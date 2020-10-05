const imprimirResultado = function(nota) {
    if(nota >= 7) {
        console.log('Aprovado!');
    } else {
        console.log('Reprovado!');
    }
}

imprimirResultado(10);
imprimirResultado(4);
imprimirResultado('Epa!'); // como javascript é uma linguagem fracamente tipada, ele aceita isso. porém como ele não vai conseguir fazer essa comparação o valor vai ser sempre falso.