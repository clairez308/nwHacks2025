import React from 'react';
import { Link } from 'react-router-dom';
import './WelcomeBackPage.css';

function WelcomeBackPage() {
    return (
      <div className="welcome-back-page">
        <header className="header">
          <div className="app-name">MedEcho</div>
          <div className="profile">
            <span>Claire</span>
            <div className="profile-image"></div>
          </div>
        </header>
  
        <main className="main-content">
          <h1>Welcome Back!</h1>
          <p className="subtitle">See logged medications or add something new</p>
          
          <div className="medications-container">
            <div className="medication">
              <h2>Amoxicillin</h2>
              <p>Dosage: 500mg</p>
              <p>Frequency: once per day</p>
              <p>Duration: 30 days</p>
            </div>
            <div className="medication">
              <h2>Meletonin</h2>
              <p>Dosage: 25 mg</p>
              <p>Frequency: once per day</p>
              <p>Duration: 10 days</p>
            </div>
            <div className="medication">
              <h2>Amoxicillin</h2>
              <p>Dosage: 500mg</p>
              <p>Frequency: once per day</p>
              <p>Duration: 30 days</p>
            </div>
          </div>
        </main>
  
        <nav className="bottom-nav">
          <Link to="/camera" className="plus-button-container">
            <button className="plus-button">+</button>
          </Link>
        </nav>
      </div>
    );
  }
  
  export default WelcomeBackPage;