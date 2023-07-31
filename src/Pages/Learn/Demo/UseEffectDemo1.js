import { useState } from "react";

function UseEffectDemo1() {
    const [count, setCount] = useState(0);

    setTimeout(() => {
        setCount((count) => count + 1);
    }, 1000);

    return (
        <>
            <h3>Demo 1</h3>

            <p>I've rendered {count} times!</p>

        </>
    );
}

export default UseEffectDemo1;