function UseRefDemo() {
    return (
        <>
            <div className="card">
                <div className="card-header">
                    <h3><code>useRef</code> Hook</h3>
                </div>
                <div className="card-body">
                    <p class="intro">The <code>useRef</code> Hook allows you to persist values between renders.</p>
                    <p class="intro">It can be used to store a mutable value that does not cause a re-render when updated.</p>
                    <p class="intro">It can be used to access a DOM element directly.</p>

                </div>
            </div>
        </>
    );
}

export default UseRefDemo;