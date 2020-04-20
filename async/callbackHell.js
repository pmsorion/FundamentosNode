 function hola(nombre, micallback) {  
     setTimeout(() => {
         console.log(`hola ${nombre}`);   
         micallback(nombre); 
     }, 1000);
 }

 function hablar(callbackHablar) {
     setTimeout(() => {
         console.log('bla bla bla bla');
         callbackHablar();
     }, 1500);
 }


 function adios(nombre, otrocallback) {
     setTimeout(() => {
         console.log(`Adios ${nombre}`)
         otrocallback();
     }, 2000);
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


console.log('inicia');
hola('Francisco', (nombre) => {
    conversacion(nombre, 3, () => {
        console.log('proceso terminado');
    })
})


//  console.log('inicia');
//  hola('francisco' ,(nombre) => {
//      hablar(() => {
//          hablar(() => {
//              hablar(() => {
//                  adios(nombre, () => console.log('finaliza'))
//                  console.log('finaliza proceso mi callback');
//              })
//          })
//      })
//  } )


