import React from "react";
import { useParams } from "react-router-dom";
import "./User.css";

export default function User() {
  const { name } = useParams();

  return (
    <div className="user-container">
      <div className="user-text hover-border">
        <h1 className="user-welcome">Welcome, {name ? name : "User"}!</h1>
        <p className="user-description">
          This page displays your user information in a simple and interactive way.
          You can view your profile, update your details, and explore personalized features.
          Our goal is to make your experience smooth, fast, and user-friendly.
          Thank you for being a part of our application!
        </p>
      </div>
    </div>
  );
}
