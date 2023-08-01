import UseContextDemo1 from "../Demo/UseContextDemo1";
import UseContextDemo2 from "../Demo/UseContextDemo2";

function UseContextDemo() {
    return (
        <>
            <div className="card">
                <div className="card-header">
                    <h3>useContext Hook</h3>
                </div>
                <div className="card-body">
                    <p className="card-text">React Context is a way to manage state globally.</p>
                    <p className="card-text">It can be used together with the <code>useState</code> Hook to share state between
                        deeply nested components more easily than with <code>useState</code> alone.</p>
                </div>
            </div>

            <hr />
            <div className="card">
                <div className="card-header">
                    <h2>The Problem</h2>
                </div>
                <div className="card-body">
                    <p>State should be held by the highest parent component in the stack that requires access to the state.</p>
                    <p>To illustrate, we have many nested components. The component at the top and bottom of the stack need access to the state.</p>
                    <p>To do this without Context, we will need to pass the state as "props" through each nested component. This is called "prop drilling".</p>

                    <UseContextDemo1 />
                </div>
            </div>
            <hr />

            <div className="card">
                <div className="card-header">
                    <h2>The Solution</h2>
                </div>
                <div className="card-body">
                    <UseContextDemo2 />
                </div>
            </div>
        </>
    );
}

export default UseContextDemo;