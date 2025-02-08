import { useState } from "react";
import { Bar } from 'react-chartjs-2'; // Importing Chart.js for bar chart
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Registering necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Achievements = () => {
  // Example data for achievements and graph
  const [achievements, setAchievements] = useState([
    { id: 1, level: "Excellent", students: ["John Doe", "Jane Smith"] },
    { id: 2, level: "Good", students: ["Alice Johnson", "Mike Brown"] },
    { id: 3, level: "Average", students: ["Sara Lee", "David Kim"] },
    { id: 4, level: "Needs Improvement", students: [] },
  ]);
  
  const [students] = useState([
    "Emily Davis", "Daniel Lee", "Lucas Green", "Olivia White", "Liam Harris", "Sophia Clark"
  ]);

  const [selectedStudent, setSelectedStudent] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");

  // Chart.js data for the bar graph
  const data = {
    labels: achievements.map(achievement => achievement.level),
    datasets: [
      {
        label: 'Number of Students',
        data: achievements.map(achievement => achievement.students.length),
        backgroundColor: '#4CAF50',
        borderColor: '#388E3C',
        borderWidth: 1,
      },
    ],
  };

  // Function to handle adding student to an achievement level
  const addStudentToAchievement = () => {
    if (selectedStudent && selectedLevel) {
      const level = achievements.find((ach) => ach.level === selectedLevel);
      if (level && !level.students.includes(selectedStudent)) {
        setAchievements(
          achievements.map((ach) =>
            ach.level === selectedLevel
              ? { ...ach, students: [...ach.students, selectedStudent] }
              : ach
          )
        );
        setSelectedStudent(""); // Reset selected student
        setSelectedLevel(""); // Reset selected level
      }
    }
  };

  return (
    <div className="p-4 text-black">
      <h3 className="text-2xl font-semibold mb-4">Student Achievements</h3>
      <p className="text-base mb-6">Manage student achievements and assign them to achievement levels.</p>

      {/* Achievement Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {achievements.map((achievement) => (
          <div key={achievement.id} className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="text-lg font-semibold mb-2">{achievement.level}</h4>

            {/* Student List */}
            <div className="space-y-2 mb-4">
              {achievement.students.length > 0 ? (
                achievement.students.map((student, index) => (
                  <div key={index} className="flex justify-between items-center text-sm">
                    <span>{student}</span>
                    <button
                      onClick={() => {
                        setAchievements(
                          achievements.map((ach) =>
                            ach.level === achievement.level
                              ? {
                                  ...ach,
                                  students: ach.students.filter((s) => s !== student),
                                }
                              : ach
                          )
                        );
                      }}
                      className="text-red-600 text-xs hover:text-red-800"
                    >
                      Remove
                    </button>
                  </div>
                ))
              ) : (
                <p className="text-gray-600 text-sm">No students added.</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Dropdown for adding a student */}
      <div className="flex flex-col space-y-2 mt-6">
        <select
          value={selectedStudent}
          onChange={(e) => setSelectedStudent(e.target.value)}
          className="p-2 border rounded-md text-sm"
        >
          <option value="">Select a student</option>
          {students.map((student, index) => (
            <option key={index} value={student}>
              {student}
            </option>
          ))}
        </select>

        <select
          value={selectedLevel}
          onChange={(e) => setSelectedLevel(e.target.value)}
          className="p-2 border rounded-md text-sm"
        >
          <option value="">Select Achievement Level</option>
          {achievements.map((achievement) => (
            <option key={achievement.id} value={achievement.level}>
              {achievement.level}
            </option>
          ))}
        </select>

        <button
          onClick={addStudentToAchievement}
          className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 text-sm"
        >
          Add Student to Level
        </button>
      </div>

  
    </div>
  );
};

export default Achievements;
