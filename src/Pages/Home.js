import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle"
import { Carousel } from "react-bootstrap";
import { Card, Button } from "react-bootstrap";

const Home = () => {
  return (
    <div className="home mt-5">
      <Carousel>
        <Carousel.Item>
          {/* <img src={'vidhyahan.png'} alt='logo is not working' width='90px' height='50px'/> */}
          <img
            className="d-block w-100"
            src="Cover Page 1.jpg"
            height="400px "
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First Slide Label</h3>
            <p>Some text about the first slide...</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="img8.jpeg"
            alt="Second slide"
            width="1350px"
            height="400px"
          />
          <Carousel.Caption>
            <h3>Second Slide Label</h3>
            <p>Some text about the second slide...</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 "
            src={"imhg10.jpeg"}
            alt="Third slide"
            width="1350px"
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
          <div className="col-md-4 mb-4">
            <Card className="homecard">
              <Card.Img variant="top" src="img9.jpeg" height="200px" />
              <Card.Body>
                <Card.Title>Library</Card.Title>
                <Card.Text>
                  <p>
                    {" "}
                    VidhyaDhan Through it's various initiatives and partnerships
                    working on to improve situation of underprivileged sections
                    and building a society better place for living of future
                    generation.
                  </p>
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </div>

          <div className="col-md-4 mb-4">
            <Card className="homecard">
              <Card.Img variant="top" src="imhgf.jpeg" />
              <Card.Body>
                <Card.Title>Childrens </Card.Title>
                <Card.Text>
                  <p1>
                    Youth being the backbone of society, VidhyaDhan facilitates
                    harnessing and nurturing of their infinite potential and
                    prosperity thereby making them harbingers of positive social
                    change.
                  </p1>
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </div>

          <div className="col-md-4 mb-4">
            <Card className="homecard">
              <Card.Img variant="top" src="img6.jpeg" />
              <Card.Body>
                <Card.Title>VidhyaDhan Library</Card.Title>
                <Card.Text>
                  <p1>
                    citizen empowerment defines opportunities and accessibility
                    provided to citizens by their leaders and representatives,
                    in whichever social field, to develop capabilities, positive
                    social change.....
                  </p1>
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-4 mb-4">
            <Card className="homecard">
              <Card.Img variant="top" src="img9.jpeg" height="200px" />
              <Card.Body>
                <Card.Title>Library</Card.Title>
                <Card.Text>
                  <p>
                    {" "}
                    VidhyaDhan Through it's various initiatives and partnerships
                    working on to improve situation of underprivileged sections
                    and building a society better place for living of future
                    generation.
                  </p>
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </div>

          <div className="col-md-4 mb-4">
            <Card className="homecard">
              <Card.Img variant="top" src="imhgf.jpeg" />
              <Card.Body>
                <Card.Title>Childrens </Card.Title>
                <Card.Text>
                  <p1>
                    Youth being the backbone of society, VidhyaDhan facilitates
                    harnessing and nurturing of their infinite potential and
                    prosperity thereby making them harbingers of positive social
                    change.
                  </p1>
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </div>

          <div className="col-md-4 mb-4">
            <Card className="homecard">
              <Card.Img variant="top" src="img6.jpeg" />
              <Card.Body>
                <Card.Title>VidhyaDhan Library</Card.Title>
                <Card.Text>
                  <p1>
                    citizen empowerment defines opportunities and accessibility
                    provided to citizens by their leaders and representatives,
                    in whichever social field, to develop capabilities, positive
                    social change.....
                  </p1>
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <div className="popup-side-bar">
        <a
          href="ContactUs"
          className="home-enquiry-trigger pum-trigger"
          style={{ cursor: "pointer" }}
        >
          {" "}
          <b>Enquiry Now </b>{" "}
        </a>
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
    </div>
  );
};

export default Home;
