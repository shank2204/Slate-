import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const PerformanceChart = () => {
  const data = {
    labels: ["Greenwood High", "Oakridge International", "Cambridge International"],
    datasets: [
      {
        label: "Average Performance (%)",
        data: [85, 78, 92], // Example school performance scores
        backgroundColor: ["#42A5F5", "#66BB6A", "#FFA726"],
      },
    ],
  };

  const options = {
    maintainAspectRatio: false, // Allows custom width & height
    responsive: true,
    scales: {
      y: { beginAtZero: true },
    },
  };

  return (
    <div className="w-full h-full">
      <Bar data={data} options={options} />
    </div>
  );
};

export default PerformanceChart;
