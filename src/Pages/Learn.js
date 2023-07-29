import { Link } from "react-router-dom";

const Learn = () => {
    return (
        <>
            <div className="row">
                <div className="col-sm-3">
                    <div className="d-flex flex-column flex-shrink-0 p-3 bg-light">
                        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none">
                        <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"/></svg>
                        <span className="fs-4">Learn React</span>
                        </a>
                        <hr />
                        <ul className="nav nav-pills flex-column mb-auto">
                            <li className="nav-item">
                                <Link to="/learn/react" className="nav-link active" aria-current="page">
                                <svg className="bi me-2" width="16" height="16"><use xlinkHref="#home"/></svg>
                                Intro
                                </Link>
                            </li>
                            <li>
                                <Link to="/learn/install" className="nav-link link-dark">
                                <svg className="bi me-2" width="16" height="16"><use xlinkHref="#speedometer2"/></svg>
                                Installation
                                </Link>
                            </li>
                            <li>
                                <a href="/" className="nav-link link-dark">
                                <svg className="bi me-2" width="16" height="16"><use xlinkHref="#table"/></svg>
                                Components
                                </a>
                            </li>
                            <li>
                                <a href="/" className="nav-link link-dark">
                                <svg className="bi me-2" width="16" height="16"><use xlinkHref="#grid"/></svg>
                                Forms
                                </a>
                            </li>
                            <li>
                                <a href="/" className="nav-link link-dark">
                                <svg className="bi me-2" width="16" height="16"><use xlinkHref="#people-circle"/></svg>
                                Web Hooks
                                </a>
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
                <div className="col-sm-9"></div>
            </div>
        </>
    )
}

export default Learn;