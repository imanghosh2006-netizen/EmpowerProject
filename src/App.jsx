import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Programs from './pages/Programs';
import Login from './pages/Login';
import Admin from './pages/Admin';
import SuccessStories from './pages/SuccessStories';
// 1. IMPORT THE CHATBOT HERE
import Chatbot from './components/Chatbot'; 

function App() {
  return (
    <Router>
      <nav>
        <span style={{ fontSize: '1.5rem', fontWeight: 'bold', marginRight: 'auto' }}>W-Empower</span>
        <Link to="/">Home</Link>
        <Link to="/programs">Programs</Link>
        <Link to="/success">Success Stories</Link>
        <Link to="/login" className="btn" style={{ color: 'white' }}>Teacher Login</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/success" element={<SuccessStories />} />
      </Routes>

      {/* 2. PLACE THE CHATBOT HERE */}
      <Chatbot /> 
      
      <footer style={{ textAlign: 'center', padding: '2rem', color: '#64748b' }}>
        © 2026 Women's Integrated Community Platform | Project Venture
      </footer>
    </Router>
  );
}

export default App;