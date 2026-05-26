
import { useDispatch, useSelector } from "react-redux";

import { useQuery } from "@tanstack/react-query";
import { increment, decrement, Reset } from "./redux/pageSlice";

export default function App4() {
    const dispatch = useDispatch();
    const page = useSelector((state) => state.page.value)



    // Fetch Function
    const fetchPosts = async (page) => {

        const res = await fetch(
            `https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}`
        );

        return res.json();
    };

    // Query
    const {
        data,
        isLoading,
        isError,
        error,
        isFetching,
    } = useQuery({
        queryKey: ["posts", page],

        queryFn: () => fetchPosts(page),

        // Keeps old data while loading new page
        placeholderData: (previousData) => previousData,
    });

    // Loading
    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    // Error
    if (isError) {
        return <h1>{error.message}</h1>;
    }

    return (
        <div style={{ padding: "20px" }}>

            <h1>TanStack Pagination</h1>

            {/* Posts */}
            {data.map((post) => (
                <div
                    key={post.id}
                    style={{
                        border: "1px solid black",
                        marginBottom: "10px",
                        padding: "10px",
                    }}
                >
                    <h3>Id : {post.id}</h3>
                    <h3>Title : {post.title}</h3>
                    <h3>Body : {post.body}</h3>
                </div>
            ))}

            {/* Buttons */}
            <div style={{ marginTop: "20px" }}>

                <button
                    disabled={page === 1}
                    onClick={() => dispatch(decrement())}
                >
                    Prev
                </button>

                <span style={{ margin: "0 10px" }}>
                    Page {page}
                </span>

                <button
                    onClick={() => dispatch(increment())}
                >
                    Next
                </button>
                <button onClick={() => dispatch(Reset(1))} style={{ margin: "0px 10px" }} >Reset</button>
            </div>

            {/* Background Fetch */}
            {isFetching && <p>Fetching New Data...</p>}
        </div>
    );
}