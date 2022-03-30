import React, { useState, useEffect } from "react";

import PokemonCard from "./PokemonCard";
import PokeList from "./PokeList";
import "./App.css";

// Create a pokemon search app that shows their id, name, picture, type, base stats and image (sprites)

// Api Url
const api_url = "https://pokeapi.co/api/v2/pokemon";


const App = () => {
  
    // Pokemon List state 
    const [pokemonList, setPokemonList] = useState();
    // Pokemon state
    const [pokemonData, setPokemonData] = useState();
    // Search input state
    const [searchInput, setSearchInput] = useState("");

    // Get initial list of pokemon on page render
    useEffect(() => {
        getPokemonListData();
    }, []);

    
    // Pagination
    const pokePagination = async(destination) => {
        if(destination === 'next') {
            const response = await fetch(pokemonList.next);
            const data = await response.json();
            setPokemonList(data);
        } 
        
        if(destination === 'prev') {
            const response = await fetch(pokemonList.previous);
            const data = await response.json();
            setPokemonList(data);
        }
    }
    
    // Get api data for pokemon list
    const getPokemonListData = async() => {
        const response = await fetch(`${api_url}/`);
        const data = await response.json();
        setPokemonList(data);
    }
    
    // Select single pokemon from list 
    const selectPokemon = async(url) => {
        const response = await fetch(`${url}`);
        const data = await response.json();
        setPokemonData(data);
    }

    // Get api data for single pokemon from search
    const getSearchData = async(input) => {
        // if searchInput is empty don't do anything
        if(searchInput === '') {
            return;
        } else {
            const response = await fetch(`${api_url}/${input}`);
            const data = await response.json();
            setPokemonData(data);
        }
        
    } 

    return (
    <div className="app">
        {/* Search  */}
        <h1>React Poke App</h1>
        <h2>Search for Pokemon</h2>
        <div>
            <input value={searchInput} onChange={(e) => setSearchInput(e.target.value)} /> 
            <button onClick={() => getSearchData(searchInput)}>Search</button>
        </div>

        {/* Display  */}
        <div className="display">
            {/* Interactive pokemon list  */}
            <div className="col1">
                { pokemonList && 
                <PokeList 
                pokemonList={pokemonList} 
                pokePagination={pokePagination} 
                selectPokemon={selectPokemon} /> }
            </div>
            <div className="col2">
                { pokemonData && 
                <PokemonCard 
                pokemonData={pokemonData} /> }
            </div>
        </div>


    </div>
    );
};

export default App;