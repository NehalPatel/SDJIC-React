import { useState } from 'react';

function Form3() {
    const [inputs, setInputs] = useState({
        username: '',
        useremail: ''
    });

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
    }

    return (
        <div className="row">
            <div className="col-sm-6">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="userName" className="form-label">User Name</label>
                        <input
                            type="name"
                            className="form-control"
                            placeholder="your name goes here"
                            name='username'
                            value={inputs.username}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="userEmail" className="form-label">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="name@example.com"
                            name='useremail'
                            value={inputs.useremail}
                            onChange={handleChange}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary mb-3">Submit</button>
                </form>
            </div>
            <div className="col-sm-6">
                <p><b className='mt-3'>Username:</b> {inputs.username}</p>
                <p><b>Email:</b> {inputs.useremail}</p>
            </div>
        </div>

    );
}

export default Form3;