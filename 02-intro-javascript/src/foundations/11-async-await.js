// Async - Await

// const getImagenPromesa = () => {
//     return new Promise( ( resolve, reject ) => {
//         resolve( "https://facebook.com" );
//     } )
// };

// getImagenPromesa().then( console.log );

// Utilizando Async
const getImagen = async () => {
    try {
        const apiKey = "MsvhZ8N8PfNzRb86IvooqxrF8U5PrA3b";
        const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

        const { data } = await response.json();
        const { url } = data.images.original;

        const img = document.createElement("img");
        img.src = url;

        document.body.append(img);
    } catch (error) {
        console.error( error );
    }

}

getImagen();

//Esta seccion no funciona
// const ShowGifs = async () =>{
//     const aux = await getImagen().images.original;
//     const { url } = aux.data.images.original;

//     const img = document.createElement("img");
//     img.src = url;

//     document.body.append(img);
// }
// ShowGifs();