function hola(nombre, micallback) { 
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

function hablar(nombre) {
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


function adios(nombre, otrocallback) {
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

//-----------------

//callback hell

console.log('iniciando el proceso..');
hola('Francisco')
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(adios)
    .then((nombre) => { console.log('terminado el proceso') })
    .catch(error => { 
        console.error('ha habiado un error');
        console.error(error);
    })
