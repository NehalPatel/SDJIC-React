import { Link, NavLink, Outlet } from "react-router-dom";

const LearnReact = () => {
    return (
        <>
            <div className="row">
                <div className="col-lg-3">
                    <div className="d-flex flex-column flex-shrink-0 p-3 bg-light">
                        <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none">
                            <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap" /></svg>
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
                                <NavLink to="/react/props" className={({ isActive }) => isActive ? "nav-link active" : "nav-link link-dark"} >
                                    Props
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/react/forms" className={({ isActive }) => isActive ? "nav-link active" : "nav-link link-dark"} >
                                    Forms
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/react/memo" className={({ isActive }) => isActive ? "nav-link active" : "nav-link link-dark"} >
                                    Memo
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/react/styles" className={({ isActive }) => isActive ? "nav-link active" : "nav-link link-dark"} >
                                    CSS Styles
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
                                    <li>
                                        <NavLink to="/react/web-hooks/use-reducer" className={({ isActive }) => isActive ? "nav-link active" : "nav-link link-dark"} >
                                            - useReducer
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/react/web-hooks/use-memo" className={({ isActive }) => isActive ? "nav-link active" : "nav-link link-dark"} >
                                            - useMemo
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/react/web-hooks/use-callback" className={({ isActive }) => isActive ? "nav-link active" : "nav-link link-dark"} >
                                            - useCallback
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/react/web-hooks/custom-hook" className={({ isActive }) => isActive ? "nav-link active" : "nav-link link-dark"} >
                                            - customHook
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
                <div className="col-lg-9">
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default LearnReact;