//Variables y Constantes

const nombre = "Luis";
let apellido = "Cruz";

let valorDado = 5;
valorDado = 4;

console.log( nombre, apellido, valorDado );

if (true) {
    let valorDado = 6;

    console.log(valorDado); //Si se comenta valorDado = 6, busca fuera del alcance del if
}