import { memo } from "react";

function TodosCallback({ todos, addTodo }) {
    console.log("TodosCallback render");
    return (
        <>
            <h2>My Todos</h2>
            <ol>
            {todos.map((todo, index) => {
                return <li key={index}>{todo}</li>;
            })}
            </ol>
            <button className="btn btn-primary" onClick={addTodo}>Add Todo</button>
        </>
    );
}

export default memo(TodosCallback);