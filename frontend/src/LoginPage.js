import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './SignUpPage.css';

function SignUpPage() {
  const navigate = useNavigate();

  const handleSignUp = () => {
    // Sign up logic here
    navigate('/welcome-back');
  };

  return (
    <div className="signup-page">
        <header className="header">
          <div className="app-name">MedEcho</div>
          <div className="profile">
            <span>Claire</span>
            <div className="profile-image">😎</div>
          </div>
        </header>
      <h1>Create an Account</h1>
      <p>Input your details to sign up.</p>
      <form>
        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" placeholder="Enter your password" />
        </div>
        <div className="form-group">
          <label>Re-enter Password</label>
          <input type="password" placeholder="Re-enter your password" />
        </div>
        <button type="button" className="submit-button" onClick={handleSignUp}>
          Sign Up
        </button>
      </form>
      <div className="login-link">
        Already have an account? <Link to="/signup">Login</Link>
      </div>
    </div>
  );
}

export default SignUpPage;
