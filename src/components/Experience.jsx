import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Engineer — MetLife BD (Contingent Worker)',
      company: 'Brain Station 23 PLC, Dhaka, Bangladesh',
      date: 'January 2026 – Present',
      description: [
        'Own full end-to-end delivery of a real-time payment platform — architecture, development, security, deployment, and production support — across 18+ epics and features delivered over 4 program-increment cycles.',
        'Architected core policy and transaction query APIs from the ground up, integrating multiple gRPC service contracts to a core policy system for real-time premium, top-up, and withdrawal processing, with a dedicated internal client library adding retry, circuit-breaker, and timeout resilience.',
        'Built a real-time operations monitoring dashboard backend on .NET 10 using Server-Sent Events (SSE) for live reporting, plus data export capability, replacing legacy reporting endpoints.',
        'Engineered a MongoDB-backed background payment queue with configurable concurrency, automatic retry/backoff, orphaned-transaction recovery, and scheduled cleanup — cutting manual intervention on stuck or failed payments.',
        'Built an internal integration layer for a partner bank\'s payment authorization APIs and delivered end-to-end top-up/withdraw connectivity between the core policy system and the bank, including a gated settlement flow that prevents half-completed transactions.',
        'Secured all API endpoints with Microsoft Entra ID (Azure AD) JWT authentication plus additional auth schemes for partner-specific access control.',
        'Expanded automated test coverage with dedicated unit test projects (xUnit, Moq, FluentAssertions) across the platform\'s core layers, integrated with code-coverage reporting; migrated the platform to .NET 10.',
        'Led production deployment and UAT support across multiple isolated environments on IIS, coordinating directly with business and partner IT teams to resolve live issues, and maintained Azure DevOps CI/CD pipelines.',
        'Used AI-assisted development tools, including GitHub Copilot and various LLMs, to speed up coding, debugging, and documentation in a cost-effective way.'
      ]
    },
    {
      title: 'Software Engineer',
      company: 'Brain Station 23 PLC, Dhaka, Bangladesh',
      date: 'January 2024 – January 2026',
      description: [
        'Developed and maintained software solutions using .NET Framework, JavaScript, and SQL, integrating and customizing Telerik and Kendo UI components across multiple client-facing web applications.',
        'Collaborated with cross-functional teams to enhance product features and improve user experience, applying OOP principles to keep the codebase scalable and maintainable.'
      ]
    },
    {
      title: 'Associate Software Engineer',
      company: 'Brain Station 23 PLC, Dhaka, Bangladesh',
      date: 'January 2021 – January 2024',
      description: [
        'Delivered features across 3+ years using .NET Framework, SQL, JavaScript, Telerik, Kendo UI, jQuery, AJAX, and CSS, designing and optimizing database structures and complex queries to ensure data integrity.',
        'Built dynamic, responsive user interfaces with JavaScript, jQuery, AJAX, and CSS, and identified/resolved technical issues that improved overall application efficiency and performance.'
      ]
    },
    {
      title: 'Software Engineering Trainee',
      company: 'Brain Station 23 PLC, Dhaka, Bangladesh',
      date: 'September 2020 – December 2020',
      description: [
        'Built and maintained web applications using ASP.NET Web API and .NET Framework, designing RESTful APIs and interactive UIs with JavaScript and AngularJS.',
        'Expanded skillset to include .NET Core and Angular while contributing to collaborative team projects.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5 display-4 fw-bold">Work Experience</h2>
        <div className="row">
          {experiences.map((exp, index) => (
            <div className="col-md-12" key={index}>
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title text-primary">{exp.title}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{exp.company}</h6>
                  <p className="card-text"><em>{exp.date}</em></p>
                  <ul className="list-unstyled">
                    {exp.description.map((item, i) => (
                      <li key={i} className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;