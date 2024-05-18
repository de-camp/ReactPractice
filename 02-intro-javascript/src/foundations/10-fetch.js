// Fetch API

const apiKey = "MsvhZ8N8PfNzRb86IvooqxrF8U5PrA3b";

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

// Fetch devuelve una promesa lo que nos permite

// peticion.then( (resp) => {
//     resp.json()
//         .then( data => {
//             console.log( data );
//         } );
// } )
// .catch( console.warn );

// Lo anterior se empieza a ver complejo, se puede tomar ventaja de el encadenamiento de promesas

// NOTA: resp.json() es una promesa tambien

peticion
    .then( resp => resp.json() )
    .then( ({ data }) => {
        const { url } = data.images.original;

        const img = document.createElement( "img" );
        img.src = url;

        document.body.append ( img );
    } )
    .catch( console.warn );