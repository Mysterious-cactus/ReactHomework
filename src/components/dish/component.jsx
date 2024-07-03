import { useState } from "react";


const useCount = () => {
    const max = 5;
    const min = 0;
    const [count, getCount] = useState(0);
    const increment = () => {
        getCount(count + 1 > max ? count : count + 1);
    };
    const decrement = () => {
        getCount(count - 1 < min ? count : count - 1);
    }
    return { count, increment, decrement };
}

export const Dish = ({name, price, id, ingredients}) => {  
    const { count, decrement, increment } = useCount();
    return (
        id && <li>
                    <h4>{name}, {price}$</h4>         
                    <label className="text">({ingredients.map((ingredient) => ingredient)})</label>
                    <br />
                    <br />
                    <button onClick={decrement}>-</button>
                    {count}
                    <button onClick={increment}>+</button>
                </li>
    );
};