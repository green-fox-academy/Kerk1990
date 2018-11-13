class Pokemon {
    name: string;
    type: string;
    effectiveAgainst: string;

    constructor(name: string, type: string, effectiveAgainst: string) {
        this.name = name;
        this.type = type;
        this.effectiveAgainst = effectiveAgainst;
    }

    isEffectiveAgainst(pokemon: Pokemon): boolean {
        return this.effectiveAgainst === pokemon.type;
    }
}



let pokemonOfAsh: Pokemon[] = initializePokemon();

// Every pokemon has a name and a type.
// Certain types are effective against others, e.g. water is effective against fire.

// Ash has a few pokemon.
// A wild pokemon appeared!

let wildPokemon: Pokemon = new Pokemon('Oddish', 'leaf', 'water');


// Which pokemon should Ash use?


function initializePokemon(): Pokemon[] {
    return [
        new Pokemon('Balbasaur', 'leaf', 'water'),
        new Pokemon('Pikatchu', 'electric', 'water'),
        new Pokemon('Charizard', 'fire', 'leaf'),
        new Pokemon('Balbasaur', 'water', 'fire'),
        new Pokemon('Kingler', 'water', 'fire')
    ];
}
function chosingTheOne() {
    for (let i: number = 0; i < pokemonOfAsh.length; i++) {
        if (pokemonOfAsh[i].isEffectiveAgainst(wildPokemon)) {
            return pokemonOfAsh[i].name;
        }
    }
}

console.log('I choose you, ');
console.log(chosingTheOne());
