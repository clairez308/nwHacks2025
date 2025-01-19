import React, { useState } from 'react';
import './CameraPage.css';

function CameraPage() {
  const [scriptOutput, setScriptOutput] = useState('');

  const openCamera = async () => {
    try {
      const response = await fetch('http://localhost:5000/launch-script'); // Ensure the URL matches the Flask endpoint
      const result = await response.json();
      setScriptOutput(result.output || result.error);
    } catch (error) {
      console.error('Error launching script:', error);
      setScriptOutput('Error launching script');
    }
  };

  return (
    <div className="camera-page">
      <button onClick={openCamera}>Open Camera</button>
      {scriptOutput && <p>{scriptOutput}</p>}
    </div>
  );
}

export default CameraPage;
