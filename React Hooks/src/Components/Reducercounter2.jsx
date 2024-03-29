import { useReducer } from "react";

const initialState = {
    firstCounter: 0,
};
const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return { firstCounter: state.firstCounter + action.value };
        case "decrement":
            return { firstCounter: state.firstCounter - action.value };
        case "reset":
            return initialState;
        default:
            return state;
    }
};

function Reducercounter2() {
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <h1>Count = {count.firstCounter}</h1>
            <button onClick={() => dispatch({ type: "increment", value: 1 })}>
                Increment
            </button>
            <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
                Decrement
            </button>
            <button onClick={() => dispatch({ type: "increment", value: 5 })}>
                Increment5
            </button>
            <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
                Decrement5
            </button>
            <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
        </div>
    );
}

export default Reducercounter2;
