import { useState } from "react";

function UseMemoProblem() {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);
    const calculation = expensiveCalculation(count);

    const increment = () => {
        setCount((c) => c + 1);
    };
    const addTodo = () => {
        setTodos((t) => [...t, "New Todo"]);
    };

    return (
        <div>
            <div>
                <h2>My Todos</h2>
                <ol>
                    {todos.map((todo, index) => {
                        return <li key={index}>{todo}</li>;
                    })}
                </ol>
                
                <button className="btn btn-primary" onClick={addTodo}>Add Todo</button>
            </div>
            <hr />
            <div>
                Count: {count} <br />
                <button className="btn btn-warning" onClick={increment}>+1</button>
                <h2>Expensive Calculation</h2>
                {calculation}
            </div>
        </div>
    );
};

const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
        num += 1;
    }
    return num;
};

export default UseMemoProblem;