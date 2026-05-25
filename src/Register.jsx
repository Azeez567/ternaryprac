import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useDispatch, useSelector } from "react-redux";
import { closeRegister } from "./redux/authSlice";

import { addUser } from "./hooks/Api";
import { addContactUser } from "./hooks/callbackApi";

export default function Register() {
  const dispatch = useDispatch();
  const { selected } = useSelector((state) => state.auth);

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [conpassword, setConpassword] = useState("");
  const [loading, setLoading] = useState(false);

  const validate = () => {
    if (!email.trim()) return toast.error("Enter Email"), false;

    if (!/^[a-z0-9._%+-]+@[a-z.-]+\.[a-z]{2,}$/.test(email)) {
      return toast.error("Enter valid email Format"), false;
    }
    if (!/^[0-9]{10}$/.test(phone))
      return toast.error("Enter Valid Phone"), false;

    if (!password.trim()) return toast.error("Enter Password"), false;

    if (password.length < 8)
      return toast.error("Min 8 characters required"), false;

    if (password !== conpassword)
      return toast.error("Password Mismatch"), false;

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    const newUser = { email, phone, password };

    try {
      if (selected === "contact") {
        await addContactUser(newUser);
        toast.success("Contact Saved Successfully");
      } else {
        await addUser(newUser);
        toast.success("User Registered Successfully");
      }

      setEmail("");
      setPhone("");
      setPassword("");
      setConpassword("");

      setTimeout(() => {
        dispatch(closeRegister());
      }, 1000);
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // ===== INLINE STYLES =====
  const styles = {
    container: {
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(to right,#dbeafe,#f8fafc)",
      padding: "20px",
    },
    card: {
      width: "380px",
      background: "white",
      padding: "35px",
      borderRadius: "20px",
      boxShadow: "0px 10px 30px rgba(0,0,0,0.15)",
    },
    title: {
      textAlign: "center",
      marginBottom: "20px",
      color: "#0f172a",
    },
    input: {
      width: "100%",
      padding: "12px",
      marginBottom: "15px",
      border: "1px solid #cbd5e1",
      borderRadius: "10px",
      outline: "none",
      fontSize: "14px",
    },
    submitBtn: {
      width: "100%",
      padding: "12px",
      background: "#16a34a",
      color: "white",
      border: "none",
      borderRadius: "10px",
      cursor: "pointer",
      marginBottom: "10px",
      fontSize: "16px",
    },
    backBtn: {
      width: "100%",
      padding: "12px",
      background: "#2563eb",
      color: "white",
      border: "none",
      borderRadius: "10px",
      cursor: "pointer",
      fontSize: "16px",
    },
  };

  return (
    <div style={styles.container}>
      <ToastContainer />

      <div style={styles.card}>
        <h1 style={styles.title}>
          {selected === "contact" ? "Contact Form" : "Register Form"}
        </h1>

        <form onSubmit={handleSubmit}>
          <input
            style={styles.input}
            type="text"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            style={styles.input}
            type="text"
            placeholder="Enter Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <input
            style={styles.input}
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            style={styles.input}
            type="password"
            placeholder="Confirm Password"
            value={conpassword}
            onChange={(e) => setConpassword(e.target.value)}
          />

          <button
            type="submit"
            style={styles.submitBtn}
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>

          <button
            type="button"
            style={styles.backBtn}
            onClick={() => dispatch(closeRegister())}
          >
            Already Register? Login
          </button>
        </form>
      </div>
    </div>
  );
}