import React, { useState } from 'react';

export default function Programs() {
  // 1. New State to track which video is playing
  const [activeVideo, setActiveVideo] = useState(null);

  const safetyCourses = [
    { id: 3, title: "Street Awareness 101", trainer: "Coach Meera", videoId: "M4_m6S0GIsU" },
    { id: 4, title: "Emergency Response", trainer: "Coach Vikram", videoId: "KVpxP3ZZtAc" }
  ];

  return (
    <div className="container">
      <h1>Educational & Safety Modules</h1>

      {/* 2. Real Activity: Video Player Section */}
      {activeVideo && (
        <div className="card" style={{ background: '#000', color: '#fff', textAlign: 'center' }}>
          <h3>Now Playing: {activeVideo.title}</h3>
          <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
            <iframe 
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              src={`https://www.youtube.com/embed/${activeVideo.id}`}
              title="YouTube video player"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <button className="btn" style={{ marginTop: '10px', background: 'red' }} onClick={() => setActiveVideo(null)}>Close Player</button>
        </div>
      )}

      <h3>Self-Defense Training</h3>
      <div className="grid-layout">
        {safetyCourses.map(course => (
          <div key={course.id} className="card" style={{ borderLeft: '5px solid #6366f1' }}>
            <h4>{course.title}</h4>
            <p>Trainer: {course.trainer}</p>
            <button className="btn" onClick={() => setActiveVideo({id: course.videoId, title: course.title})}>
              Watch Session
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}