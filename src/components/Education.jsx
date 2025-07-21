import React from 'react';

const Education = () => {
  const educations = [
    {
      degree: 'B.Sc. in Computer Science and Engineering',
      institution: 'International University of Business Agriculture and Technology',
      year: '2020',
      cgpa: '3.53'
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'Adhyapak Abdul Majid College',
      year: '2015',
      cgpa: '4.92'
    },
    {
      degree: 'Secondary School Certificate (SSC)',
      institution: 'Debidwar Reaz Uddin Pilot Model High School',
      year: '2013',
      cgpa: '5.00'
    }
  ];

  return (
    <section id="education" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5 display-4 fw-bold">Education</h2>
        <div className="row">
          {educations.map((edu, index) => (
            <div className="col-md-4" key={index}>
              <div className="card mb-4 shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title text-primary">{edu.degree}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{edu.institution}</h6>
                  <p className="card-text"><strong>Passing Year:</strong> {edu.year}</p>
                  <p className="card-text"><strong>CGPA:</strong> {edu.cgpa}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;