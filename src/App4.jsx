import { useState } from "react";

import { useQuery } from "@tanstack/react-query";

export default function App4() {

  const [page, setPage] = useState(1);

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
          onClick={() => setPage((prev) => prev - 1)}
        >
          Prev
        </button>

        <span style={{ margin: "0 10px" }}>
          Page {page}
        </span>

        <button
          onClick={() => setPage((prev) => prev + 1)}
        >
          Next
        </button>
        <button onClick={()=>setPage(1)} style={{margin: "0px 10px"}} >Reset</button>
      </div>

      {/* Background Fetch */}
      {isFetching && <p>Fetching New Data...</p>}
    </div>
  );
}