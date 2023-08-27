export default function Welcome(props) {
    return (
        <>
            <h4>Hello Mr. {props.name}</h4>
        </>
    );
}

export function UserInfo(props) {
    console.log(props.user);
    return (
        <>
            <h4>Hello Mr.{props.user.name}</h4>
            <p>User age is: {props.user.age}</p>
        </>
    );
}

export function UserInfo2({ name, age }) {

    return (
        <>
            <h4>Hello Mr. {name}</h4>
            <p>User age is: {age}</p>
        </>
    );
}
export function UserInfo3({ children }) {
    return (
        <>
            {children}
        </>
    );
}