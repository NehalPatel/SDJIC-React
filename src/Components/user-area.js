import { signOutUser } from "../Util/firebase";

const UserArea = (props) => {

    const logout = async () => {
        await signOutUser();
        console.log(props.currentUser);
    }

    return (
        <div className="py-2 nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {props.currentUser}
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
                <li><span className="me-3 py-2 text-dark text-decoration-none" onClick={logout}>Logout</span></li>
            </ul>
        </div>
    );
}

export default UserArea;