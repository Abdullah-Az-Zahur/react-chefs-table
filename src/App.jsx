
import './App.css'
import Header from './components/Header/Header'
import Orders from './components/Orders/Orders'
import Our_Recipes from './components/Our_Recipes/Our_Recipes'
import Recipes from './components/Recipes/Recipes'

function App() {


  return (
    <>
      <Header></Header>
      <main className='container mx-auto'>
        <Our_Recipes></Our_Recipes>
        <div className='md:flex  border rounded-lg'>
          <Recipes></Recipes>
          <Orders></Orders>
        </div>
      </main>
    </>
  )
}

export default App
