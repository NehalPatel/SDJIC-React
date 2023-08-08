import { useState } from 'react';

function Form1() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    return (
        <div className="row">
            <div className="col-sm-6">
                <form>
                    <div className="mb-3">
                        <label htmlFor="userName" className="form-label">User Name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="your name goes here"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="userEmail" className="form-label">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="name@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </form>
            </div>
            <div className="col-sm-6">
                <p><b className='mt-3'>Username:</b> {name}</p>
                <p><b>Email:</b> {email}</p>
            </div>
        </div>

    );
}

export default Form1;