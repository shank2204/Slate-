import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { users } from "../data/users";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State to manage error message
  const { login } = useUser();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const roles = login(username, password, users);
  
    if (roles) {
      if (roles.includes("School")) {
        navigate("/teacher-dashboard"); // Redirect to Teacher Dashboard
      } else if (roles.includes("Admin")) {
        navigate("/dashboard"); // Navigate to Admin Dashboard
      } else if (roles.includes("Parent")) {
        navigate("/parent-dashboard"); // Navigate to Admin Dashboard
      }else if (roles.includes("Student")) {
        navigate("/student"); // Navigate to Admin Dashboard
      }else {
        navigate("/roles");
      }
    } else {
      setError("Invalid username or password"); // Set error message when login fails
    }
  };
  
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="w-full max-w-4xl sm:max-w-sm md:max-w-md lg:max-w-4xl p-6 bg-white shadow-lg rounded-lg">
        
        <div className="flex justify-center space-x-4 mb-4">
          {/* Animated Logo Section */}
          <div className="flex justify-center items-center">
            <img
              src="/assets/logo.png"
              alt="Logo"
              className="animate-move-logo w-18 h-15"
            />
          </div>
          {/* Animated Slate Text Section */}
          <div className="flex justify-center items-center">
            <img
              src="/assets/slate.png"
              alt="Slate"
              className="animate-move-slate w-30 h-15"
            />
          </div>
        </div>
        
        <h2 className="text-2xl p-2 font-semibold text-center text-gray-900 mb-6">Login</h2>
        
        {/* Error Message */}
        {error && (
          <div className="text-center text-red-500 mb-4">
            {error} {/* Display the error message */}
          </div>
        )}

        <form className="space-y-4" onSubmit={handleLogin}>
          <div className="space-y-3">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full text-black px-3 py-2 border rounded-md shadow-sm"
              placeholder="Enter username"
            />
          </div>

          <div className="space-y-3">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full text-black px-3 py-2 border rounded-md shadow-sm"
              placeholder="********"
            />
          </div>

          <button className="w-auto bg-indigo-600 text-white py-2 rounded-md">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
