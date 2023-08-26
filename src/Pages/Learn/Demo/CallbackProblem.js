import { useState } from "react";
import TodosCallback from "./TodosCallback";

function CallBackProblem() {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([
        "Prepare React Demo 👨‍💻",
        "Wash Car 🚗",
        "Walk in Garden 🚶‍♂️"
    ]);

    const increment = () => {
        setCount((c) => c + 1);
    };
    const addTodo = () => {
        setTodos((t) => [...t, "New Todo"]);
    };

    return (
        <>
            <TodosCallback todos={todos} addTodo={addTodo} />
            <hr />
            <div>
                Count: {count}
                <button onClick={increment}>+</button>
            </div>
        </>
    );
}

export default CallBackProblem;