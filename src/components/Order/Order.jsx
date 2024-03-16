import PropTypes from 'prop-types';

const Order = ({ order, idx, moveRecipesFromCookToCooking }) => {
    const {recipe_id, recipe_name, preparing_time, calories } = order;
    return (
        <div>
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
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>{idx + 1}</th>
                            <td>{recipe_name}</td>
                            <td>{preparing_time}</td>
                            <td>{calories}</td>
                            <button onClick={()=> moveRecipesFromCookToCooking(recipe_id)} className="btn btn-accent">Preparing</button>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

Order.propTypes = {
    order: PropTypes.object.isRequired

}

export default Order;