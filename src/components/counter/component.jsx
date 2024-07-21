
import { CounterButton } from '../counterButton/component';

export const Counter = ({ count, decrement, increment }) => {

    return (
        <>
            <CounterButton onClickFunc={decrement}>-</CounterButton>
                {count}
            <CounterButton onClickFunc={increment}>+</CounterButton>
        </>
    );
};