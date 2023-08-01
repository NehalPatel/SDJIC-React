import { useState } from "react";
import { Component1 } from "./components";

function UseContextDemo1() {

    const [user, setUser] = useState({
        name: "Devashya Patel",
        age: 12
    });

    const handleChanges = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        setUser(values => ({ ...values, [key]: value }))
    };

    return (
        <>
            <div className="row">
                <div className="col">
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Your name"
                        value={user.name}
                        onChange={handleChanges}
                    />
                </div>
                <div className="col">
                    <input
                        type="number"
                        className="form-control mx-2"
                        name="age"
                        placeholder="Age"
                        value={user.age}
                        onChange={handleChanges}
                    />
                </div>
            </div>


            <Component1 user={user} />
        </>
    );
}

export default UseContextDemo1;