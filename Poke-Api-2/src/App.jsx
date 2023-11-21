
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import PokemonList from '../src/Views/PokemonList'
import PokemonDetails from '../src/Views/PokemonDetails'
import NotFound from './Views/NotFound'
import Home from './Views/Home'

import NavBar from '../src/Components/NavBar'
import './App.css'


function App() {


  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/pokemones/" element={ <PokemonList /> } />
          <Route path="/pokemones/:name" element={ <PokemonDetails /> } />
          <Route path='*' element={ <NotFound /> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
