import React from 'react';

const Contact = () => {
  return (
    <section className="mb-4">

      <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
      <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
        a matter of hours to help you.</p>

      <div className="row">

        <div className="col-md-9 mb-md-0 mb-5">
          <form id="contact-form" name="contact-form" action="mail.php" method="POST">

            <div className="row">

              <div className="col-md-6">
                <div className="md-form mb-0">
                  <label htmlFor="name" className="">Your name</label>
                  <input type="text" id="name" name="name" className="form-control" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="md-form mb-0">
                  <label htmlFor="email" className="">Your email</label>
                  <input type="text" id="email" name="email" className="form-control" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="md-form mb-0">
                  <label htmlFor="subject" className="">Subject</label>
                  <input type="text" id="subject" name="subject" className="form-control" />
                </div>
              </div>
            </div>
            <div className="row">

              <div className="col-md-12">

                <div className="md-form">
                  <label htmlFor="message">Your message</label>
                  <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                </div>

              </div>
            </div>
          </form>

          <div className="text-center text-md-left my-2">
            <input type="submit" value="Send" className="btn btn-primary" />
          </div>
          <div className="status"></div>
        </div>
        <div className="col-md-3 text-center">
          <ul className="list-unstyled mb-0">
            <li><i className="fas fa-map-marker-alt fa-2x"></i>
              <p>SDJ International College, Vesu, Surat</p>
            </li>

            <li><i className="fas fa-phone mt-4 fa-2x"></i>
              <p>+91 95588 15342</p>
            </li>

            <li><i className="fas fa-envelope mt-4 fa-2x"></i>
              <p>nehal.sdjic@gmail.com</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;