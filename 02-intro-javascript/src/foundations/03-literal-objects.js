//Objetos literales
const persona = {
    nombre: "Tony",
    apellido: "Stark",
    edad: 45,
};

console.log( persona );
// console.table( persona );

//En dado caso quisiera saber el nombre del objeto
console.log( { persona } );

//Que es equivalente a
// console.log( { persona: persona } );


//Para copiar objetos no se sugiere solo asignar, ya que lo que se guarda
//solo es una referencia al objeto original, no se crea un nuevo objeto
// const persona2 = persona;

//Usando operador spread
const persona2 = { ...persona }
persona2.nombre = "Peter";

console.log( persona2 );
console.log( persona );