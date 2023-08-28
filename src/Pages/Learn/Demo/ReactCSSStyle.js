import "./mystyle.css";

function ReactCSSStyle() {
    return (
        <>
            <div className="card">
                <div className="card-header"><h3>CSS Styles</h3></div>
                <div className="card-body">
                    <div className="mycss">
                        <p>You can write your CSS styling in a separate file, just save the file with the .css file extension, and import it in your application.</p>
                        <h1 class="college-name">SDJ International College</h1>
                    </div>

                </div>
            </div>
        </>
    );
}

export default ReactCSSStyle;