import { useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend } from "chart.js";
import { useNavigate } from "react-router-dom"; 
// ✅ Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend);

const StatsPage = () => {
  const [selectedChart, setSelectedChart] = useState("academic"); // ✅ Default to Academic Chart
  const [isDarkMode, setIsDarkMode] = useState(false); // ✅ Dark Mode Toggle
  const navigate = useNavigate();
  // ✅ Academic Performance Data (Bar Chart)
  const academicData = {
    labels: ["Math", "Science", "English", "History", "Art", "PE"],
    datasets: [
      {
        label: "Academic Scores",
        data: [95, 88, 92, 85, 90, 98],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  // ✅ Yearly Progress Data (Line Chart)
  const yearlyData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Performance Trend",
        data: [80, 82, 85, 87, 90, 92, 93, 94, 96, 97, 98, 99],
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        pointBackgroundColor: "rgba(255, 99, 132, 1)",
        fill: true,
      },
    ],
  };

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center p-6 transition-all duration-300 ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
      {/* ✅ Title & Theme Toggle */}
      

      <h2 className="text-3xl  mb-4">Track your academic progress and performance!</h2>
      
      {/* ✅ Chart Selection Dropdown */}
      <div className="mb-6">
        
        <label className="block text-lg font-semibold mb-2">📊 Select Chart:</label>
        <select
          value={selectedChart}
          onChange={(e) => setSelectedChart(e.target.value)}
          className="p-2 border rounded-lg text-black w-full bg-gray-200"
        >
          <option value="academic">📌 Subject-wise Performance</option>
          <option value="yearly">📈 Yearly Progress</option>
        </select>
      </div>

      {/* ✅ Conditional Rendering of Charts */}
      <div className="w-130 h-80 mb-6 max-w-3xl bg-gray-100 p-9 rounded-lg shadow-md">
        {selectedChart === "academic" ? (
          <>
            <h4 className="text-lg font-semibold mb-2">📌 Subject-wise Performance</h4>
            <Bar data={academicData} options={{ responsive: true, maintainAspectRatio: false }} />
          </>
        ) : (
          <>
            <h4 className="text-lg font-semibold mb-2">📈 Yearly Progress</h4>
            <Line data={yearlyData} options={{ responsive: true, maintainAspectRatio: false }} />
          </>
        )}
      </div>
      <br />
      <button 
            onClick={() => navigate("/student")} // ✅ Navigate to Home
            className=" bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
        >
            Cancel
        </button>
    </div>
  );
};

export default StatsPage;
