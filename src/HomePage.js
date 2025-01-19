import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="phone-container">
          <div className="pill-icon"></div>
        </div>
        <h1 className="app-title">MedEcho.</h1>
        <Link to="/signup">
          <button className="get-started-button">Get started</button>
        </Link>
      </header>
    </div>
  );
}

export default HomePage;
