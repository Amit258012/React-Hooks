// todo: conditionally rendering using UseEffect

import { useEffect, useState } from "react";

function HookCounterTwo() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    useEffect(() => {
        console.log("updating the content");
        document.title = `Clicked ${count} times`;
    }, [count]);
    return (
        <div>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={() => setCount(count + 1)}>
                Cliked {count} times
            </button>
        </div>
    );
}

export default HookCounterTwo;
