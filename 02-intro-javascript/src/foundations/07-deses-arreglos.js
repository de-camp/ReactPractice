//Desestructuracion de arreglos
const personajes = ["Goku", "Vegeta", "Trunks"];

// Imprimiendo en consola
console.log( personajes );

// En dado caso solo quiera uno en especifico
console.log( personajes[2] );

// ... Esto puede ser muy tedioso
// Se puede utilizar desestructuracion de un arreglo

const [ personaje1 ] = personajes; // Obtiene el primer elemento del arreglo

//En dado caso quisiera el segundo elemento se puede realizar de la siguiente manera
const [ , personaje2 ] = personajes;

console.log( personaje1 );
console.log( personaje2 );

// Otro ejemplo
const retornaArreglo = () => {
    return [ "ABC", 123 ];
}

const [ string, numeros ] = retornaArreglo();
console.log( string, numeros );


// Ejercicio
// 1. Llamar al primer elemento desestructurado como nombre
// 2. Llamar al segundo elemento como setNombre
const usarStatess = ( valor ) => {
    return [ valor, () => { console.log("Hola Mundo") } ];
}

// const arr = useState( "Goku" );
// console.log( arr );

// arr[1](); //Esto imprime un hola mundo

const [ nombre, setNombre ] = usarStatess( "Goku" );

console.log( nombre );
setNombre()