import { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate

const ToDo = ({ closeModal }) => {
  const navigate = useNavigate(); // ✅ Initialize useNavigate
  const [date, setDate] = useState(""); // Store selected date
  const [task, setTask] = useState(""); // Store new task input
  const [tasks, setTasks] = useState([]); // Store list of tasks

  // ✅ Handle adding new task
  const addTask = () => {
    if (task.trim() !== "" && date !== "") {
      setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
      setTask(""); // Clear input field
    }
  };

  // ✅ Toggle task completion
  const toggleTask = (id) => {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-50 z-50 p-4"
      onClick={closeModal} // ✅ Close modal when clicking outside
    >
      <div 
        className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-lg mx-auto"
        onClick={(e) => e.stopPropagation()} // ✅ Prevent modal from closing when clicking inside
      >
        {/* ✅ Close Button */}
        <button 
          onClick={() => navigate("/student")} // ✅ Navigate to Home Page
          className="absolute top-4 right-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
        >
          Cancel
        </button>

        {/* ✅ Title */}
        <h3 className="text-2xl text-center font-bold text-gray-800">📝 To-Do List</h3>
        <p className="text-lg text-center text-gray-600 mb-4">Plan your tasks for the day!</p>

        {/* ✅ Date Selection */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">📅 Select Date:</label>
          <input
            type="date"
            className="w-full p-2 border rounded-lg text-gray-700"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        {/* ✅ Task Input */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">✅ Add a Task:</label>
          <input
            type="text"
            placeholder="Enter a task..."
            className="w-full p-2 border rounded-lg text-gray-700"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </div>

        {/* ✅ Add Task Button */}
        <button
          className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition mb-4"
          onClick={addTask}
        >
          Add Task
        </button>

        {/* ✅ Task List */}
        {tasks.length > 0 && (
          <div className="mt-4">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">📌 Tasks for {date || "Selected Date"}:</h4>
            <ul className="space-y-2">
              {tasks.map((t) => (
                <li key={t.id} className="flex items-center space-x-2 bg-gray-100 p-3 rounded-lg shadow">
                  <input
                    type="checkbox"
                    checked={t.completed}
                    onChange={() => toggleTask(t.id)}
                    className="h-5 w-5"
                  />
                  <span className={`flex-1 text-gray-700 ${t.completed ? "line-through" : ""}`}>{t.text}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ToDo;
