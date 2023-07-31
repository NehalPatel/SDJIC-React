function WebHooksIntro() {
    return (
        <>
            <p class="intro">Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed.</p>
            <hr />
            <h3>What are WebHooks?</h3>
            <p>Hooks allow us to "hook" into React features such as state and lifecycle methods.</p>
            <hr />
            <h3>Hook Rules</h3>
            <p>There are 3 rules for hooks:</p>
            <ul>
                <li>Hooks can only be called inside React function components.</li>
                <li>Hooks can only be called at the top level of a component.</li>
                <li>Hooks cannot be conditional</li>
            </ul>
        </>
    );
}

export default WebHooksIntro;