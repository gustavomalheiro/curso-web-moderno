const funcs = [];

for (var i = 0; i < 10; i++) {
    funcs.push(function(){
        console.log(i);
    })
}

funcs[2]();
funcs[8](); // como let tem um escopo de bloco, os valores são passados para dentro dele.