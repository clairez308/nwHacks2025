import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import logo from './logo.png';

function HomePage() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Logo" className='logo'></img>
        {/* <div className="phone-container">
          <div className="pill-icon"></div>
        </div> */}
        {/* <h1 className="app-title">MedEcho.</h1> */}
        <Link to="/signup">
          <button className="get-started-button">Get started</button>
        </Link>
      </header>
    </div>
  );
}

export default HomePage;
