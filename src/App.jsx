import React, { useState } from "react";

import Home from "./Home";

import Register from "./Register";

import Admin from "./Admin";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import { useDispatch, useSelector } from "react-redux";

import {

  loginSuccess,
  adminLogin,
  openRegister

} from "./redux/authSlice";

function App() {

  const dispatch = useDispatch();

  const {

    isLogin,
    admin,
    showRegister

  } = useSelector((state) => state.auth);

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const existingUser = {

    email: "azeez@gmail.com",

    phone: "8124027620",

    password: "12345"

  };

  const existingadmin = {

    email: "admin@gmail.com",

    password: "12345"

  };

  const validate = () => {

    if (!email.trim()) {

      toast.error("Enter Email");

      return false;

    }

    if (!password.trim()) {

      toast.error("Enter Password");

      return false;

    }

    return true;

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (!validate()) return;

    // User Login
    if (

      (
        email === existingUser.email ||
        email === existingUser.phone
      ) &&

      password === existingUser.password

    ) {

      toast.success("User Login Success");

      dispatch(loginSuccess());

    }

    // Admin Login
    else if (

      email === existingadmin.email &&
      password === existingadmin.password

    ) {

      toast.success("Admin Login Success");

      dispatch(adminLogin());

    }

    else {

      toast.error("Invalid Login");

    }
    setEmail(""),
    setPassword("");

  };

  return (

    <>

      <ToastContainer />

      {

        isLogin ? (

          <Home />

        ) : admin ? (

          <Admin />

        ) : showRegister ? (

          <Register />

        ) : (

          <div
            style={{
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background:
                "linear-gradient(to right,rgb(47,48,49),rgb(70,73,77))"
            }}
          >

            <div
              style={{
                width: "350px",
                background: "white",
                padding: "30px",
                borderRadius: "10px"
              }}
            >

              <h1
                style={{
                  textAlign: "center",
                  marginBottom: "20px"
                }}
              >
                Login Form
              </h1>

              <form onSubmit={handleSubmit}>

                <input
                  type="text"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "10px",
                    marginBottom: "15px"
                  }}
                />

                <input
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "10px",
                    marginBottom: "20px"
                  }}
                />

                <button
                  type="submit"
                  style={{
                    width: "100%",
                    padding: "10px",
                    background: "blue",
                    color: "white",
                    border: "none",
                    marginBottom: "10px"
                  }}
                >
                  Login
                </button>

                <button
                  type="button"
                  onClick={() => dispatch(openRegister())}
                  style={{
                    width: "100%",
                    padding: "10px",
                    background: "green",
                    color: "white",
                    border: "none"
                  }}
                >
                  Register
                </button>

              </form>

            </div>

          </div>

        )
      }

    </>
  );

}

export default App;