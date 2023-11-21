import React from 'react'
import Card from 'react-bootstrap/Card'

const Cards = ({ pokemonData }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pokemonData.sprites.front_default} />
      <Card.Body>
        <Card.Title className="text-center">
          <h1>{pokemonData.name}</h1>
          </Card.Title>
        <Card.Text>
          <li>
            {pokemonData.stats[0].stat.name}: {pokemonData.stats[5].base_stat}
          </li>
          <li>
            {pokemonData.stats[1].stat.name}: {pokemonData.stats[5].base_stat}
          </li>
          <li>
            {pokemonData.stats[2].stat.name}: {pokemonData.stats[5].base_stat}
          </li>
          <li>
            {pokemonData.stats[3].stat.name}: {pokemonData.stats[5].base_stat}
          </li>
          <li>
            {pokemonData.stats[4].stat.name}: {pokemonData.stats[5].base_stat}
          </li>
          <li>
            {pokemonData.stats[5].stat.name}: {pokemonData.stats[5].base_stat}
          </li>
        
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Cards