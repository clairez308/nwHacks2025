import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './SignUpPage';
import Home from './HomePage';
import WelcomeBackPage from './WelcomeBackPage';
import CameraPage from './CameraPage';
import MedicationConfirmation from './MedicationConfirmation';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/welcome-back" element={<WelcomeBackPage />} />
        <Route path="/camera" element={<CameraPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/medication-confirmation" element={<MedicationConfirmation />} />
      </Routes>
    </Router>
  );
}

export default App;
