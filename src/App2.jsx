import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, multiply, Reset } from "./redux/mathSlice";
function App2() {

    const dispatch = useDispatch();
    const count = useSelector((state) => state.math.value);

    return (
        <>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100vh",
                    backgroundColor: "#f4f4f4",
                    fontFamily: "Arial",
                }}
            >
                <div
                    style={{
                        backgroundColor: "white",
                        padding: "30px",
                        borderRadius: "10px",
                        boxShadow: "0 0 10px rgba(0,0,0,0.2)",
                        textAlign: "center",
                    }}
                >
                    <h1
                        style={{
                            color: "#333",
                            marginBottom: "20px",
                        }}
                    >
                        Counter App
                    </h1>

                    <h3
                        style={{
                            fontSize: "28px",
                            color: "#007bff",
                            marginBottom: "20px",
                        }}
                    >
                        Count : {count}
                    </h3>

                    <div
                        style={{
                            display: "flex",
                            gap: "10px",
                            flexWrap: "wrap",
                            justifyContent: "center",
                        }}
                    >
                        <button
                            onClick={() => dispatch(increment())}
                            style={{
                                padding: "10px 20px",
                                border: "none",
                                backgroundColor: "green",
                                color: "white",
                                borderRadius: "5px",
                                cursor: "pointer",
                                fontSize: "18px",
                            }}
                        >
                            +
                        </button>

                        <button
                            onClick={() => dispatch(decrement())}
                            style={{
                                padding: "10px 20px",
                                border: "none",
                                backgroundColor: "red",
                                color: "white",
                                borderRadius: "5px",
                                cursor: "pointer",
                                fontSize: "18px",
                            }}
                        >
                            -
                        </button>

                        <button
                            onClick={() => dispatch(multiply(5))}
                            style={{
                                padding: "10px 20px",
                                border: "none",
                                backgroundColor: "orange",
                                color: "white",
                                borderRadius: "5px",
                                cursor: "pointer",
                                fontSize: "18px",
                            }}
                        >
                            *5
                        </button>

                        <button
                            onClick={() => dispatch(Reset(0))}
                            style={{
                                padding: "10px 20px",
                                border: "none",
                                backgroundColor: "blue",
                                color: "white",
                                borderRadius: "5px",
                                cursor: "pointer",
                                fontSize: "18px",
                            }}
                        >
                            Reset
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App2;