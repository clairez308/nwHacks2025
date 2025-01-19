import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MedicationConfirmation.css';

function ConfirmationPage() {
  const navigate = useNavigate();
  const [medicationData, setMedicationData] = useState({
    medication: 'Loading...',
    dosage: 'Loading...',
    frequency: 'Loading...',
    duration: 'Loading...'
  });

  useEffect(() => {
    const fetchMedicationData = async () => {
      try {
        const response = await fetch('/output.txt');
        const text = await response.text();
        const data = parseMedicationData(text);
        setMedicationData(data);
      } catch (error) {
        console.error('Error fetching medication data:', error);
        setMedicationData({
          medication: 'Error loading',
          dosage: 'Error loading',
          frequency: 'Error loading',
          duration: 'Error loading'
        });
      }
    };

    fetchMedicationData();
  }, []);

  const parseMedicationData = (text) => {
    const lines = text.split('\n');
    return {
      medication: lines[1].split(': ')[1],
      dosage: lines[2].split(': ')[1],
      frequency: lines[3].split(': ')[1],
      duration: lines[4].split(': ')[1]
    };
  };

  const retake = () => {
    navigate('/camera');
  };

  const save = () => {
    navigate('/welcome-back', { state: { fromConfirmation: true } });
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
        
        <div className="medication-card">
          <h2>{medicationData.medication}</h2>
          <div className="medication-details">
            <p>{medicationData.medication}</p>
            <p>Dosage: {medicationData.dosage}</p>
            <p>Frequency: {medicationData.frequency}</p>
            <input type="time" min="00:00" max="23:59" className="edit-time-button" placeholder='Edit: time (24:00)'/>
            <p>Duration: {medicationData.duration}</p>
          </div>
        </div>

        <div className="action-buttons">
          <button className="action-button retake" onClick={retake}>Retake</button>
          <button className="action-button save" onClick={save}>Save</button>
        </div>
      </main>
    </div>
  );
}

export default ConfirmationPage;
