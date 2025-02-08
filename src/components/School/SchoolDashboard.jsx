import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { FaBars, FaSchool, FaTrophy, FaUsers, FaChalkboardTeacher, FaSun, FaMoon } from "react-icons/fa";
import { useSchools } from "../../context/SchoolsContext"; // ✅ Import School Context

const SchoolDashboard = () => {
  const { schools } = useSchools();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className={`flex h-screen ${isDarkMode ? "bg-gray-700 text-white" : "bg-gray-100 text-gray-900"} transition-all duration-300`}>
      
      
      <aside className="w-50 bg-gray-300 text-white p-6 flex flex-col h-screen overflow-auto">
        <div className="flex items-center justify-center mr-6 mb-6">
          <img src="assets/fulllogo-removebg-preview.png" alt="Logo" className="w-30 h-10" />
        </div>
        <nav className="flex flex-col space-y-4">
          <Link to="/teacher-dashboard" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded-lg">
            <FaSchool className="text-pink-500 text-xl" />
            <span className="text-green-500">Dashboard</span>
          </Link>
          <Link to="/teacher-dashboard/courses" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded-lg">
            <FaChalkboardTeacher className="text-violet-500 text-xl" />
            <span className="text-green-500 ">My Courses</span>
          </Link>
          <Link to="/teacher-dashboard/achievements" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded-lg">
            <FaTrophy className="text-yellow-400 text-xl" />
            <span className="text-green-500 ">Achievements</span>
          </Link>
          <Link to="/teacher-dashboard/assignments" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded-lg">
            <FaChalkboardTeacher className="text-yellow-400 text-xl" />
            <span className="text-green-500 ">Assignments</span>
          </Link>
          <Link to="/" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded-lg">
            <FaUsers className="text-red-400 text-xl" />
            <span className="text-red-500 ">Logout</span>
          </Link>
        </nav>
      </aside>

      {/* ✅ Main Content Wrapper */}
      <main className="flex-1 p-6 overflow-auto h-screen">
        
        {/* ✅ Header with Theme Toggle (Background matches theme) */}
        <header className={`flex justify-between items-center p-4 shadow-md rounded-lg ${isDarkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-900"}`}>
          
          <h2 className="text-lg font-semibold">Welcome!</h2>
          <div onClick={toggleTheme} className="p-2 cursor-pointer rounded-full hover:bg-gray-300">
            {isDarkMode ? <FaSun className="text-yellow-500" size={24} /> : <FaMoon className="text-gray-800" size={24} />}
          </div>
        </header>

        {/* ✅ Dynamic Content */}
        <div className="mt-6">
          <Outlet />
        </div>

      </main>
    </div>
  );
};

export default SchoolDashboard;
