// todo: How to set value using Hooks

import { useState } from "react";

function FunctionCounter() {
    const [count, setCount] = useState(0);

    const handler = () => setCount(count + 1);
    return (
        <div>
            <button onClick={handler}>Count {count}</button>
        </div>
    );
}

export default FunctionCounter;
