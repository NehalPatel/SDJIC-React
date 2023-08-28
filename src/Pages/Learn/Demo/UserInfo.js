import userinfo from "./user-info.module.css";
function UserInfo() {
    return (
        <>
            <div className={userinfo.profile}>
                <div className="card">
                    <div className="card-body p-4 text-black">
                        <div>
                            <h6 className="mb-4">React.js Course</h6>
                            <div className="d-flex align-items-center justify-content-between mb-3">
                                <p className="small mb-0"><i className="far fa-clock me-2"></i>3 hrs</p>
                                <p className="fw-bold mb-0">2000 INR</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-center mb-4">
                            <div className="flex-shrink-0">
                                <img src="https://avatars.githubusercontent.com/u/1838272?v=4" alt="Nehal Patel" className="img-fluid rounded-circle border border-dark border-3" style={{ width: "70px" }} />
                            </div>
                            <div className="flex-grow-1 ms-3">
                                <div className="d-flex flex-row align-items-center mb-2">
                                    <p className="mb-0 me-2">@iamnehalpatel</p>
                                </div>
                                <div>
                                    <button type="button" className="btn btn-outline-dark btn-rounded btn-sm me-2">+ Follow</button>
                                    <button type="button" className="btn btn-outline-dark btn-rounded btn-sm">See profile</button>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <p className="my-4 pb-1">52 comments</p>
                        <button type="button" className="btn btn-success btn-rounded btn-block btn-lg"><i className="far fa-clock me-2"></i>Enroll Now</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserInfo;