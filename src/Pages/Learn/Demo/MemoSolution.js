import { useState } from "react";
import TodosMemo from "./TodosMemo";

function MemoSolution() {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState(["Prepare React Demo 👨‍💻", "Wash Car 🚗", "Walk in Garden 🚶‍♂️"]);
    const [newTodo, setNewTodo] = useState("");

    const increment = () => {
        setCount((c) => c + 1);
    };

    const handleInputChange = (e) => {
        setNewTodo(e.target.value); // Update newTodo state on input change
    };

    const addTodo = () => {
        if (newTodo.trim() !== "") {
            setTodos((prevTodos) => [...prevTodos, newTodo]); // Add the new task to the todos list
            setNewTodo(""); // Clear the input field
        }
    };

    return (
        <>
            <div>
                <input type="text" value={newTodo} onChange={handleInputChange} placeholder="Add new task..." />
                <button className="btn btn-success mx-2" onClick={addTodo}>Add New Task</button>
            </div>
            <TodosMemo todos={todos} />
            <hr />
            <div>
                <p>Count: <b>{count}</b></p>
                <button className="btn btn-primary" onClick={increment}>+</button>
            </div>
        </>
    );
}

export default MemoSolution;