// import React from 'react';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MedicationConfirmation.css';

function ConfirmationPage() {
  const [medications, setMedications] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch medication details from the backend
    fetch('http://localhost:5000/get-medication-details')
      .then(response => response.json())
      .then(data => {
        if (data.medications) {
          setMedications(data.medications);
        }
      })
      .catch(error => console.error('Error fetching medication details:', error));
  }, []);

  const retake = () => {
    navigate('/camera');
  };
  const save = () => {
    navigate('/welcome-back');
  };

  return (
    <div className="mobile-container">
      <header className="header">
        <div className="app-name">MedEcho</div>
        <div className="profile">
          <span>Claire</span>
          <div className="profile-image"></div>
        </div>
      </header>

      <main className="main-content">
        <h1>What we got</h1>
        <p className="subtitle">Check all the aspects are correct!</p>

        {medications.map((med, index) => (
          <div className="medication-card" key={index}>
            <h2>{med.medication_name}</h2>
            <div className="medication-details">
              <p>Dosage: {med.dosage}</p>
              <p>Frequency: {med.frequency}</p>
              <input
                type="time"
                min="00:00"
                max="23:59"
                className="edit-time-button"
                placeholder="Edit: time (24:00)"
              />
              <p>Duration: {med.duration}</p>
            </div>
          </div>
        ))}

        <div className="action-buttons">
          <button className="action-button retake" onClick={retake}>Retake</button>
          <button className="action-button save" onClick={save}>Save</button>
        </div>
      </main>
    </div>
  );
}

export default ConfirmationPage;


// function ConfirmationPage() {
//     const navigate = useNavigate();

//   const retake = () => {
//     navigate('/camera');
//   };
//   const save = () => {
//     navigate('/welcome-back');
//   };
//   return (
//     <div className="mobile-container">

//       <header className="header">
//         <div className="app-name">MedEcho</div>
//         <div className="profile">
//           <span>Claire</span>
//           <div className="profile-image"></div>
//         </div>
//       </header>

//       <main className="main-content">
//         <h1>What we got</h1>
//         <p className="subtitle">Check all the aspects are correct!</p>
        
//         <div className="medication-card">
//           <h2>Amoxicillin</h2>
//           <div className="medication-details">
//             <p>Dosage: 500mg</p>
//             <p>Frequency: once per day</p>
//             <input type="time" min="00:00" max="23:59" className="edit-time-button" placeholder='Edit: time (24:00)'/>
//             <p>Duration: 30 days</p>
//           </div>
//         </div>

//         <div className="action-buttons">
//           <button className="action-button retake" onClick={retake}>Retake</button>
//           <button className="action-button save" onClick={save}>Save</button>
//         </div>
//       </main>

//     </div>
//   );
// }

// export default ConfirmationPage;