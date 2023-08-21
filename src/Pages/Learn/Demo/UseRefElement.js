import { useRef } from "react";

function UseRefElement() {

    const userName = useRef();
    const userEmail = useRef();
    const userPhone = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userName.current.value);
        console.log(userEmail.current.value);
        console.log(userPhone.current.value);
    };

    return (
        <>
            <form className="form" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-sm-6">
                        <label htmlFor="" className="form-label">Name</label>
                        <input type="text"
                            className="form-control"
                            placeholder="User Name"
                            ref={userName} />
                    </div>
                    <div className="col-sm-6">
                        <label htmlFor="" className="form-label">Email</label>
                        <input type="email"
                            className="form-control"
                            placeholder="User Email"
                            ref={userEmail} />
                    </div>
                    <div className="col-sm-6">
                        <label htmlFor="" className="form-label">Phone</label>
                        <input type="text"
                            className="form-control"
                            placeholder="User Phone"
                            ref={userPhone} />
                    </div>
                </div>
                <input type="submit" className="btn btn-primary" value="Save" style={{ marginTop: "10px" }}></input>
            </form>
        </>
    );
}

export default UseRefElement;