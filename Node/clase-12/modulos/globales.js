// this === global = true

// mostrar algo en consola
//console.log("Hola mundo"); // Hola mundo

//mostrar un mensaje en forma de error
//console.error("Error en el programa"); // Error en el programa

// ejecutar un codigo despues de un intervalo de tiempo
//setTimeout(() => {});

//ejecutar un codigo cada intervalo de tiempo
//setInterval(() => {}, 1000);

//da prioridad de ejecucion a una funcion asincronica
//setImmediate(() => {});

//console.log(setInterval);

let i = 0;
let intervalo = setInterval(() => {
    console.log('Hola');
    if (i === 3) {
        clearInterval(intervalo); //detenemos la funcion
    }
    i++;
}, 1000);

setImmediate(()=> {
    console.log('Saludo inmediato');
})

//require();

//console.log(process);

//console.log(__dirname);
//console.log(__filename);

global.miVariable = 'mi variable global';
console.log(miVariable);