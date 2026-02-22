import React, { useState } from 'react';

export default function SuccessStories() {
  const [stories, setStories] = useState([
    {
      name: "Rina Devi",
      location: "Bihar",
      remark: "The self-defense workshop gave me the courage to travel to the city for my job interview.",
      achievement: "Employed as a Security Supervisor"
    },
    {
      name: "Sunita Murmu",
      location: "Jharkhand",
      remark: "I learned how to use a computer through the digital literacy module. Now I help my village with online forms.",
      achievement: "Community Digital Lead"
    }
  ]);

  // Form State
  const [newName, setNewName] = useState("");
  const [newRemark, setNewRemark] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newName && newRemark) {
      // For the project showcase, we add the new story to the top of the list
      const newEntry = {
        name: newName,
        location: "Local Community",
        remark: newRemark,
        achievement: "Pending Verification"
      };
      setStories([newEntry, ...stories]);
      setNewName("");
      setNewRemark("");
      alert("Thank you! Your remark has been posted to the community wall.");
    }
  };

  return (
    <div className="container">
      <h1>Impact & Success Stories</h1>
      <p>Real stories from women empowered by our community platform.</p>
      
      <div style={{ display: 'grid', gap: '20px', marginTop: '30px' }}>
        {stories.map((story, i) => (
          <div key={i} className="card" style={{ borderLeft: '5px solid #a855f7' }}>
            <p style={{ fontSize: '1.2rem', fontStyle: 'italic' }}>"{story.remark}"</p>
            <h4>- {story.name}, <span style={{ color: '#666' }}>{story.location}</span></h4>
            <div style={{ background: '#f3e8ff', padding: '10px', borderRadius: '5px', display: 'inline-block' }}>
              <b>Impact:</b> {story.achievement}
            </div>
          </div>
        ))}
      </div>

      {/* --- STEP 2: SHARE YOUR REMARK SECTION --- */}
      <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #e2e8f0' }} />
      
      <div className="card" style={{ background: '#fdf4ff', border: '1px solid #d8b4fe' }}>
        <h3>Share Your Remark</h3>
        <p style={{ color: '#6b7280' }}>How has this platform helped you? Your story could inspire another woman.</p>
        
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '20px' }}>
          <input 
            type="text" 
            placeholder="Your Name" 
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            style={{ padding: '12px', border: '1px solid #cbd5e1', borderRadius: '6px' }}
            required
          />
          <textarea 
            placeholder="Write your experience here..." 
            value={newRemark}
            onChange={(e) => setNewRemark(e.target.value)}
            style={{ 
              width: '100%', 
              height: '100px', 
              borderRadius: '8px', 
              padding: '12px', 
              border: '1px solid #cbd5e1',
              fontFamily: 'inherit' 
            }}
            required
          ></textarea>
          
          <button 
            type="submit"
            className="btn" 
            style={{ background: '#a855f7', alignSelf: 'flex-start' }}
          >
            Post Remark
          </button>
        </form>
      </div>
    </div>
  );
}