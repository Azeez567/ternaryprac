import { useDispatch, useSelector } from "react-redux";

import { useQuery } from "@tanstack/react-query";

import {
  increment,
  decrement,
  Reset,
} from "./redux/pageSlice";

import { fetchPosts } from "./hooks/pageApi";

export default function App4() {

  const dispatch = useDispatch();

  const page = useSelector(
    (state) => state.page.value
  );

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
    return (
      <h1
        style={{
          textAlign: "center",
          marginTop: "50px",
        }}
      >
        Loading...
      </h1>
    );
  }

  // Error
  if (isError) {
    return (
      <h1
        style={{
          textAlign: "center",
          color: "red",
          marginTop: "50px",
        }}
      >
        {error.message}
      </h1>
    );
  }

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "40px auto",
        padding: "20px",
        fontFamily: "Arial",
      }}
    >

      {/* Heading */}
      <h1
        style={{
          textAlign: "center",
          marginBottom: "30px",
          color: "#333",
        }}
      >
        TanStack Pagination
      </h1>

      {/* Posts */}
      {data?.map((post) => (
        <div
          key={post.id}
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "10px",
            padding: "20px",
            marginBottom: "20px",
            boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",
          }}
        >

          <p>
            <b>ID :</b> {post.id}
          </p>

          <p>
            <b>Title :</b> {post.title}
          </p>

          <p>
            <b>Body :</b> {post.body}
          </p>
        </div>
      ))}

      {/* Pagination Buttons */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "15px",
          marginTop: "30px",
          flexWrap: "wrap",
        }}
      >

        {/* Prev */}
        <button
          disabled={page === 1}
          onClick={() => dispatch(decrement())}
          style={{
            padding: "10px 20px",
            border: "none",
            borderRadius: "8px",
            backgroundColor:
              page === 1 ? "#cccccc" : "#007bff",
            color: "#ffffff",
            cursor:
              page === 1 ? "not-allowed" : "pointer",
            fontWeight: "bold",
          }}
        >
          Prev
        </button>

        {/* Page Number */}
        <span
          style={{
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          Page {page}
        </span>

        {/* Next */}
        <button
          disabled={page === 10}
          onClick={() => dispatch(increment())}
          style={{
            padding: "10px 20px",
            border: "none",
            borderRadius: "8px",
            backgroundColor:
              page === 10 ? "#cccccc" : "#28a745",
            color: "#ffffff",
            cursor:
              page === 10 ? "not-allowed" : "pointer",
            fontWeight: "bold",
          }}
        >
          Next
        </button>

        {/* Reset */}
        <button
          onClick={() => dispatch(Reset(1))}
          style={{
            padding: "10px 20px",
            border: "none",
            borderRadius: "8px",
            backgroundColor: "#dc3545",
            color: "#ffffff",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Reset
        </button>
      </div>

      {/* Fetching */}
      {isFetching && (
        <p
          style={{
            textAlign: "center",
            marginTop: "20px",
            color: "#555",
            fontWeight: "bold",
          }}
        >
          Fetching New Data...
        </p>
      )}
    </div>
  );
}