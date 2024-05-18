const activo = true;
// let mensaje = "";

// if (activo) {
//     mensaje = "Activo";
// } else {
//     mensaje = "Inactivo";
// }

// Otra manera de hacerlo es
// const mensaje = ( activo ) ? "Activo" : "Inactivo";
// const mensaje = activo ? "Activo" : null;

// Manera corta de operador ternario
const mensaje = activo && "Activo"; // A la derecha se coloca lo que quiere que se haga

console.log( mensaje );