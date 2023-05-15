// todo: How to use useEffect hook

import { useState, useEffect } from "react";

function HookCounter() {
    const [count, setCount] = useState(0);

    // it will render initially & after each update
    useEffect(() => {
        document.title = `Clicked ${count} times`;
    });
    const clickCountHandler = () => setCount((pre) => pre + 1);
    return (
        <div>
            <button onClick={clickCountHandler}>Click {count}</button>
        </div>
    );
}

export default HookCounter;
