import PropTypes from 'prop-types';
import { CiClock2 } from "react-icons/ci";
import { FaGripfire } from "react-icons/fa";

const Recipe = ({ recipe, handleRecipeToAddOrders }) => {
    const { recipe_image, recipe_name, short_description, ingredients, preparing_time, calories } = recipe
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure><img className='rounded-xl md:w-[330px] md:h-[200px]' src={recipe_image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{recipe_name}</h2>
                    <p className='text-gray-400'>I{short_description}</p>
                    <hr />
                    <h3>Ingredients: {ingredients.length}</h3>
                    <p>
                        {
                            ingredients.map(ingredient => <ul> <span className='text-gray-400'>{ingredient}</span></ul>)
                        }
                    </p>
                    <div className='flex'>
                        <p className='flex gap-2 items-center'><CiClock2 /><span className='text-gray-400'>{preparing_time}</span></p>
                        <p className='flex gap-2 items-center'><FaGripfire /><span className='text-gray-400'>{calories}</span></p>
                    </div>
                    <div className="card-actions justify-start">
                        <button
                            onClick={() => handleRecipeToAddOrders(recipe)}
                            className="btn btn-primary">Want to Cook
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

Recipe.propTypes = {
    recipe: PropTypes.object.isRequired,
    handleRecipeToAddOrders: PropTypes.func
}

export default Recipe;