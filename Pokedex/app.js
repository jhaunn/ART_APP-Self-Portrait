let main = document.querySelector('main');
let pokemonCount = 150;
let bgColors = {
   fire: '#FDDFDF',
   grass: '#DEFDE0',
   electric: '#FCF7DE',
   water: '#DEF3FD',
   ground: '#F4E7DA',
   rock: '#D5D5D4',
   fairy: '#FCEAFF',
   poison: '#98D7A5',
   bug: '#F8D5A3',
   dragon: '#97B3E6',
   psychic: '#EAEDA1',
   flying: '#F5F5F5',
   fighting: '#E6E0D4',
   normal: '#F5F5F5'
};
let mainTypes = Object.keys(bgColors);

let fetchPokemons = async () => {
   for (let i = 1; i <= pokemonCount; i++) {
      await getPokemon(i);
   }
}

let getPokemon = async (i) => {
   let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
   let res = await fetch(url);
   let data = await res.json();
   createPokemonCard(data);
}

let createPokemonCard = (data) => {
   let cardEl = document.createElement('div');
   cardEl.classList.add('card');

   let pokeTypes = data.types.map(type => type.type.name);
   let type = mainTypes.find(type => pokeTypes.indexOf(type) > -1);

   cardEl.style.backgroundColor = bgColors[type];

   cardEl.innerHTML = `
      <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/${data.id.toString().padStart(3, '0')}.png" alt="">
      <p class="number">#${data.id.toString().padStart(3, '0')}</p>
      <p class="name">${data.name[0].toUpperCase() + data.name.slice(1)}</p>
      <p class="type">${type}</p>
   `;

   main.appendChild(cardEl);
}

fetchPokemons();