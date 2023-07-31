import UseStateDemo1 from "../Demo/UseStateDemo1";
import UseStateDemo2 from "../Demo/UseStateDemo2";
import UseStateDemo3 from "../Demo/UseStateDemo3";

function UseStateDemo() {
    return (
        <>
            <h3>useState Hook</h3>
            <p class="intro">The React <code>useState</code> Hook allows us to track state in a function component.</p>
            <p class="intro">State generally refers to data or properties that need to be tracking in an application.</p>

            <hr />
            <UseStateDemo1 />

            <hr />
            <UseStateDemo2 />

            <hr />
            <UseStateDemo3 />
        </>
    );
}

export default UseStateDemo;