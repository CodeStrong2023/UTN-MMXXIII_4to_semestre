const fs = require('fs');

//Primero leemos el archivo.txt

function leer(ruta, callback) {
    fs.readFile(ruta, (err, data) => {
        callback(data.toString());
    })
}

leer(`${__dirname}/archivo1.txt`, console.log); //Sintaxis ES6

//Segundo escribimos el archivo1.txt creandolo
function escribir(ruta, contenido, callback) {
    fs.writeFile(ruta, contenido, (err) => {
        if (err) {
            console.log('No se ha podido escribir el archivo', err);
        } else {
            console.log('Se ha escrito el archivo correctamente');
        }
    })
}

//escribir(`${__dirname}/archivo1.txt`,'Reescribimos el archivo', console.log);

//Tercero eliminamos el archivo1.txt
function borrar (ruta, callback) {
    fs.unlink(ruta, callback); //Elimina el archivo de manera asincrona
};

borrar(`${__dirname}/archivo1.txt`, console.log);