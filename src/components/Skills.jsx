import React from 'react';

const Skills = () => {
  const technicalSkills = [
    { name: 'gRPC & Streaming APIs', icon: 'bi-broadcast-pin' },
    { name: 'Microservices', icon: 'bi-diagram-3' },
    { name: 'Server-Sent Events (SSE)', icon: 'bi-activity' },
    { name: '.NET 10 / .NET Core', icon: 'bi-dot-net' },
    { name: 'C#', icon: 'bi-filetype-cs' },
    { name: 'ASP.NET Web API', icon: 'bi-globe' },
    { name: 'SQL & SQL Server', icon: 'bi-database' },
    { name: 'MongoDB', icon: 'bi-server' },
    { name: 'Microsoft Entra ID (Azure AD)', icon: 'bi-shield-lock' },
    { name: 'Resilience Policies (Retry/Circuit Breaker)', icon: 'bi-shield-check' },
    { name: 'Third-Party API Integration', icon: 'bi-plug' },
    { name: 'Azure DevOps CI/CD', icon: 'bi-gear-wide-connected' },
    { name: 'IIS Deployment', icon: 'bi-hdd-network' },
    { name: 'Unit Testing (xUnit, Moq, FluentAssertions)', icon: 'bi-check2-all' },
    { name: 'Angular & AngularJS', icon: 'bi-angular' },
    { name: 'TypeScript & JavaScript', icon: 'bi-filetype-js' },
    { name: 'React', icon: 'bi-react' },
    { name: 'jQuery & AJAX', icon: 'bi-code-slash' },
    { name: 'HTML & CSS', icon: 'bi-filetype-html' },
    { name: 'Telerik & Kendo UI', icon: 'bi-ui-checks-grid' },
    { name: 'REST APIs & OOP', icon: 'bi-cloud-arrow-up' },
    { name: 'Data Structures', icon: 'bi-diagram-2' },
    { name: 'AI-Assisted Development (GitHub Copilot, LLMs)', icon: 'bi-robot' }
  ];

  const softSkills = [
    { name: 'Communication & Cross-Team Collaboration', icon: 'bi-chat-dots' },
    { name: 'Problem-Solving Under Pressure', icon: 'bi-lightning-charge' },
    { name: 'Ownership & Time Management', icon: 'bi-clock-history' },
    { name: 'Cross-Functional Teamwork', icon: 'bi-people' },
    { name: 'Agile & PI Cycles', icon: 'bi-arrow-repeat' },
    { name: 'Incident Triage & Production Support', icon: 'bi-tools' }
  ];

  return (
    <section id="skills" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5 display-4 fw-bold">Skills</h2>
        <div className="row mb-4">
          <div className="col-12">
            <h3 className="text-center text-primary mb-4">Technical Skills</h3>
          </div>
          {technicalSkills.map((skill, index) => (
            <div className="col-md-3 col-sm-6 mb-4" key={index}>
              <div className="card shadow-sm h-100 d-flex flex-column align-items-center justify-content-center p-3 text-center">
                <i className={`bi ${skill.icon} fs-2 mb-2 text-secondary`}></i>
                <p className="card-text fw-bold mb-0">{skill.name}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-12">
            <h3 className="text-center text-primary mb-4">Soft Skills & Methodologies</h3>
          </div>
          {softSkills.map((skill, index) => (
            <div className="col-md-3 col-sm-6 mb-4" key={index}>
              <div className="card shadow-sm h-100 d-flex flex-column align-items-center justify-content-center p-3 text-center">
                <i className={`bi ${skill.icon} fs-2 mb-2 text-secondary`}></i>
                <p className="card-text fw-bold mb-0">{skill.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;