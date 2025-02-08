import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Homepage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-white shadow-md p-4 fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-between items-center">
        {/* Logo and Title */}
        <div className="flex items-center space-x-4">
          <img src="assets/fulllogo.png" alt="Logo" className="h-12 w-32" />
          <div className="text-xl text-black font-bold">Student Dashboard</div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Navigation Links */}
        <div
          className={`md:flex md:items-center md:space-x-6 text-black absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none p-4 md:p-0 ${menuOpen ? "block" : "hidden"}`}
        >
          <Link to="/student" className="block md:inline hover:text-gray-600 p-2 md:p-0">Home</Link>
          
          <Link to="/stats" className="block md:inline hover:text-gray-600 p-2 md:p-0">My Statistics</Link>
          <Link to="/logout" className="block md:inline hover:text-gray-600 p-2 md:p-0">Logout</Link>
        </div>
      </div>
    </div>
  );
}