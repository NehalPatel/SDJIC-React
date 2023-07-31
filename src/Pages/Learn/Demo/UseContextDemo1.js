import { useState } from "react";
import { Component1 } from "./components";

function UseContextDemo1() {

    const [user, setUser] = useState({
        name : "Devashya Patel",
        age : 12
    });

    return ( 
        <>
            <Component1 user={user} />
        </>
     );
}

export default UseContextDemo1;