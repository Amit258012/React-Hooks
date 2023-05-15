// todo: how to render useeffect only at initial time

import { useState, useEffect } from "react";

function HookMouse() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logMousePosition = (e) => {
        console.log("Mouse Event");
        setX(e.clientX);
        setY(e.clientY);
    };

    useEffect(() => {
        console.log("Effect is called");
        window.addEventListener("mousemove", logMousePosition);

        return () => {
            console.log("Component is unmounted/cleanedUp");
            window.removeEventListener("mousemove", logMousePosition);
        };
    }, []);
    return (
        <div>
            Hooks x-{x} y-{y}
        </div>
    );
}

export default HookMouse;
