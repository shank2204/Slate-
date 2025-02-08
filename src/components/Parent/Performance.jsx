import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import Sidebar from "./Sidebar";
import { FaSun, FaMoon } from "react-icons/fa";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const createGradient = (ctx, chartArea) => {
  const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
  gradient.addColorStop(0, "rgba(255, 99, 132, 0.6)");
  gradient.addColorStop(0.5, "rgba(54, 162, 235, 0.6)");
  gradient.addColorStop(1, "rgba(75, 192, 192, 0.6)");
  return gradient;
};

const Performance = () => {
  const studentData = {
    name: "John Doe",
    academicPerformance: ["Math", "Science", "English", "History", "Art", "Physical Ed."],
    scores: [95, 90, 88, 92, 89, 93],
    yearlyPerformance: [85, 90, 88, 92, 89, 93, 88, 91, 94, 87, 92, 90],
  };

  const academicPerformanceData = {
    labels: studentData.academicPerformance,
    datasets: [
      {
        label: `${studentData.name}'s Academic Performance`,
        data: studentData.scores,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(75, 192, 192, 0.8)",
      },
    ],
  };

  const yearlyPerformanceData = {
    labels: [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ],
    datasets: [
      {
        label: "Yearly Performance",
        data: studentData.yearlyPerformance,
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (!chartArea) return;
          return createGradient(ctx, chartArea);
        },
        borderColor: "rgba(0, 0, 0, 0.1)",
        borderWidth: 1,
        hoverBorderColor: "rgba(0, 0, 0, 0.2)",
      },
    ],
  };

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className={`flex ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"} transition-all duration-300`}>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <div className={`flex-1 p-6 transition-all duration-300 ${isSidebarOpen ? "ml-64" : "ml-10"} sm:ml-16`}>
        <div className="flex justify-between items-center mb-6 flex-wrap">
          <h2 className="text-xl sm:text-2xl font-bold">Student Performance</h2>
          <div onClick={toggleTheme} className="p-1 cursor-pointer mt-0.5 sm:mt-0">
            {isDarkMode ? (
              <FaSun className="text-yellow-500" size={24} />
            ) : (
              <FaMoon className="text-gray-800" size={24} />
            )}
          </div>
        </div>

        <h2 className="text-lg sm:text-xl font-semibold mb-4">{studentData.name}</h2>

        <div className={`p-4 rounded-lg mb-6 ${isDarkMode ? "bg-gray-700" : "bg-blue-100"} sm:max-w-2xl mx-auto`}>
          <h3 className="text-lg font-semibold">Performance Insights</h3>
          <p>{isDarkMode ? "🌙 Best Performing Subject: Math" : "🌞 Best Performing Subject: Math"}</p>
          <p>{isDarkMode ? "🌙 Yearly Progress: 90%" : "🌞 Yearly Progress: 90%"}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="chart-container p-4 bg-white rounded-lg shadow-md w-64 h-64">
            <h3 className="text-lg font-semibold mb-4">Academic Performance</h3>
            <Bar data={academicPerformanceData} options={{
              responsive: true,
              maintainAspectRatio: false,
              animations: { tension: { duration: 1000, easing: "easeInOutQuad", from: 1, to: 0, loop: true } }
            }} />
          </div>

          <div className="chart-container p-4 bg-white rounded-lg shadow-md w-64 h-64">
            <h3 className="text-lg font-semibold mb-4">Yearly Performance</h3>
            <Bar data={yearlyPerformanceData} options={{
              indexAxis: "y",
              responsive: true,
              maintainAspectRatio: false,
              scales: {
                x: { beginAtZero: true },
                y: { beginAtZero: true },
              },
              plugins: {
                tooltip: {
                  callbacks: {
                    label: function (context) {
                      return `${context.dataset.label}: ${context.raw}%`;
                    },
                  },
                },
              },
              animations: { tension: { duration: 1000, easing: "easeInOutQuad", from: 1, to: 0, loop: true } },
            }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Performance;
