//Funciones JS

// const saludar = function saludar( nombre ) {
//     return `Hola ${ nombre }, es un gusto verte aqui!`;
// }

// console.log( saludar("Carlos") );

// Se puede observar que saludar guarda una referencia a la funcion
// console.log( saludar );

// Pero es posible accidentalmente sobre escribir dicha funcion
//saludar = 30;


// Por lo que lo mas sugerido es declarar funciones de la siguiente manera
// Al usar const nos aseguramos de que saludar no contenga nada mas que la funcion que se le asigno
const saludar = function ( nombre ) {
    return `Hola ${ nombre }, es un gusto verte aqui!`;
}

console.log( saludar("Carlos") );

const saludarFlecha = ( nombre ) => {
    return `Hola ${ nombre }, es un gusto verte aqui!`;
}

console.log( saludarFlecha("Carlos") );

// Para situaciones en las que la funcion es sencilla y solo se tiene un return se puede simplificar la funcion flecha a

const saludarFlecha2 = ( nombre ) => `Hola ${ nombre }, es un gusto verte aqui!`;

const saludarFlecha3 = () => `Hola, es un gusto verte aqui!`;

console.log( saludarFlecha2("Carlos") );
console.log( saludarFlecha3() );


//Funciones que retornan objetos
const getUser = () => {
    return {
        uid: "ABC123",
        username: "trankyfunky",
    }
}

console.log( getUser() );

// Aunque tambien se puede hacer de la siguiente manera
const getUser2 = () => ({
        uid: "ABC123",
        username: "trankyfunky",
});

console.log( getUser2() );

//Ejercicio
// 1. Transformar a una funcion flecha
// 2. Debe devolver un objeto implicito
// function getUsuarioActivo( nombre ) {
//     return {
//         uid: "ABC567",
//         username: nombre,
//     }
// }

const getUsuarioActivo = ( nombre ) => ({
    uid: "ABC567",
    username: nombre,
});

const usuarioActivo = getUsuarioActivo("Luisa");
console.log( usuarioActivo );