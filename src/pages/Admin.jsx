import { useState, useEffect } from 'react';

export default function Admin() {
  // State for Course Modules
  const [modules, setModules] = useState(["Martial Arts Basics", "English Grammar"]);
  const [newMod, setNewMod] = useState("");

  // State for Trainers
  const [trainers, setTrainers] = useState([
    { name: "Coach Meera", expertise: "Self-Defense" },
    { name: "Ms. Ananya", expertise: "Communication" }
  ]);
  const [trainerName, setTrainerName] = useState("");
  const [expertise, setExpertise] = useState("");

  // State for Success Notification (Toast)
  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState("");

  const triggerToast = (msg) => {
    setToastMsg(msg);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleUploadModule = () => {
    if (newMod) {
      setModules([...modules, newMod]);
      setNewMod("");
      triggerToast("Module uploaded successfully!");
    }
  };

  const handleAddTrainer = () => {
    if (trainerName && expertise) {
      setTrainers([...trainers, { name: trainerName, expertise }]);
      setTrainerName("");
      setExpertise("");
      triggerToast("Trainer registered successfully!");
    }
  };

  return (
    <div className="container">
      {/* SUCCESS TOAST NOTIFICATION */}
      {showToast && (
        <div style={{
          position: 'fixed', top: '20px', right: '20px', 
          background: '#10b981', color: 'white', padding: '15px 25px', 
          borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          zIndex: 1000, fontWeight: 'bold', animation: 'fadeIn 0.5s'
        }}>
          ✅ {toastMsg}
        </div>
      )}

      <h1>Teacher Control Panel</h1>
      
      <div className="grid-layout">
        {/* SECTION 1: CONTENT UPLOAD */}
        <div className="card">
          <h3>Upload New Content</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <input 
              value={newMod} 
              onChange={(e) => setNewMod(e.target.value)} 
              placeholder="Lesson Title (e.g. Yoga for Safety)..." 
              style={{ width: '100%' }} 
            />
            <button className="btn" onClick={handleUploadModule}>Publish Module</button>
          </div>
        </div>

        {/* SECTION 2: TRAINER ONBOARDING */}
        <div className="card" style={{ borderTop: '4px solid #a855f7' }}>
          <h3>Onboard Local Trainer</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <input 
              value={trainerName} 
              onChange={(e) => setTrainerName(e.target.value)} 
              placeholder="Full Name" 
            />
            <input 
              value={expertise} 
              onChange={(e) => setExpertise(e.target.value)} 
              placeholder="Expertise (e.g. Self-Defense)" 
            />
            <button className="btn" style={{ background: '#a855f7' }} onClick={handleAddTrainer}>
              Register Trainer
            </button>
          </div>
        </div>
      </div>

      {/* SECTION 3: LIVE INVENTORY */}
      <div className="card" style={{ marginTop: '30px' }}>
        <h3>Live Platform Inventory</h3>
        <div className="grid-layout" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
          <div>
            <h4 style={{ color: '#6366f1' }}>Modules</h4>
            <ul style={{ paddingLeft: '20px' }}>
              {modules.map((m, i) => <li key={i} style={{ marginBottom: '8px' }}>{m}</li>)}
            </ul>
          </div>
          <div>
            <h4 style={{ color: '#a855f7' }}>Registered Trainers</h4>
            <ul style={{ paddingLeft: '20px' }}>
              {trainers.map((t, i) => <li key={i} style={{ marginBottom: '8px' }}>{t.name} ({t.expertise})</li>)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}