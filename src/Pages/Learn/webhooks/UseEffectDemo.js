import UseEffectDemo1 from "../Demo/UseEffectDemo1";

function UseEffectDemo() {
    return (
        <>
            <h3>useEffect Hook</h3>
            <p>The <code>useEffect</code> Hook allows you to perform side effects in your components.</p>
            <p>Some examples of side effects are: fetching data, directly updating the DOM, and timers.</p>
            <p><code>useEffect</code> accepts two arguments. The second argument is optional.</p>
            <p><code>useEffect(&lt;function&gt;, &lt;dependency&gt;)</code></p>

            <UseEffectDemo1 />
        </>
    );
}

export default UseEffectDemo;