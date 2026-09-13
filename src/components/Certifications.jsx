import React from 'react';

const Certifications = () => {
  const certifications = [
    {
      title: 'SQL for Data Science',
      issuer: 'University of California, Davis',
      date: 'February 2024',
      credentialId: 'HSMG2BDTY3G5',
      icon: 'bi-database-check'
    },
    {
      title: 'React Basics',
      issuer: 'Meta',
      date: 'November 2023',
      credentialId: '8B4FYY7FEJKM',
      icon: 'bi-code-square'
    },
    {
      title: 'Microservices and Deployment using ASP.NET',
      issuer: 'Board Infinity',
      date: 'September 2023',
      credentialId: '54AJGTBZXWZE',
      icon: 'bi-diagram-3'
    },
    {
      title: 'Foundations of Project Management',
      issuer: 'Google',
      date: 'August 2023',
      credentialId: 'RW6CDFK7G2HV',
      icon: 'bi-kanban'
    }
  ];

  return (
    <section id="certifications" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5 display-4 fw-bold">Licenses & Certifications</h2>
        <div className="row g-4 justify-content-center">
          {certifications.map((cert, index) => (
            <div className="col-lg-6 col-md-6" key={index}>
              <div className="card h-100 shadow-sm border-0 p-3">
                <div className="card-body d-flex align-items-start">
                  <div className="me-3">
                    <span className="badge rounded-circle p-3 bg-light text-primary fs-3">
                      <i className={`bi ${cert.icon}`}></i>
                    </span>
                  </div>
                  <div>
                    <h5 className="card-title fw-bold text-primary mb-1">{cert.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{cert.issuer}</h6>
                    <p className="card-text mb-1"><small className="text-secondary"><i className="bi bi-calendar3 me-1"></i>Issued: {cert.date}</small></p>
                    <p className="card-text mb-0"><small className="text-secondary"><i className="bi bi-patch-check me-1"></i>Credential ID: <code>{cert.credentialId}</code></small></p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <p className="text-muted">
            <i className="bi bi-info-circle me-1"></i>
            Additional certifications and verification links are available on{' '}
            <a
              href="https://www.linkedin.com/in/anisur-rahman-2b9a88167/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none fw-semibold text-primary"
            >
              LinkedIn <i className="bi bi-box-arrow-up-right"></i>
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
