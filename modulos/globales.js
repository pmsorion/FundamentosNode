let i = 0;
let intervalo = setInterval(() => {
    console.log('hola intervalo')
    if (i === 3) {
        clearInterval(intervalo);
    }
}, 1000);