import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Filler, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(
  Filler,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const AreaChart = ({ metric }) => {
  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  const lines = metric.graphLines;

  const getColor = (name) => {
    if (name === "Used" || name === "Write") return "#DC2626";
    else if (name === "Read" || name === "Requested") return "#2563EB";
    else return "#059669";
  };

  return (
    <div className='w-[45%] p-4 mx-auto my-5 bg-white border border-[#CEE0F8] rounded'>
      <Line
        data={{
          labels: lines[0].values.map((value) => formatTime(value.timestamp)),
          datasets: lines.map((line, index) => ({
            label: line.name,
            data: line.values.map((value) => value.value),
            borderColor: getColor(line.name),
            backgroundColor:  getColor(line.name) + '50' ,
            borderWidth: 2,
            fill: 'start',  // Fill area from dataset index - 1 to index
            pointRadius: 0,
            pointHoverRadius: 5,
            pointHitRadius : 10
          })),
        }}
        options={{
          plugins: {
            title: {
              display: true,
              text: metric.name,
            },
            legend: {
              position: 'bottom',
            },
          },
          scales: {
            x: {
              title: {
                display: true,
              }
            },
            y: {
              position: 'right',
            },
          },
        }}
      />
    </div>
  );
};

export default AreaChart;
