//La palabra async no es necesaria en la funciones, porque ya son asicronas
//igual proyectan una sincronia visual.
async function hola(nombre){
    return new Promise(function (resolve, reject){
        setTimeout(function() {
            console.log('Hola '+nombre);
            resolve(nombre);
        }, 1000); 
    });
};

async function hablar(nombre){
    return new Promise((resolve,reject) => {
        setTimeout(function() {
            console.log('bla bla bla bla');
            resolve(nombre);
            //reject('Hay un error');
        }, 1000);
    })
};

async function adios(nombre) {
    return new Promise((resolve, reject) =>{
        setTimeout(function(){
            console.log('Adios '+nombre);
            resolve();
        }, 1000);
    });
}


//await hola('Juan'); // esto es una mala sintaxis
// awati solo es valido dentro de una funcion asincrona
async function main() {
    let nombre = await hola('Juan');
    await hablar();
    await hablar();
    await adios(nombre);
    console.log('Termina el proceso...')
}

console.log('Empezamos el proceso...')
main();
console.log('Esta va a ser la segunda instrucción')
