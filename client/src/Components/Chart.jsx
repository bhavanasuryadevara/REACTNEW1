import React from 'react';
import {Bar} from "react-chartjs-2";



import {Chart,LinearScale,CategoryScale,BarElement,Legend,Title,Tooltip} from 'chart.js'
Chart.register(
    LinearScale,CategoryScale,BarElement,Legend,Title,Tooltip 
)

const labels = ['Jan','Feb','Mar','Apr','May','June', 'July','Aug','Sep','Oct','Nov','Dec'];
//additonal otions
const options ={
    plugins:{
        legend:{
           position:'top'
           
        },
        title:{
           display:true,
           text:"Expense Tracker" ,
          
        }
    }
}
const data = {
    labels,
    datasets : [
        {
            label:'2020 Expense',
            data:[10000,9000,10200,10500,8400,13000,8900,14600,17000,9000,12500],
            backgroundColor:'pink',
        },
        {
            label:'2021 Expense',
            data:[17000,11000,12500,11000,12100,7500,13800,8100,9600,11000,8000],
            backgroundColor:'blue',
        }
    ]
};
function Bardata(){
    return(
        <div style={{'height':400,'width':800,'margin':'auto'}}>
            <Bar options={options} data={data} />
        </div>
    )
}
export default Bardata;


// // npm install --save chart.js react-chartjs-2
// import React from 'react';// 2 
// import { Bar, Pie } from 'react-chartjs-2';
// import { Chart, LinearScale, CategoryScale, BarElement, Legend, Title, Tooltip, PieController, ArcElement } from 'chart.js';

// Chart.register(
//     LinearScale,
//     CategoryScale,
//     BarElement,
//     Legend,
//     Title,
//     Tooltip,
//     PieController,
//     ArcElement
// );

// const barLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// const barOptions = {
//     plugins: {
//         legend: {
//             position: 'top'
//         },
//         title: {
//             display: true,
//             text: 'Expense Tracker (Bar Chart)',
//         }
//     }
// };

// const barData = {
//     labels: barLabels,
//     datasets: [
//         {
//             label: '2020 Expense',
//             data: [10000, 9000, 10200, 10500, 8400, 13000, 8900, 14600, 17000, 9000, 12500],
//             backgroundColor: 'pink',
//         },
//         {
//             label: '2021 Expense',
//             data: [17000, 11000, 12500, 11000, 12100, 7500, 13800, 8100, 9600, 11000, 8000],
//             backgroundColor: 'blue',
//         }
//     ]
// };

// const pieLabels = ['Food', 'Rent', 'Utilities', 'Transportation', 'Entertainment'];
// const pieData = [25, 30, 15, 10, 20]; // Example data for the pie chart
// const pieBackgroundColor = ['red', 'green', 'blue', 'orange', 'purple']; // Example background colors for the pie chart

// const pieOptions = {
//     plugins: {
//         legend: {
//             position: 'top'
//         },
//         title: {
//             display: true,
//             text: 'Expense Breakdown (Pie Chart)',
//         }
//     }
// };

// function Bardata() {
//     return (
//         <div>
//             <div style={{ height: 400, width: 800, margin: 'auto', marginBottom: '2rem' }}>
//                 <Bar data={barData} options={barOptions} />
//             </div>
//             <div style={{ height: 400, width: 800, margin: 'auto' }}>
//                 <Pie data={{ labels: pieLabels, datasets: [{ data: pieData, backgroundColor: pieBackgroundColor }] }} options={pieOptions} />
//             </div>
//         </div>
//     );
// }

// export default Bardata;
