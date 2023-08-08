import { useState } from "react";

function UseStateDemo1() {
    const [favColor, setColor] = useState("Rainbow");

    return (
        <>
            <h3>Demo 1</h3>
            <p>My Favourite Color is : <b>{favColor}</b></p>
            <button
                className="btn btn-large btn-secondary mx-2"
                onClick={() => setColor("Green")}
            >
                Green
            </button>

            <button
                className="btn btn-large btn-secondary mx-2"
                onClick={() => setColor("Yellow")}
            >
                Yellow
            </button>

            <button
                className="btn btn-large btn-secondary mx-2"
                onClick={() => setColor("Red")}
            >
                Red
            </button>

            <button
                className="btn btn-large btn-secondary mx-2"
                onClick={() => setColor("Black")}
            >
                Black
            </button>

            <button
                className="btn btn-large btn-secondary mx-2"
                onClick={() => setColor("Orange")}
            >
                Orange
            </button>
        </>
    );
}

export default UseStateDemo1;