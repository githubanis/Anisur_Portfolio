import React from 'react';
import profilePic from '../assets/anisur.png';

const About = () => {
  return (
    <section id="about" className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4 text-center mb-4 mb-md-0">
            <img src={profilePic} alt="Anisur Rahman" className="img-fluid rounded-circle shadow-lg" style={{ width: '250px', height: '250px', objectFit: 'cover', border: '5px solid #8a2be2' }} />
          </div>
          <div className="col-md-8">
            <h2 className="display-4 fw-bold mb-3">Anisur Rahman</h2>
            <p className="lead">
              Dedicated and growth-oriented Software Engineer with nearly 5 years of professional experience in full-stack development, currently contributing to impactful projects at Brain Station 23. Skilled in .NET Framework, C#, SQL, Angular, JavaScript, and UI libraries such as Kendo UI and Telerik. Known for delivering scalable, maintainable solutions and collaborating effectively across teams. Committed to continuous learning, clean code practices, and leveraging technology to drive real-world results in dynamic environments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
