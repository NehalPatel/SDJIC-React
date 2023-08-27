import CustomHookDemo from "../Demo/CustomHookDemo";

function CustomHook() {
    return (
        <>
            <h3>React Custom Hook</h3>
            <p className="intro">Hooks are reusable functions.</p>
            <p>When you have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook.</p>
            <p>Custom Hooks start with "use". Example: <code>useFetch</code>.</p>
            <hr />

            <CustomHookDemo />
        </>
    );
}

export default CustomHook;