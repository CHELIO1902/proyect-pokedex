// variable con objeto vacio para almacenar el JSON
let allPokemon = []


// sirve para leer el JSON
fetch('./src/JSON/pokedex.json')
  .then(response => response.json())
  .then(json => allPokemon = json)
  .then(()=> imprimirPokemon(allPokemon) )
  
  // console.log(pokemon)

// con esta variable seleccionamos con la clase el contenedor en el html 
let cards = document.querySelector("#pokemons-cards");
/* para que el formulario de entrada tenga un detector de eventos adjunto, usaré un querySelector para recuperar el botón por su nombre de clase y establecerlo en una constante (para que pueda usarse más adelante). */
let buscandoNombres = document.querySelector("form");

/* en esta variable estoy utilizando de nuevo la variable buscandoNombres declarada para obtener los datos del input */
buscandoNombres.addEventListener("submit", (event) => {
  //con prevent default cancelamos el evento del submit de la función
  event.preventDefault()
  console.log(event.target.pokemon.value)
  console.log(allPokemon)
  let searching = allPokemon.filter(({ name }) =>
    name.toLocaleLowerCase().includes(event.target.pokemon.value.toLocaleLowerCase())
  );
  cards.innerHTML = "";
  imprimirPokemon(searching)
})

// funcion para crear las cards y las clases de las mismas para mostrar la informacion de JSON
let imprimirPokemon = (pokemons) => {
  pokemons.forEach((element) => {
    // creando los elementos del apendChild
    let bodyCard = document.createElement("div");
    let row = document.createElement("div");
    let colLeft = document.createElement("div");
    let image = document.createElement("img");
    let colRight = document.createElement("div");
    let infoCard = document.createElement("div");
    let pokemonName = document.createElement("h5")
    let infoPokemon = document.createElement("p")
    let popover = document.createElement("a")
    // bodyCard.setAttribute("style", "max-width: 540px;" )
    image.setAttribute("src", element.ThumbnailImage);
    // popover attributs
    popover.setAttribute("tabindex", "0");
    popover.setAttribute("role", "button");
    popover.setAttribute("data-bs-toggle", "popover");
    popover.setAttribute("data-bs-trigger", "focus");
    popover.setAttribute("tittle", "Mas cacracteristicas");
    popover.setAttribute("data-html", "true");
    popover.setAttribute("data-content", element.name);


   
// agregando las clases a los div
    bodyCard.classList.add("card", "m-2", "col-md-3"); 
    colLeft.classList.add("col");
    colRight.classList.add("col-md-8");
    infoCard.classList.add("card-body");
    pokemonName.classList.add("card-title");
    infoPokemon.classList.add("card-text");
    popover.classList.add("btn", "btn-sm", "btn-danger");

// agregamos la informacion a las etiquetas de texto
    pokemonName.innerText = element.number;
    infoPokemon.innerText = element.name;
    popover.innerText = "Ver Mas...";

// agregando los div con apendChild
    cards.appendChild(bodyCard);
    bodyCard.appendChild(row);
    row.appendChild(colLeft);
    colLeft.appendChild(image);
    row.appendChild(colRight);
    colRight.appendChild(infoCard);
    infoCard.appendChild(pokemonName);
    infoCard.appendChild(infoPokemon);
    infoCard.appendChild(popover);

  });
};

/* var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
}) */

$('[data-bs-toggle="popover"]').popover(); 

/* $(document).ready(function () {
  $('[data-toggle="popover"]').popover();
}); */



