import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';


const PokemonList = () => {

    const [name, setName] = useState("");
    const [pokemonName, setPokemonName] = useState([]);

    const navigate = useNavigate();

    const irAlPokemon = () => {
        navigate(`/pokemones/${name}`);
    };

    useEffect(() => {
        const getPokemon = async () => {
            const res = await fetch ( "https://pokeapi.co/api/v2/pokemon/");
            const data = await res.json();

            if (data && data.results) {
                const getPokemon = data.results.map((data) => {
                    return data.name;
                });
                setPokemonName(getPokemon);
            }
        }
        getPokemon()
    }, []);



    return (
        <div className='box-listPokemon'>
            <h1>PokemonList</h1>
            <div className='box-selectListPokemon'>
                <select onChange={(e) => setName(e.target.value)} size={5} >
                    {pokemonName.map((name, index) => (
                        <option key={index}>{name}</option>
                    ))}
                </select>
                <button className='btn btn-success' onClick={irAlPokemon}>Ver Detalle</button>
            </div>
        </div>
    )
}

export default PokemonList