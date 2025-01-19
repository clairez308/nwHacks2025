import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';

function SignUp() {
  return (
    <div className="signup-page">
      <h1>MedEcho</h1>
      <h2>Sign up</h2>
      <form>
        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" placeholder="Enter your password" />
        </div>
        <button type="submit" className="submit-button">Sign Up</button>
      </form>
      <div className="login-link">
        Already have an account? <Link to="/">Log in</Link>
      </div>
    </div>
  );
}

export default SignUp;
