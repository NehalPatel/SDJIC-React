import { useEffect, useRef, useState } from "react";

function UseRefSolution() {
    const [name, setName] = useState("SDJIC");
    const renderCount = useRef(0);
    // rendercount{current: 0}

    useEffect(() => {
        renderCount.current = renderCount.current + 1
    });

    return (
        <>
            <div>
                <input value={name} onChange={e => setName(e.target.value)} />
                <p>This component has rendered {renderCount.current} times.</p>
            </div>

        </>
    );
}

export default UseRefSolution;