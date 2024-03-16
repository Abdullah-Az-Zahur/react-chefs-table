import { useEffect, useState } from "react";


const Recipes = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('recipe.json')
            .then(res => res.json())
            .then(data => setRecipes(data));
    }, [])

    return (
        <div>
            <h1>Recipes: {recipes.length}</h1>
        </div>
    );
};

export default Recipes;