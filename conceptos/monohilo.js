console.log('Hola mundo!!!');

let i = 0;

setInterval(() => {
    console.log(i);
    i++;

    if (i === 5) {
        console.log('Forzamos Error')
        var a = a + z;
    }
}, 1000);

console.log('Segunda instruccion');

//muy importante estar pendiente de lo que ocurren todo el momento
//estar pendiente de todos los errores que puedan ocurrir en el program
