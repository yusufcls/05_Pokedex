// import { useEffect } from "react";
// import { useState } from "react";
// import axios from "axios";
import PokemonList from "../pokemonList/PokemonList";
import axios from "axios";
import { useEffect, useState } from "react";

const PokemonCard = () => {
  const [pokemon, setPokemon] = useState("");
  const [pokemonName, setpokemonName] = useState("");

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?offset=10&limit=20")
      .then((response) => setPokemon(response.data.results))
      .catch((err) => console.log(err));
  }, []);

const handleChange = (e) => {
  console.log(e.target.value);
}
 

  return (
    <div className="page">
      <div>
        <div className="header">
          {" "}
          <label htmlFor="header">POKEMON</label>
        </div>
        <input type="text" id="header" onChange={handleChange} />
      </div>
      <div className="container-card">
      {pokemon.map((poke) => {
          return 
            <PokemonList {...poke} />;

          })}
      </div>
    </div>
  );
};

export default PokemonCard;
