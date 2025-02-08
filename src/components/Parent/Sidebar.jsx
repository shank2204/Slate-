import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className="relative">
      {/* Toggle Button Responsive Position */}
      <button
        onClick={toggleSidebar}
        className={`fixed top-3 transition-all duration-3000 p-2 bg-gray-900 text-white text-xl rounded-full hover:bg-gray-700 z-50 ${isOpen ? "left-56" : "left-18"}`}
      >
        {isOpen ? <FiChevronLeft /> : <FiChevronRight />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white transition-all duration-300 ${isOpen ? "w-54" : "w-16"}`}
      >
        {/* Sidebar Menu Items */}
        <div className="mt-8">
          <ul className="space-y-4">
            <li>
              <Link
                to="/parent-dashboard"
                className="flex items-center px-4 py-2 text-lg font-semibold hover:bg-gray-700 transition-all duration-200"
              >
                <span className={`w-2 h-2 bg-green-500 rounded-full mr-4 ${isOpen ? "block" : "hidden"}`} />
                <span className={`${isOpen ? "block" : "hidden"}`}>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                to="/parent-dashboard/performance"
                className="flex items-center px-4 py-2 text-lg font-semibold hover:bg-gray-700 transition-all duration-200"
              >
                <span className={`w-2 h-2 bg-blue-500 rounded-full mr-4 ${isOpen ? "block" : "hidden"}`} />
                <span className={`${isOpen ? "block" : "hidden"}`}>Performance</span>
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="flex items-center px-4 py-2 text-lg font-semibold hover:bg-gray-700 transition-all duration-200"
              >
                <span className={`w-2 h-2 bg-blue-500 rounded-full mr-4 ${isOpen ? "block" : "hidden"}`} />
                <span className={`${isOpen ? "block" : "hidden"}`}>Logout</span>
              </Link>
            </li>
            {/* Add more sidebar items as needed */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
