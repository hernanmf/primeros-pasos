class Pokemon {
  constructor(name, order, height, weight, imageUrl) {
    this.name = name;
    this.order = order;
    this.height = height;
    this.weight = weight;
    this.imageUrl = imageUrl;
  }
}

let listaDePokemones = [];

function obtenerPokemones() {
  let urlDeLista = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0';
  fetch(urlDeLista)
    .then((response) => response.json())
    .then((data) => {
      data.results.forEach((pokemon) => {
        obtenerPokemon(pokemon.url);
      });
    });
}

function obtenerPokemon(urlDetallado) {
  fetch(urlDetallado)
    .then((response) => response.json())
    .then((data) => {
      let nuevoPokemon = new Pokemon(
        data.name,
        data.order,
        data.height,
        data.weight,
        data.sprites.other.home.front_default,
      );
      listaDePokemones.push(nuevoPokemon);
    });
}

obtenerPokemones();
console.log(listaDePokemones);
