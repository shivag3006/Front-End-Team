import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faDollarSign,
  faCommentDots,
  faCreditCard,
  faCalendarAlt,
  faCheckSquare,
} from "@fortawesome/free-solid-svg-icons";

const Donate = () => {
  const [paymentType, setPaymentType] = useState("");
  const [monthly, setMonthly] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    amount: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    paymentTypeError: "",
    checkboxError: "",
    amountError: "",
    messageError: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form from refreshing the page

    let valid = true;
    let newErrors = { paymentTypeError: "", checkboxError: "", amountError: "", messageError: "" };

    // Validate payment type
    if (!paymentType) {
      newErrors.paymentTypeError = "Please select a payment method.";
      valid = false;
    }

    // Validate monthly donation checkbox
    if (!monthly) {
      newErrors.checkboxError = "Please agree to make this a monthly donation.";
      valid = false;
    }

    // Validate donation amount
    if (monthly && formData.amount < 500) {
      newErrors.amountError = "Monthly donation must be at least ₹500.";
      valid = false;
    }

    // Validate message character count (50/500 characters)
    const messageLength = formData.message.length;
    if (messageLength < 50 || messageLength > 500) {
      newErrors.messageError = `Message must be between 50/500 characters. Currently, it has ${messageLength} letters.`;
      valid = false;
    }

    if (valid) {
      console.log("Form submitted:", formData);
      console.log({ paymentType, monthly });

      // Get the current date and time
      const currentDate = new Date();
      console.log("Current Date and Time:", currentDate);

      // Keep the console log visible for 30 seconds, then clear it
      setTimeout(() => {
        console.clear();
        console.log("Console cleared after 30 seconds");
        window.location.reload(); // Refresh the page after clearing the console
      }, 30000); // 30,000 milliseconds = 30 seconds
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="container2">
      <div className="container">
        <div className="row">
          <div className="col-md-6 shadow">
            <div className="card mt-5">
              <div className="card-body">
                <h1 className="text-center">𝐃𝐨𝐧𝐚𝐭𝐞 𝐅𝐨𝐫𝐦</h1>
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="formName" className="mb-3">
                    <Form.Label className="d-flex align-items-center">
                      <FontAwesomeIcon icon={faUser} className="me-2" />
                      Name
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="formEmail" className="mb-3">
                    <Form.Label className="d-flex align-items-center">
                      <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                      Email address
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="formAmount" className="mb-3">
                    <Form.Label className="d-flex align-items-center">
                      <FontAwesomeIcon icon={faDollarSign} className="me-2" />
                      Donation Amount
                    </Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Enter amount"
                      name="amount"
                      value={formData.amount}
                      onChange={handleChange}
                    />
                    {errors.amountError && (
                      <Alert variant="danger" className="mt-2">
                        {errors.amountError}
                      </Alert>
                    )}
                  </Form.Group>

                  <Form.Group controlId="formMessage" className="mb-3">
                    <Form.Label className="d-flex align-items-center">
                      <FontAwesomeIcon icon={faCommentDots} className="me-2" />
                      Message
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Enter your message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                    />
                    {errors.messageError && (
                      <Alert variant="danger" className="mt-2">
                        {errors.messageError}
                      </Alert>
                    )}
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label className="d-flex align-items-center">
                      <FontAwesomeIcon icon={faCreditCard} className="me-2" />
                      Select Payment Type
                    </Form.Label>
                    <select
                      id="paymentType"
                      className="form-select"
                      value={paymentType}
                      onChange={(e) => setPaymentType(e.target.value)}
                      required
                    >
                      <option value="">Choose...</option>
                      <option value="creditCard">Credit Card</option>
                      <option value="debitCard">Debit Card</option>
                      <option value="upi">UPI</option>
                      <option value="netBanking">Net Banking</option>
                    </select>
                    {errors.paymentTypeError && (
                      <Alert variant="danger" className="mt-2">
                        {errors.paymentTypeError}
                      </Alert>
                    )}
                  </Form.Group>

                  <Form.Group className="form-check mb-3">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="monthly"
                      checked={monthly}
                      onChange={(e) => setMonthly(e.target.checked)}
                    />
                    <Form.Label
                      className="form-check-label d-flex align-items-center"
                      htmlFor="monthly"
                    >
                      <FontAwesomeIcon icon={faCheckSquare} className="me-2" />
                      Make this a monthly donation
                    </Form.Label>
                    {errors.checkboxError && (
                      <Alert variant="danger" className="mt-2">
                        {errors.checkboxError}
                      </Alert>
                    )}
                  </Form.Group>

                  <div>
                    <Button className="btn3" variant="primary" type="submit">
                      <FontAwesomeIcon icon={faCalendarAlt} className="me-2" />
                      <b>Donate</b>
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
          </div>

          <div className="col-md-6 text-center shadow">
            <h1>𝐀𝐜𝐜𝐨𝐮𝐧𝐭 𝐃𝐞𝐭𝐚𝐢𝐥𝐬</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
