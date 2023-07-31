import { useState } from "react";

function UseStateDemo3() {
    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red"
    });

    return (
        <>
            <h3>Demo 3</h3>
            <h1>My {car.brand}</h1>
            <p>
                It is a {car.color} {car.model} from {car.year}.
            </p>
        </>
    );
}

export default UseStateDemo3;