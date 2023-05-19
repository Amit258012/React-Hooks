import { useState, useEffect } from "react";
import axios from "axios";

function DataFetch() {
    const [post, setPost] = useState({});
    const [id, setId] = useState(1);
    const [idFormButtonClick, setIdFormButtonClicked] = useState(1);

    useEffect(() => {
        axios
            .get(
                `https://jsonplaceholder.typicode.com/posts/${idFormButtonClick}`
            )
            .then((response) => {
                setPost(response.data);
            })
            .catch((err) => console.log(err));
    }, [idFormButtonClick]);

    const clickHandler = () => {
        setIdFormButtonClicked(id);
    };
    return (
        <div>
            <input
                type="text"
                value={id}
                onChange={(e) => setId(e.target.value)}
            />
            <button
                type="button"
                onClick={clickHandler}
            >
                Fetch title
            </button>
            <h1>{post.title}</h1>
            {/* <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul> */}
        </div>
    );
}

export default DataFetch;
