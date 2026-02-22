import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  return (
    <div className="container" style={{ maxWidth: '400px' }}>
      <div className="card">
        <h2>Teacher Admin Login</h2>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <input type="email" placeholder="Teacher ID / Email" />
          <input type="password" placeholder="Password" />
          <button className="btn" onClick={() => navigate('/admin')}>Login to Dashboard</button>
        </div>
      </div>
    </div>
  );
}