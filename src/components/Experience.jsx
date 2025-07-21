import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Engineer',
      company: 'Brain Station 23 PLC, Dhaka, Bangladesh',
      date: 'January 2024 – Present',
      description: [
        'Currently developing and maintaining software solutions using .NET Framework, JavaScript, SQL, and other technologies.',
        'Collaborating with cross-functional teams to enhance product features and improve user experience.',
        'Continuously integrating and customizing Telerik and Kendo UI components to optimize web applications.',
        'Applying Object-Oriented Programming (OOP) principles to ensure scalable and maintainable code.'
      ]
    },
    {
      title: 'Associate Software Engineer',
      company: 'Brain Station 23 PLC, Dhaka, Bangladesh',
      date: 'January 2021 – January 2024',
      description: [
        'Leveraged OOP, .NET Framework, SQL, JavaScript, Telerik, Kendo UI, jQuery, AJAX, and CSS to deliver high-quality software solutions.',
        'Designed and optimized database structures, wrote complex queries, and ensured data integrity.',
        'Created dynamic and interactive user interfaces using JavaScript, jQuery, and AJAX.',
        'Developed visually appealing and responsive designs with CSS, ensuring seamless user interface across devices.',
        'Collaborated with cross-functional teams to gather requirements, analyze business needs, and deliver solutions that exceeded expectations.',
        'Played a key role in identifying and resolving technical challenges, contributing to overall application efficiency and performance.',
        'Proactively incorporated new tools and methodologies into projects to stay abreast of industry trends.'
      ]
    },
    {
      title: 'Software Engineering Trainee',
      company: 'Brain Station 23 PLC, Dhaka, Bangladesh',
      date: 'September 2020 – December 2020',
      description: [
        'Built and maintained web applications using ASP.NET Web API and .NET Framework.',
        'Applied OOP principles to develop clean and scalable code, facilitating easier maintenance and understanding.',
        'Designed and implemented RESTful APIs for seamless communication between application components.',
        'Developed interactive user interfaces with JavaScript and AngularJS.',
        'Expanded skillset to include .NET Core and Angular for building efficient and dynamic applications.',
        'Actively participated in collaborative projects, contributing to team success.',
        'Identified and troubleshot software issues, enhancing the software development process.'
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