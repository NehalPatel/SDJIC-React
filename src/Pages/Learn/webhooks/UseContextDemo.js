import UseContextDemo1 from "../Demo/UseContextDemo1";
import UseContextDemo2 from "../Demo/UseContextDemo2";

function UseContextDemo() {
    return ( 
        <>
            <h3>useContext Hook</h3>
            <p>React Context is a way to manage state globally.</p>
            <p>It can be used together with the <code>useState</code> Hook to share state between
            deeply nested components more easily than with <code>useState</code> alone.</p>

            <h2>The Problem</h2>
            <p>State should be held by the highest parent component in the stack that requires access to the state.</p>
            <p>To illustrate, we have many nested components. The component at the top and bottom of the stack need access to the state.</p>
            <p>To do this without Context, we will need to pass the state as "props" through each nested component. This is called "prop drilling".</p>

            <UseContextDemo1 />

            <hr />
            <h2>The Solution</h2>

            <UseContextDemo2 />

        </>
     );
}

export default UseContextDemo;