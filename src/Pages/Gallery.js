// import React, { useState } from 'react';
// import { Container, Row, Col, Card, Button } from 'react-bootstrap';
// import { CSSTransition, TransitionGroup } from 'react-transition-group';
// import './Gallery.css'; // Create this CSS file for custom animations

// const Gallery = ({ images }) => {
//   const [showImages, setShowImages] = useState(true);

//   const toggleImages = () => {
//     setShowImages(!showImages);
//   };

//   return (
//     <div>
//       <Container>
//         <Button onClick={toggleImages} className="mb-3">
//           {showImages ? 'Hide Images' : 'Show Images'}
//         </Button>
//         <TransitionGroup as={Row} className="g-4">
//           {showImages && images.map((image, index) => (
//             <CSSTransition key={index} timeout={500} classNames="fade">
//               <Col xs={12} sm={6} md={4} lg={3}>
//                 <Card>
//                   <Card.Img variant="top" src={image.src} alt={image.alt} />
//                   <Card.Body>
//                     <Card.Title>{image.title}</Card.Title>
//                     <Card.Text>{image.description}</Card.Text>
//                   </Card.Body>
//                 </Card>
//               </Col>
//             </CSSTransition>
//           ))}
//         </TransitionGroup>
//       </Container>



//       <div className="popup-side-bar2 ">
//         <a
//           href="RequestCallback"
//           className="home-enquiry-trigger pum-trigger"
//           style={{ cursor: "pointer" }}
//         >
//           <b> Request Callback </b>
//         </a>
//       </div>

//       <div className="popup-side-bar ">
//         <a
//           href="ContactUs"
//           className="home-enquiry-trigger pum-trigger"
//           style={{ cursor: "pointer" }}
//         >
//           <b> Enquiry Now </b>
//         </a>
//       </div>



//     </div>
//   );
// }

// export default Gallery;



import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './Gallery.css';

const Gallery = ({ images = [] }) => { // Default to an empty array
  const [showImages, setShowImages] = useState(true);

  const toggleImages = () => {
    setShowImages(!showImages);
  };

  return (
    <div>
      <Container>
        <Button onClick={toggleImages} className="mb-3">
          {showImages ? 'Hide Images' : 'Show Images'}
        </Button>
        <TransitionGroup as={Row} className="g-4">
          {showImages && images.map((image, index) => (
            <CSSTransition key={index} timeout={500} classNames="fade">
              <Col xs={12} sm={6} md={4} lg={3}>
                <Card>
                  <Card.Img variant="top" src={image.src} alt={image.alt} />
                  <Card.Body>
                    <Card.Title>{image.title}</Card.Title>
                    <Card.Text>{image.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </Container>

      <div className="popup-side-bar2 ">
        <a
          href="RequestCallback"
          className="home-enquiry-trigger pum-trigger"
          style={{ cursor: "pointer" }}
        >
          <b> Request Callback </b>
        </a>
      </div>

      <div className="popup-side-bar ">
        <a
          href="ContactUs"
          className="home-enquiry-trigger pum-trigger"
          style={{ cursor: "pointer" }}
        >
          <b> Enquiry Now </b>
        </a>
      </div>

    </div>
  );
};

export default Gallery;

