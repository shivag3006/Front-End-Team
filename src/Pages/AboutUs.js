import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

const AboutUs = () => {
  const [showMore, setShowMore] = useState({
    library: false,
    childUpliftment: false,
    vidhyaDhanLibrary: false,
  });

  const handleToggle = (section) => {
    setShowMore({
      library: section === 'library' ? !showMore.library : false,
      childUpliftment: section === 'childUpliftment' ? !showMore.childUpliftment : false,
      vidhyaDhanLibrary: section === 'vidhyaDhanLibrary' ? !showMore.vidhyaDhanLibrary : false,
    });
  };

  return (
    <div className="container about">
      <h1 className="mb-4 text-danger">About Us</h1>
      <hr />
      <div className="row">
        <div className="col-md-4">
          <img src={'vidhyahan.png'} alt="Placeholder" className="img-fluid rounded-circle mb-3" />
        </div>
        <div className="col-md-8">
          <h1 className="govt text-warning">We are a non-governmental organization...</h1>
          <h5 className="para1 text-info">
            VidhyaDhan Foundation is a Youth Platform working on its mission of empowering the underprivileged. 
            VidhyaDhan Foundation's core belief is that only empowered citizens can drive a positive change in society.
          </h5>
          <p className="para1 text-dark">
            “Our Vision is to provide a transformative learning experience, build confidence, and develop aspiring professionals for 
            taking charge of their careers and contributing to the world.”
          </p>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-4 mb-4">
          <Card className="homecard">
            <Card.Img variant="top" src="img1.jpeg" />
            <Card.Body>
              <Card.Title>Library</Card.Title>
              <Card.Text>
                {showMore.library ? (
                  <p>VidhyaDhan, through its various initiatives and partnerships, is working to improve the situation of 
                  underprivileged sections and build a better society for future generations.</p>
                ) : (
                  <p>VidhyaDhan, through its various initiatives...</p>
                )}
              </Card.Text>
              <Button variant="primary" onClick={() => handleToggle('library')}>
                {showMore.library ? 'Read Less' : 'Read More'}
              </Button>
            </Card.Body>
          </Card>
        </div>

        <div className="col-md-4 mb-4">
           <Card className="homecard">
            <Card.Img variant="top" src="img4.jpeg" />
            <Card.Body>
              <Card.Title>Child Upliftment</Card.Title>
              <Card.Text>
                {showMore.childUpliftment ? (
                  <p>Youth, being the backbone of society, VidhyaDhan facilitates harnessing and nurturing their infinite potential 
                  and prosperity, thereby making them harbingers of positive social change.</p>
                ) : (
                  <p>Youth, being the backbone of society...</p>
                )}
              </Card.Text>
              <Button variant="primary" onClick={() => handleToggle('childUpliftment')}>
                {showMore.childUpliftment ? 'Read Less' : 'Read More'}
              </Button>
            </Card.Body>
          </Card>
        </div>

        <div className="col-md-4 mb-4">
          <Card className="homecard">
            <Card.Img variant="top" src="img5.jpeg" />
            <Card.Body>
              <Card.Title>VidhyaDhan Library</Card.Title>
              <Card.Text>
                {showMore.vidhyaDhanLibrary ? (
                  <p>Citizen empowerment defines opportunities and accessibility provided to citizens by their leaders and representatives, 
                  in whichever social field, to develop capabilities and drive positive social change.</p>
                ) : (
                  <p>Citizen empowerment defines opportunities...</p>
                )}
              </Card.Text>
              <Button variant="primary" onClick={() => handleToggle('vidhyaDhanLibrary')}>
                {showMore.vidhyaDhanLibrary ? 'Read Less' : 'Read More'}
              </Button>
            </Card.Body>
          </Card>
        </div>
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

      <Link to="https://vidhyadhan-fundation.vercel.app/home" className="btn btn-primary">
        Back to Home
      </Link>
    </div>
  );
};

export default AboutUs;
