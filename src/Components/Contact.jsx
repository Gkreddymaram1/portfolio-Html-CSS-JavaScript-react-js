import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-page">
      <form className="contact-form">
        <h2>Contact Form</h2>

        <label>Name</label>
        <input type="text" placeholder="Enter your name" required />

        <label>Email</label>
        <input type="email" placeholder="Enter your email" required />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}














