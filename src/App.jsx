
import './App.css'
import Header from './components/Header/Header'
import Orders from './components/Orders/Orders'
import Our_Recipes from './components/Our_Recipes/Our_Recipes'
import Recipes from './components/Recipes/Recipes'

function App() {


  return (
    <>
      <Header></Header>
      <Our_Recipes></Our_Recipes>
      <div className='flex '>
        <Recipes></Recipes>
        <Orders></Orders>
      </div>
    </>
  )
}

export default App
