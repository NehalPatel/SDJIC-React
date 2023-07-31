import { useState } from "react";

function UseStateDemo2() {
    const [brand, setBrand] = useState("Ford");
    const [model, setModel] = useState("Mustang");
    const [year, setYear] = useState("1964");
    const [color, setColor] = useState("red");

    return (
        <>
            <h3>Demo 2</h3>
            <h1>My {brand}</h1>
            <p>
                It is a {color} {model} from {year}.
            </p>
        </>
    );
}

export default UseStateDemo2;