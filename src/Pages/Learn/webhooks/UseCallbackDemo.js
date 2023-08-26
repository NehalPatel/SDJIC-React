import CallBackProblem from "../Demo/CallbackProblem";

function UseCallbackDemo() {
    return (
        <>
            <h3>React Callback Hook</h3>
            <p>The React <code>useCallback</code> Hook returns a memoized callback function.</p>
            <div className="card">
                <div className="card-header">
                    <h5>Problem</h5>
                    <p>One reason to use <code>useCallback</code> is to prevent a component from re-rendering unless its props have changed.</p>
                    <p>In this example, you might think that the <code>Todos</code> component will not re-render unless the <code>todos</code> change:</p>
                </div>
                <div className="card-body">
                    <CallBackProblem />
                </div>
            </div>

            <hr />

            <div className="card">
                <div className="card-header">
                    <h5>Solution</h5>
                    <p>One reason to use <code>useCallback</code> is to prevent a component from re-rendering unless its props have changed.</p>
                    <p>In this example, you might think that the <code>Todos</code> component will not re-render unless the <code>todos</code> change:</p>
                </div>
                <div className="card-body">
                    <CallBackProblem />
                </div>
            </div>

        </>
    );
}

export default UseCallbackDemo;