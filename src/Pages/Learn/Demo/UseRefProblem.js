import { useEffect, useState } from "react";

function UseRefProblem() {
    const [name, setName] = useState("SDJIC");
    const [renderCount, setRenderCount] = useState(0);

    useEffect(() => {
        setRenderCount(renderCount + 1);
        //console.log("name state variable changed");
    });

    return (
        <>
            <div>
                <input value={name} onChange={e => setName(e.target.value)} />
                <p>This component has rendered {renderCount} times.</p>
            </div>

        </>
    );
}

export default UseRefProblem;