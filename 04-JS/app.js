<<<<<<< HEAD
const pokeCard = document.querySelector('[data-poke-card]');
const pokeName = document.querySelector('[data-poke-name]');
const pokeImg = document.querySelector('[data-poke-img]');
const pokeImgContainer = document.querySelector('[data-poke-img-container]');
const pokeId = document.querySelector('[data-poke-id]');
const pokeTypes = document.querySelector('[data-poke-types]');
const pokeStats = document.querySelector('[data-poke-stats]');
const pokeMoves = document.querySelector('[data-poke-moves]');

const typesColors = {
    normal: '#eeeeee',
    fire: '#f1980b',
    water: '#1867e7',
    grass: '#8fce00',
    electric: '#faf430',
    ice: '#a4cff7',
    fighting: '#990000',
    poison: '#6a329f',
    ground: '#7f6000',
    flying: '#d9d2e9',
    psychic: '#f418b3',
    bug: '#bcecb4',
    rock: '#783f04',
    ghost: '#674ea7',
    dark: '#20124d',
    dragon: '#1867e7',
    steel: '#999999',
    fairy: '#ead1dc',
    default: '#ffffff'
};

const searchPokemon = event => {
    event.preventDefault();
    const {value} = event.target.pokemon;
    fetch(`https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`)
        .then(data => data.json())
        .then(response => renderPokemonData(response))
        .catch(err => renderNotFound())
}

const renderPokemonData = data => {
    const sprite = data.sprites.front_default;
    const{ stats, types, moves } = data;
    
    pokeName.textContent = data.pokeName;
    pokeImg.setAttribute('src',sprite);
    pokeId.textContent = `N°${data.id} - ${data.name}`;
    setCardColor(types);
    renderPokemonTypes(types);
    renderPokemonStats(stats);
    renderPokemonAbilities(moves);
}

const setCardColor = types => {
    const colorOne = typesColors[types[0].type.name];
    const colorTwo = types[1] ? typesColors[types[1].type.name] : typesColors.default;
    pokeImg.style.background = `radial-gradient(${colorOne} 40%, ${colorTwo} 43%)`;
    pokeImg.style.backgroundSize = '5px 5px';
}

const renderPokemonTypes = types =>{
    pokeTypes.innerHTML = '';
    types.forEach(type => {
        const typeTextElement = document.createElement("div");
        typeTextElement.style.color = typesColors[type.type.name];
        typeTextElement.textContent = type.type.name;
        pokeTypes.appendChild(typeTextElement);

    });
}

const renderPokemonStats = stats => {
    pokeStats.innerHTML = '';
    stats.forEach(stat => {
        const statElement = document.createElement("div");
        const statElementName = document.createElement("div");
        const statElementAmount = document.createElement("div");
        statElementName.textContent = stat.stat.name;
        statElementAmount.textContent = stat.base_stat;
        statElement.appendChild(statElementName);
        statElement.appendChild(statElementAmount);
        pokeStats.appendChild(statElement);
    });
}

const renderPokemonAbilities = moves => {
    pokeMoves.innerHTML = '';
    moves.forEach(move => {
        const node = document.createTextNode(`${move.move.name}, `);
        pokeMoves.appendChild(node);
    })
}

const renderNotFound = () => {
    pokeName.textContent = 'No encontrado';
    pokeImg.src = './not-found.gif';
    pokeImg.style.background = '#fff';  
    pokeTypes.innerHTML = '';
    pokeStats.innerHTML = '';
    pokeMoves.innerHTML = '';
    pokeMoves.style.display = 'none';
    pokeId.textContent = '';
=======
const pokeCard = document.querySelector('[data-poke-card]');
const pokeName = document.querySelector('[data-poke-name]');
const pokeImg = document.querySelector('[data-poke-img]');
const pokeImgContainer = document.querySelector('[data-poke-img-container]');
const pokeId = document.querySelector('[data-poke-id]');
const pokeTypes = document.querySelector('[data-poke-types]');
const pokeStats = document.querySelector('[data-poke-stats]');
const pokeMoves = document.querySelector('[data-poke-moves]');

const typesColors = {
    normal: '#eeeeee',
    fire: '#f1980b',
    water: '#1867e7',
    grass: '#8fce00',
    electric: '#faf430',
    ice: '#a4cff7',
    fighting: '#990000',
    poison: '#6a329f',
    ground: '#7f6000',
    flying: '#d9d2e9',
    psychic: '#f418b3',
    bug: '#bcecb4',
    rock: '#783f04',
    ghost: '#674ea7',
    dark: '#20124d',
    dragon: '#1867e7',
    steel: '#999999',
    fairy: '#ead1dc',
    default: '#ffffff'
};

const searchPokemon = event => {
    event.preventDefault();
    const {value} = event.target.pokemon;
    fetch(`https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`)
        .then(data => data.json())
        .then(response => renderPokemonData(response))
        .catch(err => renderNotFound())
}

const renderPokemonData = data => {
    const sprite = data.sprites.front_default;
    const{ stats, types, moves } = data;
    
    pokeName.textContent = data.pokeName;
    pokeImg.setAttribute('src',sprite);
    pokeId.textContent = `N°${data.id} - ${data.name}`;
    setCardColor(types);
    renderPokemonTypes(types);
    renderPokemonStats(stats);
    renderPokemonAbilities(moves);
}

const setCardColor = types => {
    const colorOne = typesColors[types[0].type.name];
    const colorTwo = types[1] ? typesColors[types[1].type.name] : typesColors.default;
    pokeImg.style.background = `radial-gradient(${colorOne} 40%, ${colorTwo} 43%)`;
    pokeImg.style.backgroundSize = '5px 5px';
}

const renderPokemonTypes = types =>{
    pokeTypes.innerHTML = '';
    types.forEach(type => {
        const typeTextElement = document.createElement("div");
        typeTextElement.style.color = typesColors[type.type.name];
        typeTextElement.textContent = type.type.name;
        pokeTypes.appendChild(typeTextElement);

    });
}

const renderPokemonStats = stats => {
    pokeStats.innerHTML = '';
    stats.forEach(stat => {
        const statElement = document.createElement("div");
        const statElementName = document.createElement("div");
        const statElementAmount = document.createElement("div");
        statElementName.textContent = stat.stat.name;
        statElementAmount.textContent = stat.base_stat;
        statElement.appendChild(statElementName);
        statElement.appendChild(statElementAmount);
        pokeStats.appendChild(statElement);
    });
}

const renderPokemonAbilities = moves => {
    pokeMoves.innerHTML = '';
    moves.forEach(move => {
        const node = document.createTextNode(`${move.move.name}, `);
        pokeMoves.appendChild(node);
    })
}

const renderNotFound = () => {
    pokeName.textContent = 'No encontrado';
    pokeImg.src = './not-found.gif';
    pokeImg.style.background = '#fff';  
    pokeTypes.innerHTML = '';
    pokeStats.innerHTML = '';
    pokeMoves.innerHTML = '';
    pokeMoves.style.display = 'none';
    pokeId.textContent = '';
>>>>>>> 8f25f25038179351f18a2a22a34c75cfb62ea008
}