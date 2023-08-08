import { useEffect, useState } from "react";

function UseEffectDemo1() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    useEffect(() => {
        document.title = `Count: ${count}`;
        console.log('state variable changes');
    }, [count]);
    //try using dependencies
    //[], [count], [count, name]

    return (
        <>
            <h3>Demo 1</h3>
            <b>Counter : {count}</b> <br />
            <button
                className="btn btn-primary mx-2"
                onClick={() => setCount(count + 1)}
            >
                +1
            </button>
            <button
                className="btn btn-primary mx-2"
                onClick={() => setCount(count + 10)}
            >
                +10
            </button>
            <button
                className="btn btn-primary mx-2"
                onClick={() => setCount(count + 100)}
            >
                +100
            </button>
            <br />
            <p className="text-dark mt-4">Hello {name},</p>
            <input
                className="form-input"
                type="text"
                value={name}
                placeholder="Enter your name"
                onChange={(e) => setName(e.target.value)}
            />
        </>
    );
}

export default UseEffectDemo1;