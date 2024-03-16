
import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Orders from './components/Orders/Orders'
import Our_Recipes from './components/Our_Recipes/Our_Recipes'
import Recipes from './components/Recipes/Recipes'

function App() {
  const [recipes, setRecipes] = useState([]);

  const handleRecipeToAddOrders = order => {
    const newRecipes = [...recipes, order];
    setRecipes(newRecipes);
  }

  const moveRecipesFromCookToCooking = (id) => {
    const remainingRecipes = recipes.filter(recipe => recipe.recipe_id !== id);
    setRecipes(remainingRecipes)
  }

  return (
    <>
      <Header></Header>
      <main className='container mx-auto'>
        <Our_Recipes></Our_Recipes>
        <div className='md:flex gap-4'>
          <Recipes handleRecipeToAddOrders={handleRecipeToAddOrders}></Recipes>
          <Orders 
          recipes={recipes}
          moveRecipesFromCookToCooking={moveRecipesFromCookToCooking}
          ></Orders>
        </div>
      </main>
    </>
  )
}

export default App
