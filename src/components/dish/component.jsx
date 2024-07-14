
import { useCount } from "../../hooks/useCount";
import { Counter } from "../counter/component";

export const Dish = ({name, price, id, ingredients}) => {    
    const { count, decrement, increment } = useCount({minValue: 0, maxValue: 5});

    return (
        !id ? null :
        <li>
            <h4>{name}, {price}$</h4>         
            <label className="text">( {ingredients.map((ingredient) => ingredient + " ")})</label>
            <br />
            <br />
            <Counter count={count} increment={increment} decrement={decrement}/>
        </li>
    );
};