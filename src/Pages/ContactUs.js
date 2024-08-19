import React, { useState } from "react";
import {
  FaCheckCircle, FaTimesCircle, FaUser, FaEnvelope, FaLock, FaCalendarAlt, FaClipboardList, FaFileAlt
} from 'react-icons/fa';
import "bootstrap/dist/css/bootstrap.min.css";
import './ContactUs.css';

function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");
  const [selection, setSelection] = useState("");
  const [description, setDescription] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handlePasswordChange = (event) => {
    const inputPassword = event.target.value;
    if (inputPassword.length <= 12) {
      setPassword(inputPassword);
    }
  };

  const validatePassword = () => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,12}$/;
    if (!passwordRegex.test(password)) {
      setErrorMessage("Password must be 8-12 characters long, include letters and numbers, and have no spaces.");
      return false;
    }
    return true;
  };

  const validateEmail = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("Please enter a valid Gmail address.");
      return false;
    }
    return true;
  };

  const validateForm = () => {
    if (!validateEmail() || !validatePassword()) {
      return false;
    }

    if (name === "" || dob === "" || selection === "" || description === "") {
      setErrorMessage("All fields are required.");
      return false;
    }

    if (!isChecked) {
      setErrorMessage("You must agree to the terms and conditions.");
      return false;
    }

    setErrorMessage("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("DOB:", dob);
    console.log("Selection:", selection);
    console.log("Description:", description);
    console.log("Checked:", isChecked);

    setIsSubmitted(true);

    setName("");
    setEmail("");
    setPassword("");
    setDob("");
    setSelection("");
    setDescription("");
    setIsChecked(false);
  };

  return (
    <div className="container contact mt-5 mb-5">
      <div className="row">
        <div className="col-md-6 shadow">
          <div className="card">
            <div className="card-body bg-warning">
              <h1 className="text-center mb-4">Registration Form</h1>
              {errorMessage && <p className="text-danger text-center"><FaTimesCircle /> {errorMessage}</p>}
              {isSubmitted && <p className="text-success text-center"><FaCheckCircle /> Form submitted successfully!</p>}
              <form onSubmit={handleSubmit} className="w-100">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label"><FaUser /> Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full Name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label"><FaEnvelope /> Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      validateEmail(); // Validate email on input change
                    }}
                    placeholder="Enter your Gmail address"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label"><FaLock /> Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="dob" className="form-label"><FaCalendarAlt /> Date of Birth</label>
                  <input
                    type="date"
                    className="form-control"
                    id="dob"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="selection" className="form-label"><FaClipboardList /> Selection</label>
                  <select
                    className="form-select"
                    id="selection"
                    value={selection}
                    onChange={(e) => setSelection(e.target.value)}
                    required
                  >
                    <option value="">Choose...</option>
                    <option value="select">Select</option>
                    <option value="click">Click</option>
                    <option value="end">End</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label"><FaFileAlt /> Description</label>
                  <textarea
                    className="form-control"
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Write from here..."
                    rows="3"
                    required
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="termsCheck"
                    checked={isChecked}
                    onChange={() => setIsChecked(!isChecked)}
                  />
                  <label className="form-check-label" htmlFor="termsCheck">
                    I agree to the terms and conditions
                  </label>
                </div>
                <button type="submit" className="btn btn-primary animated-button">Sign up</button>
              </form>
            </div>
          </div>
        </div>

        <div className="col-md-6 shadow">
          <h1 className="shadow text-center">Address & Contact Info</h1>
          <div className="card">
            <div className="card-body">
              <p className="shadow">VidhyaDhan-Foundation, 42-32/1, Near Jagathgiri busstop, Kukatpally, Hyderabad, Telangana, India - 500072</p>
              <span>
                <img style={{ height: "20px" }} src="https://y4d.ngo/assets/images/icon/phone.png" alt="phone" />
                Phone: +91 <a href="tel:8686963526">86869635626</a>
              </span>
              <span>
                <img style={{ height: "20px" }} src="https://y4d.ngo/assets/images/icon/mail.png" alt="mail" />
                Email: <a href="mailto:mail.vidyadhan@gmail.com">mail.vidyadhan@gmail.com</a>
              </span>
            </div>
          </div>
          <div className="card shadow">
            <div className="card-body">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3176.165185938272!2d78.40848457125446!3d17.48591406333599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb919ba3872c5f%3A0xca5875cb077d27b2!2sMHS%20Delight%20Cream!5e1!3m2!1sen!2sus!4v1707559116191!5m2!1sen!2sus"
                title="Unique Title 2"
                width="100%"
                height="100%"
                referrerpolicy="no-referrer-when-downgrade"
                loading="lazy"
              ></iframe>
              <div className="popup-side-bar2">
                <a href="RequestCallback" className="home-enquiry-trigger pum-trigger" style={{ cursor: "pointer" }}>
                  <b>Request Callback</b>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
