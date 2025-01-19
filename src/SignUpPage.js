import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './SignUpPage.css';

function SignUp() {
  const navigate = useNavigate();

  const handleSignUp = () => {
    // Sign up logic here
    navigate('/welcome-back');
  };

  return (
    <div className="signup-page">
      <h2>MedEcho</h2>
      <h1>Welcome Back!</h1>
      <p>Input your details to sign back in.</p>
      <form>
        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" placeholder="Enter your password" />
        </div>
<<<<<<< HEAD:src/SignUp.js
        <button type="submit" className="submit-button">Login</button>
=======
        <button type="button" className="submit-button" onClick={handleSignUp}>
          Sign Up
        </button>
>>>>>>> 6a8d391c8b54867149d8c3fb5803a894e04bed97:src/SignUpPage.js
      </form>
      <div className="login-link">
        Need to make a new account? <Link to="/">Sign Up</Link>
      </div>
    </div>
  );
}

export default SignUp;
