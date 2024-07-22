import React, { useState } from "react";

const RequestCallback = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const requestData = {
      name,
      phone,
      message,
    };

    try {
      const response = await fetch(
        "https://your-backend-api-url.com/callback",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        }
      );
      debugger;
      if (response.ok) {
        alert("Request sent successfully!");
        setName("");
        setPhone("");
        setMessage("");
      } else {
        alert("Failed to send request.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="request">
      <div className="">
        <p>
          {" "}
          Name:{" "}
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />{" "}
        </p>
      </div>
      <div>
        <label>Phone:</label>{" "}
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Message:</label>{" "}
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>
      <button type="submit">Request Call Back</button>

      <div className="popup-side-bar ">
        <a
          href="ContactUs"
          className="home-enquiry-trigger pum-trigger"
          style={{ cursor: "pointer" }}
        >
          <b> Enquiry Now </b>
        </a>
      </div>
    </form>
  );
};

export default RequestCallback;
