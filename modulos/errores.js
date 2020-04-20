function otraFuncion() {
     serompe();
}

function serompe() {
    return 3 + z;
}

function seRompeAsincrona(callback) {
    setTimeout(() => {
        try {
            return 3 + z;
        } catch (error) {
            console.error('error funcion asincrona')
            console.error(error.message);
            callback(error);
        }
        
    }, 1000);
}

try{
    seRompeAsincrona(() => {
        console.log('error')
    });
} catch(err) {
    console.error('error asincrona');
    console.error(err.message);
    console.error(err);
}


// try {
//     otraFuncion();
// } catch(err) {
//     console.error('error en el llamado');
//     console.error(err.message);
//     //console.error(err);
// }

console.log('despues de romper');

//Interesante esto, no lo sabia
// at serompe (c:\Users\fgarcia\Platzi\FundamentosNodeJS\modulos\tempCodeRunnerFile.js:6:16)
// at otraFuncion (c:\Users\fgarcia\Platzi\FundamentosNodeJS\modulos\tempCodeRunnerFile.js:2:6)
// at Object.<anonymous> (c:\Users\fgarcia\Platzi\FundamentosNodeJS\modulos\tempCodeRunnerFile.js:10:5)