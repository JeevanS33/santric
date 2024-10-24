import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  PointElement,
} from "chart.js";
import "../PerformanceGraph/PerformanceGraph.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  PointElement
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: true,
      callbacks: {
        label: (tooltipItem) => `Student: ${tooltipItem.raw}%`,
      },
    },
  },
  scales: {
    y: {
      beginAtZero: false,
      min: 10,
      max: 100,
      ticks: {
        stepSize: 10,
      },
    },
  },
  elements: {
    line: {
      tension: 0.6,
      borderWidth: 2,
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 0,
    },
  },
};

const PerformanceGraph = () => {
  const [timePeriodIndex, setTimePeriodIndex] = useState(0);
  const timePeriods = ["week", "month", "year"];

  const handleToggle = () => {
    setTimePeriodIndex((prevIndex) => (prevIndex + 1) % timePeriods.length);
  };

  const currentPeriod = timePeriods[timePeriodIndex];

  const data = {
    labels:
      currentPeriod === "week"
        ? ["Week 1", "Week 2", "Week 3", "Week 4"]
        : currentPeriod === "month"
        ? [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ]
        : ["2018", "2019", "2020", "2021", "2022"],
    datasets: [
      {
        label: "Green Line",
        data:
          currentPeriod === "week"
            ? [70, 85, 90, 75]
            : currentPeriod === "month"
            ? [65, 70, 80, 85, 90, 95, 85, 80, 70, 75, 90, 85]
            : [70, 75, 80, 85, 90],
        borderColor: "rgb(0, 128, 0)",
        fill: false,
      },
      {
        label: "Red Line",
        data:
          currentPeriod === "week"
            ? [60, 75, 85, 65]
            : currentPeriod === "month"
            ? [55, 65, 75, 70, 85, 80, 75, 85, 60, 80, 85, 75]
            : [60, 65, 70, 75, 80],
        borderColor: "rgb(255, 0, 0)",
        fill: false,
      },
    ],
  };

  return (
    <div className="graph-container">
      <div className="graph-header">
        <h2>School Performance</h2>
        <button className="toggle-button" onClick={handleToggle}>
          {currentPeriod.charAt(0).toUpperCase() + currentPeriod.slice(1)}{" "}
        </button>
      </div>
      <Line data={data} options={options} />
    </div>
  );
};

export default PerformanceGraph;
