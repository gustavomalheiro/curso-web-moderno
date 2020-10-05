function soBoaNoticia(nota) {
    if(nota >= 7) {
        console.log('Aprovado com ' + nota);
    }
}

soBoaNoticia(8.1); //só imprime no ocnsole se a nota for maior do que 7.
soBoaNoticia(6.1);

function seForVerdadeEuFalo(valor) {
    if(valor) { // o javascript considera que aqui deve ter um valor boolean (verdadeiro ou falso)
        console.log('É verdade... ' + valor);
    }
}

// você pode passar algo que NÃO é boolean no contexto de um bloco if, que ele vai resolver e converter pra boolean.
seForVerdadeEuFalo(); // undefined = falso
seForVerdadeEuFalo(null); // null = falso
seForVerdadeEuFalo(undefined); // declarando undefined (nao faz sentido) = falso
seForVerdadeEuFalo(NaN); // not a number = falso
seForVerdadeEuFalo(''); // string vazia = falso
seForVerdadeEuFalo(0); // 0 (único número falso) = falso
seForVerdadeEuFalo(-1); // -1 (qualquer outro número que não seja 0) = verdadeiro
seForVerdadeEuFalo(' '); // string apenas com um espaço em branco = verdadeiro
seForVerdadeEuFalo('?'); // string com símbolos = verdadeiro
seForVerdadeEuFalo([]); // array vazio = verdadeiro
seForVerdadeEuFalo([1, 2]); // array com elementos = verdadeiro
seForVerdadeEuFalo({}); // objeto vazio = falso
