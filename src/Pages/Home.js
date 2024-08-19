import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { Carousel, Card, Button } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./Home.css";  // Assuming you have a CSS file for custom styles

const Home = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const handleReadMore = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const cardData = [
    {
      img: "img9.jpeg",
      title: "Library",
      text: "VidhyaDhan Through its various initiatives and partnerships working on to improve the situation of underprivileged sections and building a society better place for living of future generation.",
    },
    {
      img: "imhgf.jpeg",
      title: "Children",
      text: "Youth being the backbone of society, VidhyaDhan facilitates harnessing and nurturing of their infinite potential and prosperity thereby making them harbingers of positive social change.",
    },
    {
      img: "img6.jpeg",
      title: "VidhyaDhan Library",
      text: "Citizen empowerment defines opportunities and accessibility provided to citizens by their leaders and representatives, in whichever social field, to develop capabilities and positive social change.",
    },
    {
      img: "img8.jpeg",
      title: "VidhyaDhan Library",
      text: "Citizen empowerment defines opportunities and accessibility provided to citizens by their leaders and representatives, in whichever social field, to develop capabilities and positive social change.",
    },
    {
      img: "img7.jpeg",
      title: "VidhyaDhan Library",
      text: "Citizen empowerment defines opportunities and accessibility provided to citizens by their leaders and representatives, in whichever social field, to develop capabilities and positive social change.",
    },
    {
      img: "img12.jpeg",
      title: "VidhyaDhan Library",
      text: "Citizen empowerment defines opportunities and accessibility provided to citizens by their leaders and representatives, in whichever social field, to develop capabilities and positive social change.",
    },
  ];

  return (
    <div className="home mt-5">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 animated-carousel"
            src="Cover Page 1.jpg"
            height="400px"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First Slide Label</h3>
            <p>Some text about the first slide...</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 animated-carousel"
            src="img8.jpeg"
            alt="Second slide"
            height="400px"
          />
          <Carousel.Caption>
            <h3>Second Slide Label</h3>
            <p>Some text about the second slide...</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 animated-carousel"
            src="imhg10.jpeg"
            alt="Third slide"
            height="400px"
          />
          <Carousel.Caption>
            <h3>Third Slide Label</h3>
            <p>Some text about the third slide...</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="container">
        <div className="row mt-5">
          {cardData.map((card, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <Card className="homecard animated-card">
                <Card.Img variant="top" src={card.img} height="200px" />
                <Card.Body>
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Text>
                    {expandedCard === index ? card.text : `${card.text.slice(0, 100)}...`}
                  </Card.Text>
                  <Button variant="primary" onClick={() => handleReadMore(index)}>
                    {expandedCard === index ? "Show Less" : "Read More"}
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <div className="popup-side-bar">
        <a
          href="ContactUs"
          className="home-enquiry-trigger pum-trigger"
          style={{ cursor: "pointer" }}
        >
          <b>Enquiry Now </b>
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

      {/* Footer Section */}
      <footer className="footer mt-5 pt-4 pb-4">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-3">
              <h5>About Us</h5>
              <p>Learn more about VidhyaDhan and our mission to empower society.</p>
            </div>
            <div className="col-md-4 mb-3">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
    
                <li><a href="AboutUs"><b>AboutUs</b></a></li>
                <li><a href="Projects"><b>Projects</b></a></li>
                <li><a href="ContactUs"><b>ContactUs</b></a></li>
                <li><a href="Gallery"><b>Gallery</b></a></li>
              </ul>
            </div>
            <div className="col-md-4 mb-3">
              <h5>Follow Us</h5>
              <div className="social-icons ">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="animated-icon"><FaFacebook /></a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="animated-icon"><FaTwitter /></a>
                <a href="https://www.instagram.com/vidyadhan_non_profit_org/" target="_blank" rel="noopener noreferrer" className="animated-icon"><FaInstagram /></a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="animated-icon"><FaLinkedin /></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
