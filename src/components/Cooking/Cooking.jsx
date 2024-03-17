import PropTypes from 'prop-types';
import Cooked from "../Cooked/Cooked";
const Cooking = ({ cookingItem }) => {
    return (
        <div>
            <hr  className="my-5"/>
            <h1 className="text-center">Currently cooking: {cookingItem.length}</h1>
            {
                cookingItem.map((cooked, idx) => <Cooked 
                key={idx}
                idx={idx}
                cooked={cooked}
                ></Cooked>)
            }
        </div>
    );
};

Cooking.propTypes = {
    cookingItem: PropTypes.array
}

export default Cooking;