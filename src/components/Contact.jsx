import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5 display-4 fw-bold">Contact Me</h2>
        <div className="row">
          <div className="col-md-8 mx-auto text-center">
            <p className="lead mb-4">Feel free to reach out to me through the following channels:</p>
            <ul className="list-unstyled fs-5">
              <li className="mb-3">
                <i className="bi bi-geo-alt-fill me-3 text-primary"></i>
                Location: <span>Dhaka, Bangladesh</span>
              </li>
              <li className="mb-3">
                <i className="bi bi-envelope-fill me-3 text-primary"></i>
                Email: <a href="mailto:anissarker301@gmail.com" className="text-decoration-none">anissarker301@gmail.com</a>
              </li>
              <li className="mb-3">
                <i className="bi bi-phone-fill me-3 text-primary"></i>
                Mobile: <a href="tel:+8801795387617" className="text-decoration-none">+880 1795 387617</a>
              </li>
              <li className="mb-3">
                <i className="bi bi-linkedin me-3 text-primary"></i>
                LinkedIn: <a href="https://www.linkedin.com/in/anisur-rahman-2b9a88167/" target="_blank" rel="noopener noreferrer" className="text-decoration-none">linkedin.com/in/anisur-rahman-2b9a88167/</a>
              </li>
              <li className="mb-3">
                <i className="bi bi-github me-3 text-primary"></i>
                GitHub: <a href="https://github.com/githubanis" target="_blank" rel="noopener noreferrer" className="text-decoration-none">github.com/githubanis</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
