import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className=" projects mt-5 shadow">
      <img
        className="image ms-1 mb-5"
        src={
          "https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2019/07/16152747/project-management.png"
        }
        alt="not working"
        height="300px"
        width="100%"
      />

      <div className="container">
        <div className="=row2">
          <div className="p-card w-100">
            <div className="card-body home-list-pop shadow">
              <p className=" list-spac">
                Y4D Foundation, 402, The Onyx, Near Euro School, Wakad, Pune,
                Maharashtra, India - 411057 <br />
              </p>
              <div className="mb-3 list-spac ">
                <label for="phone" className="form-label ">
                  Phone Number
                </label>
              </div>
              <Link to="" className="btn list-spac btn-warning">
                Button
              </Link>
            </div>
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
          <b> Enquiry Now </b>{" "}
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

      {/* <div className="space mt-4 pt-4"></div> */}

      <div className="container py-5 ">
        <div className="row shadow-fluid  bg-body-tertiary rounded">
          <div className="col-md-3 footer-step p-5">
            <Link to="" className=""></Link>
            <h5>Step 1: Login Your Account</h5>
            <p>Confirm your email or phone number.</p>
          </div>
          <div className="col-md-3 footer-step p-5">
            <i className="fas fa-check-circle footer-step-icon"></i>
            <h5>Step 2: Verify Your Account</h5>
            <p>Confirm your email or phone number.</p>
          </div>
          <div className="col-md-3 footer-step p-5">
            <i className="fas fa-credit-card footer-step-icon"></i>
            <h5>Step 3: Make Payment</h5>
            <p>Select a payment method and complete the transaction.</p>
          </div>
          <div className="col-md-3 footer-step p-5">
            <i className="fas fa-check footer-step-icon"></i>
            <h5>Step 4: Confirmation</h5>
            <p>Receive confirmation of your purchase or action.</p>
          </div>
        </div>

        <footer className="footer mt-5">
          <div className="container">
            <div className="row">
              <div className="col-md-3 ">
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
