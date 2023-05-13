// todo: How to set array using hooks

import { useState } from "react";

function FunctionCounterFour() {
    const [items, setItems] = useState([]);

    const addItem = () =>
        setItems([
            ...items,
            { id: items.length, value: Math.floor(Math.random() * 10 + 1) },
        ]);

    return (
        <div>
            <button onClick={addItem}>Add a random number</button>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>{item.value}</li>
                ))}
            </ul>
            {/* <h2>{JSON.stringify(items)}</h2> */}
        </div>
    );
}

export default FunctionCounterFour;
