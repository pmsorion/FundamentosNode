const { exec, spawn } = require('child_process');


//esto es igual
//const exec = require('child_process').exec;
//para linux
//exec ('ls -la', (err, stout, sterr) =>  {
//para windowns    
//exec ('dir', (err, stout, sterr) =>  {    
//permite ejutar todo lo que este fuera en el sistema operativo    

//  exec ('dir /w', (err, stout, sterr) =>  {
//      if (err) {
//          console.error(err);
//          return false;
//      }
//      console.log(stout);
//  })

// exec ('node modulos/consola.js', (err, stout, sterr) =>  {
//     if (err) {
//         console.error(err);
//         return false;
//     }
//     console.log(stout);
// })

 let proceso = spawn('cmd.exe', ['/c', 'dir']);

 console.log(proceso.pid);
 console.log(proceso.connected);

proceso.stdout.on('data',  (dato)  => {
    console.log('esta muerto el proceso???')
    console.log(proceso.killed);
    console.log(dato.toString());
})

proceso.on('exit', () => {
    console.log('el proceso termino');
    console.log('ahora si esta muerto el proceso???')
    console.log(proceso.killed);
})
