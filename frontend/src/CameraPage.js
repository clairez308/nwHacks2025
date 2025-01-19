import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CameraPage.css';

function CameraPage() {
  const [scriptOutput, setScriptOutput] = useState('');
  const navigate = useNavigate();

  const handlePic = () => {
    navigate('/medication-confirmation');
  };
  const openCamera = async () => {
    try {
      const response = await fetch('http://localhost:5000/launch-script');
      const result = await response.json();
      console.log(result);
      setScriptOutput(result.message || result.error);
    } catch (error) {
      console.error('Error launching script:', error);
      setScriptOutput('Error launching script');
    }
  };

  return (
    <div className="camera-page">
      <button onClick={openCamera}>Open Camera</button>
      <button type="button" className="submit-button" onClick={handlePic}>
          Finish
        </button>
      {scriptOutput && <p>{scriptOutput}</p>}
    </div>
  );
}

export default CameraPage;
