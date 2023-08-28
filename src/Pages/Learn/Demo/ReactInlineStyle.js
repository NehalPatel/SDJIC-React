function ReactInlineStyle() {
    const myStyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Sans-Serif"
    };

    return (
        <>
            <div className="card">
                <div className="card-header"><h3>Inline Styles</h3></div>
                <div className="card-body">
                    <p>To style an element with the inline style attribute, the value must be a JavaScript object:</p>

                    <h1 style={{ color: "red" }}>SDJ International College</h1>

                    <p style={{
                        color: "#2790ed",
                        backgroundColor: "yellow",
                        fontSize: "18px",
                        fontWeight: "bold",
                        textAlign: "center"
                    }}>TYBCA - Advance Web Development <span style={myStyle}>(React.js)</span></p>

                </div>
            </div>
        </>
    );
}

export default ReactInlineStyle;