const ReactInstall = () => {
    return (
        <>
            <h1>React Installation</h1>

            <p class="text-dark">Use following command to create new application</p>
            <code>
                npx create-react-app sdjic
            </code>
            <p class="text-dark">create-react-app will create an application <mark>sdjic</mark> and few folder/files.</p>
            <hr />
            <b>Alternate solution</b>
            <p class="text-dark">
                If you want to create react project using NPM commands try following steps.
            </p>
            <ol class="list">
                <li>
                    <p>Create a project directory(sdjic) & run following command to create new npm project</p>
                    <code>
                        npm init
                    </code>
                    <p>This will create <mark>package.json</mark> file in your current directory.</p>
                </li>
                <li>
                    <p>now install react packages using following command</p>
                    <code>npm install react</code><br />
                    <code>npm install react-dom</code><br />
                    <code>npm install react-scripts</code><br />

                    <p>Or you can combine these command in a single command</p>
                    <code>npm install react react-dom react-scripts</code><br />
                </li>
                <li>
                    <p>Create two folders in it, <mark>/src</mark> & <mark>/public</mark></p>
                </li>
                <li>
                    <p>Create following files in them</p>
                    <mark>/src/index.js</mark><br />
                    <code>
                        &lt;!DOCTYPE html&gt;
                        &lt;html lang=&quot;en&quot;&gt;
                        &lt;head&gt;
                            &lt;meta charset=&quot;utf-8&quot; /&gt;
                            &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1&quot; /&gt;
                            &lt;title&gt;SDJIC&lt;/title&gt;
                        &lt;/head&gt;
                        &lt;body&gt;
                            &lt;noscript&gt;You need to enable JavaScript to run this app.&lt;/noscript&gt;
                            &lt;div id=&quot;root&quot;&gt;&lt;/div&gt;
                        &lt;/body&gt;
                        &lt;/html&gt;
                    </code>
                    <mark>/src/App.js</mark><br />
                    <mark>/public/index.html</mark><br />
                </li>
            </ol>
        </>
    )
}

export default ReactInstall;