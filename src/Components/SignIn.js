import { useState } from "react";
import {
    createUserDocumentFromAuth,
    loginUser,
    signInWithGooglePopup
} from "../Util/firebase";

const defaultFormFields = {
    email: '',
    password: '',
};

const SignIn = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        createUserDocumentFromAuth(user);
    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value });
    };

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await loginUser(email, password);

            console.log(response);
            resetFormFields();

        } catch (error) {
            console.log(error.code);

            switch (error.code) {
                case "auth/invalid-credential":
                    alert("Invalid credentials provided.");
                    break;
                default:
                    alert(error.message);
                    break;
            }

        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="sign-in_email" className="form-label">Email address</label>
                <input
                    type="email"
                    className="form-control"
                    id="sign-in_email"
                    name="email"
                    onChange={handleChange}
                    value={email}
                    placeholder="name@example.com" />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    onChange={handleChange}
                    value={password}
                    placeholder="Password" />
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="rememberMe" />
                <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
            </div>
            <button type="submit" className="btn btn-primary w-100">Login</button>

            <hr />
            <button type="button" className='btn btn-success btn-large w-100 mt-5' onClick={logGoogleUser}><i className="bi bi-google mx-2"></i>Login with Google</button>
        </form>
    );
}

export default SignIn;