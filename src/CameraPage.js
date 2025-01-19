import React, { useState } from 'react';
import './CameraPage.css';

function CameraPage() {
  const [scriptOutput, setScriptOutput] = useState('');

  const openCamera = async () => {
    try {
      const response = await fetch('http://localhost:5000/launch-script'); // Update this URL if your server is running on a different port
      const result = await response.text();
      setScriptOutput(result);
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
