import PropTypes from 'prop-types';

const Order = ({ order, idx, handlePreparingBtn }) => {
    const { recipe_name, preparing_time, calories } = order;
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
                            <td>{preparing_time} Min</td>
                            <td>{calories} Calories</td>
                            <button onClick={()=> handlePreparingBtn(order) } className="btn btn-accent">Preparing</button>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

Order.propTypes = {
    order: PropTypes.object.isRequired,
    idx: PropTypes.number,
    handlePreparingBtn: PropTypes.func

}

export default Order;