async function hola(nombre, micallback) { 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (true) {
                console.log(`hola ${nombre}`);   
                resolve(nombre); 
            } else {
                reject('Error al saludar');
            }
            
        }, 1000);
    });
}

async function hablar(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (true) {
                console.log('bla bla bla bla');
                resolve(nombre);
            } else {
                reject('Error encontrado al hablar');
            }
            
        }, 500);
    });
}

async function adios(nombre, otrocallback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (true) {
                console.log(`Adios ${nombre}`)
                resolve();
            } else {
                reject('error al despedirse');
            }
            
        }, 2000);
    });
}

function conversacion(nombre, veces, callback) {
   if (veces >0) {
       hablar(() => { 
           conversacion(nombre, --veces, callback);
       })
   } else {
       adios(nombre, callback);
   }
  
}

async function main() {
    let nombre = await hola('Francisco');
    await hablar();
    await hablar();
    await hablar();
    await hablar();
    await hablar();
    await adios(nombre);
    console.log('adios await');
}

console.log('hola async');
main();