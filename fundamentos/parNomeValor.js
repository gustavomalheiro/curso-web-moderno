//par nome/valor
const saudacao = 'Opa'; // contexto léxico 1

function exec() {
    const saudacao = 'Faaala'; //contexto léxico 2
    return saudacao
}
//essas constantes com esse mesmo nome, só funcionam pois estão em 2 contextos léxicos diferentes
//se fossem declaradas no mesmo contexto, haveriam erros.
//se ao invés de const fosse var, ele apenas iria sobrescrever o valor inicial de saudacao
// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(saudacao);
console.log(exec())
console.log(cliente)