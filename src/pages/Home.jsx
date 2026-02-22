export default function Home() {
    return (
        <div className="container">
            <div className="card" style={{ textAlign: 'center', background: 'linear-gradient(to right, #6366f1, #a855f7)', color: 'white' }}>
                <h1>Safety & Skills: Integrated Platform</h1>
                <p>Empowering women through local workshops and digital literacy.</p>
            </div>

            <h2>Subscription Plans (Showcase)</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                <div className="card">
                    <h3>Basic</h3>
                    <p>Free for Rural Areas</p>
                    <ul><li>Academic Lectures</li><li>Skill Workshops</li></ul>
                    <button className="btn" onClick={() => {
                        const name = prompt("Please enter your name to register for this program:");
                        if (name) alert(`Thank you ${name}! Your enrollment request has been sent to the local community trainer.`);
                    }}>
                        Enroll Now
                    </button>
                </div>
                <div className="card" style={{ border: '2px solid #6366f1' }}>
                    <h3>Premium</h3>
                    <p>₹199 / Month</p>
                    <ul><li>Self-Defense Gear</li><li>Certified Training</li></ul>
                    <button className="btn">Get Started</button>
                </div>
            </div>
        </div>
    );
}