import PropTypes from 'prop-types';
import Order from '../Order/Order';

const Orders = ({ recipes, handlePreparingBtn }) => {
    return (
        <div className="w-full">
            {/* want to cook */}
            <div>
                <h1 className='text-center my-4'>Want to cook: {recipes.length}</h1>
                {/* table */}
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Time</th>
                                <th>Calories</th>
                            </tr>
                        </thead>
                        
                    </table>
                </div>
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
    recipes: PropTypes.object.isRequired,
    handlePreparingBtn: PropTypes.func

}

export default Orders;