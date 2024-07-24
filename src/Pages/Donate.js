import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const Donate = () => {
  const [paymentType, setPaymentType] = useState("");
  const [monthly, setMonthly] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    amount: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to an API
    console.log("Form submitted:", formData);
    console.log({ paymentType, monthly });
  };

  return (
    <div className="container2 ">
      <div className="container ">
        <div className="row ">
          <div className="col-md-6 shadow ">
            <div className="card mt-5 ">
              <div className="card-body">
                <h1 className="text-center">𝐃𝐨𝐧𝐚𝐭𝐞 𝐅𝐨𝐫𝐦</h1>
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="formEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="formAmount">
                    <Form.Label>Donation Amount</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Enter amount"
                      name="amount"
                      value={formData.amount}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="formMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Enter your message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="paymentType" className="form-label">
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
                  </Form.Group>
                  <Form.Group className="form-check mb-3">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="monthly"
                      checked={monthly}
                      onChange={(e) => setMonthly(e.target.checked)}
                    />
                    <Form.Label className="form-check-label" htmlFor="monthly">
                      Make this a monthly donation
                    </Form.Label>
                  </Form.Group>
                  <div>
                    <Button className="btn3" variant="primary" type="submit">
                      <b >Donate</b>
                    </Button>
                  </div>

                </Form>
              </div>
            </div>
          </div>

          <div className="col-md-6 text-center shadow ">
            <h1>𝐀𝐜𝐜𝐨𝐮𝐧𝐭 𝐃𝐞𝐭𝐚𝐢𝐥𝐬</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
