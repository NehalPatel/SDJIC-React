import ClassComponentDemo from "./Demo/ClassComponentDemo";
import FunctionComponentDemo from "./Demo/FunctionComponentDemo";

function ReactComponent() {
    return (
        <>
            <h2>React Components</h2>
            <p>Components are independent and reusable bits of code.
                They serve the same purpose as JavaScript functions,
                but work in isolation and return HTML.</p>

            <p>Components come in two types, Class components and Function components, in
                this tutorial we will concentrate on Function components.</p>

            <div className="card">
                <div className="card-header">
                    <h3>Class Component</h3>
                </div>
                <div className="card-body">
                    <p className="card-text">A class component must include the <code>extends React.Component</code> statement.
                        This statement creates an inheritance to React.Component, and gives your component access to React.Component's functions.</p>

                    <p className="card-text">The component also requires a <code>render()</code> method,
                        this method returns HTML.</p>
                    <ClassComponentDemo />
                </div>
            </div>
            <hr />

            <div className="card">
                <div className="card-header">
                    <h3>Function Component</h3>
                </div>
                <div className="card-body">
                    <p className="card-text">Here is the same example as above, but created using a Function component instead.</p>
                    <p className="card-text">A Function component also returns HTML, and behaves much the same way as a Class component,
                        but Function components can be written using much less code,
                        are easier to understand, and will be preferred in this tutorial.</p>

                    <FunctionComponentDemo />
                </div>
            </div>
        </>
    );
}

export default ReactComponent;