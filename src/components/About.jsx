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
            <h5 className="text-primary mb-3">Software Engineer | Dhaka, Bangladesh</h5>
            <p className="lead mb-3">
              Results-driven Software Engineer with <strong>5+ years</strong> of experience building and maintaining enterprise software using C#, .NET, SQL, and Angular.
            </p>
            <p className="lead mb-3">
              Currently owns a real-time payment platform for <strong>MetLife Bangladesh</strong> end-to-end — architecture, gRPC/bank integrations, security, deployment, and production support — processing high-volume policy payment, top-up, and withdrawal transactions across multiple environments. Delivered <strong>18+ epics and features</strong> across 4 PI cycles on this platform alone.
            </p>
            <p className="lead">
              Actively integrates AI-assisted development tools (GitHub Copilot and various LLMs) into daily workflows to increase delivery speed and engineering efficiency in a cost-conscious way. Passionate about bringing strong technical execution and a modern, AI-augmented engineering approach to high-impact projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
