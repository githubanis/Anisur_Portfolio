import React from 'react';

const Projects = () => {
  const projects = [
    {
      name: 'SportsWerks Platform',
      technologies: 'ASP.NET, Telerik, Kendo UI, SQL',
      description: 'Contributed to the development of a 360° business management and player development platform for the sports industry.',
      liveLink: '#',
      isPrivate: true
    },
    {
      name: 'HSBC Queue Management System',
      technologies: '.NET, Angular 8, TypeScript',
      description: 'Played a role in building a queue management system to enhance customer service efficiency at HSBC branches.',
      liveLink: '#',
      isPrivate: true
    },
    {
      name: 'Automated Service Request Solution',
      technologies: 'SharePoint, AngularJS, HTML, CSS',
      description: 'Developed features for an internal tool to automate the company’s service request and approval workflow.',
      liveLink: '#',
      isPrivate: true
    },
    {
      name: 'NRR Calculator',
      technologies: '.NET, Angular, SQL Server',
      description: 'A full-stack web application to calculate Net Run Rate in cricket tournaments. Features a .NET Core API and an Angular front-end.',
      liveLink: '#',
      sourceLink: 'https://github.com/githubanis/NRR_CALCULATOR',
      isPrivate: false
    },
    {
      name: 'School Management Site',
      technologies: 'TypeScript, React, Node.js',
      description: 'A web-based platform for managing school operations, including student and teacher data. Built with the MERN stack.',
      liveLink: '#',
      sourceLink: 'https://github.com/githubanis/SCHOOLMANAGEMENTSITE',
      isPrivate: false
    },
    {
      name: 'BMI Calculator',
      technologies: 'Flutter, Dart',
      description: 'A cross-platform mobile app for calculating Body Mass Index (BMI). Developed using Flutter for both Android and iOS.',
      liveLink: '#',
      sourceLink: 'https://github.com/githubanis/BMI-CALCULATOR-FLUTTER',
      isPrivate: false
    },
    {
      name: 'Skinet E-commerce',
      technologies: 'C#, .NET, Angular',
      description: 'An e-commerce application built with .NET Core and Angular, featuring product listings, a shopping cart, and a checkout process.',
      liveLink: '#',
      sourceLink: 'https://github.com/githubanis/SKINET',
      isPrivate: false
    }
  ];

  return (
    <section id="projects" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5 display-4 fw-bold">My Projects</h2>
        <div className="row">
          {projects.map((project, index) => (
            <div className="col-lg-4 col-md-6 mb-4" key={index}>
              <div className="card h-100 shadow-sm border-0 text-center">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold text-primary">{project.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted" style={{ minHeight: '48px' }}>{project.technologies}</h6>
                  <p className="card-text flex-grow-1">{project.description}</p>
                  <div className="mt-auto pt-3">
                    <a href={project.liveLink} className="btn btn-primary me-2" target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </a>
                    <a
                      href={project.isPrivate ? '#' : project.sourceLink}
                      className={`btn btn-outline-secondary ${project.isPrivate ? 'disabled' : ''}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-disabled={project.isPrivate}
                      onClick={(e) => { if (project.isPrivate) e.preventDefault(); }}
                    >
                      {project.isPrivate ? 'Source (Private)' : 'Source Code'}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;