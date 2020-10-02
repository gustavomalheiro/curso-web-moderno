{
    {
        {
            { 
                var sera = 'Será?'; //dentro de um bloco de código que não seja uma função ela estará visível.
            }
        }
    }
}

sera = 123;
console.log(sera);


function teste() {
    var local = 123; //quando define uma variável dentro de uma função, o escopo dessa função não é global.
    console.log(local);
}

teste();


//você deve evitar criar variáveis que vão pro escopo global, pois existe a possibilidade de você sobrescrever essa variável
//variável só tem 2 escopos possíveis: global ou local (escopo de função)