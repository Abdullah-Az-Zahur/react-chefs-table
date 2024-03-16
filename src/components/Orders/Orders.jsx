import PropTypes from 'prop-types';
import Order from '../Order/Order';

const Orders = ({ recipes, moveRecipesFromCookToCooking }) => {
    return (
        <div className="md:w-1/3 border rounded-lg p-4">
            {/* want to cook */}
            <div>
                <h1>Want to cook: {recipes.length}</h1>
                {
                    recipes.map((order, idx) => <Order 
                    key={idx} order={order} idx={idx}
                    moveRecipesFromCookToCooking={moveRecipesFromCookToCooking}
                    ></Order>)
                }
            </div>

            {/* Currently cooking */}
            <div>
                <h1>Currently cooking: </h1>
            </div>
        </div>
    );
};

Orders.propTypes = {
    recipes: PropTypes.object.isRequired

}

export default Orders;