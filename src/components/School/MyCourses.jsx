import { useState } from "react";
import coursesData from "../../data/coursesData"; // ✅ Correct path
 // Import course details from data folder

const MyCourses = () => {
  const [visibleCourse, setVisibleCourse] = useState(null); // Track which course is expanded

  return (
    <div className="p-4 mt-0">
      <h3 className="text-2xl text-black  font-bold mb-2">My Courses</h3>
      <p className="text-lg text-black  mb-4">Manage and view your courses here.</p>

      {/* Courses List */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {coursesData.map((course) => (
          <div key={course.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
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

export default MyCourses;
