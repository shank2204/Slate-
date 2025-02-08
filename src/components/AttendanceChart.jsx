import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const AttendanceChart = () => {
  const data = {
    labels: ["Present", "Absent"],
    datasets: [
      {
        data: [90, 10], // Example: 90% present, 10% absent
        backgroundColor: ["#4CAF50", "#F44336"], // Green for present, Red for absent
      },
    ],
  };

  const options = {
    maintainAspectRatio: false, // Allows custom width & height
    responsive: true,
  };

  return (
    <div className="w-full h-full">
      <Pie data={data} options={options} />
    </div>
  );
};

export default AttendanceChart;
