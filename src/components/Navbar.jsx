import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-gray-900 to-purple-900 text-gray-100 shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold text-purple-400">Asmitha</h1>

        {/* Navigation Links */}
        <div className="space-x-6 hidden sm:flex">
          <Link to="/" className="hover:text-purple-300 transition">Home</Link>
          <Link to="/about" className="hover:text-purple-300 transition">About</Link>
          <Link to="/skills" className="hover:text-purple-300 transition">Skills</Link>
          <Link to="/contact" className="hover:text-purple-300 transition">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
