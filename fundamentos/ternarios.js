const resultado = nota => { //função arrow (lambda) com corpo utilizando o operador ternário
    return nota >= 7 ? 'Aprovado' : 'Reprovado' 
}

const resultadoDois = nota => nota >= 7 ? 'Aprovado' : 'Reprovado' //função arrow (lambda) sem corpo utilizando o operador ternário

console.log(resultado(7.1))
console.log(resultadoDois(6.7))
