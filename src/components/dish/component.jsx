
import { Counter } from "../counter/component";

export const Dish = ({name, price, id, ingredients}) => {  
    
    return (
        !id ? null :
        <li>
            <h4>{name}, {price}$</h4>         
            <label className="text">({ingredients.map((ingredient) => ingredient)})</label>
            <br />
            <br />
            <Counter />
        </li>
    );
};