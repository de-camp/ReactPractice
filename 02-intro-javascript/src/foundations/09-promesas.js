// Promesas
// Acciones que se prometen realizar, estas pueden o no ser cumplidas

import { getHeroeById, getHeroesByOwner } from "./foundations/08-import-export";

// const promise = new Promise( ( resolve, reject ) => {
//     setTimeout( () => {
//         const heroe = getHeroeById(2);

//         // console.log( heroe );
//         resolve( heroe );

//         //Simulando un error
//         // reject( "No se pudo encontrar el heroe" )

//     }, 2000 );
// } );

// Las promesas son asincronas, primero se ejecuta todo el codigo sincrono (secuencial), las promesas caen en una pila de tareas y cuando terminan las tareas sincronas se ejecutan

// Argumento resolve es un cb que se ejecuta cuando la promesa es exitosa, reject se ejecuta cuando la promesa no se puede cumplir


// promise.then( ( heroe ) => {
//     console.log( heroe );
// } )
// .catch( err => console.warn( err ) );

// Convirtiendo promesa en funcion a la que le puedo pasar valores
const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroeById(id);

            if (heroe) {
                resolve(heroe);
            } else {
                reject("No se pudo encontrar el heroe")
            }
        }, 2000);
    });
};

// Es posible usar then ya que la funcion getHeroesAsync regresa una promesa, si no se especifica esto regresa un void y .then .catch no estan disponibles

// getHeroeByIdAsync(10)
//     .then( heroe => console.log(heroe) )
//     .catch( err => console.warn(err) );

getHeroeByIdAsync(2)
    .then( console.log )
    .catch( console.warn );