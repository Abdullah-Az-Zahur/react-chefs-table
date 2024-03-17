
import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Orders from './components/Orders/Orders'
import Our_Recipes from './components/Our_Recipes/Our_Recipes'
import Recipes from './components/Recipes/Recipes'
import Cooking from './components/Cooking/Cooking'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [recipes, setRecipes] = useState([]);

  const handleRecipeToAddOrders = order => {
    // item find
    const foundItem = recipes.find(item => {
      return item.recipe_id === order.recipe_id;
    });

    if (!foundItem) {
      const newRecipes = [...recipes, order];
      setRecipes(newRecipes);
    }
    else {
      notify();
      console.log('inside toast')
    }
  };

  const notify = () => toast('This dish is already in your order list');

  // cooking items
  const [cookingItem, setCookingItem] = useState([]);

  const handleCookingItem = (order) => {
    const newOrders = [...cookingItem, order]
    setCookingItem(newOrders);
  };

  const handlePreparingBtn = (id) => {
    removeRecipes(id);
    handleCookingItem(id);
    
  };

  const removeRecipes = (id) => {
    const remainingRecipes = recipes.filter(recipe => recipe.recipe_id !== id.recipe_id);
    setRecipes(remainingRecipes);
  };



  return (
    <>
      <Header></Header>
      <main className='container mx-auto'>
        <Our_Recipes></Our_Recipes>
        <div className='md:flex gap-4'>
          <Recipes handleRecipeToAddOrders={handleRecipeToAddOrders}></Recipes>
          <div className='md:w-1/3 border rounded-lg p-4'>
            <Orders
              recipes={recipes}
              handlePreparingBtn={handlePreparingBtn}
            ></Orders>
            <Cooking cookingItem={cookingItem}></Cooking>
          </div>
        </div>
        <ToastContainer></ToastContainer>
      </main>
    </>
  )
}

export default App
