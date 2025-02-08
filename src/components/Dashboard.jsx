import { FaChartBar, FaUsers, FaSchool, FaBell, FaSignOutAlt} from "react-icons/fa";
import { useUser } from "../context/UserContext";
import { Link, Outlet } from "react-router-dom";

const AdminDashboard = () => {
  const { user } = useUser();

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-44 bg-gray-200 text-white p-6 flex flex-col">
        <div className="flex items-center space-x-2 mb-6">
          <img src="assets/fulllogo-removebg-preview.png" alt="Logo" className="w-40 h-12" />
        </div>
        <nav className="flex flex-col space-y-4">
          <Link to="/dashboard" className="flex items-center space-x-2 p-2 hover:bg-[rgb(213,214,213)] rounded-lg">
            <FaSchool className="text-green-600 text-2xl" />
            <span className="text-green-600">Dashboard</span>
          </Link>
          <Link to="/dashboard/schools" className="flex items-center space-x-2 p-2 hover:bg-[rgb(213,214,213)] rounded-lg">
            <FaSchool className="text-green-600 text-2xl" />
            <span className="text-green-600">Schools</span>
          </Link>
          <Link to="/dashboard/students" className="flex items-center space-x-2 p-2 hover:bg-[rgb(213,214,213)] rounded-lg">
            <FaUsers className="text-green-600 text-2xl" />
            <span className="text-green-600">Students</span>
          </Link>
      
          <Link to="/dashboard/achievements" className="flex items-center space-x-2 p-2 hover:bg-[rgb(213,214,213)] rounded-lg">
            <FaBell className="text-green-600 text-2xl" />
            <span className="text-green-600">Awards</span>
          </Link>
          <Link to="/" className="flex items-center space-x-2 p-2 hover:bg-[rgb(213,214,213)] rounded-lg">
            <FaSignOutAlt className="text-green-600 text-2xl" />
            <span className="text-green-600">Logout</span>
          </Link>
          
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-auto">
        {/* Header */}
        <header className="flex justify-between items-center bg-white p-4 shadow-md rounded-lg mb-6">
          <h2 className="text-lg font-semibold text-black">Hello {user ? user.username : 'Guest'}!</h2>
          
        </header>

        

        {/* Outlet for nested routes */}
        <Outlet />
      </main>
    </div>
  );
};

export default AdminDashboard;
