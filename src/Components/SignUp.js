import { useState } from "react";
import {
    createUserDocumentFromAuth,
    registerNewUser
} from "../Util/firebase";

const defaultFormFields = {
    displayName: '',
    email: '',
    mobile: '',
    password: '',
};

const SignUp = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, mobile } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const handleChanges = (e) => {
        const { name, value } = e.target;
        setFormFields({ ...formFields, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { user } = await registerNewUser({ email, password });

            await createUserDocumentFromAuth(user, { displayName, mobile });

            resetFormFields();

        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use');
            } else {
                console.error('user creation encountered an error', error);
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="signup_displayName" className="form-label">Name</label>
                <input type="text" className="form-control" id="signup_displayName" name="displayName" placeholder="Enter your name" required onChange={handleChanges} value={displayName} />
            </div>
            <div className="mb-3">
                <label htmlFor="signup_email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="signup_email" name="email" placeholder="name@example.com" required onChange={handleChanges} value={email} />
            </div>
            <div className="mb-3">
                <label htmlFor="signup_password" className="form-label">Password</label>
                <input type="password" className="form-control" id="signup_password" name="password" placeholder="Password" required onChange={handleChanges} value={password} />
            </div>
            <div className="mb-3">
                <label htmlFor="signup_mobile" className="form-label">Mobile Number</label>
                <input type="tel" className="form-control" id="signup_mobile" name="mobile" placeholder="Enter your mobile number" required onChange={handleChanges} value={mobile} />
            </div>
            <button type="submit" className="btn btn-primary w-100">Register</button>
        </form>
    );
}

export default SignUp;