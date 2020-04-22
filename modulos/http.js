const http = require('http');
const PUERTO = 3000;

http.createServer(router).listen(PUERTO);
console.log(`Escuchando en el puerto: ${PUERTO}`);
function router(req, res) {
     console.log('nueva peticion¡');
     console.log(req.url);

     switch (req.url) {
         case '/hola':
             let saludo = hola();
             res.write(saludo);

             res.end();
             break;
        default:
            res.write('Error 404: no se lo que quieres');
            res.end();
     }
}

function hola() {
    return 'hola como estas';
};


// http.createServer((req, res) =>{
//     console.log('nueva peticion¡');
//     console.log(req.url);

//     res.writeHead(201, { 'Content-Type': 'Funcionamiento ok' })

//     //respuesta para el usuario
//     res.write('Hola, estamos usando HTTP de NodeJS')

//     res.end();
// }).listen(PUERTO);

// console.log(`Escuchando en el puerto: ${PUERTO}`);
