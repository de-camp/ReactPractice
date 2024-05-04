//Arreglos
// const arreglo = new Array( 100 ); //No se recomienda usar esta inicializacion
//a menos que se quiere crear un arreglo con tamanio fijo

const arreglo = [1, 2, 3, 4];
// arreglo.push(1);
// arreglo.push(2);
// arreglo.push(3);
// arreglo.push(4);

//No se sugiere utilizar push ya que esto modifica el objeto principal, es mejor usar el operador spread

const arreglo2 = [ ...arreglo, 5 ]; //Metodo sugerido
// arreglo2.push(5);


//El método map() crea un NUEVO array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
const arreglo3 = arreglo2.map( ( numero ) => {
    return numero * 2;
} );

console.log( arreglo2 );
console.log( arreglo );
console.log( arreglo3 );