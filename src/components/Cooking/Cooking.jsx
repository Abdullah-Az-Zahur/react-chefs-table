import PropTypes from 'prop-types';
import Cooked from "../Cooked/Cooked";
const Cooking = ({ cookingItem, preparingTime, calorie }) => {
    return (
        <div>
            <hr className="my-5" />
            <h1 className="text-center">Currently cooking: {cookingItem.length}</h1>
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
                cookingItem.map((cooked, idx) => <Cooked
                    key={idx}
                    idx={idx}
                    cooked={cooked}
                    preparingTime={preparingTime}
                    calorie={calorie}
                ></Cooked>)
            }
            <div className='text-end my-4'>
                <p>Total Time = {preparingTime} Minutes</p>
                <p>Total Calories = {calorie} Calories</p>
            </div>
        </div>
    );
};

Cooking.propTypes = {
    cookingItem: PropTypes.array
}

export default Cooking;