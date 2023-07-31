import { useState } from "react";

function FunctionComponentDemo() {
    const [counter, setCounter] = useState(0);

    const incrementCount = () => {
        setCounter(counter + 1);
    }

    const decrementCount = () => {
        setCounter(counter - 1);
    }

    return (
        <>
            <h3>Functional Component Demo</h3>
            <button className="btn btn-primary" onClick={decrementCount}>-</button>
            &nbsp;&nbsp;<b>{counter}</b>&nbsp;&nbsp;
            <button className="btn btn-primary" onClick={incrementCount}>+</button>

            <p>Or we can call state function using arrow function</p>
            <button className="btn btn-primary" onClick={() => setCounter(counter-1) }>-</button>
            &nbsp;&nbsp;<b>{counter}</b>&nbsp;&nbsp;
            <button className="btn btn-primary" onClick={() => setCounter(counter+1)}>+</button>
        </>
    );
}

export default FunctionComponentDemo;