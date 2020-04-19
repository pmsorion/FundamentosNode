function hola(nombre, micallback) {
    console.log('soy una funcion asincrona');    
    setTimeout(() => {
        console.log(`hola ${nombre}`);   
        micallback(); 
    }, 1000);
}

function adios(nombre, otrocallback) {
    setTimeout(() => {
        console.log(`Adios ${nombre}`)
        otrocallback();
    }, 1500);
}


console.log('inicia');
hola('francisco' ,() => {
    adios('Francisco', () => console.log('finaliza'))
    console.log('finaliza proceso mi callback');
} )


