let i = 0;
let intervalo = setInterval(() => {
    console.log('hola intervalo')
    if (i === 3) {
        clearInterval(intervalo);
    }
    i++;
}, 1000);

setImmediate(() => {
    console.log('Saludo inmediato');
});

//requiere para agregar modulos a nuestro proyecto 

//console.log(process);
//muestra el directorio donde estamos trabajando
console.log(__dirname);
//muestra el directorio y el archivo que temenos abierto
console.log(__filename);
//es buena practica no usar variables globales

global.miVariable = 'mi variable global';
console.log(miVariable);
