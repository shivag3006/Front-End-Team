import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaMapMarkerAlt, FaInfoCircle, FaPhone } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

// Gallery Component
const Gallery = ({ project }) => {
  return (
    <Card className="mb-4">
      <Card.Img variant="top" src={project.image} style={{ height: '187px', objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title>
          <a href={project.detailsLink}>{project.title}</a>
        </Card.Title>
        <Card.Text>
          <ul className="list-unstyled">
            <li><h5>Theme: {project.theme}</h5></li>
            <li><h5>Partner Agency: {project.partnerAgency}</h5></li>
            <li><h5>Beneficiaries Direct / Indirect: {project.beneficiariesDirect} / {project.beneficiariesIndirect}</h5></li>
            <li>
              <h5>Location: <FaMapMarkerAlt style={{ color: '#EB5310' }} /> {project.location}</h5>
            </li>
          </ul>
          <p>
            <b>Description: </b>{project.description}
          </p>
        </Card.Text>

      </Card.Body>
    </Card>
  );
};

// ProjectsList Component
const ProjectsList = ({ projects }) => {
  return (
    <div className="home-list-pop list-spac events">
      {projects.map((project, index) => (
        <Gallery key={index} project={project} />
      ))}
    </div>
  );
};

// App Component
const App = () => {
  const projects = [
    {
      image: 'https://y4d.ngo/admin/uploads/projects/WhatsApp_Image_2024-02-09_at_18_10_37_(1).jpeg',
      title: 'Youth Empowerment and Skill Development',
      theme: 'Skill Development',
      partnerAgency: 'Hindustan Coca-Cola Beverages',
      beneficiariesDirect: '25000+',
      beneficiariesIndirect: '30000+',
      location: 'Maharashtra, Goa, Karnataka, Tamil Nadu, Andra Pradesh, Telangana, Madhya Pradesh, Gujarat, Odisha, West Bengal, Bihar, Assam',
      description: 'Y4D in partnership with the HCCB, is dedicated to offering training to 25,000 young people in sales and marketing. The goal of this effort is to provide youth with important skills that will improve...',
      detailsLink: 'https://y4d.ngo/project_details/30',
      contactLink: 'https://y4d.ngo/contact_us'
    }
    // Add more projects as needed
  ];

  return (
    <div>
      <ProjectsList projects={projects} />
    </div>
  );
};

export default App;
