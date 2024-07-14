

export const Counter = ({ count, decrement, increment }) => {
    return (
        <>
            <button onClick={decrement}>-</button>
                {count}
            <button onClick={increment}>+</button>
        </>
    );
};