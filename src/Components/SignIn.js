import {
    createUserDocumentFromAuth,
    signInWithGooglePopup
} from "../Util/firebase";

const SignIn = () => {

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        createUserDocumentFromAuth(user);
    }

    return (
        <form>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" placeholder="name@example.com" />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Password" />
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