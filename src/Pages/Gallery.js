import React, { useState } from 'react';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import { FaMapMarkerAlt } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import './Gallery.css';
// Import the CSS file for animations

// Gallery Component
const Gallery = ({ project }) => {
  return (
    <Card className="mb-4 animated-card">
      <Card.Img
        variant="top"
        src={project.image}
        className="animated-image"
        style={{ height: '187px', objectFit: 'cover' }}
      />
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
        <div className="button-container">
          <Button variant="primary" href={project.detailsLink}>View Details</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

// ProjectsList Component
const ProjectsList = ({ projects }) => {
  return (
    <Row>
      {projects.map((project, index) => (
        <Col md={4} key={index}>
          <Gallery project={project} />
        </Col>
      ))}
    </Row>
  );
};

// App Component
const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const projects = [
    {
      image: 'img1.jpeg', // Ensure these paths are correct
      title: 'Projects',
      theme: 'Skill Development',
      partnerAgency: 'Hindustan',
      beneficiariesDirect: '25000+',
      beneficiariesIndirect: '30000+',
      location: 'Hyderabad, Telangana',
      description: ' is dedicated to offering training to 25,000 young people in sales and marketing...',
      detailsLink: 'http://localhost:3000/gallery',
      category: 'Projects',
    },
    {
      image: 'img6.jpeg', // Ensure these paths are correct
      title: 'Children Education Initiative',
      theme: 'Education',
      partnerAgency: 'Save the Children',
      beneficiariesDirect: '15000+',
      beneficiariesIndirect: '20000+',
      location: 'Kukatpally, Hyderabad',
      description: 'A project focused on providing quality education to underprivileged children across major cities...',
      detailsLink: 'http://localhost:3000/gallery',
      category: 'Children',
    },
    {
      image: 'img11.jpeg', // Ensure these paths are correct
      title: 'Youth Empowerment',
      theme: 'Skill Development',
      partnerAgency: 'Hindustan',
      beneficiariesDirect: '25000+',
      beneficiariesIndirect: '30000+',
      location: 'Madhapur, Hyderabad',
      description: ' is dedicated to offering training to 25,000 young people in sales and marketing...',
      detailsLink: 'http://localhost:3000/gallery',
      category: 'Youth',
    }
    // Add more projects as needed
  ];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <Container>
      <div className="mb-4">
        <Button onClick={() => setSelectedCategory('All')} variant="primary" className="me-2 animated-button">All Images</Button>
        <Button onClick={() => setSelectedCategory('Projects')} variant="secondary" className="me-2 animated-button">Projects Images</Button>
        <Button onClick={() => setSelectedCategory('Youth')} variant="success" className="me-2 animated-button">Youth Images</Button>
        <Button onClick={() => setSelectedCategory('Children')} variant="warning" className="me-2 animated-button">Children's Images</Button>
      </div>
      <div className="popup-side-bar">
        <a href="ContactUs" className="home-enquiry-trigger pum-trigger Shadow" style={{ cursor: 'pointer' }}>
          <b>Enquiry Now</b>
        </a>
      </div>

      <div className="popup-side-bar2">
        <a href="RequestCallback" className="home-enquiry-trigger pum-trigger" style={{ cursor: 'pointer' }}>
          <b>Request Callback</b>
        </a>
      </div>
      <ProjectsList projects={filteredProjects} />
    </Container>
  );
};

export default App;
