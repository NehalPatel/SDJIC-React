import { useState } from 'react';

function Form2() {
    const [name, setName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The name you entered was: ${name}`)
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
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary mb-3">Submit</button>
                </form>
            </div>
            <div className="col-sm-6">
                <p><b className='mt-3'>Username:</b> {name}</p>
            </div>
        </div>

    );
}

export default Form2;