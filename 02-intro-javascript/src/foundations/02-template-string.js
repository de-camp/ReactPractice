//Template Strings
const nombre = "Luis";
const apellido = "Carballo";

// const nombreCompleto = nombre + " " + apellido;
const nombreCompleto = `El nombre completo es: ${nombre} ${apellido}`;
console.log( nombreCompleto );

//Es posible utilizar código dentro de ${}
console.log(`La suma de 1 + 1 es: ${ 1 + 1 }, y el cuadrado de 2 es: ${ Math.pow(2,2) }`);

//Otro ejemplo
function getSaludo () {
    return "Hola Mundo";
}

console.log(`Este es un texto: ${ getSaludo() }`);