import UseEffectDemo1 from "../Demo/UseEffectDemo1";

function UseEffectDemo() {
    return (
        <>
            <div className="card">
                <div className="card-header">
                    <h3>useEffect Hook</h3>
                </div>
                <div className="card-body">
                    <p className="card-text">The <code>useEffect</code> Hook allows you to perform side effects in your components.</p>
                    <p className="card-text">Some examples of side effects are: fetching data, directly updating the DOM, and timers.</p>
                    <p className="card-text"><code>useEffect</code> accepts two arguments. The second argument is optional.</p>
                    <p className="card-text"><code>useEffect(&lt;function&gt;, &lt;dependency&gt;)</code></p>
                    <UseEffectDemo1 />
                </div>
            </div>
        </>
    );
}

export default UseEffectDemo;