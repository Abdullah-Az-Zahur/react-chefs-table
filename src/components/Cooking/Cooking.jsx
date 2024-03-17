import Cooked from "../Cooked/Cooked";

const Cooking = ({ cookingItem }) => {
    return (
        <div>
            <hr />
            <h1>Currently cooking: {cookingItem.length}</h1>
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

export default Cooking;