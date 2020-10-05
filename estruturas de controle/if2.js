function teste1(num) {
    if (num > 7)
        console.log(num); //essa sentença está associada ao if, pois é a primeira.

    console.log('Final'); //ele não vai identificar esse sentença como associada ao if, pois sem chaves o javascript só entende a primeira sentença. sendo assim, ele va executa-la de qualquer forma
}

// é sempre interessante usar as chaves mesmo que seja apenas uma sentença de código.

//teste1(6);
//teste1(8);

//não use o ; nas estruturas de controle
/*
function teste2(num) {
    if (num > 7); {
        console.log(num);
    }
}

teste2(6);
teste2(8);
*/