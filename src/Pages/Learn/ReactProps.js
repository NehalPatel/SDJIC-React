function ReactProps() {
    return (
        <>
            <div className="card">
                <div className="card-header">Props</div>
                <div className="card-body">
                    <p>React Props are like function arguments in JavaScript <em>and</em> attributes
                        in HTML.</p>
                    <p>To send props into a component, use the same syntax as HTML attributes:</p>
                    <code>
                        const myElement = &lt;Car brand="Ford" /&gt;
                    </code>
                </div>
            </div>
        </>
    );
}

export default ReactProps;