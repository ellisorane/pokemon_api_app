import React from 'react';

const PokemonCard = ({ pokemonData }) => {
    return (
        <div className="pokemonCard">
            {/* Pokemon name */}
            <h4>Name: {pokemonData.name.toUpperCase()}</h4>

            {/* Pokemon image  */}
            <img src={pokemonData.sprites.other.dream_world.front_default} alt={pokemonData.name + " image"} />

            {/* Pokemon Type  */}
            <h4>Type(s): </h4>
            <ul>
            {pokemonData.types.map(tp => <li key={tp.slot}><strong>{tp.type.name.toUpperCase()}</strong></li>)}
            </ul>

            <br />
            {/* Base Stats  */}
            <h4><u>Base Stats</u></h4>
            {pokemonData.stats.map((stat, i) => <p key={i}><strong>{stat.stat.name.toUpperCase()}: {stat.base_stat}</strong></p>)}

        </div>
    );
    
}

export default PokemonCard;