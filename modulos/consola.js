console.log('cualquier cosa');
console.info('informarcion');
console.error('error');
console.warn('advertencia');

var tabla = [
    {
        a: 1,
        b: 'Fran'
    },
    {
        a: 2,
        b: 'Juanda'
    }
]

console.table(tabla);

console.group('conversacion');
console.log('hola');
console.group('bla');
console.log('bla bla bla');
console.log('bla bla bla');
console.log('bla bla bla');
console.groupEnd('bla');
console.log('adios');
console.groupEnd('conversacion');

console.log('otra cosa');



function funcion1() {
    console.group('funcion1');
    console.log('proceso 1');
    console.log('proceso 2')
    funcion2();
    console.groupEnd('funcion1');
}

function funcion2() {
    console.group('funcion2');
    console.log('metodo1');
    console.log('metodo2');
    console.groupEnd('funcion2');
}

console.log('inicio');
funcion1();

//interesante par ver y contar las veces quie pasamos por un loop etc.
console.count('veces');
console.count('veces');
console.count('veces');
console.count('veces');
console.countReset('veces');
console.count('veces');
console.count('veces');