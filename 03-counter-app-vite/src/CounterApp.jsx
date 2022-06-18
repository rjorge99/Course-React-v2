import { useState } from 'react';

export const CounterApp = ({ value }) => {
    const [counter, setCounter] = useState(value);

    return (
        <>
            <h1>Counter App</h1>
            <h2>{counter}</h2>

            <button onClick={() => setCounter((v) => v + 1)}>+1</button>
            <button onClick={() => setCounter((v) => v - 1)}>-1</button>
            <button onClick={() => setCounter(0)}>Reset</button>
        </>
    );
};
