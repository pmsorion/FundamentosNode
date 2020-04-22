function asincrona(callback) {
    setTimeout(() => {
        try {
            let a = 3 + z;
            callback(null, a);
        } catch (error) {
            callback(error);
        }
    }, 1000);
};





 asincrona( (error, dato) => {
     if (error) {
          console.error('tenermos error');
          console.error(error);
          return false;
          //no funciona con funciones asicronas
         //throw error;
     }

     console.log('todo bien', dato);
 })