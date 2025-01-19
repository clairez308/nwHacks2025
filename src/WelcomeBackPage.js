import React from 'react';
import { Link } from 'react-router-dom';
import './WelcomeBackPage.css';

function WelcomeBackPage() {
  return (
    <div className="welcome-back-page">
      <h1>Welcome Back!</h1>
      <p>See logged medications or add something new</p>
      <div className="medication">
        <h2>Amoxicillin</h2>
        <p>Dosage: 500mg</p>
        <p>Frequency: once per day</p>
        <p>Duration: 30 days</p>
      </div>
      <div className="medication">
        <h2>Amoxicillin</h2>
        <p>Dosage: 500mg</p>
        <p>Frequency: once per day</p>
        <p>Duration: 30 days</p>
      </div>
      <div className="medication">
        <h2>Amoxicillin</h2>
        <p>Dosage: 500mg</p>
        <p>Frequency: once per day</p>
        <p>Duration: 30 days</p>
      </div>
      <Link to="/camera">
        <button className="plus-button">+</button>
      </Link>
    </div>
  );
}

export default WelcomeBackPage;
