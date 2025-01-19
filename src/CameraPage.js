import React from 'react';
import { Camera } from 'react-camera-pro';
import './CameraPage.css';

function CameraPage() {
  const camera = React.useRef(null);

  const takePicture = () => {
    const photo = camera.current.takePhoto();
    console.log(photo);
  };

  return (
    <div className="camera-page">
      <Camera ref={camera} />
      <button onClick={takePicture}>Take Picture</button>
    </div>
  );
}

export default CameraPage;
