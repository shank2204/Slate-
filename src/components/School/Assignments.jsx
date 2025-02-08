import { useState } from "react";
import { useStudents } from "../../context/StudentContext"; // Import Student Context
import coursesData from "../../data/coursesData"; // Import courses data

const Assignments = () => {
  const { students } = useStudents(); // Get students from context
  const [assignments, setAssignments] = useState([]); // Store allocated assignments
  const [showModal, setShowModal] = useState(false); // Control pop-up visibility
  const [newAssignment, setNewAssignment] = useState({ course: "", student: "" });

  // Function to add a new assignment
  const handleAddAssignment = () => {
    if (newAssignment.course && newAssignment.student) {
      setAssignments([...assignments, newAssignment]);
      setNewAssignment({ course: "", student: "" }); // Reset form
      setShowModal(false); // Close the modal
    }
  };

  return (
    <div className="p-4">
      <h3 className="text-2xl text-black font-bold mb-4">Assignments</h3>
      <p className="text-lg text-black mb-6">View and manage assignments here.</p>

      {/* Button to create new assignment */}
      <button
        className="mb-4 px-4 py-2 text-white bg-green-300 rounded-lg"
        onClick={() => setShowModal(true)}
      >
        Create New Assignment
      </button>

      {/* Grid layout for assignments */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {assignments.map((assignment, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <h4 className="text-xl text-black font-semibold">{assignment.course}</h4>
            <p className="text-black">Allocated to: {assignment.student}</p>
          </div>
        ))}
      </div>

      {/* Modal for new assignment */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-xl text-black font-bold mb-4">New Assignment</h3>

            {/* Course Dropdown */}
            <label className="block text-black mb-2">Select Course:</label>
            <select
              className="w-full bg-gray-200 text-black p-2 border rounded mb-4"
              value={newAssignment.course}
              onChange={(e) => setNewAssignment({ ...newAssignment, course: e.target.value })}
            >
              <option className="text-black" bg-gray-200 value="" >Select a Course</option>
              {coursesData.map((course) => (
                <option className="text-black " key={course.id} value={course.title}>
                  {course.title}
                </option>
              ))}
            </select>

            {/* Student Dropdown */}
            <label className="block mb-2 text-black">Select Student:</label>
            <select
              className="w-full bg-gray-200 text-black p-2 border rounded mb-4"
              value={newAssignment.student}
              onChange={(e) => setNewAssignment({ ...newAssignment, student: e.target.value })}
            >
              <option className="text-white" value=""> Select a Student</option>
              {students.map((student) => (
                <option className="text-black" key={student.id} value={student.name}>
                  {student.name}
                </option>
              ))}
            </select>

            {/* Modal Buttons */}
            <div className="flex justify-end space-x-2">
              <button
                className="px-4 py-2 text-white bg-green-300"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 text-white bg-green-300"
                onClick={handleAddAssignment}
              >
                Add Assignment
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Assignments;
