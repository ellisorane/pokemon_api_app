import React from 'react';

const PokeList = ({ pokemonList, pokePagination, selectPokemon }) => {
    return (
        <div>
            <ul className='pokemonList'>
                {pokemonList.results.map((res, i) => <li key={i} onClick={ () => selectPokemon(res.url) }>{res.name.toUpperCase()}</li>)}
            </ul>
            {/* Pagination */}
            <div className='pagination'>
                { pokemonList.previous && <button onClick={ () => pokePagination('prev') }>Prev</button> }
                { pokemonList.next && <button onClick={ () => pokePagination('next') }>Next</button> }
            </div>

        </div>
    );
    
}

export default PokeList;