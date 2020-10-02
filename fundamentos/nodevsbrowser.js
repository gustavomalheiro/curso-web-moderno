let a = 3

global.b = 123

this.c = 456 //declarando variáveis no escopo global
this.d = false
this.e = 'teste'

console.log(a)
console.log(this.c)
console.log(global.b)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

//criando uma variável maluca: sem var ou let!
//abc = 3 // não faça isso em casa

console.log(global.abc)

// module.exports = { e: 456, f: false, g: 'teste' }