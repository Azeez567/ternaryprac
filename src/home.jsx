import { useDispatch } from "react-redux";

import { logout } from "./redux/authSlice";

import UsersTable from "./UsersTable";

export default function Home() {

  const dispatch = useDispatch();

  return (

    <div
      style={{
        padding: "20px"
      }}
    >

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px"
        }}
      >

        <h1>User Dashboard</h1>

        <button
          onClick={() => dispatch(logout())}
          style={{
            padding: "10px 20px",
            background: "red",
            color: "white",
            border: "none"
          }}
        >
          Logout
        </button>

      </div>

      <UsersTable />

    </div>

  );

}