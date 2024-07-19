import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, Title, Tooltip, PieController, ArcElement, Legend } from 'chart.js';

Chart.register(
    Title,
    Tooltip,
    PieController,
    ArcElement,
    Legend
);

const PieChart = () => {
    const labels = ['Food', 'Rent', 'Utilities', 'Transportation', 'Entertainment'];
    const data = [25, 30, 15, 10, 20]; // Example data for the pie chart
    const backgroundColor = ['red', 'green', 'blue', 'orange', 'purple']; // Example background colors for the pie chart

    const options = {
        plugins: {
            legend: {
                position: 'top'
            },
            title: {
                display: true,
                text: 'Expense Breakdown (Pie Chart)',
            }
        }
    };

    const chartData = {
        labels: labels,
        datasets: [{
            data: data,
            backgroundColor: backgroundColor
        }]
    };

    return (
        <div style={{ height: 400, width: 800, margin: 'auto' }}>
            <Pie data={chartData} options={options} />
        </div>
    );
};

export default PieChart;
