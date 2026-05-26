import { useState, useRef } from "react";

export default function App3() {
    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();

    const initialdata = {
        Name: "Hari",
        age: 25,
        city: "Madurai",
        date: date,
        Time: time,
    }
    // Store Previous Data
    const previousData = useRef(null);

    // Current State
    const [name, setName] = useState(initialdata);

    // Update Data
    function handleChange() {


        previousData.current = name;
        console.log(date);
        console.log(time);
        // New Updated Data
        setName({
            Name: "Mani",
            age: 35,
            city: "Chennai",
            date: new Date().toLocaleDateString(),
            Time: new Date().toLocaleTimeString(),
        });
    }

    // Back To Previous Data
    function handleBack() {



        setName(initialdata);
        previousData.current = null;
    }

    return (
        <div
            style={{
                textAlign: "center",
                marginTop: "50px",
                fontFamily: "Arial"
            }}
        >

            {/* Current Data */}
            <div
                style={{
                    background: "#c4bfbf1d",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                    padding: "20px",
                    width: "300px",
                    margin: "auto",
                    borderRadius: "10px"
                }}
            >

                <u><h1 style={{ marginBottom: "10px" }}>Current Data</h1></u>

                <h2>Name: {name.Name}</h2>

                <h2>Age: {name.age}</h2>

                <h2>City: {name.city}</h2>
                <h2>Date: {name.date}</h2>
                <h2>Time: {name.Time}</h2>

            </div>

            <br />

            {/* Previous Data */}
            {
                previousData.current && (

                    <div
                        style={{
                            background: "#dddddd61",
                            display: "flex",
                            flexDirection: "column",
                            gap: "8px",
                            padding: "20px",
                            width: "300px",
                            margin: "auto",
                            borderRadius: "10px"
                        }}
                    >

                        <u><h1 style={{ marginBottom: "10px" }}>Previous Data</h1></u>

                        <h2>Name: {previousData.current.Name}</h2>

                        <h2>Age: {previousData.current.age}</h2>

                        <h2>City: {previousData.current.city}</h2>
                        <h2>Date: {previousData.current.date}</h2>
                        <h2>Time: {previousData.current.Time}</h2>

                    </div>
                )
            }

            <br />

            <button
                onClick={handleChange}
                style={{
                    padding: "10px",
                    marginRight: "30px",
                    background: "green",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer"
                }}
            >
                Change
            </button>

            <button
                onClick={handleBack}
                style={{
                    padding: "10px",
                    background: "red",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer"
                }}
            >
                Back
            </button>

        </div>
    );
}