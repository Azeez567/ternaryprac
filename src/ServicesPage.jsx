export default function ServicesPage() {

  const services = [

    {
      icon: "💻",
      title: "Frontend Development",
      description:
        "Modern responsive UI development using React, Redux and advanced frontend technologies.",
      color: "#2563eb"
    },

    {
      icon: "⚙️",
      title: "Backend Development",
      description:
        "Powerful backend APIs using Node.js, Express and secure database integration.",
      color: "#16a34a"
    },

    {
      icon: "☁️",
      title: "Cloud Services",
      description:
        "Scalable cloud hosting, deployment pipelines and server management solutions.",
      color: "#9333ea"
    },

    {
      icon: "📱",
      title: "Mobile Responsive",
      description:
        "Fully responsive websites optimized for mobile, tablet and desktop devices.",
      color: "#ea580c"
    },

    {
      icon: "🔒",
      title: "Authentication System",
      description:
        "JWT authentication, Redux login management and secure authorization systems.",
      color: "#dc2626"
    },

    {
      icon: "🚀",
      title: "Performance Optimization",
      description:
        "Fast loading applications with optimized rendering and high performance.",
      color: "#0891b2"
    }

  ];

  return (

    <section
      style={{
        minHeight: "100vh",
        padding: "90px 20px",
        background:
          "linear-gradient(to right,#f8fafc,#e2e8f0)"
      }}
    >

      {/* TOP CONTENT */}

      <div
        style={{
          textAlign: "center",
          marginBottom: "70px"
        }}
      >

        <h4
          style={{
            color: "#2563eb",
            letterSpacing: "2px",
            marginBottom: "15px"
          }}
        >
          OUR SERVICES
        </h4>

        <h1
          style={{
            fontSize: "55px",
            color: "#0f172a",
            marginBottom: "20px"
          }}
        >
          What We Offer
        </h1>

        <p
          style={{
            maxWidth: "750px",
            margin: "auto",
            color: "#64748b",
            lineHeight: "35px",
            fontSize: "18px"
          }}
        >
          We provide complete web development
          solutions including frontend,
          backend, cloud deployment and
          performance optimization for modern
          businesses.
        </p>

      </div>

      {/* SERVICE CARDS */}

      <div
        style={{
          maxWidth: "1250px",
          margin: "auto",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(320px,1fr))",
          gap: "35px"
        }}
      >

        {

          services.map((service, index) => (

            <div
              key={index}
              style={{
                background: "white",
                padding: "35px",
                borderRadius: "25px",
                boxShadow:
                  "0px 10px 25px rgba(0,0,0,0.1)",
                transition: "0.3s",
                cursor: "pointer",
                borderTop:
                  `6px solid ${service.color}`
              }}
            >

              {/* ICON */}

              <div
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "20px",
                  background: "#f1f5f9",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "40px",
                  marginBottom: "25px"
                }}
              >
                {service.icon}
              </div>

              {/* TITLE */}

              <h2
                style={{
                  color: "#0f172a",
                  marginBottom: "18px",
                  fontSize: "28px"
                }}
              >
                {service.title}
              </h2>

              {/* DESCRIPTION */}

              <p
                style={{
                  color: "#64748b",
                  lineHeight: "32px",
                  fontSize: "17px",
                  marginBottom: "25px"
                }}
              >
                {service.description}
              </p>

              {/* BUTTON */}

              <button
                style={{
                  padding: "12px 24px",
                  background: service.color,
                  color: "white",
                  border: "none",
                  borderRadius: "10px",
                  cursor: "pointer",
                  fontSize: "15px"
                }}
              >
                Learn More
              </button>

            </div>

          ))

        }

      </div>

      {/* BOTTOM SECTION */}

      <div
        style={{
          marginTop: "90px",
          background: "#0f172a",
          padding: "60px 30px",
          borderRadius: "30px",
          color: "white",
          maxWidth: "1200px",
          marginInline: "auto",
          textAlign: "center"
        }}
      >

        <h1
          style={{
            fontSize: "45px",
            marginBottom: "20px"
          }}
        >
          Ready To Build Your Project?
        </h1>

        <p
          style={{
            maxWidth: "700px",
            margin: "auto",
            lineHeight: "35px",
            color: "#cbd5e1",
            marginBottom: "30px",
            fontSize: "18px"
          }}
        >
          Let’s create powerful and scalable
          web applications together using the
          latest technologies and best
          development practices.
        </p>

        <button
          style={{
            padding: "15px 35px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "12px",
            fontSize: "17px",
            cursor: "pointer"
          }}
        >
          Start Project
        </button>

      </div>

    </section>

  );

}