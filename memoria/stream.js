// readableStream.on('data', (chunk) => {
//     data += chunk;
    // console.log(chunk);
    // console.log(chunk.toString());
//})

// readableStream.on('end', () => {
//     console.log(data);
// })


// process.stdout.write('hola');
// process.stdout.write('que');
// process.stdout.write('tal');

const fs = require('fs');
const stream = require('stream');
const util = require ('util');

 let data = '';

 let readableStream = fs.createReadStream(__dirname + '/input.txt');
 readableStream.setEncoding('UTF8');

const Transform = stream.Transform;

function Mayusculas() {
    Transform.call(this);
}

util.inherits(Mayusculas, Transform);

Mayusculas.prototype._transform = (chunk, codif, callback) => {
    chunkMayus = chunk.toString().toUpperCase();
    this.push(chunkMayus);
    callback();
}

let mayus = new Mayusculas();

readableStream
    .pipe(mayus)
    .pipe(process.stdout);

