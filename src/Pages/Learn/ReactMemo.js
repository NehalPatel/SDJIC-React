import MemoProblem from "./Demo/MemoProblem";
import MemoSolution from "./Demo/MemoSolution";

function ReactMemo() {
    return (
        <>
            <h3>React Memo</h3>
            <p>Using <code>memo</code> will cause React to skip rendering a component if its props have not changed. This can improve performance.</p>
            <div className="card">
                <div className="card-header">
                    <h5>Problem</h5>
                    <p>In this example, the <code>Todos</code> component re-renders even when the todos have not changed.</p>
                </div>
                <div className="card-body">
                    <MemoProblem />
                </div>
            </div>

            <hr />

            <div className="card">
                <div className="card-header">
                    <h5>Solution</h5>
                </div>
                <div className="card-body">
                    <MemoSolution />
                </div>
            </div>
        </>
    );
}

export default ReactMemo;