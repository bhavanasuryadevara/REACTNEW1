// import React from 'react';
// import { Chart, LineController, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, CandlestickController, Filler, Legend } from 'chart.js';
// import { Candlestick } from 'react-chartjs-2';

// Chart.register(
//     LineController,
//     CategoryScale,
//     LinearScale,
//     PointElement,
//     LineElement,
//     Title,
//     Tooltip,
//     CandlestickController,
//     Filler,
//     Legend
// );

// const CandlestickChart = () => {
//     const labels = ['January', 'February', 'March', 'April', 'May', 'June'];
//     const data = {
//         labels: labels,
//         datasets: [
//             {
//                 label: 'Stock Data',
//                 data: [
//                     { t: '2022-01-01', o: 100, h: 110, l: 90, c: 95 },
//                     { t: '2022-02-01', o: 95, h: 105, l: 85, c: 90 },
//                     { t: '2022-03-01', o: 90, h: 100, l: 80, c: 85 },
//                     { t: '2022-04-01', o: 85, h: 95, l: 75, c: 80 },
//                     { t: '2022-05-01', o: 80, h: 90, l: 70, c: 85 },
//                     { t: '2022-06-01', o: 85, h: 95, l: 75, c: 90 },
//                 ],
//                 borderColor: 'rgba(255, 99, 132, 1)',
//                 backgroundColor: 'rgba(255, 99, 132, 0.2)',
//             }
//         ]
//     };

//     const options = {
//         plugins: {
//             title: {
//                 display: true,
//                 text: 'Candlestick Chart Example',
//             },
//             legend: {
//                 display: false,
//             },
//         },
//         scales: {
//             x: {
//                 type: 'time',
//                 time: {
//                     unit: 'month'
//                 },
//                 title: {
//                     display: true,
//                     text: 'Date'
//                 }
//             },
//             y: {
//                 title: {
//                     display: true,
//                     text: 'Value'
//                 }
//             }
//         }
//     };

//     return (
//         <div style={{ height: 400, width: 800, margin: 'auto' }}>
//             <Candlestick data={data} options={options} />
//         </div>
//     );
// };

// export default CandlestickChart;
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const CandlestickChart = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        if (chartRef && chartRef.current) {
            const ctx = chartRef.current.getContext('2d');
            new Chart(ctx, {
                type: 'candlestick',
                data: {
                    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                    datasets: [{
                        label: 'Stock Data',
                        data: [
                            { t: '2022-01-01', o: 100, h: 110, l: 90, c: 95 },
                            { t: '2022-02-01', o: 95, h: 105, l: 85, c: 90 },
                            { t: '2022-03-01', o: 90, h: 100, l: 80, c: 85 },
                            { t: '2022-04-01', o: 85, h: 95, l: 75, c: 80 },
                            { t: '2022-05-01', o: 80, h: 90, l: 70, c: 85 },
                            { t: '2022-06-01', o: 85, h: 95, l: 75, c: 90 },
                        ],
                    }]
                },
                options: {
                    plugins: {
                        title: {
                            display: true,
                            text: 'Candlestick Chart Example',
                        }
                    },
                    scales: {
                        x: {
                            type: 'time',
                            time: {
                                unit: 'month'
                            },
                            title: {
                                display: true,
                                text: 'Date'
                            }
                        },
                        y: {
                            title: {
                                display: true,
                                text: 'Value'
                            }
                        }
                    }
                }
            });
        }
    }, []);

    return (
        <div style={{ height: 400, width: 800, margin: 'auto' }}>
            <canvas ref={chartRef} />
        </div>
    );
};

export default CandlestickChart;
