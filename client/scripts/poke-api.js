function obtenerPokemon() {
  fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')
    .then((response) => response.json())
    .then((data) => {
      data.results.forEach((pokemon) => {
        console.log(pokemon.name);
      });
    });
}

// Llamar a la función para obtener los pokemones
obtenerPokemon();
