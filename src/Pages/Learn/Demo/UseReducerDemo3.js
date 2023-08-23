import React, { useReducer } from "react";

// Define the initial state of the count
const initialState = { count: 0 };

// Define the reducer function that handles the state updates
const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return { count: state.count + 1 };
        case "decrement":
            return { count: state.count - 1 };
        case "reset":
            return initialState;
        default:
            return state;
    }
};

// Define the Counter component that uses useReducer hook
function UseReducerDemo3() {
    // Use useReducer hook to get the current state and dispatch function
    const [state, dispatch] = useReducer(reducer, initialState);

    // Define a single event handler for all the buttons
    const handleAction = (type) => {
        dispatch({ type: type });
    };

    // Return the JSX code for rendering the component
    return (
        <div>
            <h1>Counter</h1>
            <p>The current count is {state.count}</p>
            <button className="btn btn-primary" onClick={() => handleAction("increment")}>+</button>
            <button className="btn btn-danger" onClick={() => handleAction("decrement")}>-</button>
            <button className="btn btn-warning" onClick={() => handleAction("reset")}>Reset</button>
        </div>
    );
}

export default UseReducerDemo3;