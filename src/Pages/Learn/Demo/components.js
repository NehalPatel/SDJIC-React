export function Component1({ user }) {
    return (
        <>
            <h1>Component 1</h1>
            <p>User Name: {user.name}</p>
            <hr />

            <Component2 user={user} />
        </>
    );
}

export function Component2({ user }) {
    return (
        <>
            <h2>Component 2</h2>
            <hr />

            <Component3 user={user} />
        </>
    );
}

export function Component3({ user }) {
    return (
        <>
            <h3>Component 3</h3>
            <hr />

            <Component4 user={user} />
        </>
    );
}

export function Component4({ user }) {
    return (
        <>
            <h4>Component 4</h4>
            <hr />

            <Component5 user={user} />
        </>
    );
}

export function Component5({ user }) {
    return (
        <>
            <h5>Component 5</h5>
            <p>User Age: {user.age}</p>
        </>
    );
}