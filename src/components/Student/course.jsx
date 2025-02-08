import { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import coursesData from "../../data/coursesData"; // ✅ Correct path

const Courses = ({ closeModal }) => {
  const [visibleCourse, setVisibleCourse] = useState(null); // Track which course is expanded
  const navigate = useNavigate(); // ✅ Hook for navigation

  return (
    <div className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl mx-auto">
      {/* ✅ Cancel Button (Navigates to Home Page) */}
      <button 
        onClick={() => navigate("/student")} // ✅ Navigate to Home
        className="absolute top-4 right-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
      >
        Cancel
      </button>

      <h3 className="text-2xl text-black font-bold mb-2">My Courses</h3>
      <p className="text-lg text-black mb-4">View your courses here.</p>

      {/* ✅ Courses List */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {coursesData.map((course) => (
          <div key={course.id} className="bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h4 className="text-xl text-black font-semibold">{course.title}</h4>

            {/* Show Instructor & Duration only when "View Details" is clicked */}
            {visibleCourse === course.id && (
              <div className="mt-2 text-gray-600">
                <p><strong>Assistant Instructor:</strong> {course.instructor}</p>
                <p><strong>Duration:</strong> {course.duration}</p>
              </div>
            )}

            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
              onClick={() =>
                setVisibleCourse(visibleCourse === course.id ? null : course.id)
              }
            >
              {visibleCourse === course.id ? "Hide Details" : "View Details"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
