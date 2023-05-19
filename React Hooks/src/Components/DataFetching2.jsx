import { useEffect, useReducer } from "react";
import axios from "axios";

const initialState = {
    loading: true,
    error: "",
    post: {},
};

const reducer = (state, { type, data }) => {
    switch (type) {
        case "Fetch":
            return {
                loading: false,
                post: data,
                error: "",
            };
        case "Fetch_Error":
            return {
                loading: false,
                post: {},
                error: "Something went wrong!",
            };

        default:
            return state;
    }
};

function DataFetching2() {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/posts/4")
            .then((response) => {
                dispatch({ type: "Fetch", data: response.data });
            })
            .catch(() => {
                dispatch({ type: "Fetch_Error" });
            });
    }, []);

    return (
        <div>
            {state.loading ? "Loading..." : state.post.title}
            {state.error ? state.error : null}
        </div>
    );
}

export default DataFetching2;
