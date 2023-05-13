// todo: How to use Previous value using Hooks

import { useState } from "react";

function FunctionCounterTwo() {
    let initialValue = 0;
    const [count, setCount] = useState(initialValue);

    const fiveIncrement = () => {
        for (let i = 0; i < 5; i++) {
            setCount((preValue) => preValue + 1);
        }
    };
    return (
        <div>
            <div>Count= {count}</div>
            <button onClick={() => setCount((preValue) => preValue + 1)}>
                Increment
            </button>
            <button onClick={() => setCount((preValue) => preValue - 1)}>
                Decrement
            </button>
            <button onClick={() => setCount(initialValue)}>Reset</button>
            <button onClick={fiveIncrement}>Increment5</button>
        </div>
    );
}

export default FunctionCounterTwo;
