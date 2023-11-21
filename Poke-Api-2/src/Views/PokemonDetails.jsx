import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../Components/Card'

export default function PokemonDetails() {

  const { name } = useParams();

  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const getPokemonDetail = async () => {
      try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const data = await res.json();
        setPokemonData(data);
        setLoading(false); 
      } catch (error) {
        console.error("Error fetching Pokemon data:", error);
        setLoading(false);
      }
    };

    getPokemonDetail();

  }, []); 

  if(loading){
    return <div>Cargando...</div>
  }

  if(!pokemonData){
    return <div>¡No se ha encontrado el Pokemon!</div>
  }

  return (
    <div className='box-card'>
      <Card pokemonData = {pokemonData} />
    </div>
  );
}




