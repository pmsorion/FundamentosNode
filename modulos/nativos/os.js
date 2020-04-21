const os = require('os');

//muestra la arquitectura del equipo
//x64
console.log(os.arch());

//plataforma sistema operativo
//win32
console.log(os.platform());

//informaciòn de las cpu del equipo, cuantos core tiene, la velocidad etc
console.log(os.cpus());
console.log(`${os.cpus().length} cores`);

//errores y señales del sistema
//señales de prioridad
console.log(os.constants);

//memoria libre en bytes
//console.log(os.freemem());

const SIZE = 1024;
const kb = (bytes) => bytes / SIZE
const mb = (bytes) => kb(bytes) / SIZE
const gb = (bytes) => mb(bytes) / SIZE

// console.log(kb(os.freemem()));
// console.log(mb(os.freemem()));
console.log(`Memoria libre ${gb(os.freemem())} GB`);
console.log(`Total Memoria ${gb(os.totalmem())} GB`);

//muestra el directorio del usuario
console.log(`El directorio del usuaioro: ${os.homedir()}`);

//directorio de temporales
console.log(`El directorio de archivos temporales: ${os.tmpdir()}`);

//nombre del host o nombre de la maquina
console.log(os.hostname());

//interface de red
console.log(os.networkInterfaces());