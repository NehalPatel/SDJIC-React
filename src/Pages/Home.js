import React from 'react';

const Home = () => {
  return (
    <div>
      <div className="p-5 mb-4 bg-light rounded-3 text-center">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">SDJ International College</h1>
          <p className="fs-4">Come, be a part of the SDJIC family, and together, let's unlock your potential for a brighter tomorrow.</p>
          <button className="btn btn-primary btn-lg" type="button">Get Started</button>
        </div>
      </div>

      <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
        <h1 className="display-4 fw-normal">Courses</h1>
        <p className="fs-5 text-muted">We are a leading educational institution dedicated to nurturing bright minds and empowering them for a successful future. At SDJIC, we offer a wide range of courses designed to cater to diverse interests and career aspirations. Whether you are passionate about computers, commerce, or business, we have the perfect program for you.</p>
      </div>

      <main>
        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm">
              <div className="card-header py-3">
                <h4 className="my-0 fw-normal">BCom</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title"><small className="text-muted fw-light">Bachelor of Commerce</small></h1>
                <p>The BCom program at SDJIC focuses on building a strong foundation in commerce and business practices. Students gain insights into accounting, finance, economics, and other essential business aspects, preparing them for a successful career in the corporate world.</p>
                <button type="button" className="w-100 btn btn-lg btn-outline-primary">Register</button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm">
              <div className="card-header py-3">
                <h4 className="my-0 fw-normal">BBA</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title"><small className="text-muted fw-light">Bachelor of Business Administration</small></h1>
                <p>Aspiring entrepreneurs and business leaders can thrive in our BBA program. With a curriculum designed to instill leadership qualities and managerial expertise, students are empowered to take on dynamic challenges and excel in the business domain.</p>
                <button type="button" className="w-100 btn btn-lg btn-primary">Get started</button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm border-primary">
              <div className="card-header py-3 text-white bg-primary border-primary">
                <h4 className="my-0 fw-normal">BCA</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title"><small className="text-muted fw-light">Bachelor of Computer Applications</small></h1>
                <p>Our BCA program is tailored to equip students with the latest technological skills and knowledge. From programming languages to software development, we provide hands-on training and a comprehensive understanding of the ever-evolving world of technology.</p>
                <button type="button" className="w-100 btn btn-lg btn-primary">Contact us</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;