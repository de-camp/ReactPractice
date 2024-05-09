//Accediendo a archivo con informacion deseada
// Se importo de esta manera ya que esta siendo exportado por defecto en el archivo fuente
import heroes from "./data/heroes";

console.log( heroes );

const getHeroeById = ( id ) => {
    return heroes.find( ( element ) => element.id === id );
}

const getHeroesByOwner = ( owner ) => {
    return heroes.filter ( ( element ) => element.owner === owner);
}

console.log( getHeroeById(3) );
console.log( getHeroesByOwner("DC") );