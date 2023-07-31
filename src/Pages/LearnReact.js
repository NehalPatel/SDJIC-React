import { Link, NavLink, Outlet } from "react-router-dom";

const LearnReact = () => {
    return (
        <>
            <div className="row">
                <div className="col-sm-3">
                    <div className="d-flex flex-column flex-shrink-0 p-3 bg-light">
                        <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none">
                            <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"/></svg>
                            <span className="fs-4">Learn React</span>
                        </Link>
                        <hr />
                        <ul className="nav nav-pills flex-column mb-auto">
                            <li className="nav-item">
                                <NavLink to="/react/intro" className={({ isActive }) => isActive ? "nav-link active" : "nav-link link-dark"} aria-current="page">
                                    Intro
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/react/install" className={({ isActive }) => isActive ? "nav-link active" : "nav-link link-dark"} >
                                    Installation
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/react/component" className={({ isActive }) => isActive ? "nav-link active" : "nav-link link-dark"} >
                                Components
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/react/forms" className={({ isActive }) => isActive ? "nav-link active" : "nav-link link-dark"} >
                                Forms
                                </NavLink>
                            </li>
                            <li>
                                <Link to="/react/web-hooks" className="nav-link link-dark" >
                                Web Hooks
                                </Link>
                                <ul className="nav nav-pills flex-column mb-auto">
                                    <li>
                                        <NavLink to="/react/web-hooks/intro" className={({ isActive }) => isActive ? "nav-link active" : "nav-link link-dark"} >
                                        - Intro
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/react/web-hooks/use-state" className={({ isActive }) => isActive ? "nav-link active" : "nav-link link-dark"} >
                                        - useState
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/react/web-hooks/use-effect" className={({ isActive }) => isActive ? "nav-link active" : "nav-link link-dark"} >
                                        - useEffect
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/react/web-hooks/use-context" className={({ isActive }) => isActive ? "nav-link active" : "nav-link link-dark"} >
                                        - useContext
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/react/web-hooks/use-ref" className={({ isActive }) => isActive ? "nav-link active" : "nav-link link-dark"} >
                                        - useRef
                                        </NavLink>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <hr />
                        <div className="dropdown">
                        <a href="/" className="d-flex align-items-center text-decoration-none">
                            <img src="https://avatars.githubusercontent.com/u/1838272?v=4" alt="" width="32" height="32" className="rounded-circle me-2" />
                            <strong>Nehal Patel</strong>
                        </a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-9">
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default LearnReact;