const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) { //floor arredonda pra baixo
        case 10:
        case 9:
            console.log('Quadro de Honra');
            break; // faz sair do switch sem executar os demais
        case 8: case 7: // funciona da mesma forma que o de cima
            console.log('Aprovado');
            break;
        case 6: case 5: case 4:
            console.log('Recuperação');
            break;
        case 3: case 2: case 1: case 0:
            console.log('Reprovado');
            break;
        default:
            console.log('Nota inválida');
    }
    console.log('Fim');
}

imprimirResultado(9.5);
imprimirResultado(8.2);
imprimirResultado(6.55);
imprimirResultado(2.33);
imprimirResultado(-1);
imprimirResultado(11);