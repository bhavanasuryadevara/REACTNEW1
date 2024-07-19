

//working
import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import axios from 'axios';

const Demodata = () => {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/https://demo-cs.blr1.cdn.digitaloceanspaces.com/test/hdfc.json');
        const dataArray = response.data;

        const chartData = dataArray.map(data => {
          const openPrice = typeof data['Open Price'] === 'string' ? parseFloat(data['Open Price'].replace(',', '')) : null;
          const highPrice = typeof data['High Price'] === 'string' ? parseFloat(data['High Price'].replace(',', '')) : null;
          const lowPrice = typeof data['Low Price'] === 'string' ? parseFloat(data['Low Price'].replace(',', '')) : null;
          const closePrice = typeof data['Close Price'] === 'string' ? parseFloat(data['Close Price'].replace(',', '')) : null;

          // If any required property is missing or invalid, log an error and return null for that entry
          if (openPrice === null || highPrice === null || lowPrice === null || closePrice === null) {
            console.error('Missing or invalid required price data:', data);
            return null;
          }

          return {
            x: new Date(data.Date).getTime(),
            y: [openPrice, highPrice, lowPrice, closePrice]
          };
        }).filter(entry => entry !== null);

        setSeries([{ data: chartData }]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const candlestickOptions = {
    chart: {
      type: 'candlestick',
      height: 350,
    },
    title: {
      text: 'Candlestick Chart for HDFCBANK',
      align: 'left',
    },
    xaxis: {
      type: 'datetime',
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },
  };

  const lineOptions = {
    chart: {
      type: 'line',
      height: 350,
    },
    title: {
      text: 'Line Chart for HDFCBANK',
      align: 'left',
    },
    xaxis: {
      type: 'datetime',
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },
  };

  const barOptions = {
    chart: {
      type: 'bar',
      height: 350,
    },
    title: {
      text: 'Bar Chart for HDFCBANK',
      align: 'left',
    },
    xaxis: {
      type: 'datetime',
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div className="multi-chart-container">
      <div className="candlestick-container">
        <h2>Candlestick Chart</h2>
        <Chart options={candlestickOptions} series={series} type="candlestick" height={350} />
      </div>

      <div className="line-chart-container">
        <h2>Line Chart</h2>
        <Chart options={lineOptions} series={series} type="line" height={350} />
      </div>

      <div className="bar-chart-container">
        <h2>Bar Chart</h2>
        <Chart options={barOptions} series={series} type="bar" height={350} />
      </div>
    </div>
  );
};

export default Demodata;












//ruf barchart 
// import React, { useEffect, useState } from 'react';
// import Chart from 'react-apexcharts';
// import axios from 'axios';

// const Demodata = () => {
//   const [chartData, setChartData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://localhost:8080/https://demo-cs.blr1.cdn.digitaloceanspaces.com/test/hdfc.json');
//         const dataArray = response.data;

//         const processedData = dataArray.map(data => {
//           // Check if 'Close Price' exists and is a valid number
//           if (!data.hasOwnProperty('Close Price') || typeof data['Close Price'] !== 'string') {
//             console.error('Missing or invalid "Close Price" data:', data);
//             return null;
//           }

//           const closePrice = parseFloat(data['Close Price'].replace(',', ''));
          
//           // Check if closePrice is a valid number
//           if (isNaN(closePrice)) {
//             console.error('Invalid "Close Price" data:', data['Close Price']);
//             return null;
//           }

//           return {
//             x: data.Date, // Assuming Date is the x-axis value
//             y: closePrice // Close Price as the y-axis value
//           };
//         }).filter(entry => entry !== null);

//         setChartData(processedData);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const options = {
//     chart: {
//       type: 'bar',
//       height: 350,
//     },
//     plotOptions: {
//       bar: {
//         horizontal: false,
//       },
//     },
//     xaxis: {
//       type: 'datetime',
//       categories: chartData.map(entry => entry.x), // Assuming x represents date/time
//     },
//     yaxis: {
//       title: {
//         text: 'Close Price',
//       },
//     },
//     title: {
//       text: 'Bar Chart of Closing Prices',
//       align: 'left',
//     },
//     legend: {
//       position: 'top',
//     },
//   };

//   return (
//     <div className="bar-chart-container">
//       <h1>Bar Chart</h1>
//       <Chart options={options} series={[{ data: chartData.map(entry => entry.y) }]} type="bar" height={350} />
//     </div>
//   );
// };

// export default Demodata;

//


