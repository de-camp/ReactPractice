// Desestructuracion

const persona = {
    nombre: "Tony",
    edad: 45,
    clave: "Iron man",
}

// Para acceder a atributo del objeto se puede hacer de la siguiente manera (en caso de impresion)
console.log( persona.nombre );
console.log( persona.edad );
console.log( persona.clave ); // ... esto podria llegar a ser tedioso y no siempre querre x todo un objeto si no que puede interesarme algo en especifico

const { nombre:apodo, edad } = persona;

// Ahora es posible utilizar nombre que es equivalente a tener persona.nombre
console.log( apodo ); //Se renombro la variable nombre que se extrajo
console.log( edad ); 

//Aplicacion de desestructuracion en funciones
const retornaPersona = ( usuario ) => {
    const { edad, clave, nombre } = usuario;

    console.log( nombre, edad, clave );
}

// La desestructuracion tambien se puede hacer donde se reciben los argumentos
const retornaPersona2 = ( { clave, edad, nombre, rol = "usuario_regular" } ) => {
    // console.log( nombre, rol );

    return {
        nombreClave: clave,
        anios: edad,
        latlng : {
            lat: 14.1232,
            lng: -12.6768
        }
    }
}

//Es posible desestructurar valores que no vienen y darles valores por defecto, si vienen solo se reemplazan por el valor verdadero

// retornaPersona( persona );
// retornaPersona2( persona ); // Este era para console.log

const { nombreClave, anios, latlng:{ lat, lng } } = retornaPersona2( persona );
console.log( nombreClave, anios );
console.log( lat, lng );