import { useState } from "react";

function UseStateDemo3() {
    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red"
    });

    const handleChange = (e) => {
        const newCar = { ...car, color: e.target.value };
        setCar(newCar);
    };

    return (
        <>
            <h3>Demo 3</h3>
            <h1>My {car.brand}</h1>
            <p>
                It is a <b>{car.color}</b> {car.model} from {car.year}.
            </p>
            <input
                type="text"
                onChange={handleChange}
                placeholder="Provide Color" />
        </>
    );
}

export default UseStateDemo3;