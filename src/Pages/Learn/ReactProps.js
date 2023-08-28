import Welcome, { UserInfo, UserInfo2, UserInfo3 } from "./Demo/PropsDemo";

function ReactProps() {

    const code = 'const element = <Welcome name="SDJIC" />';
    const code2 = '<Welcome name={college} />';
    const code3 = '<UserInfo user={user} />';
    const code4 = '<UserInfo2 name="Devashya Patel" age="21" />';

    const college = "SDJ International College";
    const user = { name: "Devashya Patel", age: 21 };

    return (
        <>
            <div className="card">
                <div className="card-header">Props</div>
                <div className="card-body">
                    <p>React Props are like function arguments in JavaScript <em>and</em> attributes
                        in HTML.</p>
                    <p>To send props into a component, use the same syntax as HTML attributes:</p>
                    <code>
                        {code}
                    </code>
                    <Welcome name="SDJIC" />
                    <hr />
                    <p>Send variable instead of String to the props</p>
                    <code>
                        {code2}
                    </code>
                    <Welcome name={college} />
                    <hr />
                    <p>Send Object to the props</p>
                    <code>
                        {code3}
                    </code>
                    <UserInfo user={user} />
                    <hr />
                    <p>Restrict user properties with selected values</p>
                    <code>
                        {code4}
                    </code>
                    <UserInfo2 name="Devashya Patel" age="12" />
                    <hr />
                    <p>To pass all the content between component tags using `props` in React, you can use the children prop. The `children` prop is a special prop that can be used to pass any arbitrary content to a component.</p>
                    <UserInfo3>
                        Hello Mr. Devashya Patel. <br />
                        I am a student of SDJIC and I'm 21 years old.
                    </UserInfo3>
                </div>
            </div>
        </>
    );
}

export default ReactProps;