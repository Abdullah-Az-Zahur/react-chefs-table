import PropTypes from 'prop-types';
import Order from '../Order/Order';

const Orders = ({ recipes, handlePreparingBtn }) => {
    return (
        <div className="w-full">
            {/* want to cook */}
            <div>
                <h1>Want to cook: {recipes.length}</h1>
                {
                    recipes.map((order, idx) => <Order 
                    key={idx} order={order} idx={idx}
                    handlePreparingBtn={handlePreparingBtn}
                    ></Order>)
                }
            </div>

            {/* Currently cooking */}
        </div>
    );
};

Orders.propTypes = {
    recipes: PropTypes.object.isRequired

}

export default Orders;