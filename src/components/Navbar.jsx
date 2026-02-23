import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white border-b p-4 flex justify-between items-center shadow-sm">
      <div className="text-xl font-bold text-purple-700 underline">EMPOWER ART</div>
      <div className="space-x-4">
        <Link to="/" className="hover:text-purple-500">Home</Link>
        <Link to="/programs" className="hover:text-purple-500">Programs</Link>
        <Link to="/admin" className="text-gray-400 text-xs">Admin</Link>
      </div>
    </nav>
  );
};

export default Navbar;