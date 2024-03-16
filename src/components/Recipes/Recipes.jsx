import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";


const Recipes = ({handleRecipeToAddOrders}) => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('recipe.json')
            .then(res => res.json())
            .then(data => setRecipes(data));
    }, [])

    return (
        <div className="md:w-2/3 grid md:grid-cols-2 gap-4 border rounded-lg p-4">
            
            {
                recipes.map(recipe => <Recipe
                    key={recipe.recipe_id}
                    recipe={recipe}
                    handleRecipeToAddOrders={handleRecipeToAddOrders}
                ></Recipe>)
            }
        </div >
    );
};

Recipes.propTypes = {
    // recipe: PropTypes.object.isRequired,
    handleRecipeToAddOrders: PropTypes.func
}


export default Recipes;