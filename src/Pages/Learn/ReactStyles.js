import ReactCSSStyle from "./Demo/ReactCSSStyle";
import ReactInlineStyle from "./Demo/ReactInlineStyle";
import UserInfo from "./Demo/UserInfo";

function ReactStyles() {
    return (
        <>
            <div className="card">
                <div className="card-header"><h3>React CSS Styles</h3></div>
                <div className="card-body">
                    <p>There are many ways to style React with CSS, this tutorial will take a closer look at three common ways:</p>
                    <ul>
                        <li>Inline styling</li>
                        <li>CSS stylesheets</li>
                        <li>CSS Modules</li>
                    </ul>
                </div>
            </div>
            <hr />

            <ReactInlineStyle />
            <hr />
            <ReactCSSStyle />
            <hr />
            <UserInfo />
        </>
    );
}

export default ReactStyles;