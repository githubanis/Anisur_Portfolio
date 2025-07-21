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
              Dynamic and results-driven Software Engineer with over 4.5 years of experience in developing efficient software solutions using C#, SQL, and Angular. Seeking a challenging role at a reputable company where I can utilize my technical skills and problem-solving abilities to drive the success of innovative projects. Committed to delivering high-quality software that meets the needs of customers and users while continuously improving my knowledge and skills in the latest technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
