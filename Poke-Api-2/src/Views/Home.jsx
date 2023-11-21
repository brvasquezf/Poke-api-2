import pikachu from '../Img/pikachu.png'


const Home = () => {
  return (
    <div className='box-home'>
      <h1>Bienvenido Maestro pokemon</h1>
      <img src={pikachu} alt="Imagen de pikachu color amarillo" />
    </div>
  )
}

export default Home