const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const path = require('path');
const Signup = require('./Routes/Signup1');
const Sendverification = require('./Routes/sendVerification');
const Login = require('./Routes/Login');
const verify = require('./Routes/Verify');
const sendotp = require('./Routes/Sendotp');
const verifyotp = require('./Routes/Otpverification');
const emailotp = require('./Routes/Emailgenotp');
const emailVerification = require('./Routes/Emailverify');
const db = require('./Routes/db');
const forgetPasswordEmail = require('./Routes/Forget'); // Corrected import statement
const resetpassword = require('./Routes/Restpassotp');
const Search = require('./Routes/Search');
const Trade = require('./Routes/Trade');
const security = require('./Routes/Security');
const File = require('./Routes/File');

app.use(express.static(path.join(__dirname, '/client/build')));

// Routes setup
app.use('/Signup1', Signup);
app.use('/sendVerification', Sendverification);
app.use('/verify', verify);
app.use('/Login', Login);
app.use('/send-otp', sendotp);
app.use('/verify-otp', verifyotp);
app.use('/send-Emailverification', emailotp);
app.use('/verify-Emailotpp', emailVerification);
app.get('/api/data', db);
app.use('/forgot-password', forgetPasswordEmail);
app.use('/reset-password', resetpassword);
app.use('/search', Search);
app.use('/trades', Trade);
app.use('/security', security);
app.use('/upload', File);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});







/** 
const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const Signup = require('./Routes/Signup1');
const Sendverification = require('./Routes/sendVerification');
const Login = require('./Routes/Login');
const verify = require('./Routes/Verify');
const sendotp = require('./Routes/Sendotp');
const verifyotp = require('./Routes/Otpverification')
const path = require('path')

const emailotp = require('./Routes/Emailgenotp');
const emailVerification = require('./Routes/Emailverify');

const db= require('./Routes/db');

const forgetPasswordEmail = require('./Routes/Forget'); // Corrected import statement
const resetpassword = require('./Routes/Restpassotp');
const Search = require('./Routes/Search');

const Trade = require('./Routes/Trade');
const security =require('./Routes/Security');
const File=require('./Routes/File');
app.use(express.static(path.join(__dirname, '/client/build')));

console.log('...........') 




// //sign up
app.use('/Signup1', Signup);

//send email
 app.use('/sendVerification', Sendverification);
//verify
app.use('/verify', verify);
//user login

app.use('/Login',Login);
//send verfication
app.use('/send-otp',sendotp);


app.use('/verify-otp',verifyotp);



app.use('/send-Emailverification',emailotp);
app.use('/verify-Emailotpp',emailVerification);

app.get('/api/data',db);


app.use('/forgot-password', forgetPasswordEmail);

app.use('/reset-password',resetpassword);



//table 
app.use('/search',Search); 
app.use('/trades',Trade);
app.use('/security',security);
     
app.use('/upload',File)    


app.listen(5000, () => {console.log('Loading')
})   */



/*//Api1.jsx

const corsAnywhere = require('cors-anywhere');
const express = require('express');
const app = express();
const port = 3001;


const host = 'localhost';
const corsPort = 8080;

corsAnywhere.createServer({
originWhitelist: [],
requireHeader: ['origin', 'x-requested-with'],
removeHeaders: ['cookie', 'cookie2']
}).listen(corsPort, host, () => {
console.log(`Running CORS Anywhere on ${host}:${corsPort}`);
}); */


//api2
//  const express = require('express');
//  const cors = require('cors'); // For handling Cross-Origin Resource Sharing
//  const app = express();
//  const PORT = 5001; // Use a different port number
 
//  app.use(cors()); // Enable CORS for all routes, adjust as needed
 
//  // Sample data (replace with actual data retrieval logic)
//  const barChartData = [
//    { label: 'January', value: 200 },
//    { label: 'February', value: 300 },
//    { label: 'March', value: 400 },
//    { label: 'April', value: 500 },
//    // Add more data as needed
//  ];
 
//  // Route to handle GET request for bar chart data
//  app.get('/api/bar-chart-data', (req, res) => {
//    res.json(barChartData); // Return the sample data as JSON response
//  });
 
//  // Start the server
//  app.listen(PORT, () => {
//    console.log(`Server is running on http://localhost:${PORT}`);
//  });
 

/** 
const express = require('express');
const cors = require('cors'); // For handling Cross-Origin Resource Sharing
const app = express();
const PORT = 5001; // Use a different port number

app.use(cors()); // Enable CORS for all routes, adjust as needed

// Sample data (replace with actual data retrieval logic)
const barChartData = [
  { label: 'January', value: 200 },
  { label: 'February', value: 300 },
  { label: 'March', value: 400 },
  { label: 'April', value: 500 },
  // Add more data as needed
];

// Route to handle GET request for bar chart data
app.get('/api/bar-chart-data', (req, res) => {
  res.json(barChartData); // Return the sample data as JSON response
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
*/



// const express = require('express');
// const axios = require('axios');
// const cors = require('cors'); // For enabling CORS (if needed)

// const app = express();
// const PORT = process.env.PORT || 500; // Port number for the server

// app.use(express.json());
// app.use(cors()); // Enable CORS

// // Route to fetch data from the external API
// app.get('/api/items/HDFCBANK', async (req, res) => {
//   try {
//     const response = await axios.get('http://api-dev.candlesticks.in/items/HDFCBANK');
//     const data = response.data; // Assuming the API returns the necessary data structure
//     res.json(data);
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     res.status(500).json({ error: 'Failed to fetch data' });
//   }
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });


/** 
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000; // Port number can be adjusted as needed

app.use(cors());

// Example data for HDFCBANK candlestick chart (replace with your actual data source logic)
const hdfcBankData = [
    { timestamp: '2024-07-15T09:30:00Z', open: 1200, high: 1220, low: 1180, close: 1210 },
    { timestamp: '2024-07-15T10:30:00Z', open: 1210, high: 1235, low: 1205, close: 1225 },
    { timestamp: '2024-07-15T11:30:00Z', open: 1225, high: 1230, low: 1210, close: 1220 },
    // Add more data points as needed
];

// Endpoint to fetch HDFCBANK data
app.get('/api/hdfcbank', (req, res) => {
    res.json(hdfcBankData);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});*/
