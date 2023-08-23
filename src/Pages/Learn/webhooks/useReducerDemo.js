import UseReducerDemo1 from "../Demo/UseReducerDemo1";
import UseReducerDemo2 from "../Demo/UseReducerDemo2";
import UseReducerDemo3 from "../Demo/UseReducerDemo3";

function UseReducerDemo() {
    return (
        <>
            <div className="card">
                <div className="card-header">
                    <h3>useReducer Hook</h3>
                </div>
                <div className="card-body">
                    <p className="card-text">The <code>useReducer</code> Hook is similar to the useState Hook</p>
                    <p className="card-text">It allows for custom state logic.</p>
                    <p className="card-text">If you find yourself keeping track of multiple pieces of state that rely on complex logic, <code>useReducer</code> may be useful.</p>
                </div>
            </div>
            <hr />
            <div className="card">
                <div className="card-header">
                    <h3>Shopping Cart</h3>
                    <UseReducerDemo1 />
                </div>
            </div>

            <hr />
            <div className="card">
                <div className="card-header">
                    <h3>Shopping Cart</h3>
                    <UseReducerDemo2 />
                </div>
            </div>

            <hr />
            <div className="card">
                <div className="card-header">
                    <h3>Shopping Cart</h3>
                    <UseReducerDemo3 />
                </div>
            </div>
        </>
    );
}

export default UseReducerDemo;