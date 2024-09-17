import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Button } from "react-bootstrap"; // Import Button from React Bootstrap
import { FaInfoCircle, FaPhone } from "react-icons/fa"; // Import icons from react-icons
import './Projects.css'; // Custom CSS for animations

const projectData = [
  {
    imageUrl: "https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2019/07/16152747/project-management.png",
    description: "Y4D Foundation,  Wakad, Pune, Maharashtra, India - 411057",
    buttonLabel: "More Info",
    phoneNumber: "+91-1234567890",
  },
  {
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfsxdfZ4LH3cwihrAzDx33kujT-hY_Ad5nCA&s",
    description: "Another location, Some Address, City, State, Country - 123456",
    buttonLabel: "Details",
    phoneNumber: "+91-9876543210",
  },
  {
    imageUrl: "https://ngofeed.com/wp-content/uploads/2022/11/Top-NGO-in-India.jpg",
    description: "Different location, Some Address, City, State, Country - 654321",
    buttonLabel: "Learn More",
    phoneNumber: "+91-1122334455",
  },
];

const socialMediaLinks = {
  instagram: "https://www.instagram.com",
  facebook: "https://www.facebook.com",
  whatsapp: "https://wa.me",
  twitter: "https://twitter.com",
};

const Projects = () => {
  return (
    <div className="projects mt-5 shadow">
      <TransitionGroup className="container">
        {projectData.map((project, index) => (
          <CSSTransition key={index} timeout={500} classNames="fade">
            <div className="row my-4 align-items-center">
              <div className="col-md-12">
                <div className="p-card w-100 shadow-container">
                  <img
                    src={project.imageUrl}
                    alt="Project"
                    className="img-fluid shadow-sm rounded img-hover"
                  />
                  <div className="card-body home-list-pop">
                    <p className="list-spac">{project.description}</p>
                    <div className="mb-3 list-spac">
                      <label htmlFor="phone" className="form-label">
                        Phone Number: {project.phoneNumber}
                      </label>
                    </div>
                    <div className="d-flex gap-2">
                      <Link to="" className="btn list-spac btn-warning">
                        {project.buttonLabel}
                      </Link>
                      <div className="d-flex justify-content-between">
                        <Button variant="link" href="#">
                          <FaInfoCircle /> Read More...
                        </Button>
                        <Button variant="link" href="#">
                          <FaPhone /> Contact Us
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CSSTransition>
        ))}
      </TransitionGroup>

      <div className="popup-side-bar">
        <a
          href="ContactUs"
          className="home-enquiry-trigger pum-trigger"
          style={{ cursor: "pointer" }}
        >
          <b> Enquiry Now </b>
        </a>
      </div>

      <div className="popup-side-bar2">
        <a
          href="RequestCallback"
          className="home-enquiry-trigger pum-trigger"
          style={{ cursor: "pointer" }}
        >
          <b>Request Callback</b>
        </a>
      </div>

      <div className="container py-5">
        <div className="social-media-buttons text-center my-5">
          <a
            href={socialMediaLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-dark mx-1"
          >
            <i className="fab fa-instagram"></i> Instagram
          </a>
          <a
            href={socialMediaLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-dark mx-1"
          >
            <i className="fab fa-facebook"></i> Facebook
          </a>
          <a
            href={socialMediaLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-dark mx-1"
          >
            <i className="fab fa-whatsapp"></i> WhatsApp
          </a>
          <a
            href={socialMediaLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-dark mx-1"
          >
            <i className="fab fa-twitter"></i> Twitter
          </a>
        </div>

        <footer className="footer mt-5">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <h3>Recent Articles</h3>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Projects;
