export default function CareersPage() {

  const jobs = [

    {
      title: "React Developer",
      description:
        "Build scalable frontend applications using React and Redux.",
      icon: "💻"
    },

    {
      title: "Node.js Developer",
      description:
        "Develop secure backend APIs and database systems.",
      icon: "⚙️"
    },

    {
      title: "UI/UX Designer",
      description:
        "Design modern responsive user interfaces and experiences.",
      icon: "🎨"
    }

  ];

  return (

    <section
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(to right,#0f172a,#1e293b)",
        color: "white",
        padding: "90px 20px"
      }}
    >

      {/* TOP SECTION */}

      <div
        style={{
          textAlign: "center",
          marginBottom: "70px"
        }}
      >

        <h4
          style={{
            color: "#60a5fa",
            letterSpacing: "2px",
            marginBottom: "15px"
          }}
        >
          CAREERS
        </h4>

        <h1
          style={{
            fontSize: "55px",
            marginBottom: "20px"
          }}
        >
          Join Our Team
        </h1>

        <p
          style={{
            maxWidth: "750px",
            margin: "auto",
            lineHeight: "35px",
            color: "#cbd5e1",
            fontSize: "18px"
          }}
        >
          We are always looking for talented
          developers and designers who are
          passionate about building modern web
          applications and digital products.
        </p>

      </div>

      {/* NO OPENINGS ALERT */}

      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto 70px auto",
          background: "#1e293b",
          padding: "35px",
          borderRadius: "25px",
          textAlign: "center",
          border: "1px solid #334155",
          boxShadow:
            "0px 10px 30px rgba(0,0,0,0.3)"
        }}
      >

        <div
          style={{
            fontSize: "70px",
            marginBottom: "20px"
          }}
        >
          📢
        </div>

        <h1
          style={{
            color: "#f8fafc",
            marginBottom: "15px",
            fontSize: "40px"
          }}
        >
          Currently No Open Positions
        </h1>

        <p
          style={{
            color: "#cbd5e1",
            lineHeight: "35px",
            fontSize: "18px",
            maxWidth: "700px",
            margin: "auto"
          }}
        >
          Thank you for your interest in joining
          our company. At the moment, we do not
          have any active job openings.
          Future opportunities will be updated
          here soon.
        </p>

        <button
          style={{
            marginTop: "30px",
            padding: "15px 35px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "12px",
            cursor: "pointer",
            fontSize: "16px"
          }}
        >
          Stay Connected
        </button>

      </div>

      {/* FUTURE ROLES */}

      <h2
        style={{
          textAlign: "center",
          marginBottom: "40px",
          fontSize: "38px"
        }}
      >
        Future Opportunities
      </h2>

      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(320px,1fr))",
          gap: "30px"
        }}
      >

        {

          jobs.map((job, index) => (

            <div
              key={index}
              style={{
                background: "#1e293b",
                padding: "35px",
                borderRadius: "25px",
                border: "1px solid #334155",
                transition: "0.3s"
              }}
            >

              <div
                style={{
                  fontSize: "50px",
                  marginBottom: "20px"
                }}
              >
                {job.icon}
              </div>

              <h2
                style={{
                  color: "#60a5fa",
                  marginBottom: "15px"
                }}
              >
                {job.title}
              </h2>

              <p
                style={{
                  color: "#cbd5e1",
                  lineHeight: "30px",
                  marginBottom: "25px"
                }}
              >
                {job.description}
              </p>

              <button
                style={{
                  padding: "12px 24px",
                  background: "#334155",
                  color: "white",
                  border: "none",
                  borderRadius: "10px",
                  cursor: "pointer"
                }}
              >
                Not Available
              </button>

            </div>

          ))

        }

      </div>

      {/* BOTTOM CONTACT */}

      <div
        style={{
          marginTop: "90px",
          textAlign: "center"
        }}
      >

        <h2
          style={{
            marginBottom: "20px",
            fontSize: "40px"
          }}
        >
          Want Updates About Future Jobs?
        </h2>

        <p
          style={{
            color: "#cbd5e1",
            lineHeight: "35px",
            fontSize: "18px",
            marginBottom: "30px"
          }}
        >
          Follow our company and stay updated
          about upcoming opportunities and new
          career openings.
        </p>

        <button
          style={{
            padding: "16px 40px",
            background: "#16a34a",
            color: "white",
            border: "none",
            borderRadius: "12px",
            fontSize: "17px",
            cursor: "pointer"
          }}
        >
          Contact HR Team
        </button>

      </div>

    </section>

  );

}