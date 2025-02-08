import { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ For navigation
import { useStudents } from "../../context/StudentContext"; // ✅ Import Student Context

const StudPerformance = () => {
  const { students } = useStudents();
  const student = students.find((s) => s.name === "John Doe"); // ✅ Find logged-in student
  const [showModal, setShowModal] = useState(false);
  const [newAchievement, setNewAchievement] = useState("");
  const navigate = useNavigate();

  if (!student) return <p className="text-center">Loading...</p>;

  const handleAddAchievement = () => {
    if (newAchievement.trim()) {
      student.achievements.push(newAchievement);
      setNewAchievement("");
      setShowModal(false);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800">📊 Performance</h2>
      <p className="text-lg text-gray-600">View your academic progress and achievements.</p>
      
      {/* ✅ Performance Details */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
        {/* 📚 Academic Performance */}
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <h4 className="text-xl font-semibold text-indigo-600">📚 Academic Performance</h4>
          <p className="text-gray-700 mt-2">Grade: <span className="font-semibold">{student.academicPerformance}</span></p>
          <p className="text-gray-700">Attendance: <span className="font-semibold">{student.attendance}%</span></p>
        </div>
        {/* ✅ Close Button */}
            
        <button 
              onClick={() => navigate("/student")} // ✅ Navigate to Home
              className="absolute top-4 right-4 px-4 py- text-white bg-black rounded-lg"
            >
              Close
            </button>
        {/* 🏆 Achievements */}
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <h4 className="text-xl font-semibold text-green-500">🏆 Achievements</h4>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            {student.achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
          <button
            onClick={() => setShowModal(true)}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Add Achievement
          </button>
        </div>
      </div>

      {/* ✅ Awards Section */}
      <div className="bg-yellow-100 p-4 rounded-lg shadow-md mt-6">
        <h4 className="text-xl font-semibold text-yellow-600">🥇 Awards & Recognitions</h4>
        <p className="text-gray-700 mt-2">No awards yet. Keep up the great work!</p>
      </div>

      {/* ✅ Achievement Modal */}
      {showModal && (
        <div 
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4"
          onClick={() => setShowModal(false)}
        >
          <div 
            className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            
            {/* ✅ Add Achievement */}
            <h3 className="text-2xl text-center font-bold text-gray-800">🏆 Add Achievement</h3>
            <input
              type="text"
              className="w-full p-2 mt-4 border rounded-lg text-black bg-white"
              placeholder="Enter new achievement..."
              value={newAchievement}
              onChange={(e) => setNewAchievement(e.target.value)}
            />
            <button
              onClick={handleAddAchievement}
              className="mt-4 p-2 bg-green-500 text-white rounded-lg w-full hover:bg-green-600 transition"
            >
              Save Achievement
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudPerformance;