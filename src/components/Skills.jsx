import React from 'react';

const Skills = () => {
  const technicalSkills = [
    { name: 'Object-Oriented Programming (OOP)', icon: 'bi-boxes' },
    { name: 'Data Structures', icon: 'bi-diagram-2' },
    { name: 'Cascading Style Sheets (CSS)', icon: 'bi-filetype-css' },
    { name: 'AJAX', icon: 'bi-arrow-repeat' },
    { name: 'HTML', icon: 'bi-filetype-html' },
    { name: 'Kendo UI', icon: 'bi-ui-checks' },
    { name: 'jQuery', icon: 'bi-code-slash' },
    { name: 'Telerik', icon: 'bi-ui-checks-grid' },
    { name: 'JavaScript', icon: 'bi-filetype-js' },
    { name: 'SQL', icon: 'bi-database' },
    { name: '.NET Framework', icon: 'bi-dot-net' },
    { name: 'ASP.NET Web API', icon: 'bi-globe' },
    { name: '.NET Core', icon: 'bi-dot-net' },
    { name: 'AngularJS', icon: 'bi-angular' },
    { name: 'Angular', icon: 'bi-angular' },
    { name: 'REST APIs', icon: 'bi-cloud-arrow-up' },
    { name: 'PostgreSQL', icon: 'bi-database-fill' },
    { name: 'React', icon: 'bi-react' },
    { name: 'TypeScript', icon: 'bi-filetype-ts' },
    { name: 'Git', icon: 'bi-git' }
  ];

  const softSkills = [
    { name: 'Communication', icon: 'bi-chat-dots' },
    { name: 'Leadership', icon: 'bi-person-check' },
    { name: 'Time Management', icon: 'bi-clock' },
    { name: 'Problem-solving', icon: 'bi-lightbulb' },
    { name: 'Adaptability', icon: 'bi-shuffle' },
    { name: 'Teamwork', icon: 'bi-people' },
    { name: 'Creativity', icon: 'bi-palette' },
    { name: 'Jira', icon: 'bi-kanban' },
    { name: 'Agile Methodology', icon: 'bi-arrow-repeat' }
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