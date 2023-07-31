import { useContext } from "react";
import { Context } from "./UseContextDemo2";

function Component1() {
    const user = useContext(Context);

    return ( 
        <>
            <h1>Component 1</h1>
            <hr />
            <h1>Username: {user.name}</h1>
            <Component2 />
        </>
     );
}

export function Component2() {
    return ( 
        <>
            <h2>Component 2</h2>
            <hr />

            <Component3 />
        </>
     );
}

export function Component3() {
    return ( 
        <>
            <h3>Component 3</h3>
            <hr />

            <Component4 />
        </>
     );
}

export function Component4() {
    return ( 
        <>
            <h4>Component 4</h4>
            <hr />

            <Component5 />
        </>
     );
}

export function Component5() {
    const user = useContext(Context);

    return ( 
        <>
            <h5>Component 5</h5>
            <h5>User Age:{user.age}</h5>
        </>
     );
}

export default Component1;