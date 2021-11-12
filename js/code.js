const previous = document.querySelector('#Previous')
const next = document.querySelector('#Next')

let offset = 1;
let limit = 11;

previous.addEventListener("click", () => {
    if (offset != 1) {
        offset -= 12;
        removeChildNodes(pokemonContainer)
        fetchPokemons(offset, limit);
    }
});

next.addEventListener("click", () => {
    offset += 12;
    removeChildNodes(pokemonContainer)
    fetchPokemons(offset, limit);
});

function fetchPokemon(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(res => res.json())
        .then(data => {
            create(data)
        })
}

function fetchPokemons(offset, limit) {
    for (let i = offset; i <= offset + limit; i++) {
        fetchPokemon(i)
    }
}
let pokemonContainer = document.querySelector('.pokemon-container')



function create(pokemon) {
    pokemonContainer.innerHTML += `
    <div class="col">
        <div class="card h-100">
            <div class="flip-card">
                <div class="flipcard-wrap">
                    <div class="card-conatiner">
                        <div class="pokemon-block">
                            <div class="img-conatiner">
                                <img src= "${pokemon.sprites.front_default}" alt="">
                                <p> #${pokemon.id.toString().padStart(3, 0)}</p >
                                <p class="name"> ${pokemon.name}</p>
</div>
                        
                </div>
            </div>
        </div >
                
`
}

function removeChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}
fetchPokemons(offset, limit);
