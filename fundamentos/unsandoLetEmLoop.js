const funcs = [];

for (let i = 0; i < 10; i++) {
    funcs.push(function(){
        console.log(i);
    })
}

funcs[2]();
funcs[6]();
funcs[8](); // como let tem um escopo de bloco, os valores são passados para dentro dele.

//isso tem a ver com o conceito de clausure. ela tem consciencia do local em que ela foi definida.