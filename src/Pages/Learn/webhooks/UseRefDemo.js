import UseRefElement from "../Demo/UseRefElement";
import UseRefProblem from "../Demo/UseRefProblem";
import UseRefSolution from "../Demo/UseRefSolution";

function UseRefDemo() {
    return (
        <>
            <div className="card">
                <div className="card-header">
                    <h3><code>useRef</code> Hook</h3>
                </div>
                <div className="card-body">
                    <p className="intro">The <code>useRef</code> Hook allows you to persist values between renders.</p>
                    <p className="intro">It can be used to store a mutable value that does not cause a re-render when updated.</p>
                    <p className="intro">It can be used to access a DOM element directly.</p>
                </div>
            </div>
            <hr />

            <div className="card">
                <div className="card-header">
                    <h3>Problem</h3>
                </div>
                <div className="card-body">
                    <p>If we tried to count how many times our application renders using the <code>useState</code> Hook, we would be caught in an infinite loop since this Hook itself causes a re-render.</p>
                    <UseRefProblem />
                </div>
            </div>

            <hr />
            <div className="card">
                <div className="card-header">
                    <h3>Solution</h3>
                </div>
                <div className="card-body">
                    <p>useing <code>useRef</code> we can keep the track of the state variable between re-render</p>
                    <UseRefSolution />
                </div>
            </div>

            <hr />
            <div className="card">
                <div className="card-header">
                    <h3>Reference for Element</h3>
                </div>
                <div className="card-body">
                    <p>In React, we can add a <code>ref</code> attribute to an element to access it directly in the DOM.</p>
                    <UseRefElement />
                </div>
            </div>
        </>
    );
}

export default UseRefDemo;