import { useDispatch } from "react-redux";

import {
  openRegister
} from "./redux/authSlice";

export default function AboutPage({
  setActivePage
}) {

  const dispatch = useDispatch();

  // CONTACT BUTTON
  const handleContact = () => {

    // OPEN REGISTER PAGE
    dispatch(
      openRegister({
        selected: "contact"
      })
    );

    // MOVE TO REGISTER PAGE
    setActivePage("register");

  };

  return (

    <section
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(to right,#e0f2fe,#f8fafc)",
        padding: "80px 20px",
        display: "flex",
        alignItems: "center"
      }}
    >

      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
          display: "flex",
          gap: "60px",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center"
        }}
      >

        {/* LEFT IMAGE */}

        <div
          style={{
            flex: "1",
            minWidth: "320px",
            position: "relative"
          }}
        >

          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
            alt="about"
            style={{
              width: "100%",
              borderRadius: "25px",
              boxShadow:
                "0px 10px 30px rgba(0,0,0,0.2)"
            }}
          />

          <div
            style={{
              position: "absolute",
              bottom: "-20px",
              right: "-20px",
              background: "#2563eb",
              color: "white",
              padding: "20px",
              borderRadius: "15px"
            }}
          >

            <h2
              style={{
                margin: 0,
                fontSize: "30px"
              }}
            >
              5+
            </h2>

            <p style={{ margin: 0 }}>
              Years Experience
            </p>

          </div>

        </div>

        {/* RIGHT CONTENT */}

        <div
          style={{
            flex: "1",
            minWidth: "320px"
          }}
        >

          <h4
            style={{
              color: "#2563eb",
              letterSpacing: "2px",
              marginBottom: "10px"
            }}
          >
            ABOUT COMPANY
          </h4>

          <h1
            style={{
              fontSize: "50px",
              color: "#0f172a",
              marginBottom: "25px",
              lineHeight: "65px"
            }}
          >
            We Build Modern Digital Products
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: "35px",
              color: "#475569",
              marginBottom: "25px"
            }}
          >
            We specialize in creating modern,
            responsive and scalable web
            applications using React, Redux,
            Node.js and cloud technologies.
          </p>

          {/* FEATURES */}

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(220px,1fr))",
              gap: "20px",
              marginBottom: "30px"
            }}
          >

            <div
              style={{
                background: "white",
                padding: "20px",
                borderRadius: "15px",
                boxShadow:
                  "0px 5px 15px rgba(0,0,0,0.1)"
              }}
            >

              <h3 style={{ color: "#2563eb" }}>
                ⚡ Fast Performance
              </h3>

              <p
                style={{
                  color: "#64748b",
                  lineHeight: "28px"
                }}
              >
                Optimized applications with
                high performance and smooth UI.
              </p>

            </div>

            <div
              style={{
                background: "white",
                padding: "20px",
                borderRadius: "15px",
                boxShadow:
                  "0px 5px 15px rgba(0,0,0,0.1)"
              }}
            >

              <h3 style={{ color: "#2563eb" }}>
                🔒 Secure Systems
              </h3>

              <p
                style={{
                  color: "#64748b",
                  lineHeight: "28px"
                }}
              >
                Secure backend integration and
                protected authentication systems.
              </p>

            </div>

          </div>

          {/* BUTTONS */}

          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap"
            }}
          >

            <button
              style={{
                padding: "14px 30px",
                background: "#2563eb",
                color: "white",
                border: "none",
                borderRadius: "10px",
                fontSize: "16px",
                cursor: "pointer"
              }}
            >
              Explore More
            </button>

            <button
              onClick={handleContact}
              style={{
                padding: "14px 30px",
                background: "white",
                color: "#0f172a",
                border: "1px solid #cbd5e1",
                borderRadius: "10px",
                fontSize: "16px",
                cursor: "pointer"
              }}
            >
              Contact Us
            </button>

          </div>

        </div>

      </div>

    </section>

  );

}