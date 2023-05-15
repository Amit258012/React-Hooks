// todo: cleaning up the component in <HookMouse/> component

import HookMouse from "./HookMouse";
import { useState } from "react";

function MouseContainer() {
    const [display, setDisplay] = useState(true);
    return (
        <div>
            <button onClick={() => setDisplay(!display)}>Toggle display</button>
            {display && <HookMouse />}
        </div>
    );
}

export default MouseContainer;
