
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';


const AboutUs = () => {
  return (
    <div className="container about ">
      <h1 className="mb-4 text-danger"> About Us</h1>
      <hr />
      <div className="row">
        <div className="col-md-4 ">
          <img src={'vidhyahan.png'} alt="Placeholder" className="img-fluid rounded-circle mb-3" />
        </div>
        <div className="col-md-8">
            <h1 className='govt text-warning'>We are a non-governmental organization...</h1>
          <h5 className='para1 text-info'>VidhyaDhan Foundation is a Youth Platform and working on it's mission of Empowering the Underprivileged. 
          VidhyaDhan Foundation core belief is that only empowered citizen can drive a positive change in the society.</h5>
          <p className='para1 text-dark'>“Our Vision is to provide transformative learning experience, build confidence
           and develop aspiring professionals for taking charge of their careers and contribute to the world.”</p>
        </div>
      </div>

      <div className="row mt-5">

        <div className="col-md-4 mb-4">
          <Card  className='homecard'>
            <Card.Img variant="top" src="img1.jpeg" />
            <Card.Body>
              <Card.Title>Library</Card.Title>
              <Card.Text>
              <p> VidhyaDhan Through it's various initiatives and partnerships working on to improve situation of 
              underprivileged sections and building a society better place for living of future generation.</p>
              </Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
        </div>

        <div className="col-md-4 mb-4">
          <Card className='homecard'>
            <Card.Img variant="top" src="img4.jpeg" />
            <Card.Body>
              <Card.Title>Child Upliftment</Card.Title>
              <Card.Text>
                <p1>Youth being the backbone of society, VidhyaDhan facilitates harnessing and nurturing of their 
                    infinite potential and prosperity thereby making them harbingers of 
                    positive social change.</p1>
              </Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
        </div>


        <div className="col-md-4 mb-4">
          <Card  className='homecard'>
            <Card.Img variant="top" src="img5.jpeg" />
            <Card.Body>

              <Card.Title>VidhyaDhan Library</Card.Title>
              <Card.Text>
                <p1>citizen empowerment defines opportunities and accessibility provided to citizens by their leaders 
                    and representatives, in whichever social field, to develop capabilities, 
                    positive social change.....</p1>
              </Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
        </div>   
      </div> 

      <div className="popup-side-bar">
        <a href="ContactUs"
          className="home-enquiry-trigger pum-trigger Shadow"
          style={{cursor: "pointer"}} > <b>Enquiry Now</b> </a>
      </div> 

      <div className="popup-side-bar2 ">
        <a
          href="RequestCallback"
          className="home-enquiry-trigger pum-trigger"
          style={{ cursor: "pointer" }}
        >
          <b>Request Callback</b>
        </a>
      </div>

        <Link to="http://localhost:3000/home" className="btn btn-primary">Back to Home</Link>


    </div>
  );
};

export default AboutUs;
