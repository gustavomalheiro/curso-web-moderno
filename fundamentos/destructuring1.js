// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa; //tire de dentro do objeto o atributo nome e idade. do objeto pessoa.
// é uma forma de em uma única linha tirar mais de uma coisa do objeto
console.log(nome, idade);

const { nome: n, idade: i } = pessoa; //aqui você tira e atribui a outras variáveis
console.log(n, i);

const { sobrenome, bemHumorada = true } = pessoa;// se não vier nada dentro do objeto pessoa, atribua true
console.log(sobrenome, bemHumorada);

//por isso, sempre que for criar algo vazio, utilize null e não undefined

const { endereco: { logradouro, numero, cep = null} } = pessoa;
//extrai de endereco, que está dentro de pessoa, os atributos logradouro e numero. cep não existe, então virá undefined
//tenha certeza que o caminho do dado realmente existe

console.log(logradouro, numero, cep);