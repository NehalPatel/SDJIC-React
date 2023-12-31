import React, { useRef, useEffect, memo } from 'react';

function TodosMemo({ todos }) {
    const renderCount = useRef(0);

    useEffect(() => {
        renderCount.current = renderCount.current + 1;
    });
    return (
        <>
            <h2>My Todos</h2>
            <ol>
                {todos.map((todo, index) => {
                    return <li key={index}>{todo}</li>;
                })}
            </ol>

            <p>This component has rendered {renderCount.current} times.</p>
        </>
    );
}

export default memo(TodosMemo);