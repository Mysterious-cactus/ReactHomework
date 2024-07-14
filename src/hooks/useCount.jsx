import { useCallback, useState } from "react";

export const useCount = ({minValue, maxValue}) => {
    const max = maxValue;
    const min = minValue;
    const [count, setCount] = useState(minValue);
    const increment = useCallback(() => {
        setCount((prevState) => prevState + 1 > max ? prevState : prevState + 1);
    }, [max]);
    const decrement = useCallback(() => {
            setCount((prevState) => prevState - 1 < min ? prevState : prevState - 1)
        
    }, [min]);
    return { count, increment, decrement };
}