import { createContext, useState } from "react";
import Component1 from "./contextcomponents";

export const Context = createContext();

function UseContextDemo2() {
    const [user, setUser] = useState({
        name : "Devashya Patel",
        age : 12
    });

    return ( 
        <>
            <Context.Provider value={user}>
                <Component1 />
            </Context.Provider>
        </>
     );
}

export default UseContextDemo2;