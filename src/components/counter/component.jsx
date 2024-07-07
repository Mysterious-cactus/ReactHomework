import { useState } from "react";

const useCount = ({minValue, maxValue}) => {
    const max = maxValue;
    const min = minValue;
    const [count, setCount] = useState(minValue);
    const increment = () => {
        setCount(count + 1 > max ? count : count + 1);
    };
    const decrement = () => {
        setCount(count - 1 < min ? count : count - 1);
    }
    return { count, increment, decrement };
}

export const Counter = ({ min, max }) => {
    const { count, decrement, increment } = useCount({minValue: min, maxValue: max});
    return (
        <>
            <button onClick={decrement}>-</button>
                {count}
            <button onClick={increment}>+</button>
        </>
    );
};