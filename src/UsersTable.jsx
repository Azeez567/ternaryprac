import { useQuery } from "@tanstack/react-query";

import { getUsers } from "./hooks/Api";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export default function UsersTable() {

  const {

    data = [],
    isLoading,
    error,
    refetch

  } = useQuery({

    queryKey: ["users"],

    queryFn: getUsers,

    refetchOnMount: true,

    refetchOnWindowFocus: true

  });

  if (isLoading) {

    return (

      <h2
        style={{
          textAlign: "center",
          marginTop: "50px",
          color: "#2563eb"
        }}
      >
        Loading...
      </h2>

    );

  }

  if (error) {

    return (

      <h2
        style={{
          textAlign: "center",
          marginTop: "50px",
          color: "red"
        }}
      >
        Error Fetching Data
      </h2>

    );

  }

  return (

    <div
      style={{
        padding: "30px",
        backgroundColor: "#f3f4f6",
        minHeight: "100vh"
      }}
    >
<ToastContainer />
      {/* Header */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "25px"
        }}
      >

        <h1
          style={{
            color: "#111827",
            fontSize: "32px"
          }}
        >
          Users Dashboard
        </h1>

        <>
  
  <ToastContainer />

  <button
    onClick={() => {

      refetch();

      toast.success("Data Refreshed Successfully");

    }}
    style={{
      padding: "12px 20px",
      backgroundColor: "#2563eb",
      color: "white",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      fontSize: "15px",
      fontWeight: "bold"
    }}
  >
    Refresh Data
  </button>

</>

      </div>

      {/* Table Container */}

      <div
        style={{
          overflowX: "auto",
          backgroundColor: "white",
          borderRadius: "15px",
          boxShadow: "0px 4px 15px rgba(0,0,0,0.1)"
        }}
      >

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse"
          }}
        >

          <thead>

            <tr
              style={{
                backgroundColor: "#2563eb",
                color: "white",
                textAlign: "left"
              }}
            >

              <th style={{ padding: "15px" }}>ID</th>

              <th style={{ padding: "15px" }}>Email</th>

              <th style={{ padding: "15px" }}>Phone</th>

              <th style={{ padding: "15px" }}>Password</th>

            </tr>

          </thead>

          <tbody>

            {

              data.map((user, index) => (

                <tr
                  key={user.id}
                  style={{
                    backgroundColor:
                      index % 2 === 0
                        ? "#f9fafb"
                        : "white",
                    transition: "0.3s"
                  }}
                >

                  <td
                    style={{
                      padding: "15px",
                      borderBottom: "1px solid #e5e7eb"
                    }}
                  >
                    {user.id}
                  </td>

                  <td
                    style={{
                      padding: "15px",
                      borderBottom: "1px solid #e5e7eb"
                    }}
                  >
                    {user.email}
                  </td>

                  <td
                    style={{
                      padding: "15px",
                      borderBottom: "1px solid #e5e7eb"
                    }}
                  >
                    {user.phone}
                  </td>

                  <td
                    style={{
                      padding: "15px",
                      borderBottom: "1px solid #e5e7eb"
                    }}
                  >
                    {user.password}
                  </td>

                </tr>

              ))

            }

          </tbody>

        </table>

      </div>

    </div>

  );

}