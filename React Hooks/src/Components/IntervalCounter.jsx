// todo: use of proper dependencies in useEffect in hooks

import { useEffect, useState } from "react";

function IntervalCounter() {
    const [count, setCount] = useState(0);

    const tick = () => {
        setCount((previous) => previous + 1);
    };

    useEffect(() => {
        const interval = setInterval(tick, 1000);

        return () => clearInterval(interval);
    }, []);
    return <div>{count}</div>;
}

export default IntervalCounter;
