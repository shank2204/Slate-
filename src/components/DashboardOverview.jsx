import { useState } from "react";
import AttendanceChart from "./AttendanceChart";
import PerformanceChart from "./PerformanceChart";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const DashboardOverview = () => {
  const [currentChart, setCurrentChart] = useState(0);
  const charts = [
    { title: "Attendance Rate", component: <AttendanceChart /> },
    { title: "School Performance", component: <PerformanceChart /> }
  ];

  const handlePrevChart = () => {
    setCurrentChart((prevChart) => (prevChart === 0 ? charts.length - 1 : prevChart - 1));
  };

  const handleNextChart = () => {
    setCurrentChart((prevChart) => (prevChart === charts.length - 1 ? 0 : prevChart + 1));
  };

  return (
    <div className="p-4">
      {/* Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        <div className="p-4 bg-white shadow-lg rounded-lg text-black flex flex-col items-center justify-center">
          <h3 className="text-base md:text-lg font-semibold text-center">Total Schools</h3>
          <p className="text-lg md:text-xl font-bold text-center">3</p>
        </div>
        <div className="p-4 bg-white shadow-lg rounded-lg text-black flex flex-col items-center justify-center">
          <h3 className="text-base md:text-lg font-semibold text-center">Total Students</h3>
          <p className="text-lg md:text-xl font-bold text-center">5,000</p>
        </div>
        <div className="p-4 bg-white shadow-lg rounded-lg text-black flex flex-col items-center justify-center">
          <h3 className="text-base md:text-lg font-semibold text-center">Student Achievements</h3>
          <p className="text-lg md:text-xl font-bold text-center">300</p>
        </div>
      </div>

      {/* Charts Section with Navigation Arrows */}
      <div className="relative">
        <div className="absolute left-0 text-gray-700 top-1/2 transform -translate-y-1/2 p-0.5 cursor-pointer" onClick={handlePrevChart}>
          <FaArrowLeft size={24} />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {charts.map((chart, index) => (
            <div
              key={index}
              className={`p-4 bg-white shadow-lg rounded-lg w-auto text-black flex flex-col items-center justify-center ${currentChart === index ? "block" : "hidden"} md:block`}
            >
              <h3 className="text-base md:text-lg font-semibold mb-4 text-center">{chart.title}</h3>
              <div className=" p-0.02 mr-1 sm:w-54 sm:h-54 w-30 h-40 ">
                {chart.component}
              </div>
            </div>
          ))}
        </div>

        <div className="absolute right-0 text-gray-600 top-1/2 transform -translate-y-1/2 p-0.5 cursor-pointer" onClick={handleNextChart}>
          <FaArrowRight size={24} />
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
