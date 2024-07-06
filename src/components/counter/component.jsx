import { useState } from "react";

const useCount = () => {
    const max = 5;
    const min = 0;
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1 > max ? count : count + 1);
    };
    const decrement = () => {
        setCount(count - 1 < min ? count : count - 1);
    }
    return { count, increment, decrement };
}

export const Counter = () => {
    const { count, decrement, increment } = useCount();
    return (
        <>
            <button onClick={decrement}>-</button>
                {count}
            <button onClick={increment}>+</button>
        </>
    );
};