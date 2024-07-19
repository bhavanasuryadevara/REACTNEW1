/** 
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

constBarChartContainerappi = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/bar-chart-data');
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

  // Sample data for the bar chart
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

  // Options for customization of the chart
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h2>Bar Chart</h2>
      <div style={{ height: '400px' }}>
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
};

export default BarChartContainerappi;*/


/** 
//options 
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

const BarChartContainerappi = () => {
  const [banks, setBanks] = useState([]); // State to hold available banks
  const [selectedBank, setSelectedBank] = useState('HDFCBANK'); // Default selected bank
  const [selectedYear, setSelectedYear] = useState('2023'); // Default selected year
  const [data, setData] = useState([]); // State to hold fetched data

  useEffect(() => {
    // Fetch list of available banks from your backend
    const fetchBanks = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/banks');
        if (!response.ok) {
          throw new Error('Failed to fetch bank list');
        }
        const jsonData = await response.json();
        setBanks(jsonData); // Set list of banks to state
      } catch (error) {
        console.error('Error fetching banks:', error);
      }
    };

    fetchBanks();
  }, []);

  useEffect(() => {
    // Fetch data based on selected bank and year
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5001/api/bar-chart-data/${selectedBank}/${selectedYear}`);
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
  }, [selectedBank, selectedYear]);

  // Sample data for the bar chart
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

  // Options for customization of the chart
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const handleBankChange = (event) => {
    setSelectedBank(event.target.value);
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h2>Bar Chart</h2>
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="bankSelect">Select Bank:</label>
        <select id="bankSelect" value={selectedBank} onChange={handleBankChange}>
          {banks.map((bank) => (
            <option key={bank} value={bank}>{bank}</option>
          ))}
        </select>

        <label htmlFor="yearSelect">Select Year:</label>
        <input type="text" id="yearSelect" value={selectedYear} onChange={handleYearChange} />
      </div>

      <div style={{ height: '400px' }}>
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
};

export default BarChartContainerappi; 

*/

/**candlistic  
import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import axios from 'axios';

const LiveCandlestickChart = () => {
    const [series, setSeries] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/hdfcbank'); // Update URL as per your backend setup
            const data = response.data; // Assuming the API response is in the correct format for candlestick chart
            const processedData = processData(data); // Implement processData function as per your API response format
            setSeries(processedData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

        fetchData();

        // Setup interval to fetch new data every X seconds
        const interval = setInterval(fetchData, 60000); // Fetch data every 1 minute (adjust as per your requirement)

        return () => clearInterval(interval); // Cleanup function to clear interval
    }, []);

    const processData = (data) => {
        // Implement logic to convert API data to ApexCharts series format for candlestick chart
        // Example:
        const seriesData = data.map(item => ({
            x: new Date(item.timestamp).getTime(), // Assuming timestamp is provided in API response
            y: [item.open, item.high, item.low, item.close] // Assuming open, high, low, close are available in API response
        }));

        return [{
            data: seriesData
        }];
    };

    const options = {
        chart: {
            type: 'candlestick',
            height: 350
        },
        title: {
            text: 'Live Candlestick Chart'
        },
        xaxis: {
            type: 'datetime'
        },
        yaxis: {
            tooltip: {
                enabled: true
            }
        }
    };

    return (
        <div className="candlestick-chart">
            <Chart options={options} series={series} type="candlestick" height={350} />
        </div>
    );
};

export default LiveCandlestickChart;
 */


import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import axios from 'axios';

const LiveCandlestickChart = () => {
    const [candlestickSeries, setCandlestickSeries] = useState([]);
    const [pieSeries, setPieSeries] = useState([]);
    const [lineSeries, setLineSeries] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/hdfcbank');
                const data = response.data;
                
                // Process data for candlestick chart
                const candlestickData = processDataForCandlestick(data);
                setCandlestickSeries(candlestickData);

                // Process data for pie chart (using close prices)
                const pieData = processDataForPie(data);
                setPieSeries(pieData);

                // Process data for line chart (using high prices)
                const lineData = processDataForLine(data);
                setLineSeries(lineData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();

        // Setup interval to fetch new data every X seconds
        const interval = setInterval(fetchData, 60000); // Fetch data every 1 minute (adjust as per your requirement)

        return () => clearInterval(interval); // Cleanup function to clear interval
    }, []);

    const processDataForCandlestick = (data) => {
        return data.map(item => ({
            x: new Date(item.timestamp).getTime(),
            y: [item.open, item.high, item.low, item.close]
        }));
    };

    const processDataForPie = (data) => {
        return data.map(item => ({
            x: item.timestamp,
            y: item.close
        }));
    };

    const processDataForLine = (data) => {
        return data.map(item => ({
            x: new Date(item.timestamp).getTime(),
            y: item.high
        }));
    };

    const candlestickOptions = {
        chart: {
            type: 'candlestick',
            height: 350,
            id: 'candlestick-chart'
        },
        title: {
            text: 'Live Candlestick Chart'
        },
        xaxis: {
            type: 'datetime'
        },
        yaxis: {
            tooltip: {
                enabled: true
            }
        }
    };

    const pieOptions = {
        chart: {
            type: 'pie',
            height: 350,
            id: 'pie-chart'
        },
        title: {
            text: 'Pie Chart: Close Prices'
        },
        labels: pieSeries.map(item => item.x),
        dataLabels: {
            enabled: true,
            formatter: function (val) {
                return val.toFixed(2);
            }
        }
    };

    const lineOptions = {
        chart: {
            type: 'line',
            height: 350,
            id: 'line-chart'
        },
        title: {
            text: 'Line Chart: High Prices'
        },
        xaxis: {
            type: 'datetime'
        }
    };

    return (
        <div className="charts-container">
            <div className="candlestick-chart">
                <Chart options={candlestickOptions} series={[{ data: candlestickSeries }]} type="candlestick" height={350} />
            </div>
            <div className="pie-chart">
                <Chart options={pieOptions} series={pieSeries.map(item => item.y)} type="pie" height={350} />
            </div>
            <div className="line-chart">
                <Chart options={lineOptions} series={[{ data: lineSeries }]} type="line" height={350} />
            </div>
        </div>
    );
};

export default LiveCandlestickChart;
