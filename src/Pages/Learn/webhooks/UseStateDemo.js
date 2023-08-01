import UseStateDemo1 from "../Demo/UseStateDemo1";
import UseStateDemo2 from "../Demo/UseStateDemo2";
import UseStateDemo3 from "../Demo/UseStateDemo3";

function UseStateDemo() {
    return (
        <>
            <div className="card">
                <div className="card-header">
                    <h3>useState Hook</h3>
                </div>
                <div className="card-body">
                    <p className="intro">The React <code>useState</code> Hook allows us to track state in a function component.</p>
                    <p className="intro">State generally refers to data or properties that need to be tracking in an application.</p>

                    <div className="card">
                        <div className="card-body">
                            <UseStateDemo1 />
                        </div>
                    </div>
                    <hr />

                    <div className="card">
                        <div className="card-body">
                            <UseStateDemo2 />
                        </div>
                    </div>
                    <hr />

                    <div className="card">
                        <div className="card-body">
                            <UseStateDemo3 />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UseStateDemo;