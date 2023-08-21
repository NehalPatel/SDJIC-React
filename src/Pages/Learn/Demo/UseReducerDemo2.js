import { useReducer } from "react";

const initialTodos = [
    {
        id: 1,
        title: "Complete Homework 👨‍💻",
        complete: false,
    },
    {
        id: 2,
        title: "Car Wash 🚗",
        complete: false,
    },
    {
        id: 3,
        title: "Buy Groceries ⛩",
        complete: false,
    },
];

const reducer = (state, action) => {
    switch (action.type) {
        case "COMPLETE":
            return state.map((todo) => {
                if (todo.id === action.id) {
                    return { ...todo, complete: !todo.complete };
                } else {
                    return todo;
                }
            });
        default:
            return state;
    }
};

function UseReducerDemo2() {

    const [todos, dispatch] = useReducer(reducer, initialTodos);

    const handleComplete = (todo) => {
        dispatch({ type: "COMPLETE", id: todo.id });
    };

    return (
        <>
            {todos.map((todo) => (
                <div key={todo.id}>
                    <label>
                        <input
                            type="checkbox"
                            checked={todo.complete}
                            onChange={() => handleComplete(todo)}
                        /> &nbsp;
                        {todo.title}
                    </label>
                </div>
            ))}
        </>
    );
}

export default UseReducerDemo2;