import { useState } from "react";

import "./App.css";

import Home from "./Home";
import Register from "./Register";
import Admin from "./Admin";

import AboutPage from "./AboutPage";
import ServicesPage from "./ServicesPage";
import CareersPage from "./CareersPage";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import { useDispatch, useSelector } from "react-redux";

import {
  loginSuccess,
  adminLogin,
  openRegister,
  closeRegister
} from "./redux/authSlice";

export default function App1() {

  const dispatch = useDispatch();

  const {
    isLogin,
    admin,
    showRegister
  } = useSelector((state) => state.auth);

  const [activePage, setActivePage] =
    useState("home");

  const [email, setEmail] = useState("");

  const [password, setPassword] =
    useState("");

  // Existing User

  const existingUser = {

    email: "azeez@gmail.com",

    phone: "8124027620",

    password: "12345"

  };

  // Existing Admin

  const existingadmin = {

    email: "admin@gmail.com",

    password: "12345"

  };

  // Validation

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

  // Login Submit

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

      setEmail("");

      setPassword("");

    }

    // Admin Login

    else if (

      email === existingadmin.email &&
      password === existingadmin.password

    ) {

      toast.success("Admin Login Success");

      dispatch(adminLogin());

      setEmail("");

      setPassword("");

    }

    else {

      toast.error("Invalid Login");

    }

  };

  return (

    <>

      <ToastContainer />

      {/* NAVBAR */}

      <nav
        style={{
          background: "#020617",
          color: "white",
          padding: "18px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "sticky",
          top: 0,
          zIndex: 1000,
          boxShadow:
            "0px 2px 10px rgba(0,0,0,0.3)"
        }}
      >

        <h1
          style={{
            color: "#60a5fa",
            cursor: "pointer",
            fontSize: "32px"
          }}
          onClick={() => {

            setActivePage("home");

            dispatch(closeRegister());

          }}
        >
          MyWebsite
        </h1>

        <ul
          style={{
            display: "flex",
            gap: "25px",
            listStyle: "none",
            cursor: "pointer",
            alignItems: "center",
            fontSize: "17px",
            fontWeight: "500"
          }}
        >

          <li
            onClick={() => {

              setActivePage("home");

              dispatch(closeRegister());

            }}
          >
            Home
          </li>

          <li
            onClick={() => {

              setActivePage("about");

              dispatch(closeRegister());

            }}
          >
            About
          </li>

          <li
            onClick={() => {

              setActivePage("services");

              dispatch(closeRegister());

            }}
          >
            Services
          </li>

          <li
            onClick={() => {

              setActivePage("careers");

              dispatch(closeRegister());

            }}
          >
            Careers
          </li>

          <li
            onClick={() => {

              setActivePage("register");

              dispatch(closeRegister());

            }}
            style={{
              background: "#2563eb",
              padding: "10px 20px",
              borderRadius: "10px"
            }}
          >
            Login
          </li>

          <li
            onClick={() => {

              setActivePage("register");

              dispatch(openRegister({selected:"register"}));

            }}
            style={{
              background: "#16a34a",
              padding: "10px 20px",
              borderRadius: "10px"
            }}
          >
            Register
          </li>

        </ul>

      </nav>

      {/* HOME PAGE */}

      {

        activePage === "home" &&
        !showRegister &&
        !isLogin &&
        !admin && (

          <>

            {/* HERO SECTION */}

            <section
              style={{
                minHeight: "100vh",
                background:
                  "linear-gradient(to right,#020617,#0f172a,#1e3a8a)",
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "40px 20px"
              }}
            >

              <div
                style={{
                  maxWidth: "1200px",
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "50px",
                  flexWrap: "wrap"
                }}
              >

                {/* LEFT SIDE */}

                <div
                  style={{
                    flex: "1",
                    minWidth: "300px"
                  }}
                >

                  <p
                    style={{
                      color: "#60a5fa",
                      fontSize: "18px",
                      marginBottom: "15px",
                      fontWeight: "bold"
                    }}
                  >
                    WELCOME TO MYWEBSITE
                  </p>

                  <h1
                    style={{
                      fontSize: "65px",
                      lineHeight: "85px",
                      marginBottom: "25px"
                    }}
                  >
                    Build Modern <br />
                    Responsive Websites
                  </h1>

                  <p
                    style={{
                      fontSize: "20px",
                      lineHeight: "35px",
                      color: "#cbd5e1",
                      marginBottom: "35px",
                      maxWidth: "650px"
                    }}
                  >
                    We create high-quality
                    responsive web applications
                    using React, Redux,
                    Node.js and APIs.
                  </p>

                  <div
                    style={{
                      display: "flex",
                      gap: "20px",
                      flexWrap: "wrap"
                    }}
                  >

                    <button
                      onClick={() =>
                        setActivePage("services")
                      }
                      style={{
                        padding: "15px 35px",
                        background: "#2563eb",
                        color: "white",
                        border: "none",
                        borderRadius: "10px",
                        fontSize: "17px",
                        cursor: "pointer",
                        fontWeight: "bold"
                      }}
                    >
                      Explore Services
                    </button>

                    <button
                      onClick={() => {

                        setActivePage("register");

                        dispatch(openRegister());

                      }}
                      style={{
                        padding: "15px 35px",
                        background: "transparent",
                        color: "white",
                        border:
                          "2px solid #60a5fa",
                        borderRadius: "10px",
                        fontSize: "17px",
                        cursor: "pointer",
                        fontWeight: "bold"
                      }}
                    >
                      Get Started
                    </button>

                  </div>

                </div>

                {/* RIGHT SIDE */}

                <div
                  style={{
                    flex: "1",
                    display: "flex",
                    justifyContent: "center",
                    minWidth: "300px"
                  }}
                >

                  <img
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475"
                    alt="home"
                    style={{
                      width: "100%",
                      maxWidth: "500px",
                      borderRadius: "25px",
                      boxShadow:
                        "0px 10px 30px rgba(0,0,0,0.5)"
                    }}
                  />

                </div>

              </div>

            </section>

            {/* FEATURES SECTION */}

            <section
              style={{
                padding: "80px 20px",
                background: "#f8fafc"
              }}
            >

              <h1
                style={{
                  textAlign: "center",
                  fontSize: "45px",
                  color: "#0f172a",
                  marginBottom: "60px"
                }}
              >
                Why Choose Us ?
              </h1>

              <div
                style={{
                  maxWidth: "1200px",
                  margin: "auto",
                  display: "flex",
                  gap: "30px",
                  justifyContent: "center",
                  flexWrap: "wrap"
                }}
              >

                {/* CARD 1 */}

                <div
                  style={{
                    width: "320px",
                    background: "white",
                    padding: "35px",
                    borderRadius: "20px",
                    textAlign: "center",
                    boxShadow:
                      "0px 5px 20px rgba(0,0,0,0.08)"
                  }}
                >

                  <div
                    style={{
                      fontSize: "55px",
                      marginBottom: "20px"
                    }}
                  >
                    ⚡
                  </div>

                  <h2
                    style={{
                      marginBottom: "15px",
                      color: "#0f172a"
                    }}
                  >
                    Fast Performance
                  </h2>

                  <p
                    style={{
                      color: "#475569",
                      lineHeight: "30px"
                    }}
                  >
                    Highly optimized
                    applications with fast
                    loading speed and smooth
                    performance.
                  </p>

                </div>

                {/* CARD 2 */}

                <div
                  style={{
                    width: "320px",
                    background: "white",
                    padding: "35px",
                    borderRadius: "20px",
                    textAlign: "center",
                    boxShadow:
                      "0px 5px 20px rgba(0,0,0,0.08)"
                  }}
                >

                  <div
                    style={{
                      fontSize: "55px",
                      marginBottom: "20px"
                    }}
                  >
                    🎨
                  </div>

                  <h2
                    style={{
                      marginBottom: "15px",
                      color: "#0f172a"
                    }}
                  >
                    Modern UI Design
                  </h2>

                  <p
                    style={{
                      color: "#475569",
                      lineHeight: "30px"
                    }}
                  >
                    Beautiful responsive
                    interfaces for desktop,
                    tablet and mobile devices.
                  </p>

                </div>

                {/* CARD 3 */}

                <div
                  style={{
                    width: "320px",
                    background: "white",
                    padding: "35px",
                    borderRadius: "20px",
                    textAlign: "center",
                    boxShadow:
                      "0px 5px 20px rgba(0,0,0,0.08)"
                  }}
                >

                  <div
                    style={{
                      fontSize: "55px",
                      marginBottom: "20px"
                    }}
                  >
                    🚀
                  </div>

                  <h2
                    style={{
                      marginBottom: "15px",
                      color: "#0f172a"
                    }}
                  >
                    Scalable Projects
                  </h2>

                  <p
                    style={{
                      color: "#475569",
                      lineHeight: "30px"
                    }}
                  >
                    Secure and scalable web
                    applications using latest
                    frontend and backend
                    technologies.
                  </p>

                </div>

              </div>

            </section>

          </>

        )

      }

      {/* ABOUT PAGE */}

      {

        activePage === "about" &&
        !showRegister &&
        !isLogin &&
        !admin && (

          <AboutPage setActivePage={setActivePage} />

        )

      }

      {/* SERVICES PAGE */}

      {

        activePage === "services" &&
        !showRegister &&
        !isLogin &&
        !admin && (

          <ServicesPage />

        )

      }

      {/* CAREERS PAGE */}

      {

        activePage === "careers" &&
        !showRegister &&
        !isLogin &&
        !admin && (

          <CareersPage />

        )

      }

      {/* REGISTER + LOGIN PAGE */}

      {

        activePage === "register" &&
        !isLogin &&
        !admin && (

          <div
            style={{
              minHeight: "100vh",
              background:
                "linear-gradient(to right,#e2e8f0,#f8fafc)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "30px"
            }}
          >

            {

              showRegister ? (

                <Register />

              ) : (

                <div
                  style={{
                    width: "380px",
                    background: "white",
                    padding: "35px",
                    borderRadius: "20px",
                    boxShadow:
                      "0px 5px 20px rgba(0,0,0,0.2)"
                  }}
                >

                  <h1
                    style={{
                      textAlign: "center",
                      marginBottom: "10px",
                      color: "#0f172a"
                    }}
                  >
                    Welcome Back
                  </h1>

                  <p
                    style={{
                      textAlign: "center",
                      marginBottom: "25px",
                      color: "#64748b"
                    }}
                  >
                    Login to continue
                  </p>

                  <form onSubmit={handleSubmit}>

                    <input
                      type="text"
                      placeholder="Enter Email"
                      value={email}
                      onChange={(e) =>
                        setEmail(e.target.value)
                      }
                      style={{
                        width: "100%",
                        padding: "14px",
                        marginBottom: "15px",
                        border:
                          "1px solid #cbd5e1",
                        borderRadius: "8px"
                      }}
                    />

                    <input
                      type="password"
                      placeholder="Enter Password"
                      value={password}
                      onChange={(e) =>
                        setPassword(e.target.value)
                      }
                      style={{
                        width: "100%",
                        padding: "14px",
                        marginBottom: "20px",
                        border:
                          "1px solid #cbd5e1",
                        borderRadius: "8px"
                      }}
                    />

                    <button
                      type="submit"
                      style={{
                        width: "100%",
                        padding: "14px",
                        background: "#2563eb",
                        color: "white",
                        border: "none",
                        borderRadius: "8px",
                        marginBottom: "15px",
                        cursor: "pointer",
                        fontSize: "16px",
                        fontWeight: "bold"
                      }}
                    >
                      Login
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        dispatch(openRegister())
                      }
                      style={{
                        width: "100%",
                        padding: "14px",
                        background: "#16a34a",
                        color: "white",
                        border: "none",
                        borderRadius: "8px",
                        cursor: "pointer",
                        fontSize: "16px",
                        fontWeight: "bold"
                      }}
                    >
                      Create Account
                    </button>

                  </form>

                </div>

              )

            }

          </div>

        )

      }

      {/* USER HOME */}

      {

        isLogin && <Home />

      }

      {/* ADMIN PAGE */}

      {

        admin && <Admin />

      }

    </>

  );

}