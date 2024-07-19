import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

const BarChartContainerappi = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://api-dev.candlesticks.in/items/HDFCBANK');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        console.log('Fetched data:', jsonData); // Log fetched data to console
        setData(jsonData); // Set fetched data to state
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const chartData = {
    labels: data.map(item => item.label),
    datasets: [
      {
        label: 'Bar Chart',
        data: data.map(item => item.value),
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <h2>Bar Chart</h2>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default BarChartContainerappi;
