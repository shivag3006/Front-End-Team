import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Link } from "react-router-dom";

function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [dob, setDob] = useState("");
  const [selection, setSelection] = useState("");
  const [description, setDescription] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();
  // ****************************************************************Handle password input change
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const validatePassword = () => {
    if (password !== "correctPassword") {
      setErrorMessage("Incorrect password. Please try again.");
    } else {
      setErrorMessage("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validatePassword();
    if (!isChecked) {
      alert("Please agree to the terms and conditions.");
      return;
    }

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("DOB:", dob);
    console.log("Selection:", selection);
    console.log("Description:", description);
    console.log("Checked:", isChecked);
    navigate();
  };

  return (
    <div className="container contact mt-5  mb-5  ">
      <div className="row ">
        <div className="col-md-6 shadow ">
          <div className="card  ">
            <div className="card-body  bg-warning">
              <h1 className="text-center mb-4">𝐑𝐞𝐠𝐢𝐬𝐭𝐫𝐚𝐭𝐢𝐨𝐧 𝐟𝐨𝐫𝐦</h1>
              <form onSubmit={handleSubmit} className="w-1">
                <div className="w-100">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
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
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
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
                  <label htmlFor="dob" className="form-label">
                    Date of Birth
                  </label>
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
                  <label htmlFor="selection" className="form-label">
                    Selection
                  </label>
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
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
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
                    id="robotCheck"
                  />
                  <label className="form-check-label" htmlFor="robotCheck">
                    I am not a robot{" "}
                    <img
                      src="https://m.media-amazon.com/images/I/31MqR2pPE5L._SX300_SY300_QL70_FMwebp_.jpg"
                      alt="not working"
                      width="50px"
                      height="50px"
                    />
                  </label>
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
                <button type="signup" className="btn btn-primary">
                  Sign up
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="col-md-6 shadow ">
          <h1 className="shadow text-center">𝐀𝐝𝐝𝐫𝐞𝐬𝐬 & 𝐂𝐨𝐧𝐭𝐚𝐜𝐭 𝐈𝐧𝐟𝐨</h1>
          <div claaaName="card">
            <div class="con-com home-list-pop">
              <p className="shadow ">
                VidhyaDhan-Foundation, 42-32/1, Near Jagathgiri busstop,
                Kukatpally, Hyderabad, Telangana, India - 500072
              </p>
              <span>
                <img
                  style={{ height: "20px" }}
                  src="https://y4d.ngo/assets/images/icon/phone.png"
                  alt=""
                />
                Phone: +91 <a href="tel:8686963526">86869635626</a>
              </span>
              <span>
                <img
                  style={{ height: "20px" }}
                  src="https://y4d.ngo/assets/images/icon/mail.png"
                  alt=""
                />
                Email:{" "}
                <a href="mailto:mail.vidyadhan@gmail.com">
                  mail.vidyadhan@gmail.com
                </a>
              </span>
            </div>
          </div>
          <div claaaName="card shadow">
            <div class="card2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3176.165185938272!2d78.40848457125446!3d17.48591406333599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb919ba3872c5f%3A0xca5875cb077d27b2!2sMHS%20Delight%20Cream!5e1!3m2!1sen!2sus!4v1707559116191!5m2!1sen!2sus"
                title="Unique Title 2"
                width="546px"
                height="578px"
                referrerpolicy="no-referrer-when-downgrade"
                loading="lazy"
              ></iframe>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
