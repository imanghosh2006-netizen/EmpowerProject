import { useState } from 'react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
      {isOpen && (
        <div className="card" style={{ width: '250px', height: '300px', marginBottom: '10px' }}>
          <h4>AI Assistant</h4>
          <p style={{ fontSize: '0.8rem' }}>How can I help you with your training?</p>
          <input type="text" placeholder="Type a question..." style={{ width: '90%' }} />
          <button className="btn" onClick={() => alert("Simulated AI: We recommend the Basic Self-Defense module for beginners.")}>Ask</button>
        </div>
      )}
      <button className="btn" onClick={() => setIsOpen(!isOpen)} style={{ borderRadius: '50%', width: '60px', height: '60px' }}>
        {isOpen ? 'X' : 'AI'}
      </button>
    </div>
  );
}