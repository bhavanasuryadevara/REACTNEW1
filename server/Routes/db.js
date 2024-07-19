// // 
// const express = require('express');
// const cors = require('cors');
// const mysql = require('mysql2');
// const app = express();
// const router = express.Router();

// // Enable CORS for all routes
// app.use(cors());

// // MySQL connection configuration
// const connection = mysql.createConnection({
//   host: 'localhost',
//     user: 'root',
//     password: 'Bj@1997',
//     database: 'employees'

// });

// // Connect to MySQL
// connection.connect((err) => {
//   if (err) {
//     console.error('Error connecting to MySQL:', err);
//     return;
//   }
//   console.log('Connected to MySQL database');
// });

// // Route to fetch trade data from MySQL

// router.get('/api/data', (req, res) => {
//   const query = `SELECT \`date_file\`, \`Symbol\`, \`Security Name\`, \`Client Name\`, \`Buy / Sell\`, \`Quantity Traded\`, \`Trade Price / Wght. Avg. Price\`, \`Remarks\`, \`dummy_date\`
//   FROM \`merge-csv.com\`
//   LIMIT 100;
// `;// Replace with your actual table name
//   connection.query(query, (err, results) => {
//     if (err) {
//       console.error('Error fetching data from MySQL:', err);
//       res.status(500).json({ error: 'Failed to fetch data' });
//       return;
//     }
//     res.json(results);
//   });
// });

// module.exports = router;




// without search //
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
const router = express.Router();

// Enable CORS for all routes
app.use(cors());

// MySQL connection configuration
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Bj@1997',
  database: 'employees' // Replace with your database name
});

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Route to fetch trade data from MySQL with pagination
router.get('/api/data', (req, res) => {
  const page = parseInt(req.query.page) || 1; // Parse page parameter from query (default: 1)
  const limit = parseInt(req.query.limit) || 10; // Parse limit parameter from query (default: 10)

  // Calculate offset based on page and limit
  const offset = (page - 1) * limit;

  // SQL query to fetch data with pagination
  const query = `
    SELECT \`date_file\`, \`Symbol\`, \`Security Name\`, \`Client Name\`, \`Buy / Sell\`, 
           \`Quantity Traded\`, \`Trade Price / Wght. Avg. Price\`, \`Remarks\`, \`dummy_date\`
    FROM \`merge-csv\` -- Replace with your actual table name
    LIMIT ?, ?;`;

  connection.query(query, [offset, limit], (err, results) => {
    if (err) {
      console.error('Error fetching data from MySQL:', err);
      res.status(500).json({ error: 'Failed to fetch data' });
      return;
    }
    res.json(results);
  });
});


module.exports = router;